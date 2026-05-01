import { useState, useMemo, useEffect } from "react";
import {
  PLAYERS,
  RSS_FEEDS,
  TEAM_LOGOS,
  NEWS_DIGEST,
  SEASON_RECAP_2025,
  NFC_SOUTH_STANDINGS_2025,
} from "./playerData.js";
import { DRAFT_DATA } from "./draftData.js";
import { OFFSEASON_CALENDAR } from "./offseasonCalendar.js";
import { CAP_STATE } from "./capState.js";
import { getCurrentPhase, PHASES } from "./phases.js";
import DepthChartView from "./DepthChartView.jsx";

// ─── BROADCAST FEED 01 ──────────────────────────────────────────────────────
// Sunday Night Football, cold open. Carbon weave, hot-red glow, stencil
// chyrons, telemetry cards. Phase-aware year-round dashboard.

const BROADCAST_CHAPTERS = [
  { id: "01", name: "OFFSEASON", window: "JAN — APR", phaseIds: ["pre-season-build", "draft-week", "rookie-class", "offseason-lull"] },
  { id: "02", name: "OTAS",      window: "MAY — JUN", phaseIds: ["otas-minicamp"] },
  { id: "03", name: "CAMP",      window: "JUL — AUG", phaseIds: ["dead-period", "training-camp"] },
  { id: "04", name: "PRESEASON", window: "AUG — SEP", phaseIds: ["preseason"] },
  { id: "05", name: "REGULAR",   window: "SEP — JAN", phaseIds: ["regular-season", "postseason"] },
];

// ─── ANGULAR FALCON GLYPH ───────────────────────────────────────────────────
// Original geometric mark — sharp angular bird silhouette.
function FalconGlyph({ size = 36, color = "#FF2D3D" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block" }}>
      <g fill={color}>
        <polygon points="6,38 28,50 16,52 8,46" />
        <polygon points="22,42 50,52 80,30 92,32 70,52 52,68 38,60" />
        <polygon points="40,60 60,68 50,76" />
      </g>
      <polygon points="20,52 28,52 24,58" fill="#08080A" />
    </svg>
  );
}

// ─── VIEWPORT ───────────────────────────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < breakpoint
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);
  return isMobile;
}

// ─── COUNTDOWN ──────────────────────────────────────────────────────────────
function useCountdown(targetISO) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!targetISO) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [targetISO]);
  if (!targetISO) return { d: 0, h: 0, m: 0, s: 0, expired: true };
  const diff = Math.max(0, new Date(targetISO).getTime() - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
    expired: diff === 0,
  };
}

// ─── NEXT-UP STRIP (post-draft milestone runway) ────────────────────────────
function NextUpStrip({ milestones }) {
  const today = new Date();
  return (
    <div style={{ display: "flex", gap: 0, marginTop: 8, flexWrap: "wrap" }}>
      {milestones.map((m, i) => {
        const date = new Date(m.date);
        const days = Math.max(0, Math.ceil((date.getTime() - today.getTime()) / 86400000));
        const dateLabel = date.toLocaleDateString("en-US", { month: "short", day: "2-digit" }).toUpperCase();
        const isLead = i === 0;
        const shortLabel = m.label.replace(/^.*— ?/, "").replace(/ \(.*\)$/, "");
        return (
          <div key={m.id} style={{
            padding: "10px 18px 12px",
            borderTop: `2px solid ${isLead ? "#FF2D3D" : "#ffffff20"}`,
            borderBottom: "1px solid #ffffff15",
            background: isLead ? "#170509" : "#0B0C0F",
            borderLeft: i === 0 ? "1px solid #ffffff15" : "none",
            borderRight: "1px solid #ffffff15",
            minWidth: 168,
            position: "relative",
            boxShadow: isLead ? "var(--hot-glow)" : "none",
          }}>
            <div className="mono" style={{
              fontSize: 9, letterSpacing: "0.28em",
              color: isLead ? "var(--hot)" : "var(--silver)",
            }}>
              {isLead ? "▶ NEXT" : `+${i}`}  ·  {dateLabel}
            </div>
            <div className="stencil" style={{
              fontSize: 18, lineHeight: 1.05, color: "var(--ivory)",
              letterSpacing: "0.02em", marginTop: 8,
              textShadow: isLead ? "0 0 12px #FF2D3D44" : "none",
            }}>
              {shortLabel.toUpperCase()}
            </div>
            <div className="mono" style={{
              fontSize: 10, letterSpacing: "0.18em", color: "var(--steel-2)", marginTop: 6,
            }}>
              {days === 0 ? "TODAY" : `T-${days}D`}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── TOP BAR ────────────────────────────────────────────────────────────────
function liveTagForPhase(phase) {
  switch (phase.id) {
    case "draft-week":     return "ON THE CLOCK";
    case "rookie-class":   return "ROOKIE FEED";
    case "offseason-lull": return "OTA PREP";
    case "otas-minicamp":  return "OTAS LIVE";
    case "dead-period":    return "DEAD PERIOD";
    case "training-camp":  return "CAMP LIVE";
    case "preseason":      return "PRESEASON";
    case "regular-season": return "GAME WEEK";
    case "postseason":     return "OFFSEASON";
    default:               return "LIVE FEED";
  }
}

function TopBar({ view, setView, currentPhase }) {
  const tabs = [
    { k: "dashboard",   label: "DASHBOARD" },
    { k: "depth-chart", label: "DEPTH CHART" },
    { k: "draft",       label: "DRAFT BOARD" },
    { k: "wire",        label: "WIRE / DISPATCH" },
  ];
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const hms = time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  const isMobile = useIsMobile();
  return (
    <div style={{
      display: "flex", alignItems: "stretch",
      background: "#0B0C0F",
      borderBottom: "1px solid #ffffff10",
      flexWrap: "wrap",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: isMobile ? 10 : 14,
        padding: isMobile ? "10px 14px" : "12px 18px",
        borderRight: "1px solid #ffffff10",
        minWidth: isMobile ? 0 : 280,
        flex: isMobile ? "1 1 100%" : "0 0 auto",
      }}>
        <FalconGlyph size={isMobile ? 26 : 32} color="#FF2D3D" />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div className="display" style={{ fontSize: isMobile ? 16 : 19, letterSpacing: "0.04em", lineHeight: 1 }}>
            ATLANTA <span style={{ color: "#FF2D3D" }}>/</span> TRACKER
          </div>
          <div className="mono" style={{ fontSize: 9, letterSpacing: "0.22em", color: "var(--silver)", marginTop: 4 }}>
            {isMobile ? "FEED 01 · 26 SEASON" : "FEED 01 · STEFANSKI ERA · 26 SEASON"}
          </div>
        </div>
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span className="hot-bar blink" style={{ width: 7, height: 7 }} />
            <span className="display hot-text" style={{ fontSize: 10, letterSpacing: "0.18em", whiteSpace: "nowrap" }}>
              {liveTagForPhase(currentPhase)}
            </span>
          </div>
        )}
      </div>

      <div style={{
        display: "flex", alignItems: "stretch",
        flex: 1, minWidth: 0,
        overflowX: isMobile ? "auto" : "visible",
        WebkitOverflowScrolling: "touch",
      }}>
        {tabs.map((t) => {
          const active = view === t.k;
          return (
            <button key={t.k} onClick={() => setView(t.k)} style={{
              border: "none", background: active ? "#160407" : "transparent",
              color: active ? "var(--ivory)" : "var(--silver)",
              padding: isMobile ? "12px 14px" : "0 22px", cursor: "pointer",
              fontFamily: "var(--display)", fontWeight: 700,
              fontSize: isMobile ? 11 : 13, letterSpacing: isMobile ? "0.12em" : "0.16em",
              borderRight: "1px solid #ffffff08",
              position: "relative",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}>
              {active && (
                <div className="hot-bar bar-grow" style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                }} />
              )}
              {t.label}
            </button>
          );
        })}
      </div>

      {!isMobile && (
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          padding: "12px 22px",
          borderLeft: "1px solid #ffffff10",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span className="hot-bar blink" style={{ width: 8, height: 8 }} />
            <span className="display hot-text" style={{ fontSize: 12, letterSpacing: "0.22em" }}>
              {liveTagForPhase(currentPhase)}
            </span>
          </div>
          <span className="mono" style={{ fontSize: 12, color: "var(--ivory)", letterSpacing: "0.1em" }}>
            {hms} ET
          </span>
        </div>
      )}
    </div>
  );
}

// ─── CHAPTER RAIL ───────────────────────────────────────────────────────────
function ChapterRail({ currentPhase }) {
  const isMobile = useIsMobile();
  const currentIdx = useMemo(() => {
    const idx = BROADCAST_CHAPTERS.findIndex((c) => c.phaseIds.includes(currentPhase.id));
    return idx === -1 ? 0 : idx;
  }, [currentPhase.id]);
  return (
    <div style={{
      borderTop: "1px solid #ffffff10",
      borderBottom: "1px solid #ffffff10",
      background: "#0B0C0F",
      display: isMobile ? "flex" : "grid",
      overflowX: isMobile ? "auto" : "visible",
      WebkitOverflowScrolling: "touch",
      gridTemplateColumns: isMobile ? undefined : `repeat(${BROADCAST_CHAPTERS.length}, 1fr)`,
    }}>
      {BROADCAST_CHAPTERS.map((p, i) => {
        const active = i === currentIdx;
        const passed = i < currentIdx;
        return (
          <div key={p.id} style={{
            position: "relative",
            padding: isMobile ? "10px 14px 9px" : "14px 18px 12px",
            borderRight: i < BROADCAST_CHAPTERS.length - 1 ? "1px solid #ffffff08" : "none",
            background: active ? "#160407" : "transparent",
            opacity: passed ? 0.45 : 1,
            flex: isMobile ? "0 0 auto" : undefined,
            minWidth: isMobile ? 110 : undefined,
          }}>
            {active && (
              <div className="hot-bar bar-grow" style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
              }} />
            )}
            <div style={{ display: "flex", alignItems: "baseline", gap: isMobile ? 6 : 10 }}>
              <span className="mono" style={{
                fontSize: isMobile ? 9 : 11, color: active ? "#FF2D3D" : "var(--steel-2)", fontWeight: 700,
              }}>{p.id}</span>
              <span className="display" style={{
                fontSize: isMobile ? 13 : 17, color: active ? "var(--ivory)" : "var(--silver)",
                letterSpacing: "0.04em",
                textShadow: active ? "0 0 12px #FF2D3D44" : "none",
              }}>{p.name}</span>
            </div>
            <div className="mono" style={{
              fontSize: isMobile ? 8 : 9, color: "var(--steel-2)",
              letterSpacing: "0.18em", marginTop: 3,
            }}>{p.window}</div>
          </div>
        );
      })}
    </div>
  );
}

// ─── HERO: PHASE-AWARE BROADCAST OPENER ─────────────────────────────────────
// Pre-draft: countdown clock to draft. Post-draft: rookie class headline +
// horizontal "next-up" milestone strip aimed at OTAs.
function HeroBroadcast({ currentPhase }) {
  const isMobile = useIsMobile();
  const today = new Date();
  const draftStart = new Date(DRAFT_DATA.startTime);
  const draftPast = today.getTime() > draftStart.getTime() + 3 * 86400000; // ended Apr 25
  const upcoming = useMemo(() => {
    return OFFSEASON_CALENDAR
      .filter((c) => new Date(c.date).getTime() >= today.getTime() - 86400000)
      .slice(0, 4);
  }, []);
  const nextMilestone = upcoming[0] || OFFSEASON_CALENDAR[OFFSEASON_CALENDAR.length - 1];
  const c = useCountdown(draftPast ? null : DRAFT_DATA.startTime);

  const headline = draftPast
    ? { line1: "SIX ROOKIES.", line2: "ROAD TO OTAS.", sub: "TERRELL · BRANCH · DANIELS · THOMPSON · PERKINS · ONIANWA. CLASS GRADE: B / B-. PHASE 2 OPENS MAY 4 — FIRST ON-FIELD VETERAN INSTALL UNDER STEFANSKI / REES." }
    : { line1: "FIVE PICKS.", line2: "NO FIRST.", sub: "CUNNINGHAM ON THE BOARD AT #48. BIGGEST NEEDS — WR / OT / CB. KNIFE FIGHT IN ROUND TWO." };

  const stripLabel = draftPast
    ? "ATL · 2026 OFFSEASON · ROAD TO OTAS"
    : `ATL · 2026 NFL DRAFT · ${draftStart.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()} 8:00 ET`;

  const stripMeta = draftPast
    ? `FLOWERY BRANCH · ${nextMilestone.label.toUpperCase()}`
    : `${DRAFT_DATA.location.toUpperCase()} · ${DRAFT_DATA.tvChannels.slice(0, 3).join(" / ").toUpperCase()}`;

  return (
    <div className="diag-cut" style={{
      position: "relative", overflow: "hidden",
      background: "var(--void)",
      border: "1px solid #ffffff10",
      minHeight: isMobile ? 280 : 360,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(ellipse 90% 60% at 18% 110%, #A7193044 0%, transparent 55%),
          radial-gradient(ellipse 60% 80% at 85% 30%, #FF2D3D22 0%, transparent 60%),
          linear-gradient(180deg, transparent 30%, #08080A 100%)
        `,
      }} />
      <svg viewBox="0 0 800 400" preserveAspectRatio="xMaxYMid slice"
        style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "75%", opacity: 0.55 }}>
        <defs>
          <linearGradient id="hero-shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF2D3D" stopOpacity="0.0" />
            <stop offset="0.4" stopColor="#FF2D3D" stopOpacity="0.55" />
            <stop offset="0.7" stopColor="#A71930" stopOpacity="0.3" />
            <stop offset="1" stopColor="#08080A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="120,260 320,300 380,200 600,80 800,40 800,400 120,400" fill="url(#hero-shine)" />
        <polygon points="380,200 460,210 440,240" fill="#FF2D3D" opacity="0.25" />
        <polygon points="500,150 620,140 720,90 600,170 540,200" fill="#A71930" opacity="0.4" />
      </svg>

      <div className="flicker" />

      <div className="diag-cut" style={{
        position: "absolute", top: isMobile ? 18 : 28, left: 0, right: 0,
        padding: isMobile ? "6px 16px" : "8px 32px",
        background: "linear-gradient(90deg, #A71930 0%, #6B0F1E 80%, transparent 100%)",
        borderBottom: "1px solid #FF2D3D55",
        display: "flex", alignItems: "center", gap: isMobile ? 8 : 18, flexWrap: "wrap",
      }}>
        <span className="display" style={{ fontSize: isMobile ? 10 : 12, letterSpacing: isMobile ? "0.18em" : "0.28em" }}>
          {stripLabel}
        </span>
        <span className="mono" style={{ fontSize: isMobile ? 9 : 10, color: "#ffffffaa", letterSpacing: "0.18em", marginLeft: "auto" }}>
          {stripMeta}
        </span>
      </div>

      <div style={{
        position: "relative",
        padding: isMobile ? "70px 16px 28px" : "100px 32px 36px",
        display: "flex", flexDirection: "column", gap: isMobile ? 12 : 18,
      }}>
        <div>
          <div className="mono" style={{ fontSize: isMobile ? 10 : 11, letterSpacing: isMobile ? "0.22em" : "0.32em", color: "var(--silver)" }}>
            ▎ HOUR ZERO · {currentPhase.name.toUpperCase()}
          </div>
          <h1 className="stencil" style={{
            fontSize: isMobile ? 48 : 96, lineHeight: 0.88, margin: "8px 0 4px",
            letterSpacing: "-0.015em",
            color: "var(--ivory)",
            textShadow: "0 0 32px #FF2D3D33",
          }}>
            {headline.line1}<span style={{ color: "#FF2D3D" }}>.</span>
          </h1>
          <h1 className="stencil" style={{
            fontSize: isMobile ? 48 : 96, lineHeight: 0.88, margin: "0",
            letterSpacing: "-0.015em",
            color: "var(--silver)",
          }}>
            {headline.line2}<span style={{ color: "#FF2D3D" }}>.</span>
          </h1>
          <div className="mono" style={{
            marginTop: isMobile ? 12 : 16, fontSize: isMobile ? 11 : 13, color: "var(--silver)",
            letterSpacing: "0.06em", maxWidth: 640, lineHeight: 1.55,
          }}>
            {headline.sub}
          </div>
        </div>

        {draftPast ? (
          <NextUpStrip milestones={upcoming} />
        ) : (
          <div style={{ display: "flex", gap: 0, marginTop: 8, flexWrap: "wrap" }}>
            {[
              { v: c.d, l: "DAYS" },
              { v: c.h, l: "HRS" },
              { v: c.m, l: "MIN" },
              { v: c.s, l: "SEC" },
            ].map((u, i) => (
              <div key={u.l} style={{
                padding: "10px 22px",
                borderTop: "2px solid #FF2D3D",
                borderBottom: "1px solid #ffffff15",
                background: "#0B0C0F",
                borderLeft: i === 0 ? "1px solid #ffffff15" : "none",
                borderRight: "1px solid #ffffff15",
                minWidth: 92,
              }}>
                <div className="stencil" style={{
                  fontSize: 42, lineHeight: 1, color: "var(--ivory)",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {String(u.v).padStart(2, "0")}
                </div>
                <div className="mono" style={{
                  fontSize: 9, letterSpacing: "0.32em", color: "var(--silver)", marginTop: 6,
                }}>{u.l}</div>
              </div>
            ))}
            <div style={{
              display: "flex", alignItems: "center", padding: "0 22px",
              borderTop: "2px solid #ffffff10",
              borderBottom: "1px solid #ffffff15",
              borderRight: "1px solid #ffffff15",
              background: "#0B0C0F",
            }}>
              <div>
                <div className="mono" style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--silver)" }}>
                  / STATUS
                </div>
                <div className="display hot-text" style={{ fontSize: 18, letterSpacing: "0.16em", marginTop: 4 }}>
                  STANDBY
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <svg viewBox="0 0 1000 30" preserveAspectRatio="none" style={{
        position: "absolute", left: 0, right: 0, bottom: -1, height: 30, width: "100%", display: "block",
      }}>
        <polygon points="0,30 0,18 1000,2 1000,30" fill="#A71930" />
        <polygon points="0,30 0,22 1000,8 1000,12 1000,30" fill="#FF2D3D" opacity="0.85" />
      </svg>
    </div>
  );
}

// ─── PICK SLOT BOARD ────────────────────────────────────────────────────────
function PickSlotBoard() {
  const isMobile = useIsMobile();
  const picks = DRAFT_DATA.falconsPicks;
  return (
    <div className="panel" style={{ marginTop: 20 }}>
      <div className="panel-title">
        <span className="bug" />
        <span className="name">FALCONS BOARD · {picks.length} SLOTS</span>
        <span className="meta">CLASS OF '26</span>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "repeat(2, minmax(0, 1fr))"
          : `repeat(${picks.length}, minmax(0, 1fr))`,
        gap: 1, background: "#ffffff08",
      }}>
        {picks.map((p, i) => {
          const isMade = p.status === "made";
          const isTraded = p.status === "traded";
          const isOnClock = p.status === "on-clock";
          const accent = isOnClock ? "var(--hot)" : isMade ? "var(--red)" : isTraded ? "var(--steel)" : "transparent";
          const slotName = p.selection ? p.selection.split("·")[0].trim() : (isTraded ? "TRADED" : "SCHEDULED");
          const slotPos = p.selection ? p.selection.split("·")[1]?.trim() : null;
          return (
            <div key={p.overallPick} style={{
              background: isOnClock ? "#170509" : "var(--carbon)",
              padding: isMobile ? "12px 10px 10px" : "16px 14px 14px",
              position: "relative",
              borderTop: `2px solid ${accent}`,
              opacity: isTraded ? 0.55 : 1,
              minWidth: 0,
            }}>
              {isOnClock && (
                <div className="hot-bar bar-grow" style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                }} />
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 4 }}>
                <span className="mono" style={{
                  fontSize: isMobile ? 9 : 10, letterSpacing: "0.18em", color: "var(--silver)",
                }}>R{p.round}/{String(i + 1).padStart(2, "0")}</span>
                {isOnClock && <span className="mono hot-text" style={{ fontSize: 9, letterSpacing: "0.22em" }}>● LIVE</span>}
                {isMade && <span className="mono" style={{ fontSize: 9, letterSpacing: "0.22em", color: "var(--green)" }}>● MADE</span>}
                {isTraded && <span className="mono" style={{ fontSize: 9, letterSpacing: "0.22em", color: "var(--steel-2)" }}>↪ TRADED</span>}
              </div>
              <div className="stencil" style={{
                fontSize: isMobile ? 34 : 48, lineHeight: 1, marginTop: isMobile ? 8 : 10,
                color: isOnClock || isMade ? "var(--ivory)" : "var(--silver)",
                textShadow: isOnClock ? "0 0 18px #FF2D3D55" : "none",
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>
                <span style={{ fontSize: isMobile ? 16 : 22, color: "var(--steel-2)", verticalAlign: "top" }}>#</span>
                {p.overallPick}
              </div>
              <div className="display" style={{
                fontFamily: "var(--stencil)",
                fontSize: 13, letterSpacing: "0.04em", marginTop: 8,
                color: "var(--ivory)",
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>
                {slotName}
              </div>
              <div className="mono" style={{
                fontSize: 9, letterSpacing: "0.18em", color: "var(--steel-2)", marginTop: 4,
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>
                {slotPos ? `${slotPos}` : (p.tradeNote ? p.tradeNote.split(".")[0] : "")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── STAT RIBBON ────────────────────────────────────────────────────────────
function StatRibbon({ rosterCounts }) {
  const isMobile = useIsMobile();
  const stats = [
    { l: "ROSTER",   v: String(rosterCounts.total), sub: "POST-DRAFT" },
    { l: "ACTIVE",   v: String(rosterCounts.active), sub: "" },
    { l: "PUP / IR", v: String(rosterCounts.unavailable).padStart(2, "0"), sub: "PENIX, ETC." },
    { l: "PICKS",    v: String(DRAFT_DATA.falconsPicks.filter((p) => p.status === "made").length), sub: "RD 2 → RD 7" },
    { l: "CAP",      v: `$${(CAP_STATE.capSpaceSpotrac / 1_000_000).toFixed(1)}M`, sub: `RANK ${CAP_STATE.leagueRank}` },
    { l: "DEAD $",   v: `$${(CAP_STATE.deadMoney.total / 1_000_000).toFixed(1)}M`, sub: "COUSINS / MOONEY" },
    { l: "2025",     v: SEASON_RECAP_2025.record.replace("-", " — "), sub: "MISSED PLAYOFFS" },
  ];
  return (
    <div style={{
      marginTop: 16,
      display: "grid",
      gridTemplateColumns: isMobile
        ? "repeat(3, minmax(0, 1fr))"
        : `repeat(${stats.length}, minmax(0, 1fr))`,
      gap: 1, background: "#ffffff08",
      border: "1px solid #ffffff10",
    }}>
      {stats.map((s, i) => (
        <div key={s.l} style={{
          background: "var(--carbon)",
          padding: isMobile ? "10px 10px" : "12px 14px",
          position: "relative",
          minWidth: 0,
        }}>
          {i === 4 && (
            <div className="hot-bar bar-grow" style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
            }} />
          )}
          <div className="mono" style={{ fontSize: 9, letterSpacing: "0.24em", color: "var(--silver)" }}>
            / {s.l}
          </div>
          <div className="stencil" style={{ fontSize: isMobile ? 20 : 26, color: "var(--ivory)", lineHeight: 1, marginTop: 6, whiteSpace: "nowrap" }}>
            {s.v}
          </div>
          {s.sub && (
            <div className="mono" style={{ fontSize: 8, color: "var(--steel-2)", letterSpacing: "0.18em", marginTop: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {s.sub}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── SECTION TITLE ──────────────────────────────────────────────────────────
function SectionTitle({ children, bug, meta }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {bug && <div className="hot-bar" style={{ width: 6, height: 18 }} />}
      <h3 className="display" style={{
        margin: 0, fontSize: 16, letterSpacing: "0.18em", color: "var(--ivory)",
      }}>{children}</h3>
      {meta && <span className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--silver)", marginLeft: "auto" }}>{meta}</span>}
    </div>
  );
}

// ─── FORM DIAL ──────────────────────────────────────────────────────────────
function FormDial({ value }) {
  const SIZE = 44, CENTER = SIZE / 2, segments = 10;
  return (
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
      <circle cx={CENTER} cy={CENTER} r={CENTER - 1} fill="none" stroke="#ffffff10" strokeWidth="1" />
      {Array.from({ length: segments }).map((_, i) => {
        const angle = (i / segments) * 270 - 135;
        const rad = (angle * Math.PI) / 180;
        const r1 = CENTER - 4, r2 = CENTER - 9;
        const x1 = CENTER + Math.cos(rad) * r1;
        const y1 = CENTER + Math.sin(rad) * r1;
        const x2 = CENTER + Math.cos(rad) * r2;
        const y2 = CENTER + Math.sin(rad) * r2;
        const lit = i < Math.round(value);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={lit ? (i > 7 ? "#FF2D3D" : "#A71930") : "#2A2D33"}
            strokeWidth="2"
            style={lit && i > 7 ? { filter: "drop-shadow(0 0 3px #FF2D3D)" } : undefined}
          />
        );
      })}
      <text x={CENTER} y={CENTER + 4} textAnchor="middle"
        fontSize="11" fontFamily="var(--stencil)" fill="#EDEDED" fontWeight="700">
        {value > 0 ? value.toFixed(1) : "—"}
      </text>
    </svg>
  );
}

// ─── PLAYER TELEMETRY CARD ──────────────────────────────────────────────────
function PlayerTelemetryCard({ p, onClick }) {
  const isUnavail = ["pup", "ir", "nfi", "suspended"].includes(p.status);
  const lastName = p.name.split(" ").slice(-1)[0].toUpperCase();
  const tag = p.tag;
  return (
    <div onClick={() => onClick && onClick(p)} className="panel diag-cut" style={{
      position: "relative", overflow: "hidden",
      minHeight: 240,
      display: "flex", flexDirection: "column",
      cursor: onClick ? "pointer" : "default",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0,
        background: isUnavail ? "var(--steel)" : "var(--red)",
        padding: "4px 10px", zIndex: 2,
      }}>
        <span className="mono" style={{ fontSize: 9, letterSpacing: "0.24em", color: "#fff" }}>
          {tag}
        </span>
      </div>

      <svg viewBox="0 0 60 60" style={{
        position: "absolute", top: 0, right: 0, width: 60, height: 60, zIndex: 1,
      }}>
        <polygon points="60,0 60,30 30,0" fill="#A71930" />
        <polygon points="60,0 60,16 44,0" fill="#FF2D3D" />
      </svg>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, flex: 1 }}>
        <div style={{
          position: "relative",
          background: `
            radial-gradient(ellipse at 30% 40%, #A7193055 0%, transparent 60%),
            linear-gradient(135deg, #1A0508 0%, #0B0C0F 70%)
          `,
          minHeight: 240,
          overflow: "hidden",
          borderRight: "1px solid #ffffff10",
        }}>
          <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <polygon points="0,240 0,140 60,80 130,60 200,90 200,240" fill="#A7193033" />
            <polygon points="0,240 30,180 110,150 200,170 200,240" fill="#FF2D3D22" />
            <text x="100" y="195" textAnchor="middle"
              fontFamily="Stardos Stencil, Oswald, sans-serif" fontWeight="700"
              fontSize="180" fill="#FF2D3D" opacity="0.18">
              {p.number}
            </text>
          </svg>
          {p.image && (
            <img src={p.image} alt={p.name}
              style={{
                position: "absolute", bottom: 56, left: "50%",
                transform: "translateX(-50%)",
                width: "90%", maxHeight: 170,
                objectFit: "contain", objectPosition: "top",
                opacity: 1, zIndex: 1,
                filter: "drop-shadow(0 4px 18px #FF2D3D33)",
              }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          )}
          <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, zIndex: 2 }}>
            <div className="mono" style={{ fontSize: 9, color: "var(--silver)", letterSpacing: "0.22em" }}>
              #{p.number} / {p.position}
            </div>
            <div className="stencil" style={{ fontSize: 22, lineHeight: 1, color: "var(--ivory)", marginTop: 4, letterSpacing: "-0.005em" }}>
              {lastName}
            </div>
          </div>
        </div>

        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FormDial value={p.form || 0} />
            <div>
              <div className="mono" style={{ fontSize: 9, color: "var(--silver)", letterSpacing: "0.22em" }}>FORM</div>
              <div className="stencil" style={{ fontSize: 22, lineHeight: 1, color: "var(--ivory)" }}>
                {p.form > 0 ? p.form.toFixed(1) : "—"}
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
            {p.statLine.map((s) => (
              <div key={s.k} style={{
                background: "#0B0C0F", padding: "8px 6px", textAlign: "center",
                borderTop: "1px solid #ffffff10",
              }}>
                <div className="stencil" style={{ fontSize: 18, lineHeight: 1, color: "var(--ivory)" }}>
                  {s.v}
                </div>
                <div className="mono" style={{ fontSize: 8, color: "var(--silver)", letterSpacing: "0.22em", marginTop: 4 }}>
                  {s.k}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {p.ranks.map((r) => (
              <div key={r.k}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="mono" style={{ fontSize: 8, letterSpacing: "0.2em", color: "var(--silver)" }}>{r.k}</span>
                  <span className="mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: "var(--ivory)" }}>{r.v}</span>
                </div>
                <div style={{ height: 3, background: "#ffffff08", marginTop: 3, position: "relative" }}>
                  <div className="bar-grow" style={{
                    height: "100%",
                    width: `${(r.v / 100) * 100}%`,
                    background: r.v > 80 ? "var(--hot)" : r.v > 0 ? "var(--red)" : "var(--steel-2)",
                    boxShadow: r.v > 80 ? "0 0 8px #FF2D3D88" : "none",
                  }} />
                  {[25, 50, 75].map((t) => (
                    <div key={t} style={{
                      position: "absolute", top: -1, bottom: -1, left: `${t}%`,
                      width: 1, background: "#ffffff15",
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        padding: "6px 12px",
        background: isUnavail ? "var(--steel)" : "#0B0C0F",
        borderTop: "1px solid #ffffff10",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span className="mono" style={{ fontSize: 9, color: isUnavail ? "var(--ivory)" : "var(--silver)", letterSpacing: "0.22em" }}>
          {p.statusLabel}
        </span>
      </div>
    </div>
  );
}

// ─── STAR TELEMETRY ─────────────────────────────────────────────────────────
const STAR_PROFILES = {
  "drake-london": {
    tag: "PRIMARY",
    statusLabel: "EXTENSION PENDING",
    statLine: (p) => [
      { k: "REC", v: p.stats.receptions || 0 },
      { k: "YDS", v: p.stats.recYds || 0 },
      { k: "TD", v: p.stats.recTDs || 0 },
    ],
    ranks: [
      { k: "TGT SHARE", v: 32 },
      { k: "AIR YDS", v: 78 },
      { k: "YAC", v: 64 },
    ],
  },
  "bijan": {
    tag: "WORKHORSE",
    statusLabel: "ACTIVE · 5TH-YR OPTION",
    statLine: (p) => [
      { k: "RUSH", v: p.stats.rushYds || 0 },
      { k: "TD", v: (p.stats.rushTDs || 0) + (p.stats.recTDs || 0) },
      { k: "YPC", v: p.stats.rushYds && p.stats.rushAttempts ? (p.stats.rushYds / p.stats.rushAttempts).toFixed(1) : "—" },
    ],
    ranks: [
      { k: "BREAK %", v: 88 },
      { k: "EPA/TCH", v: 91 },
      { k: "RECV", v: 72 },
    ],
  },
  "pitts": {
    tag: "TAG '26",
    statusLabel: "FRANCHISE TAGGED · $14.1M",
    statLine: (p) => [
      { k: "REC", v: p.stats.receptions || 0 },
      { k: "YDS", v: p.stats.recYds || 0 },
      { k: "TD", v: p.stats.recTDs || 0 },
    ],
    ranks: [
      { k: "AVG SEP", v: 61 },
      { k: "CONTESTED", v: 70 },
      { k: "SNAP %", v: 84 },
    ],
  },
  "bates": {
    tag: "ANCHOR",
    statusLabel: "ACTIVE · ALL-PRO",
    statLine: (p) => [
      { k: "TKL", v: p.stats.tackles || 0 },
      { k: "INT", v: p.stats.int_def || 0 },
      { k: "PD", v: p.stats.pass_def || 0 },
    ],
    ranks: [
      { k: "COVERAGE", v: 89 },
      { k: "RUN STOP", v: 74 },
      { k: "TACKLE %", v: 86 },
    ],
  },
  "penix-jr": {
    tag: "QB1 (PROJ.)",
    statusLabel: "PUP · ACL REHAB",
    statLine: (p) => [
      { k: "YDS", v: p.stats.passYds || 0 },
      { k: "TD", v: p.stats.passTDs || 0 },
      { k: "INT", v: p.stats.ints || 0 },
    ],
    ranks: [
      { k: "REHAB", v: 72 },
      { k: "ACCURACY", v: 0 },
      { k: "MOBILITY", v: 0 },
    ],
  },
  "jalon-walker": {
    tag: "RISING",
    statusLabel: "ACTIVE · YEAR 2",
    statLine: (p) => [
      { k: "TKL", v: p.stats.tackles || 0 },
      { k: "SACK", v: p.stats.sacks || 0 },
      { k: "TFL", v: p.stats.tfl || 0 },
    ],
    ranks: [
      { k: "PASS RUSH", v: 84 },
      { k: "RUN STOP", v: 78 },
      { k: "PRESS %", v: 81 },
    ],
  },
};

function StarRoster({ onPlayerClick }) {
  const isMobile = useIsMobile();
  const stars = useMemo(() => {
    return Object.keys(STAR_PROFILES).map((id) => {
      const player = PLAYERS.find((p) => p.id === id);
      if (!player) return null;
      const profile = STAR_PROFILES[id];
      return {
        ...player,
        tag: profile.tag,
        statusLabel: profile.statusLabel,
        statLine: profile.statLine(player),
        ranks: profile.ranks,
      };
    }).filter(Boolean);
  }, []);
  return (
    <div style={{ marginTop: 20 }}>
      <SectionTitle bug meta="2025 TELEMETRY">STARS TO WATCH</SectionTitle>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "minmax(0, 1fr)"
          : "repeat(auto-fill, minmax(340px, 1fr))",
        gap: 14, marginTop: 12,
      }}>
        {stars.map((p) => <PlayerTelemetryCard key={p.id} p={p} onClick={onPlayerClick} />)}
      </div>
    </div>
  );
}

// ─── CAP FUEL GAUGE ─────────────────────────────────────────────────────────
function CapFuelGauge() {
  const isMobile = useIsMobile();
  const space = CAP_STATE.capSpaceSpotrac;
  const spaceMax = 80_000_000;
  const dead = CAP_STATE.deadMoney.total;
  const pct = Math.min(1, space / spaceMax);
  const ticks = [0, 10, 20, 30, 40, 50, 60, 70, 80];
  const milestones = [
    { v: dead / 1_000_000, label: "DEAD $" },
    { v: 14.1, label: "PITTS TAG" },
    { v: 32,   label: "LONDON EXT" },
  ];
  const extensionLabels = {
    "drake-london": { tag: "PRIMARY",  hit: "$32M APY (PROJ.)", name: "DRAKE LONDON" },
    "bijan":        { tag: "ELIGIBLE", hit: "MARKET RESET",     name: "BIJAN ROBINSON" },
    "pitts":        { tag: "TAGGED",   hit: "$14.1M / 1YR",     name: "KYLE PITTS" },
  };
  return (
    <div className="panel">
      <div className="panel-title">
        <span className="bug" />
        <span className="name">CAP TELEMETRY · 2026</span>
        <span className="meta">RANK {CAP_STATE.leagueRank} / 32</span>
      </div>
      <div style={{ padding: isMobile ? "14px 14px 12px" : "18px 18px 16px", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 14, flexWrap: "wrap" }}>
          <div>
            <div className="mono" style={{ fontSize: 9, letterSpacing: "0.24em", color: "var(--silver)" }}>
              CAP SPACE / SPOTRAC
            </div>
            <div className="stencil" style={{ fontSize: isMobile ? 38 : 56, lineHeight: 1, color: "var(--ivory)", marginTop: 4 }}>
              <span style={{ color: "var(--steel-2)", fontSize: isMobile ? 22 : 30, verticalAlign: "top" }}>$</span>
              {(space / 1_000_000).toFixed(1)}
              <span style={{ color: "var(--silver)", fontSize: isMobile ? 16 : 22, marginLeft: 4 }}>M</span>
            </div>
          </div>
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: "0.24em", color: "var(--silver)" }}>
              DEAD MONEY
            </div>
            <div className="stencil" style={{ fontSize: isMobile ? 22 : 26, lineHeight: 1, color: "var(--hot)", textShadow: "0 0 12px #FF2D3D55", marginTop: 4 }}>
              ${(dead / 1_000_000).toFixed(1)}M
            </div>
          </div>
        </div>

        <div style={{ position: "relative", marginTop: 14 }}>
          <div style={{ position: "relative", height: 14, marginBottom: 4 }}>
            {ticks.map((t) => (
              <div key={t} style={{
                position: "absolute", left: `${(t / 80) * 100}%`,
                top: 0, transform: "translateX(-50%)",
                fontFamily: "var(--mono)", fontSize: 8,
                color: "var(--steel-2)", letterSpacing: "0.1em",
              }}>${t}M</div>
            ))}
          </div>

          <div style={{ position: "relative", height: 22, background: "#0B0C0F", border: "1px solid #ffffff10" }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, #2ECC71 0%, #C9A227 55%, #FF2D3D 100%)",
              opacity: 0.18,
            }} />
            {ticks.map((t) => (
              <div key={t} style={{
                position: "absolute", top: 0, bottom: 0,
                left: `${(t / 80) * 100}%`,
                width: 1, background: "#ffffff15",
              }} />
            ))}
            {milestones.map((m) => (
              <div key={m.label} style={{
                position: "absolute", top: -2, bottom: -2,
                left: `${Math.min(100, (m.v / 80) * 100)}%`,
                width: 2, background: "#A71930",
              }} />
            ))}
            <div className="bar-grow" style={{
              position: "absolute", top: 0, bottom: 0, left: 0,
              width: `${pct * 100}%`,
              background: "linear-gradient(90deg, #2ECC71, #C9A227)",
              borderRight: "2px solid var(--hot)",
              boxShadow: "var(--hot-glow)",
            }} />
            <div style={{
              position: "absolute", top: -8, left: `calc(${pct * 100}% - 6px)`,
              width: 0, height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "8px solid #FF2D3D",
              filter: "drop-shadow(0 0 4px #FF2D3D)",
            }} />
          </div>

          <div style={{ position: "relative", marginTop: 6, height: 22 }}>
            {milestones.map((m, i) => (
              <div key={m.label} style={{
                position: "absolute",
                left: `${Math.min(100, (m.v / 80) * 100)}%`,
                transform: i === 0 ? "translateX(0)" : "translateX(-50%)",
                fontFamily: "var(--mono)", fontSize: 8,
                color: "var(--silver)", letterSpacing: "0.16em",
                whiteSpace: "nowrap",
              }}>
                ▼ {m.label}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 22, display: "grid",
          gridTemplateColumns: isMobile ? "minmax(0, 1fr)" : "repeat(3, minmax(0, 1fr))",
          gap: 10,
        }}>
          {CAP_STATE.pendingExtensions.map((e) => {
            const info = extensionLabels[e.playerId];
            if (!info) return null;
            return (
              <div key={e.playerId} style={{
                background: "#0B0C0F", padding: "10px 12px",
                borderTop: "2px solid var(--red)",
                display: "flex", flexDirection: "column", gap: 4,
                minWidth: 0,
              }}>
                <span className="mono hot-text" style={{ fontSize: 8, letterSpacing: "0.24em" }}>
                  {info.tag}
                </span>
                <span className="stencil" style={{ fontSize: 16, color: "var(--ivory)", letterSpacing: "0.02em" }}>
                  {info.name}
                </span>
                <span className="mono" style={{ fontSize: 9, letterSpacing: "0.16em", color: "var(--silver)" }}>
                  {info.hit}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── LOWER THIRD (NEWS) ─────────────────────────────────────────────────────
const CAT_COLORS = {
  draft: "#FF2D3D",
  injuries: "#E67E22",
  contracts: "#C9A227",
  coaching: "#9B59B6",
  general: "#3498DB",
};
const CAT_LABELS = {
  draft: "DRAFT", injuries: "INJURY", contracts: "CAP", coaching: "COACHING", general: "DISPATCH",
};

function timeAgoFromGenerated(generatedAt) {
  const ms = Date.now() - new Date(generatedAt).getTime();
  if (ms < 3600_000) return `${Math.max(1, Math.floor(ms / 60000))}M`;
  if (ms < 86400_000) return `${Math.floor(ms / 3600_000)}H`;
  return `${Math.floor(ms / 86400_000)}D`;
}

function LowerThird({ item, onClick }) {
  const c = CAT_COLORS[item.category] || "#A5ACAF";
  const label = CAT_LABELS[item.category] || "DISPATCH";
  return (
    <div onClick={onClick} style={{
      display: "flex", alignItems: "stretch",
      background: "var(--carbon)",
      borderLeft: `4px solid ${c}`,
      cursor: onClick ? "pointer" : "default",
    }}>
      <div style={{
        background: "var(--red)",
        padding: "10px 12px",
        display: "flex", alignItems: "center",
        position: "relative",
        minWidth: 78,
        boxShadow: item.category === "draft" ? "inset -2px 0 8px #FF2D3D" : "none",
      }}>
        <span className="stencil" style={{
          fontSize: 13, color: "#fff", letterSpacing: "0.18em",
        }}>{label}</span>
        <div style={{
          position: "absolute", right: -10, top: 0, bottom: 0, width: 12,
          background: "var(--red)",
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        }} />
      </div>
      <div style={{ flex: 1, padding: "9px 16px 9px 22px", minWidth: 0 }}>
        <div className="stencil" style={{
          fontSize: 14, letterSpacing: "0.04em", color: "var(--ivory)",
          lineHeight: 1.2,
        }}>
          {item.title}
        </div>
        <div className="mono" style={{
          marginTop: 3, fontSize: 9, color: "var(--silver)", letterSpacing: "0.18em",
        }}>
          DIGEST <span style={{ color: c }}>/</span> {item.timeAgo}
        </div>
      </div>
      <div style={{
        background: "#0B0C0F", padding: "0 14px",
        display: "flex", alignItems: "center",
        borderLeft: "1px solid #ffffff10",
      }}>
        <span className="mono" style={{ fontSize: 10, color: c, letterSpacing: "0.18em" }}>▸</span>
      </div>
    </div>
  );
}

function NewsWire({ expanded }) {
  const ago = timeAgoFromGenerated(NEWS_DIGEST.generatedAt);
  const [open, setOpen] = useState(null);
  const items = (expanded ? NEWS_DIGEST.topics : NEWS_DIGEST.topics.slice(0, 6))
    .map((t, i) => ({ ...t, timeAgo: i === 0 ? ago : `${i}H` }));
  return (
    <div className="panel">
      <div className="panel-title">
        <span className="bug" />
        <span className="name">WIRE FEED · LOWER THIRDS</span>
        <span className="meta">LIVE · {NEWS_DIGEST.topics.length} ITEMS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#ffffff05" }}>
        {items.map((n, i) => (
          <div key={i}>
            <LowerThird item={n} onClick={() => setOpen(open === i ? null : i)} />
            {open === i && (
              <div style={{
                background: "#0B0C0F",
                padding: "12px 22px 14px",
                borderLeft: `4px solid ${CAT_COLORS[n.category] || "#A5ACAF"}`,
                color: "var(--silver)",
                fontSize: 12, lineHeight: 1.6,
              }}>
                {n.detail}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CALENDAR RAIL ──────────────────────────────────────────────────────────
function CalendarRail() {
  const isMobile = useIsMobile();
  const today = new Date();
  const upcoming = OFFSEASON_CALENDAR
    .filter((c) => new Date(c.date).getTime() >= today.getTime() - 86400000)
    .slice(0, 8);
  return (
    <div className="panel">
      <div className="panel-title">
        <span className="bug" />
        <span className="name">RUNNING ORDER · OFFSEASON</span>
        <span className="meta">NEXT MILESTONES</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {upcoming.map((c, i) => {
          const date = new Date(c.date);
          const dateLabel = date.toLocaleDateString("en-US", { month: "short", day: "2-digit" }).toUpperCase();
          const hot = i === 0;
          const phaseLabel = (PHASES.find((p) => p.id === c.phase)?.name || c.phase).toUpperCase();
          return (
            <div key={c.id} style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "60px 1fr" : "70px 100px 1fr",
              gap: isMobile ? 8 : 0,
              padding: "10px 14px",
              borderBottom: i === upcoming.length - 1 ? "none" : "1px solid #ffffff08",
              background: hot ? "#170509" : "transparent",
              position: "relative",
            }}>
              {hot && (
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0,
                  width: 2, background: "var(--hot)", boxShadow: "var(--hot-glow)",
                }} />
              )}
              <span className="mono" style={{
                fontSize: 11,
                color: hot ? "var(--hot)" : "var(--silver)",
                letterSpacing: "0.16em", fontWeight: 600,
              }}>{dateLabel}</span>
              {!isMobile && (
                <span className="mono" style={{
                  fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.18em",
                }}>{phaseLabel}</span>
              )}
              <div>
                <div className="stencil" style={{
                  fontSize: 13, color: "var(--ivory)", letterSpacing: "0.04em",
                }}>{c.label}</div>
                <div className="mono" style={{ fontSize: 9, color: "var(--silver)", letterSpacing: "0.12em", marginTop: 2 }}>
                  {isMobile ? `${phaseLabel} · ${c.detail}` : c.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── TOP CAP HITS LIST ──────────────────────────────────────────────────────
function TopHitsList() {
  const hits = useMemo(() => {
    return CAP_STATE.topCapHits2026.map((h) => {
      const player = PLAYERS.find((p) => p.id === h.playerId);
      return {
        name: player ? player.name.toUpperCase() : h.playerId.toUpperCase(),
        pos: player ? player.position : "—",
        amount: h.amount / 1_000_000,
      };
    });
  }, []);
  const max = Math.max(...hits.map((h) => h.amount));
  return (
    <div className="panel">
      <div className="panel-title">
        <span className="bug" />
        <span className="name">TOP CAP HITS · 2026</span>
        <span className="meta">TOP {hits.length}</span>
      </div>
      <div>
        {hits.map((h, i) => (
          <div key={h.name} style={{
            display: "grid",
            gridTemplateColumns: "26px 50px 1fr 70px",
            alignItems: "center", padding: "10px 14px",
            borderBottom: i === hits.length - 1 ? "none" : "1px solid #ffffff08",
          }}>
            <span className="mono" style={{ fontSize: 10, color: "var(--steel-2)", letterSpacing: "0.16em" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mono" style={{
              fontSize: 10, padding: "2px 6px", background: "var(--steel)",
              color: "var(--ivory)", letterSpacing: "0.18em", textAlign: "center",
            }}>{h.pos}</span>
            <div style={{ minWidth: 0 }}>
              <div className="stencil" style={{ fontSize: 13, color: "var(--ivory)", letterSpacing: "0.02em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {h.name}
              </div>
              <div style={{ position: "relative", height: 2, background: "#ffffff08", marginTop: 5, marginRight: 12 }}>
                <div className="bar-grow" style={{
                  position: "absolute", inset: 0,
                  width: `${(h.amount / max) * 100}%`,
                  background: "var(--red)",
                }} />
              </div>
            </div>
            <span className="stencil" style={{ fontSize: 16, color: "var(--ivory)", textAlign: "right" }}>
              ${h.amount.toFixed(1)}M
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── DIVISION STANDINGS ─────────────────────────────────────────────────────
function StandingsPanel() {
  const isMobile = useIsMobile();
  return (
    <div className="panel">
      <div className="panel-title">
        <span className="bug" />
        <span className="name">NFC SOUTH · 2025 FINAL</span>
        <span className="meta">DIVISION</span>
      </div>
      <div>
        {NFC_SOUTH_STANDINGS_2025.map((t, i) => {
          const pct = t.wins / (t.wins + t.losses);
          return (
            <div key={t.code} style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "26px 46px 1fr 60px" : "30px 50px 1fr 70px 80px",
              alignItems: "center", padding: "12px 14px",
              borderBottom: i === NFC_SOUTH_STANDINGS_2025.length - 1 ? "none" : "1px solid #ffffff08",
              background: t.isFalcons ? "#170509" : "transparent",
              position: "relative",
            }}>
              {t.isFalcons && (
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: 2,
                  background: "var(--hot)", boxShadow: "var(--hot-glow)",
                }} />
              )}
              <span className="stencil" style={{
                fontSize: 18, color: i === 0 ? "var(--gold)" : "var(--steel-2)",
              }}>0{i + 1}</span>
              <span className="mono" style={{
                fontSize: 12, letterSpacing: "0.18em",
                color: t.isFalcons ? "var(--hot)" : "var(--silver)",
                fontWeight: 700,
              }}>{t.code}</span>
              <span className="stencil" style={{
                fontSize: 14, color: t.isFalcons ? "var(--ivory)" : "var(--silver)",
                letterSpacing: "0.04em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>{t.team.toUpperCase()}</span>
              <span className="stencil" style={{ fontSize: 18, color: "var(--ivory)", textAlign: "right" }}>
                {t.wins}–{t.losses}
              </span>
              {!isMobile && (
                <div style={{ position: "relative", height: 4, background: "#ffffff08" }}>
                  <div className="bar-grow" style={{
                    position: "absolute", inset: 0,
                    width: `${pct * 100}%`,
                    background: t.isFalcons ? "var(--hot)" : "var(--steel-2)",
                    boxShadow: t.isFalcons ? "0 0 6px #FF2D3D88" : "none",
                  }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── PROSPECT BOARD (rookie class card grid) ────────────────────────────────
function ProspectBoard() {
  const isMobile = useIsMobile();
  const [pos, setPos] = useState("ALL");
  const targets = DRAFT_DATA.topTargets || [];
  const filtered = pos === "ALL" ? targets : targets.filter((p) => p.position === pos);
  const allPositions = Array.from(new Set(targets.map((t) => t.position)));
  const tabs = ["ALL", ...allPositions];
  return (
    <div className="panel">
      <div className="panel-title">
        <span className="bug" />
        <span className="name">PROSPECT INTEL · BIG BOARD</span>
        <span className="meta">{filtered.length} TARGETS</span>
      </div>
      <div style={{
        display: "flex", borderBottom: "1px solid #ffffff10",
        background: "#0B0C0F", flexWrap: "wrap",
      }}>
        {tabs.map((t) => {
          const active = pos === t;
          return (
            <button key={t} onClick={() => setPos(t)} style={{
              border: "none",
              background: active ? "var(--red)" : "transparent",
              color: active ? "#fff" : "var(--silver)",
              fontFamily: "var(--display)", fontWeight: 700,
              fontSize: 11, letterSpacing: "0.22em",
              padding: "8px 16px", cursor: "pointer",
              borderRight: "1px solid #ffffff10",
            }}>{t}</button>
          );
        })}
      </div>
      <div>
        {filtered.map((p, i) => {
          const fit = p.fortyTime ? Math.max(40, Math.min(99, Math.round(100 - (p.fortyTime - 4.3) * 30))) : 75;
          const ftIn = Math.floor(p.heightIn / 12);
          const inn = p.heightIn % 12;
          return (
            <div key={p.id} style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "28px 1fr 44px 40px"
                : "32px 1.4fr 60px 0.8fr 70px 60px 1fr",
              alignItems: "center",
              padding: "10px 14px",
              borderBottom: i === filtered.length - 1 ? "none" : "1px solid #ffffff08",
              gap: 8,
            }}>
              <span className="mono" style={{ fontSize: 11, color: "var(--steel-2)", letterSpacing: "0.16em" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ minWidth: 0 }}>
                <div className="stencil" style={{ fontSize: isMobile ? 13 : 15, color: "var(--ivory)", letterSpacing: "0.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {p.name.toUpperCase()}
                </div>
                <div className="mono" style={{ fontSize: 9, color: "var(--silver)", letterSpacing: "0.14em", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {isMobile
                    ? `${p.college.toUpperCase()} · 40 ${p.fortyTime ? p.fortyTime.toFixed(2) : "—"}`
                    : `${p.college.toUpperCase()} · ${ftIn}'${inn}" · ${p.weight} LBS`}
                </div>
              </div>
              <span className="display" style={{
                fontSize: 11, letterSpacing: "0.18em",
                padding: "3px 8px", background: "var(--red)", color: "#fff", textAlign: "center",
              }}>{p.position}</span>
              {!isMobile && (
                <div className="mono" style={{ fontSize: 11, color: "var(--silver)", letterSpacing: "0.12em" }}>
                  40 / <span style={{ color: "var(--ivory)" }}>{p.fortyTime ? p.fortyTime.toFixed(2) : "—"}</span>
                </div>
              )}
              {!isMobile && (
                <div className="mono" style={{ fontSize: 11, color: "var(--silver)", letterSpacing: "0.12em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {p.projection ? p.projection.split(" ")[0].toUpperCase() : "—"}
                </div>
              )}
              <div className="stencil" style={{ fontSize: isMobile ? 16 : 18, color: fit > 85 ? "var(--hot)" : "var(--ivory)", textShadow: fit > 85 ? "0 0 8px #FF2D3D55" : "none", textAlign: "center" }}>
                {fit}
              </div>
              {!isMobile && (
                <div style={{ position: "relative", height: 6, background: "#ffffff08" }}>
                  <div className="bar-grow" style={{
                    position: "absolute", inset: 0,
                    width: `${fit}%`,
                    background: fit > 85 ? "var(--hot)" : "var(--red)",
                    boxShadow: fit > 85 ? "0 0 6px #FF2D3D88" : "none",
                  }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── PLAYER DETAIL MODAL ────────────────────────────────────────────────────
function PlayerDetailModal({ player, onClose }) {
  const isMobile = useIsMobile();
  if (!player) return null;
  const cap = player.contract?.cap2026;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "#000000d0", zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: isMobile ? 8 : 20,
    }}>
      <div onClick={(e) => e.stopPropagation()} className="panel" style={{
        maxWidth: 720, width: "100%", maxHeight: isMobile ? "92vh" : "85vh", overflowY: "auto",
      }}>
        <div className="panel-title">
          <span className="bug" />
          <span className="name">PLAYER DOSSIER</span>
          <span className="meta" style={{ cursor: "pointer" }} onClick={onClose}>CLOSE ✕</span>
        </div>
        <div style={{ padding: isMobile ? 14 : 20, position: "relative" }}>
          <div style={{ display: "flex", gap: isMobile ? 12 : 18, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              position: "relative", flexShrink: 0,
              width: isMobile ? 84 : 110, height: isMobile ? 84 : 110,
              background: "linear-gradient(135deg, #1A0508 0%, #0B0C0F 70%)",
              border: "1px solid #ffffff10",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
            }}>
              {player.image ? (
                <img src={player.image} alt={player.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              ) : (
                <span className="stencil" style={{ fontSize: isMobile ? 36 : 48, color: "var(--hot)" }}>{player.number}</span>
              )}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div className="mono" style={{ fontSize: 9, letterSpacing: "0.24em", color: "var(--silver)" }}>
                #{player.number} / {player.position} / {player.college.toUpperCase()}
              </div>
              <div className="stencil" style={{ fontSize: isMobile ? 22 : 28, color: "var(--ivory)", letterSpacing: "0.02em", marginTop: 4 }}>
                {player.name.toUpperCase()}
              </div>
              <div className="mono" style={{ fontSize: 11, color: "var(--silver)", letterSpacing: "0.12em", marginTop: 8 }}>
                AGE {player.age} · {Math.floor(player.height / 12)}'{player.height % 12}" · {player.weight} LBS · YR {player.experience}
              </div>
              {player.injuryNote && (
                <div className="mono" style={{ fontSize: 10, color: "var(--hot)", letterSpacing: "0.18em", marginTop: 8 }}>
                  ▌ {player.injuryNote}
                </div>
              )}
            </div>
          </div>

          {cap && (
            <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10 }}>
              {[
                { l: "2026 CAP", v: `$${(cap / 1_000_000).toFixed(2)}M` },
                { l: "DEAL", v: `${player.contract.years}Y / $${(player.contract.total / 1_000_000).toFixed(1)}M` },
                { l: "GTD", v: `$${(player.contract.guaranteed / 1_000_000).toFixed(1)}M` },
                { l: "THRU", v: String(player.contract.throughYear) },
              ].map((s) => (
                <div key={s.l} style={{ background: "#0B0C0F", padding: "10px 12px", borderTop: "2px solid var(--red)" }}>
                  <div className="mono" style={{ fontSize: 8, letterSpacing: "0.24em", color: "var(--silver)" }}>{s.l}</div>
                  <div className="stencil" style={{ fontSize: 18, color: "var(--ivory)", marginTop: 4 }}>{s.v}</div>
                </div>
              ))}
            </div>
          )}

          {player.career && player.career.length > 0 && (
            <div style={{ marginTop: 22 }}>
              <SectionTitle bug>CAREER</SectionTitle>
              <div style={{ marginTop: 10 }}>
                {player.career.map((row, i) => (
                  <div key={i} style={{
                    display: "grid", gridTemplateColumns: "100px 1fr 1fr",
                    gap: 10, padding: "8px 0", borderBottom: "1px solid #ffffff08",
                  }}>
                    <span className="mono" style={{ fontSize: 10, color: "var(--silver)", letterSpacing: "0.16em" }}>{row.years}</span>
                    <span className="stencil" style={{ fontSize: 13, color: "var(--ivory)", letterSpacing: "0.02em" }}>{row.team}</span>
                    <span className="mono" style={{ fontSize: 10, color: "var(--steel-2)", letterSpacing: "0.12em" }}>{row.type}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── VIEWS ──────────────────────────────────────────────────────────────────
function DashboardView({ rosterCounts, currentPhase, onPlayerClick }) {
  const isMobile = useIsMobile();
  return (
    <>
      <HeroBroadcast currentPhase={currentPhase} />
      <PickSlotBoard />
      <StatRibbon rosterCounts={rosterCounts} />
      <StarRoster onPlayerClick={onPlayerClick} />
      <div style={{
        marginTop: 20, display: "grid",
        gridTemplateColumns: isMobile ? "minmax(0, 1fr)" : "minmax(0, 1.7fr) minmax(0, 1fr)",
        gap: 16,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <CapFuelGauge />
          <NewsWire />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <CalendarRail />
          <TopHitsList />
          <StandingsPanel />
        </div>
      </div>
    </>
  );
}

function DraftView({ currentPhase }) {
  const isMobile = useIsMobile();
  return (
    <>
      <HeroBroadcast currentPhase={currentPhase} />
      <div style={{
        marginTop: 20, display: "grid",
        gridTemplateColumns: isMobile ? "minmax(0, 1fr)" : "minmax(0, 1fr) minmax(0, 1fr)",
        gap: 16,
      }}>
        <PickSlotBoard />
        <ProspectBoard />
      </div>
    </>
  );
}

function WireView() {
  const isMobile = useIsMobile();
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "minmax(0, 1fr)" : "minmax(0, 2fr) minmax(0, 1fr)",
      gap: 16,
    }}>
      <NewsWire expanded />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CalendarRail />
        <RSSSourcesPanel />
      </div>
    </div>
  );
}

function RSSSourcesPanel() {
  return (
    <div className="panel">
      <div className="panel-title">
        <span className="bug" />
        <span className="name">DISPATCH SOURCES</span>
        <span className="meta">{RSS_FEEDS.length} WIRES</span>
      </div>
      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
        {RSS_FEEDS.map((f) => (
          <a key={f.name} href={f.url} target="_blank" rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 10px",
              borderLeft: `3px solid ${f.color || "var(--red)"}`,
              background: "#0B0C0F",
            }}>
            <span className="stencil" style={{ fontSize: 12, color: "var(--ivory)", letterSpacing: "0.04em" }}>
              {f.name.toUpperCase()}
            </span>
            <span className="mono" style={{ fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.16em", marginLeft: "auto" }}>
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <div style={{
      borderTop: "1px solid #ffffff10",
      background: "#0B0C0F",
      padding: "16px 24px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 12,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <FalconGlyph size={20} color="#FF2D3D" />
        <span className="mono" style={{ fontSize: 10, letterSpacing: "0.22em", color: "var(--silver)" }}>
          FALCONS TRACKER · BROADCAST FEED 01 · 26 SEASON
        </span>
      </div>
      <span className="mono" style={{ fontSize: 9, letterSpacing: "0.22em", color: "var(--steel-2)" }}>
        DATA · NFL.COM / SPOTRAC / OVER THE CAP / TEAM REPORTING
      </span>
    </div>
  );
}

// ─── MAIN APP ───────────────────────────────────────────────────────────────
export default function FalconsTracker() {
  const [view, setView] = useState("dashboard");
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const isMobile = useIsMobile();

  const today = new Date();
  const currentPhase = getCurrentPhase(today);

  const rosterCounts = useMemo(() => ({
    total: PLAYERS.length,
    active: PLAYERS.filter((p) => p.status === "active").length,
    unavailable: PLAYERS.filter((p) => ["ir", "pup", "nfi", "suspended"].includes(p.status)).length,
  }), []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--void)", overflowX: "hidden" }}>
      <TopBar view={view} setView={setView} currentPhase={currentPhase} />
      <ChapterRail currentPhase={currentPhase} />

      <div style={{
        maxWidth: 1480, margin: "0 auto",
        padding: isMobile ? "14px 12px 32px" : "20px 20px 40px",
      }}>
        {view === "dashboard" && (
          <DashboardView rosterCounts={rosterCounts} currentPhase={currentPhase} onPlayerClick={setSelectedPlayer} />
        )}
        {view === "depth-chart" && (
          <DepthChartView players={PLAYERS} currentPhase={currentPhase} onPlayerClick={setSelectedPlayer} />
        )}
        {view === "draft" && <DraftView currentPhase={currentPhase} />}
        {view === "wire" && <WireView />}
      </div>

      <Footer />

      <PlayerDetailModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </div>
  );
}
