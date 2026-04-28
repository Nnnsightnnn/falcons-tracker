import { useState, useMemo, useEffect } from "react";
import _ from "lodash";
import {
  PLAYERS,
  RSS_FEEDS,
  NEXT_GAME,
  TEAM_LOGOS,
  NEWS_DIGEST,
  SEASON_RECAP_2025,
  RESULTS_2025,
  NFC_SOUTH_STANDINGS_2025,
} from "./playerData.js";
import { DRAFT_DATA } from "./draftData.js";
import { OFFSEASON_CALENDAR } from "./offseasonCalendar.js";
import { CAP_STATE } from "./capState.js";
import { getCurrentPhase, PHASES } from "./phases.js";
import DepthChartView from "./DepthChartView.jsx";

// ─── Atlanta Falcons Tracker ────────────────────────────────────────────────
// Phase-aware year-round dashboard. Hero auto-rotates by date.
// Today (Apr 18 2026) → draft-week → DraftCentral hero.

const FALCONS_RED = "#A71930";
const FALCONS_BLACK = "#000000";
const FALCONS_SILVER = "#A5ACAF";
const FALCONS_DARK = "#121212";
const FALCONS_CARD = "#1a1a1f";
const FALCONS_PANEL = "#1e1e26";

const POS_COLORS = {
  QB: "#C9A227", RB: "#2ecc71", WR: "#3498db", TE: "#9b59b6",
  OT: "#95a5a6", OG: "#7f8c8d", C: "#bdc3c7",
  DE: "#e74c3c", EDGE: "#e67e22", DT: "#c0392b",
  LB: "#d35400", CB: "#1abc9c", S: "#16a085",
  K: "#f39c12", P: "#d68910", LS: "#b9770e",
};

// NFL status taxonomy: active | ir | pup | nfi | suspended | questionable | holdout
function statusUIConfig(status) {
  switch (status) {
    case "active":       return { borderColor: FALCONS_RED, icon: null, iconBg: null };
    case "questionable": return { borderColor: "#ffc107", icon: "?", iconBg: "#ffc107" };
    case "pup":          return { borderColor: "#fd7e14", icon: "+", iconBg: "#fd7e14" };
    case "nfi":          return { borderColor: "#fd7e14", icon: "+", iconBg: "#fd7e14" };
    case "ir":           return { borderColor: "#dc3545", icon: "+", iconBg: "#dc3545" };
    case "suspended":    return { borderColor: "#6c757d", icon: "!", iconBg: "#6c757d" };
    case "holdout":      return { borderColor: "#8e44ad", icon: "$", iconBg: "#8e44ad" };
    default:             return { borderColor: FALCONS_RED, icon: null, iconBg: null };
  }
}

// ─── Shared: PlayerAvatar ───────────────────────────────────────────────────
function PlayerAvatar({ player, size = 64 }) {
  const [imgFailed, setImgFailed] = useState(false);
  const accent = POS_COLORS[player.position] || "#888";
  const initials = player.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const ui = statusUIConfig(player.status);
  return (
    <div style={{ position: "relative", flexShrink: 0, width: size, height: size }}>
      <div style={{
        width: size, height: size, borderRadius: "50%", overflow: "hidden",
        border: `3px solid ${ui.borderColor}`, background: "#2a2a3a",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {player.image && !imgFailed ? (
          <img
            src={player.image} alt={player.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: `linear-gradient(135deg, ${accent}55, ${FALCONS_RED}88)`,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 1,
          }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: size * 0.3, lineHeight: 1 }}>{initials}</span>
            <span style={{ color: "#ffffffaa", fontWeight: 700, fontSize: size * 0.17 }}>#{player.number}</span>
          </div>
        )}
      </div>
      {ui.icon && (
        <div style={{
          position: "absolute", bottom: -1, right: -1,
          width: size * 0.32, height: size * 0.32, borderRadius: "50%",
          background: ui.iconBg, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: size * 0.2, fontWeight: 900, color: "#fff",
          border: "2px solid #1e1e28", lineHeight: 1,
        }}>
          {ui.icon}
        </div>
      )}
    </div>
  );
}

function PositionTag({ position }) {
  return (
    <span style={{
      background: POS_COLORS[position] || "#888", color: "#fff", fontSize: 10,
      padding: "2px 8px", borderRadius: 10, fontWeight: 700, letterSpacing: 1,
    }}>
      {position}
    </span>
  );
}

function StatusBadge({ status }) {
  if (status === "active") return null;
  const cfg = {
    questionable: { bg: "#ffc10722", border: "#ffc107", color: "#ffe066", label: "QUESTIONABLE" },
    pup:          { bg: "#fd7e1422", border: "#fd7e14", color: "#ffa94d", label: "PUP" },
    nfi:          { bg: "#fd7e1422", border: "#fd7e14", color: "#ffa94d", label: "NFI" },
    ir:           { bg: "#dc354522", border: "#dc3545", color: "#ff6b6b", label: "IR" },
    suspended:    { bg: "#6c757d22", border: "#6c757d", color: "#adb5bd", label: "SUSPENDED" },
    holdout:      { bg: "#8e44ad22", border: "#8e44ad", color: "#c792ea", label: "HOLDOUT" },
  };
  const c = cfg[status] || cfg.ir;
  return (
    <span style={{
      background: c.bg, border: `1px solid ${c.border}`, color: c.color,
      fontSize: 9, padding: "2px 8px", borderRadius: 10, fontWeight: 700, letterSpacing: 1.2,
    }}>
      {c.label}
    </span>
  );
}

// ─── Countdown hook ─────────────────────────────────────────────────────────
function useCountdown(targetISO) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(t);
  }, []);
  const target = new Date(targetISO).getTime();
  const ms = Math.max(0, target - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  return { days, hours, minutes, reached: ms === 0 };
}

// ─── DRAFT HERO — the centerpiece for draft-week phase ──────────────────────
function DraftCountdown() {
  const { days, hours, minutes, reached } = useCountdown(DRAFT_DATA.startTime);
  return (
    <div style={{
      background: `linear-gradient(135deg, ${FALCONS_RED} 0%, #5a0f1b 100%)`,
      borderRadius: 16, padding: "22px 24px", marginBottom: 16,
      boxShadow: "0 8px 32px #0006",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20 }}>
        <div>
          <div style={{ fontSize: 10, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>
            2026 NFL Draft · Round 1
          </div>
          <div style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginTop: 4, letterSpacing: -0.5 }}>
            {reached ? "Draft is LIVE" : "Draft kicks off in"}
          </div>
          <div style={{ fontSize: 13, color: "#ffffffcc", marginTop: 4 }}>
            {DRAFT_DATA.location} · {DRAFT_DATA.tvChannels.join(" · ")}
          </div>
        </div>
        {!reached && (
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { value: days, label: "Days" },
              { value: hours, label: "Hrs" },
              { value: minutes, label: "Min" },
            ].map((u) => (
              <div key={u.label} style={{
                background: "#ffffff18", borderRadius: 12, padding: "10px 14px",
                minWidth: 68, textAlign: "center", backdropFilter: "blur(4px)",
              }}>
                <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                  {String(u.value).padStart(2, "0")}
                </div>
                <div style={{ fontSize: 9, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginTop: 4 }}>
                  {u.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{
        marginTop: 18, padding: "10px 14px", background: "#00000033",
        borderRadius: 10, fontSize: 12, color: "#ffffffcc", lineHeight: 1.5,
      }}>
        {DRAFT_DATA.generalNote}
      </div>
    </div>
  );
}

function DraftPickSlotBoard() {
  const statusColor = {
    scheduled: "#6B7B8E",
    "on-clock": "#C9A227",
    made: "#2ecc71",
    traded: "#9b59b6",
  };
  const statusLabel = {
    scheduled: "SCHEDULED",
    "on-clock": "ON THE CLOCK",
    made: "MADE",
    traded: "TRADED",
  };
  const formatSlotTime = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString("en-US", {
      weekday: "short", month: "short", day: "numeric",
      hour: "numeric", minute: "2-digit", timeZoneName: "short",
    });
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
        Falcons' 5 Picks
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10,
      }}>
        {DRAFT_DATA.falconsPicks.map((pick) => {
          const color = statusColor[pick.status] || "#6B7B8E";
          return (
            <div key={pick.overallPick} style={{
              background: FALCONS_CARD, borderRadius: 14, padding: "14px 16px",
              borderLeft: `4px solid ${color}`,
              display: "flex", flexDirection: "column", gap: 8,
              boxShadow: "0 2px 12px #0005",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "#fff", fontWeight: 900, fontSize: 22, lineHeight: 1 }}>
                    #{pick.overallPick}
                  </div>
                  <div style={{ color: FALCONS_SILVER, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginTop: 3 }}>
                    Round {pick.round}
                  </div>
                </div>
                <span style={{
                  fontSize: 9, padding: "3px 8px", borderRadius: 8,
                  background: `${color}22`, border: `1px solid ${color}`, color,
                  fontWeight: 700, textTransform: "uppercase", letterSpacing: 1,
                }}>
                  {statusLabel[pick.status]}
                </span>
              </div>
              <div style={{ fontSize: 11, color: "#888", fontFamily: "monospace" }}>
                {formatSlotTime(pick.slotEstTime)}
              </div>
              {pick.selection ? (
                <div style={{
                  background: "#00000033", padding: "8px 10px", borderRadius: 8,
                  fontSize: 13, color: "#fff", fontWeight: 700,
                }}>
                  {pick.selection}
                </div>
              ) : (
                <div style={{ fontSize: 11, color: "#666", fontStyle: "italic" }}>
                  On the board
                </div>
              )}
              {pick.tradeNote && (
                <div style={{ fontSize: 10, color: "#9b59b6", fontWeight: 600 }}>
                  ↔ {pick.tradeNote}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProspectCard({ prospect }) {
  const [expanded, setExpanded] = useState(false);
  const posColor = POS_COLORS[prospect.position] || "#888";
  const ft = Math.floor(prospect.heightIn / 12);
  const inRem = Math.round(prospect.heightIn % 12);
  return (
    <div style={{
      background: FALCONS_CARD, borderRadius: 14, padding: "14px 16px",
      borderTop: `3px solid ${posColor}`,
      cursor: "pointer", transition: "all 0.2s",
      boxShadow: "0 2px 12px #0005",
    }} onClick={() => setExpanded((v) => !v)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, lineHeight: 1.2 }}>
            {prospect.name}
          </div>
          <div style={{ fontSize: 11, color: "#999", marginTop: 3 }}>
            {prospect.college} · Age {prospect.age}
          </div>
        </div>
        <PositionTag position={prospect.position} />
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, marginTop: 10,
      }}>
        <div style={{ background: "#252530", borderRadius: 8, padding: "6px 8px", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#fff", fontWeight: 800 }}>{ft}'{inRem}"</div>
          <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Ht</div>
        </div>
        <div style={{ background: "#252530", borderRadius: 8, padding: "6px 8px", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#fff", fontWeight: 800 }}>{prospect.weight}</div>
          <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Wt</div>
        </div>
        <div style={{ background: "#252530", borderRadius: 8, padding: "6px 8px", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#fff", fontWeight: 800 }}>{prospect.fortyTime?.toFixed(2) ?? "—"}</div>
          <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>40</div>
        </div>
      </div>
      <div style={{
        marginTop: 10, padding: "6px 10px", borderRadius: 8,
        background: `${FALCONS_RED}18`, border: `1px solid ${FALCONS_RED}44`,
        fontSize: 11, color: "#ffbbc2", fontWeight: 600,
      }}>
        {prospect.projection}
      </div>
      {expanded && (
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 12, color: "#ccc", lineHeight: 1.5 }}>
            {prospect.fit}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <div>
              <div style={{ fontSize: 9, color: "#2ecc71", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                Strengths
              </div>
              {prospect.strengths.map((s, i) => (
                <div key={i} style={{ fontSize: 11, color: "#ccc", marginBottom: 2 }}>• {s}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 9, color: "#e74c3c", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                Concerns
              </div>
              {prospect.concerns.map((s, i) => (
                <div key={i} style={{ fontSize: 11, color: "#ccc", marginBottom: 2 }}>• {s}</div>
              ))}
            </div>
          </div>
          {prospect.combine && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <div style={{ fontSize: 9, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                  Testing
                </div>
                <span style={{
                  fontSize: 8, padding: "1px 6px", borderRadius: 6, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: 0.5,
                  background: prospect.combine.source === "combine" ? "#1a3a1a" : "#3a2a1a",
                  color: prospect.combine.source === "combine" ? "#7fd47f" : "#e8b97f",
                  border: `1px solid ${prospect.combine.source === "combine" ? "#2ecc7155" : "#e67e2255"}`,
                }}>
                  {prospect.combine.source === "combine" ? "Combine" : "Pro Day"}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
                <div style={{ background: "#252530", borderRadius: 6, padding: "4px 6px", textAlign: "center" }}>
                  <div style={{ fontSize: 12, color: "#fff", fontWeight: 800 }}>
                    {prospect.combine.fortyYd != null ? prospect.combine.fortyYd.toFixed(2) : "—"}
                  </div>
                  <div style={{ fontSize: 7, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>40</div>
                </div>
                <div style={{ background: "#252530", borderRadius: 6, padding: "4px 6px", textAlign: "center" }}>
                  <div style={{ fontSize: 12, color: "#fff", fontWeight: 800 }}>
                    {prospect.combine.verticalIn != null ? `${prospect.combine.verticalIn}"` : "—"}
                  </div>
                  <div style={{ fontSize: 7, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Vert</div>
                </div>
                <div style={{ background: "#252530", borderRadius: 6, padding: "4px 6px", textAlign: "center" }}>
                  <div style={{ fontSize: 12, color: "#fff", fontWeight: 800 }}>
                    {prospect.combine.broadJumpIn != null
                      ? `${Math.floor(prospect.combine.broadJumpIn / 12)}'${prospect.combine.broadJumpIn % 12}"`
                      : "—"}
                  </div>
                  <div style={{ fontSize: 7, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Broad</div>
                </div>
                <div style={{ background: "#252530", borderRadius: 6, padding: "4px 6px", textAlign: "center" }}>
                  <div style={{ fontSize: 12, color: "#fff", fontWeight: 800 }}>
                    {prospect.combine.benchReps != null ? prospect.combine.benchReps : "—"}
                  </div>
                  <div style={{ fontSize: 7, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Bench</div>
                </div>
              </div>
              {prospect.combine.note && (
                <div style={{ fontSize: 10, color: "#888", marginTop: 4, fontStyle: "italic", lineHeight: 1.4 }}>
                  {prospect.combine.note}
                </div>
              )}
            </div>
          )}
          {prospect.mockProjections?.length > 0 && (
            <div>
              <div style={{ fontSize: 9, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                Mock Board
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {prospect.mockProjections.map((m, i) => (
                  <span key={i} style={{
                    fontSize: 10, padding: "3px 8px", borderRadius: 8,
                    background: "#252530", color: "#aaa", fontWeight: 600,
                  }}>
                    {m.source}: #{m.pick}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function DraftProspectGrid() {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
        Top Falcons Targets — click to expand
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10,
      }}>
        {DRAFT_DATA.topTargets.map((p) => (
          <ProspectCard key={p.id} prospect={p} />
        ))}
      </div>
    </div>
  );
}

function DraftCentral() {
  return (
    <>
      <DraftCountdown />
      <DraftPickSlotBoard />
      <DraftProspectGrid />
    </>
  );
}

// ─── Simple Hero stubs for other phases (active heroes live here) ───────────
function PhaseStubHero({ phase, detail }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${phase.accentColor} 0%, #1a1a1f 100%)`,
      borderRadius: 16, padding: "28px 24px", marginBottom: 16,
      boxShadow: "0 8px 32px #0006",
    }}>
      <div style={{ fontSize: 10, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>
        Current Phase
      </div>
      <div style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginTop: 4, letterSpacing: -0.5 }}>
        {phase.name}
      </div>
      <div style={{ fontSize: 13, color: "#ffffffcc", marginTop: 8, lineHeight: 1.5 }}>
        {detail || phase.description}
      </div>
    </div>
  );
}

function NextMilestoneHero({ phase }) {
  const today = new Date().toISOString().slice(0, 10);
  const next = OFFSEASON_CALENDAR.find((m) => m.date.slice(0, 10) >= today);
  // Always call the hook (rules of hooks) — fall back to today if no milestone.
  const { days } = useCountdown(next?.date || new Date().toISOString());
  if (!next) return <PhaseStubHero phase={phase} />;
  return (
    <div style={{
      background: `linear-gradient(135deg, ${phase.accentColor} 0%, #1a1a1f 100%)`,
      borderRadius: 16, padding: "22px 24px", marginBottom: 16,
      boxShadow: "0 8px 32px #0006",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        <div>
          <div style={{ fontSize: 10, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>
            {phase.name} · Next up
          </div>
          <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", marginTop: 4, letterSpacing: -0.5 }}>
            {next.label}
          </div>
          <div style={{ fontSize: 13, color: "#ffffffcc", marginTop: 8, lineHeight: 1.5, maxWidth: 600 }}>
            {next.detail}
          </div>
        </div>
        <div style={{
          background: "#ffffff18", borderRadius: 12, padding: "14px 20px",
          minWidth: 110, textAlign: "center",
        }}>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{days}</div>
          <div style={{ fontSize: 10, color: "#ffffffcc", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginTop: 4 }}>
            {days === 1 ? "Day" : "Days"} to go
          </div>
        </div>
      </div>
    </div>
  );
}

function PhaseHero({ phase }) {
  // Today's active hero. draft-week (Apr 18-25) is the big one — everything else
  // is a graceful degradation until those phases arrive and get richer components.
  switch (phase.hero) {
    case "DraftCentral":
      return <DraftCentral />;
    case "RookieClass":
    case "ScheduleReleaseCountdown":
    case "OTAStorylines":
    case "CampCountdown":
    case "CampBattles":
    case "PreseasonResults":
    case "NextGameBanner":
    case "SeasonWrap":
      return <NextMilestoneHero phase={phase} />;
    default:
      return <PhaseStubHero phase={phase} />;
  }
}

// ─── STAR CARDS ROW ─────────────────────────────────────────────────────────
const STAR_IDS = ["penix-jr", "tua", "bijan", "drake-london", "pitts", "bates", "terrell", "jalon-walker", "dorlus"];

function StarCard({ player, onClick }) {
  const statVals = getStarStatLine(player);
  return (
    <div
      onClick={onClick ? () => onClick(player) : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(player); } } : undefined}
      style={{
        background: FALCONS_CARD, borderRadius: 14, padding: "14px 16px",
        borderTop: `3px solid ${POS_COLORS[player.position] || FALCONS_RED}`,
        minWidth: 220, display: "flex", flexDirection: "column", gap: 10,
        boxShadow: "0 2px 12px #0005",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
      onMouseEnter={onClick ? (e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px #0008"; } : undefined}
      onMouseLeave={onClick ? (e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px #0005"; } : undefined}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <PlayerAvatar player={player} size={52} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <PositionTag position={player.position} />
            <span style={{ fontSize: 10, color: "#666", fontWeight: 700 }}>#{player.number}</span>
          </div>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 14, marginTop: 3, lineHeight: 1.2 }}>
            {player.name}
          </div>
          {player.status !== "active" && (
            <div style={{ marginTop: 4 }}><StatusBadge status={player.status} /></div>
          )}
        </div>
      </div>
      {statVals.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${statVals.length}, 1fr)`, gap: 6 }}>
          {statVals.map((s, i) => (
            <div key={i} style={{ background: "#252530", borderRadius: 8, padding: "6px 4px", textAlign: "center" }}>
              <div style={{ fontSize: 14, color: "#fff", fontWeight: 800 }}>{s.value}</div>
              <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}
      {player.injuryNote && (
        <div style={{ fontSize: 10, color: "#ffa94d", lineHeight: 1.4 }}>
          {player.injuryNote}
        </div>
      )}
    </div>
  );
}

function getStarStatLine(player) {
  const s = player.stats || {};
  switch (player.position) {
    case "QB":
      return [
        { label: "YDS", value: s.passYds ?? 0 },
        { label: "TD", value: s.passTDs ?? 0 },
        { label: "INT", value: s.ints ?? 0 },
      ];
    case "RB":
      return [
        { label: "YDS", value: s.rushYds ?? 0 },
        { label: "TD", value: s.rushTDs ?? 0 },
        { label: "YPC", value: (s.ypc ?? 0).toFixed(1) },
      ];
    case "WR":
      return [
        { label: "REC", value: s.receptions ?? 0 },
        { label: "YDS", value: s.recYds ?? 0 },
        { label: "TD", value: s.recTDs ?? 0 },
      ];
    case "TE":
      return [
        { label: "REC", value: s.receptions ?? 0 },
        { label: "YDS", value: s.recYds ?? 0 },
        { label: "TD", value: s.recTDs ?? 0 },
      ];
    case "EDGE":
    case "DE":
    case "DT":
      return [
        { label: "TKL", value: s.tackles ?? 0 },
        { label: "SACK", value: (s.sacks ?? 0).toFixed(1) },
        { label: "TFL", value: s.tfl ?? 0 },
      ];
    case "LB":
      return [
        { label: "TKL", value: s.tackles ?? 0 },
        { label: "SACK", value: (s.sacks ?? 0).toFixed(1) },
        { label: "INT", value: s.ints ?? 0 },
      ];
    case "CB":
    case "S":
      return [
        { label: "TKL", value: s.tackles ?? 0 },
        { label: "INT", value: s.ints ?? 0 },
        { label: "PD", value: s.passDef ?? 0 },
      ];
    default:
      return [];
  }
}

function StarCardsRow({ players, onPlayerClick }) {
  const stars = STAR_IDS.map((id) => players.find((p) => p.id === id)).filter(Boolean);
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
        Stars to Watch — 2025 stats · tap a card for details
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10,
      }}>
        {stars.map((p) => <StarCard key={p.id} player={p} onClick={onPlayerClick} />)}
      </div>
    </div>
  );
}

// ─── CONTRACT WATCH ─────────────────────────────────────────────────────────
function ContractWatchCard({ players }) {
  const fmt = (n) => "$" + (n / 1_000_000).toFixed(1) + "M";
  const extensions = CAP_STATE.pendingExtensions.map((e) => ({
    ...e,
    player: players.find((p) => p.id === e.playerId),
  })).filter((e) => e.player);
  const topHits = CAP_STATE.topCapHits2026.map((h) => ({
    ...h,
    player: players.find((p) => p.id === h.playerId),
  })).filter((h) => h.player);

  return (
    <div style={{
      background: FALCONS_CARD, borderRadius: 14, padding: 18,
      boxShadow: "0 2px 12px #0005", marginBottom: 20,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>
            Contract Watch · 2026 Cap
          </div>
          <div style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginTop: 4 }}>
            {fmt(CAP_STATE.capSpaceSpotrac)} cap space <span style={{ color: "#666", fontSize: 12, fontWeight: 600 }}>· {CAP_STATE.leagueRank}th NFL</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ background: "#252530", borderRadius: 10, padding: "8px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 15, color: "#ffa94d", fontWeight: 800 }}>{fmt(CAP_STATE.deadMoney.total)}</div>
            <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>Dead Money</div>
          </div>
          <div style={{ background: "#252530", borderRadius: 10, padding: "8px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 15, color: "#2ecc71", fontWeight: 800 }}>{fmt(_.sumBy(CAP_STATE.restructureCandidates, "maxSavings"))}</div>
            <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>Restruc Room</div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <div style={{ fontSize: 10, color: "#C9A227", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
            Pending Extensions
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {extensions.map((e) => (
              <div key={e.playerId} style={{
                background: "#252530", borderRadius: 8, padding: "8px 10px",
                borderLeft: `3px solid ${e.priority === 1 ? "#C9A227" : "#555"}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                  <div style={{ fontSize: 13, color: "#fff", fontWeight: 700 }}>
                    {e.player.name}
                  </div>
                  <span style={{
                    fontSize: 8, padding: "2px 6px", borderRadius: 6, fontWeight: 700, textTransform: "uppercase",
                    background: "#1a1a1f", color: "#999", letterSpacing: 0.5,
                  }}>
                    {e.status}
                  </span>
                </div>
                <div style={{ fontSize: 10, color: "#999", lineHeight: 1.4 }}>{e.rationale}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: "#e74c3c", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
            Top 2026 Cap Hits
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {topHits.map((h) => (
              <div key={h.playerId} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                background: "#252530", borderRadius: 8, padding: "6px 10px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
                  <PositionTag position={h.player.position} />
                  <span style={{ fontSize: 12, color: "#fff", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {h.player.name}
                  </span>
                </div>
                <span style={{ fontSize: 12, color: "#fff", fontWeight: 800, fontFamily: "monospace" }}>
                  {fmt(h.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 14, paddingTop: 12, borderTop: "1px solid #ffffff0a",
      }}>
        <div style={{ fontSize: 10, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
          Recent moves
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {CAP_STATE.recentMoves.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 10, fontSize: 11 }}>
              <span style={{ color: "#666", minWidth: 80, fontFamily: "monospace" }}>{m.date}</span>
              <span style={{ color: "#ccc" }}>{m.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SEASON RECAP 2025 ──────────────────────────────────────────────────────
function SeasonRecap2025Card() {
  const r = SEASON_RECAP_2025;
  return (
    <div style={{
      background: FALCONS_CARD, borderRadius: 14, padding: 18,
      boxShadow: "0 2px 12px #0005", marginBottom: 20,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>
            2025 Season Recap
          </div>
          <div style={{ color: "#fff", fontSize: 22, fontWeight: 900, marginTop: 4 }}>
            {r.record} <span style={{ color: "#999", fontSize: 12, fontWeight: 600 }}>· {r.divisionFinish}</span>
          </div>
          <div style={{ fontSize: 12, color: "#e74c3c", fontWeight: 600, marginTop: 3 }}>
            {r.playoffsResult}
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ background: "#252530", borderRadius: 10, padding: "8px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 16, color: "#fff", fontWeight: 800 }}>{r.pointsFor}</div>
            <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>PF</div>
          </div>
          <div style={{ background: "#252530", borderRadius: 10, padding: "8px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 16, color: "#fff", fontWeight: 800 }}>{r.pointsAgainst}</div>
            <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>PA</div>
          </div>
          <div style={{ background: "#252530", borderRadius: 10, padding: "8px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 16, color: r.netDifferential >= 0 ? "#2ecc71" : "#e74c3c", fontWeight: 800 }}>
              {r.netDifferential >= 0 ? "+" : ""}{r.netDifferential}
            </div>
            <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>Diff</div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <div style={{ fontSize: 10, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
            Storylines
          </div>
          {r.storylines.map((s, i) => (
            <div key={i} style={{ fontSize: 12, color: "#ccc", lineHeight: 1.5, marginBottom: 3 }}>
              • {s}
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 10, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
            Leaders
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#999" }}>Bijan rush yds</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>{r.keyStats.bijanRushYds}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#999" }}>Bijan TDs</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>{r.keyStats.bijanTDs}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#999" }}>London rec yds</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>{r.keyStats.londonRecYds}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#999" }}>Bates tackles</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>{r.keyStats.batesTackles}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#999" }}>Dorlus sacks</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>{r.keyStats.dorlusSacks}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>
        <div style={{ fontSize: 10, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
          Game-by-Game
        </div>
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
          {RESULTS_2025.map((g, i) => {
            const isWin = g.result === "W";
            const accent = isWin ? "#2ecc71" : "#e74c3c";
            return (
              <div
                key={i}
                title={`${g.home ? "vs" : "@"} ${g.opp} · ${g.atlScore}-${g.oppScore} (${g.result})`}
                style={{
                  flex: "0 0 auto",
                  background: "#252530",
                  borderRadius: 10,
                  borderTop: `3px solid ${accent}`,
                  padding: "6px 8px 7px",
                  minWidth: 56,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", letterSpacing: 1, fontWeight: 700 }}>
                  {g.home ? "vs" : "@"} {g.opp}
                </div>
                <div style={{ fontSize: 13, color: "#fff", fontWeight: 800, fontFamily: "monospace", lineHeight: 1.1 }}>
                  {g.atlScore}-{g.oppScore}
                </div>
                <div style={{ fontSize: 9, color: accent, fontWeight: 800, letterSpacing: 0.5 }}>
                  {g.result}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── OFFSEASON CALENDAR MINI ────────────────────────────────────────────────
function OffseasonCalendarMini() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = OFFSEASON_CALENDAR
    .filter((m) => m.date.slice(0, 10) >= today)
    .slice(0, 8);
  const past = OFFSEASON_CALENDAR
    .filter((m) => m.date.slice(0, 10) < today)
    .slice(-2);
  const all = [...past, ...upcoming];
  const phaseColor = (phaseId) => {
    const p = PHASES.find((ph) => ph.id === phaseId);
    return p?.accentColor || "#555";
  };
  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };
  return (
    <div style={{
      background: FALCONS_CARD, borderRadius: 14, padding: 18,
      boxShadow: "0 2px 12px #0005", marginBottom: 20,
    }}>
      <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>
        Offseason Calendar
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {all.map((m) => {
          const isPast = m.date.slice(0, 10) < today;
          return (
            <div key={m.id} style={{
              display: "flex", gap: 10, alignItems: "center",
              padding: "8px 10px", borderRadius: 8,
              background: isPast ? "#1a1a1f" : "#252530",
              opacity: isPast ? 0.55 : 1,
              borderLeft: `3px solid ${phaseColor(m.phase)}`,
            }}>
              <div style={{
                minWidth: 54, fontSize: 11, color: "#999", fontWeight: 700,
                fontFamily: "monospace",
              }}>
                {formatDate(m.date)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, color: "#fff", fontWeight: 600, lineHeight: 1.3 }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 10, color: "#888", marginTop: 2, lineHeight: 1.4 }}>
                  {m.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── NFC SOUTH STANDINGS ────────────────────────────────────────────────────
function NFCSouthStandingsCard() {
  return (
    <div style={{
      background: FALCONS_CARD, borderRadius: 14, padding: 18,
      boxShadow: "0 2px 12px #0005", marginBottom: 20,
    }}>
      <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>
        NFC South — 2025 Final
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {NFC_SOUTH_STANDINGS_2025.map((t) => (
          <div key={t.code} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "8px 10px", borderRadius: 8,
            background: t.isFalcons ? `${FALCONS_RED}22` : "#252530",
            borderLeft: t.isFalcons ? `3px solid ${FALCONS_RED}` : "3px solid transparent",
          }}>
            <div style={{
              width: 22, textAlign: "center", fontWeight: 800, fontSize: 12,
              color: t.divisionFinish === 1 ? "#C9A227" : "#666",
            }}>
              {t.divisionFinish}
            </div>
            {TEAM_LOGOS[t.code] && (
              <img src={TEAM_LOGOS[t.code]} alt={t.code} style={{ width: 22, height: 22, objectFit: "contain" }} />
            )}
            <div style={{ flex: 1, color: "#fff", fontSize: 13, fontWeight: t.isFalcons ? 800 : 600 }}>
              {t.team}
            </div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 13, fontFamily: "monospace", minWidth: 44, textAlign: "right" }}>
              {t.wins}-{t.losses}
            </div>
            <div style={{ color: "#888", fontSize: 11, fontFamily: "monospace", minWidth: 40, textAlign: "right" }}>
              {(t.pct * 100).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NEWS DIGEST SECTION (AI summary) ───────────────────────────────────────
const CATEGORY_COLORS = {
  draft:        { bg: "#A7193022", border: FALCONS_RED, color: "#ff8c99" },
  "free-agency":{ bg: "#3498db22", border: "#3498db", color: "#74b9ff" },
  injuries:     { bg: "#e67e2222", border: "#e67e22", color: "#ffa94d" },
  contracts:    { bg: "#C9A22722", border: "#C9A227", color: "#ffe066" },
  coaching:     { bg: "#9b59b622", border: "#9b59b6", color: "#c792ea" },
  games:        { bg: "#2ecc7122", border: "#2ecc71", color: "#69db7c" },
  general:      { bg: "#6c757d22", border: "#6c757d", color: "#adb5bd" },
};

function NewsDigestSection() {
  const [expanded, setExpanded] = useState(false);
  const topics = NEWS_DIGEST?.topics || [];
  const shown = expanded ? topics : topics.slice(0, 6);
  if (topics.length === 0) return null;
  const updated = new Date(NEWS_DIGEST.generatedAt).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
  return (
    <div style={{
      background: FALCONS_CARD, borderRadius: 14, padding: 18,
      boxShadow: "0 2px 12px #0005", marginBottom: 20,
      border: `1px solid ${FALCONS_RED}22`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>
            AI News Digest
          </div>
          <div style={{ fontSize: 10, color: "#666", marginTop: 3 }}>
            Updated {updated} · {NEWS_DIGEST.sources.join(" · ")}
          </div>
        </div>
        <button onClick={() => setExpanded((v) => !v)} style={{
          padding: "5px 12px", borderRadius: 8, border: "none", cursor: "pointer",
          background: "#252530", color: "#ccc", fontSize: 11, fontWeight: 600,
        }}>
          {expanded ? "Show less" : `Show all ${topics.length}`}
        </button>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10,
      }}>
        {shown.map((t, i) => {
          const c = CATEGORY_COLORS[t.category] || CATEGORY_COLORS.general;
          return (
            <div key={i} style={{
              background: c.bg, borderLeft: `3px solid ${c.border}`,
              borderRadius: 10, padding: "10px 12px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                <div style={{ color: "#fff", fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>
                  {t.title}
                </div>
                <span style={{
                  fontSize: 8, padding: "2px 6px", borderRadius: 6, fontWeight: 700, textTransform: "uppercase",
                  background: c.border, color: "#000", letterSpacing: 0.5, flexShrink: 0,
                }}>
                  {t.category}
                </span>
              </div>
              <div style={{ fontSize: 11, color: "#ccc", marginTop: 6, lineHeight: 1.5 }}>
                {t.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── LIVE RSS NEWS FEED ─────────────────────────────────────────────────────
function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  return `${weeks}w ago`;
}

function parseRSSItems(xmlText, feedMeta) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "text/xml");
  const items = doc.querySelectorAll("item");
  return Array.from(items).map((item) => ({
    title: item.querySelector("title")?.textContent || "",
    link: item.querySelector("link")?.textContent || "",
    pubDate: item.querySelector("pubDate")?.textContent || "",
    source: feedMeta.name,
    color: feedMeta.color,
  }));
}

function LiveNewsFeed({ filter }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const isDev = window.location.hostname === "localhost";
    Promise.allSettled(
      RSS_FEEDS.map((feed) => {
        if (isDev) {
          return fetch("/api/rss?url=" + encodeURIComponent(feed.url))
            .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
            .then((xml) => parseRSSItems(xml, feed));
        }
        return fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feed.url))
          .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
          .then((data) => (data.items || []).map((item) => ({
            title: item.title || "",
            link: item.link || "",
            pubDate: item.pubDate || "",
            source: feed.name,
            color: feed.color,
          })));
      })
    ).then((results) => {
      if (cancelled) return;
      const all = results
        .filter((r) => r.status === "fulfilled")
        .flatMap((r) => r.value)
        .filter((a) => a.title && a.pubDate)
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      if (all.length === 0) {
        setError("Could not load any feeds. CORS proxy may be unavailable.");
      }
      setArticles(all);
      setLoading(false);
    });

    return () => { cancelled = true; };
  }, []);

  const filtered = filter === "all" ? articles : articles.filter((a) => a.source === filter);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: 40, color: "#888" }}>
        Loading live news feeds...
      </div>
    );
  }
  if (error && articles.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 40, color: "#ff6b6b" }}>
        {error}
      </div>
    );
  }
  const isWide = (i, title) => i === 0 || title.length > 70 || i % 5 === 0;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
      {filtered.slice(0, 30).map((item, i) => {
        const wide = isWide(i, item.title);
        return (
          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
            style={{
              gridColumn: wide ? "span 2" : "span 1",
              padding: wide ? "16px 20px" : "14px 16px",
              borderRadius: 12, background: FALCONS_CARD,
              borderTop: `3px solid ${item.color || FALCONS_RED}`,
              transition: "all 0.2s", cursor: "pointer", textDecoration: "none",
              boxShadow: "0 2px 8px #0003",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#252530";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px #0005";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = FALCONS_CARD;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px #0003";
            }}>
            <div style={{ color: "#fff", fontSize: wide ? 15 : 13, fontWeight: 600, lineHeight: 1.4 }}>
              {item.title}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.color || FALCONS_RED, flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: item.color || FALCONS_RED, fontWeight: 600 }}>{item.source}</span>
              <span style={{ fontSize: 10, color: "#555" }}>{timeAgo(item.pubDate)}</span>
            </div>
          </a>
        );
      })}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: 40, color: "#666", gridColumn: "1 / -1" }}>
          No articles found for this filter.
        </div>
      )}
    </div>
  );
}

function RSSSourcesPanel() {
  return (
    <div style={{
      background: FALCONS_CARD, borderRadius: 14, padding: 16, marginBottom: 16,
      border: `1px solid ${FALCONS_RED}22`,
    }}>
      <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>
        Live Feeds
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {RSS_FEEDS.map((f) => (
          <a key={f.name} href={f.url} target="_blank" rel="noopener noreferrer"
            style={{
              padding: "6px 12px", borderRadius: 8, background: "#252530",
              borderLeft: `3px solid ${f.color}`,
              fontSize: 11, color: "#ddd", fontWeight: 600,
              textDecoration: "none",
            }}>
            {f.name}
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── PLAYER DETAIL MODAL ────────────────────────────────────────────────────
function formatHeight(inches) {
  if (!inches) return "—";
  return `${Math.floor(inches / 12)}'${inches % 12}"`;
}

function formatDollars(n) {
  if (n == null) return "—";
  if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return "$" + (n / 1_000).toFixed(0) + "K";
  return "$" + n.toLocaleString();
}

function formatAcquired(a) {
  if (!a) return "—";
  // draft-2022-R1-P8 → "2022 Draft · R1 P8"
  const draftMatch = a.match(/^draft-(\d{4})-R(\d+)(?:-P(\d+))?/);
  if (draftMatch) {
    const [, year, round, pick] = draftMatch;
    return `${year} Draft · Round ${round}${pick ? " · Pick " + pick : ""}`;
  }
  // fa-2026-2yr → "FA · 2026 · 2yr"
  const faMatch = a.match(/^fa-(\d{4})(?:-(\d+)yr)?/);
  if (faMatch) {
    const [, year, yrs] = faMatch;
    return `Free Agent · ${year}${yrs ? " · " + yrs + "yr" : ""}`;
  }
  if (a.startsWith("trade-")) {
    return "Trade · " + a.replace("trade-", "");
  }
  if (a.startsWith("udfa-")) return "UDFA · " + a.replace("udfa-", "");
  return a;
}

function formColor(form) {
  if (form >= 8.5) return "#28a745";
  if (form >= 7.5) return "#5cb85c";
  if (form >= 7.0) return "#ffc107";
  if (form >= 6.5) return "#fd7e14";
  if (form > 0) return "#dc3545";
  return "#6c757d";
}

// All stat keys for a player's position — powers the "Form basis" section
function formBasisStats(player) {
  const s = player.stats || {};
  const entries = Object.entries(s).filter(([, v]) => v != null);
  // Human-readable labels
  const LABELS = {
    passYds: "Passing yards", passTDs: "Passing TDs", ints: "Interceptions",
    qbRating: "QB rating", completions: "Completions", attempts: "Attempts",
    rushYds: "Rushing yards", rushTDs: "Rushing TDs", rushAttempts: "Carries", ypc: "Yards/carry",
    receptions: "Receptions", recYds: "Receiving yards", recTDs: "Receiving TDs", targets: "Targets",
    tackles: "Tackles", sacks: "Sacks", tfl: "TFL", ff: "Forced fumbles",
    int_def: "INTs (def)", pass_def: "Passes defended", passDef: "Passes defended", ints_def: "INTs (def)",
    fgMade: "FG made", fgAttempted: "FG att", longFG: "Long FG",
    puntAvg: "Punt avg", netPuntAvg: "Net punt avg",
  };
  return entries.map(([k, v]) => ({
    label: LABELS[k] || k,
    value: typeof v === "number" && !Number.isInteger(v) ? v.toFixed(1) : v.toLocaleString?.() ?? String(v),
  }));
}

// ─── DRAFT CLASS ────────────────────────────────────────────────────────────
function DraftPickBadge({ round, overallPick, size = "md" }) {
  const isLg = size === "lg";
  return (
    <span style={{
      display: "inline-flex", alignItems: "baseline", gap: 4,
      background: `linear-gradient(135deg, ${FALCONS_RED} 0%, #5a0f1b 100%)`,
      color: "#fff", padding: isLg ? "4px 10px" : "3px 8px",
      borderRadius: 8, fontWeight: 800,
      boxShadow: "0 2px 6px #0006",
      fontFamily: "monospace",
      lineHeight: 1,
    }}>
      <span style={{ fontSize: isLg ? 10 : 9, opacity: 0.88, letterSpacing: 0.5 }}>
        R{round}
      </span>
      <span style={{ fontSize: isLg ? 14 : 12, letterSpacing: -0.3 }}>
        #{overallPick}
      </span>
    </span>
  );
}

function DraftClassView({ players, onPlayerClick }) {
  const cards = useMemo(() => {
    const made = DRAFT_DATA.falconsPicks.filter((p) => p.status === "made" && p.selection);
    return made.map((pick) => {
      const acquiredStr = `draft-${DRAFT_DATA.draftYear}-R${pick.round}-P${pick.overallPick}`;
      const player = players.find((p) => p.acquired === acquiredStr);
      return { pick, player };
    });
  }, [players]);

  const offenseCount = cards.filter((c) => c.player?.positionGroup === "offense").length;
  const defenseCount = cards.filter((c) => c.player?.positionGroup === "defense").length;

  return (
    <>
      {/* Class header */}
      <div style={{
        background: `linear-gradient(135deg, ${FALCONS_RED}33 0%, ${FALCONS_PANEL} 70%)`,
        borderRadius: 16, padding: "20px 22px", marginBottom: 16,
        border: `1px solid ${FALCONS_RED}44`,
      }}>
        <div style={{ fontSize: 10, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>
          {DRAFT_DATA.draftYear} Draft Class · {DRAFT_DATA.location}
        </div>
        <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", marginTop: 4, letterSpacing: -0.5 }}>
          Meet the new Falcons
        </div>
        <div style={{ fontSize: 12, color: "#ffffffcc", marginTop: 8, lineHeight: 1.55, maxWidth: 920 }}>
          {DRAFT_DATA.generalNote}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          {[
            { label: "Picks made", value: cards.length },
            { label: "Offense", value: offenseCount },
            { label: "Defense", value: defenseCount },
          ].map((s) => (
            <div key={s.label} style={{ background: "#00000044", borderRadius: 10, padding: "7px 14px" }}>
              <div style={{ fontSize: 9, color: "#ffffff99", textTransform: "uppercase", letterSpacing: 1.2, fontWeight: 700 }}>{s.label}</div>
              <div style={{ fontSize: 16, color: "#fff", fontWeight: 800, marginTop: 2 }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Helper line */}
      <div style={{ fontSize: 11, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
        Click any rookie to open the full profile
      </div>

      {/* Rookie cards */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 14, marginBottom: 24,
      }}>
        {cards.map(({ pick, player }) => {
          if (!player) {
            return (
              <div key={pick.overallPick} style={{
                background: FALCONS_CARD, borderRadius: 14, padding: "14px 16px",
                border: "1px dashed #444", color: "#888", fontSize: 12,
              }}>
                <DraftPickBadge round={pick.round} overallPick={pick.overallPick} size="lg" />
                <div style={{ marginTop: 8 }}>{pick.selection}</div>
                <div style={{ fontStyle: "italic", marginTop: 4, fontSize: 11 }}>
                  Profile not yet wired into the roster.
                </div>
              </div>
            );
          }
          const accentP = POS_COLORS[player.position] || FALCONS_RED;
          return (
            <button
              key={pick.overallPick}
              onClick={() => onPlayerClick(player)}
              style={{
                background: FALCONS_CARD, borderRadius: 14, padding: 0,
                border: "none", cursor: "pointer", textAlign: "left",
                boxShadow: "0 4px 18px #0007",
                overflow: "hidden", color: "#fff",
                display: "flex", flexDirection: "column",
                transition: "transform 0.15s, box-shadow 0.15s",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px #000a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 4px 18px #0007";
              }}
            >
              {/* Header row: avatar + badges + name */}
              <div style={{
                background: `linear-gradient(135deg, ${accentP}33 0%, transparent 70%)`,
                padding: "14px 14px 12px", display: "flex", alignItems: "center", gap: 12,
                borderBottom: `2px solid ${accentP}55`,
              }}>
                <PlayerAvatar player={player} size={68} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 5, flexWrap: "wrap" }}>
                    <DraftPickBadge round={pick.round} overallPick={pick.overallPick} size="lg" />
                    <PositionTag position={player.position} />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.3 }}>
                    {player.name}
                  </div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 3 }}>
                    {player.college} · {formatHeight(player.height)} · {player.weight ? player.weight + " lbs" : "—"}
                  </div>
                </div>
              </div>

              {/* Scout note */}
              <div style={{ padding: "12px 14px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 12, color: "#ddd", lineHeight: 1.55 }}>
                  {pick.selectionNote}
                </div>
                {pick.tradeNote && (
                  <div style={{ fontSize: 10, color: "#9b59b6", fontWeight: 600, fontStyle: "italic" }}>
                    ↔ {pick.tradeNote}
                  </div>
                )}
                <div style={{
                  marginTop: "auto", paddingTop: 6,
                  fontSize: 10, color: accentP, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: 1.2,
                }}>
                  Open full profile →
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

function PlayerDetailModal({ player, onClose }) {
  useEffect(() => {
    if (!player) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    // Lock scroll on body while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [player, onClose]);

  if (!player) return null;

  const accent = POS_COLORS[player.position] || FALCONS_RED;
  const fc = formColor(player.form);
  const basis = formBasisStats(player);
  const c = player.contract;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "#000000cc",
        zIndex: 1000, display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "40px 16px", overflowY: "auto", backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: FALCONS_CARD, borderRadius: 16, maxWidth: 640, width: "100%",
          boxShadow: "0 20px 60px #000c", border: `1px solid ${accent}55`,
          overflow: "hidden", color: "#fff",
        }}
      >
        {/* Header strip */}
        <div style={{
          background: `linear-gradient(135deg, ${accent}33 0%, #0000 60%), ${FALCONS_PANEL}`,
          padding: "20px 22px 18px", display: "flex", alignItems: "center", gap: 16,
          borderBottom: `2px solid ${accent}66`, position: "relative",
        }}>
          <PlayerAvatar player={player} size={86} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <PositionTag position={player.position} />
              <span style={{ color: FALCONS_SILVER, fontSize: 13, fontWeight: 700 }}>#{player.number ?? "—"}</span>
              <StatusBadge status={player.status} />
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4, letterSpacing: -0.3 }}>
              {player.name}
            </div>
            <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
              {player.college ?? "—"} · {player.experience != null ? `${player.experience} yr${player.experience === 1 ? "" : "s"} NFL` : ""}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute", top: 12, right: 12,
              background: "#00000055", border: "1px solid #ffffff22",
              color: "#fff", width: 30, height: 30, borderRadius: 8,
              cursor: "pointer", fontSize: 16, fontWeight: 700, lineHeight: 1,
            }}
          >×</button>
        </div>

        {/* Body */}
        <div style={{ padding: "18px 22px 22px", display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Bio strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))", gap: 8 }}>
            {[
              { label: "Height", value: formatHeight(player.height) },
              { label: "Weight", value: player.weight ? `${player.weight} lbs` : "—" },
              { label: "Age", value: player.age ?? "—" },
              { label: "Exp", value: player.experience != null ? player.experience + " yrs" : "—" },
            ].map((b) => (
              <div key={b.label} style={{ background: "#252530", borderRadius: 8, padding: "8px 10px", textAlign: "center" }}>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>{b.value}</div>
                <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginTop: 3 }}>{b.label}</div>
              </div>
            ))}
          </div>

          {/* Acquired */}
          <div style={{ background: "#252530", borderRadius: 8, padding: "10px 12px" }}>
            <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>Acquired</div>
            <div style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginTop: 2 }}>{formatAcquired(player.acquired)}</div>
          </div>

          {/* Injury note */}
          {player.injuryNote && (
            <div style={{
              background: "#fd7e1418", borderRadius: 8, padding: "10px 12px",
              borderLeft: "3px solid #fd7e14",
            }}>
              <div style={{ color: "#ffa94d", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, fontWeight: 700 }}>
                {player.status === "active" ? "Note" : "Injury / Status"}
              </div>
              <div style={{ color: "#fff", fontSize: 12, marginTop: 3, lineHeight: 1.5 }}>{player.injuryNote}</div>
            </div>
          )}

          {/* Form basis */}
          {player.form > 0 && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "50%", background: fc,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 800, fontSize: 14, flexShrink: 0,
                  boxShadow: `0 0 10px ${fc}66`,
                }}>
                  {player.form.toFixed(1)}
                </div>
                <div>
                  <div style={{ fontSize: 10, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>
                    Form rating
                  </div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
                    Based on 2025 stats + injury status
                  </div>
                </div>
              </div>
              {basis.length > 0 ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 6 }}>
                  {basis.map((s) => (
                    <div key={s.label} style={{
                      background: "#252530", borderRadius: 8, padding: "7px 10px",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}>
                      <span style={{ color: "#888", fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>{s.label}</span>
                      <span style={{ color: "#fff", fontSize: 12, fontWeight: 800, fontFamily: "monospace" }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ color: "#666", fontSize: 11, fontStyle: "italic" }}>No 2025 stat line on record.</div>
              )}
            </div>
          )}

          {/* Contract */}
          {c && (
            <div>
              <div style={{ fontSize: 10, color: "#C9A227", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>
                Contract
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 6 }}>
                {[
                  { label: "Years", value: c.years ?? "—" },
                  { label: "Total", value: formatDollars(c.total) },
                  { label: "Gtd", value: formatDollars(c.guaranteed) },
                  { label: "APY", value: formatDollars(c.apy) },
                  { label: "2026 cap", value: formatDollars(c.cap2026) },
                  { label: "Through", value: c.throughYear ?? "—" },
                ].map((b) => (
                  <div key={b.label} style={{ background: "#252530", borderRadius: 8, padding: "7px 10px", textAlign: "center" }}>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: 12, fontFamily: "monospace" }}>{b.value}</div>
                    <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>{b.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Career */}
          {player.career && player.career.length > 0 && (
            <div>
              <div style={{ fontSize: 10, color: FALCONS_SILVER, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>
                Career
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {player.career.map((entry, i) => (
                  <div key={i} style={{
                    background: "#252530", borderRadius: 8, padding: "7px 10px",
                    display: "flex", gap: 10, alignItems: "baseline",
                  }}>
                    <span style={{ color: "#888", fontSize: 11, fontFamily: "monospace", minWidth: 78 }}>{entry.years}</span>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>{entry.team}</span>
                    {entry.type && (
                      <span style={{ color: "#666", fontSize: 10, marginLeft: "auto", textAlign: "right" }}>
                        {entry.type}
                      </span>
                    )}
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

// ─── MAIN APP ───────────────────────────────────────────────────────────────
export default function FalconsTracker() {
  const [view, setView] = useState("dashboard"); // dashboard | depth-chart | draft-class | news
  const [newsFilter, setNewsFilter] = useState("all");
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const today = new Date();
  const currentPhase = getCurrentPhase(today);

  const rosterCounts = useMemo(() => ({
    total: PLAYERS.length,
    active: PLAYERS.filter((p) => p.status === "active").length,
    unavailable: PLAYERS.filter((p) => ["ir", "pup", "nfi", "suspended"].includes(p.status)).length,
    offense: PLAYERS.filter((p) => p.positionGroup === "offense").length,
    defense: PLAYERS.filter((p) => p.positionGroup === "defense").length,
    special: PLAYERS.filter((p) => p.positionGroup === "special").length,
  }), []);

  return (
    <div style={{ minHeight: "100vh", background: FALCONS_DARK, color: "#fff", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${FALCONS_RED} 0%, #5a0f1b 100%)`,
        padding: "24px 24px 20px", boxShadow: "0 4px 24px #0008",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 12px #0003", overflow: "hidden",
            }}>
              <img src={TEAM_LOGOS.ATL} alt="ATL" style={{ width: 36, height: 36, objectFit: "contain" }} />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>Atlanta Falcons Tracker</h1>
              <p style={{ margin: 0, fontSize: 12, opacity: 0.85 }}>2026 Offseason · Stefanski Era · Year-Round Dashboard</p>
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#00000033", borderRadius: 10, padding: "6px 12px",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%", background: currentPhase.accentColor,
                boxShadow: `0 0 8px ${currentPhase.accentColor}`,
              }} />
              <div>
                <div style={{ fontSize: 9, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2 }}>
                  Phase
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>
                  {currentPhase.name}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 4, background: "#ffffff15", borderRadius: 10, padding: 3, width: "fit-content" }}>
            {[
              { key: "dashboard", label: "Dashboard" },
              { key: "depth-chart", label: "Depth Chart" },
              { key: "draft-class", label: "Draft Class" },
              { key: "news", label: "News Feed" },
            ].map((v) => (
              <button key={v.key} onClick={() => setView(v.key)}
                style={{
                  padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer",
                  fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1,
                  background: view === v.key ? "#fff" : "transparent",
                  color: view === v.key ? FALCONS_RED : "#fffc",
                  transition: "all 0.2s",
                }}>
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "20px 16px 40px" }}>
        {view === "dashboard" && (
          <>
            {/* PHASE-AWARE HERO */}
            <PhaseHero phase={currentPhase} />

            {/* Quick roster + calendar tiles */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
              gap: 10, marginBottom: 20,
            }}>
              {[
                { label: "Roster", value: rosterCounts.total, color: "#fff" },
                { label: "Active", value: rosterCounts.active, color: "#2ecc71" },
                { label: "PUP/IR", value: rosterCounts.unavailable, color: "#fd7e14" },
                { label: "Draft Picks", value: DRAFT_DATA.falconsPicks.length, color: FALCONS_RED },
                { label: "Cap $", value: "$" + (CAP_STATE.capSpaceSpotrac / 1_000_000).toFixed(0) + "M", color: "#C9A227" },
                { label: "Dead $", value: "$" + (CAP_STATE.deadMoney.total / 1_000_000).toFixed(1) + "M", color: "#ff6b6b" },
                { label: "2025 W-L", value: SEASON_RECAP_2025.record, color: "#888" },
              ].map((s) => (
                <div key={s.label} style={{ background: FALCONS_CARD, borderRadius: 12, padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 18 }}>{s.value}</div>
                  <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Composites — order shifts per phase, but draft-week we lead with stars + contracts + calendar */}
            <StarCardsRow players={PLAYERS} onPlayerClick={setSelectedPlayer} />

            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 16 }}>
              <div>
                <ContractWatchCard players={PLAYERS} />
                <NFCSouthStandingsCard />
              </div>
              <div>
                <OffseasonCalendarMini />
                <SeasonRecap2025Card />
              </div>
            </div>

            <NewsDigestSection />
          </>
        )}

        {view === "depth-chart" && (
          <DepthChartView players={PLAYERS} currentPhase={currentPhase} onPlayerClick={setSelectedPlayer} />
        )}

        {view === "draft-class" && (
          <DraftClassView players={PLAYERS} onPlayerClick={setSelectedPlayer} />
        )}

        {view === "news" && (
          <>
            <RSSSourcesPanel />
            <NewsDigestSection />
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Filter:</span>
              {[
                { key: "all", label: "All News", color: FALCONS_RED },
                ...RSS_FEEDS.map((f) => ({ key: f.name, label: f.name, color: f.color })),
              ].map((f) => (
                <button key={f.key} onClick={() => setNewsFilter(f.key)}
                  style={{
                    padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: 11,
                    background: newsFilter === f.key ? f.color : FALCONS_CARD,
                    color: newsFilter === f.key ? "#fff" : "#999",
                    transition: "all 0.2s",
                  }}>
                  {f.label}
                </button>
              ))}
            </div>
            <LiveNewsFeed filter={newsFilter} />
          </>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 32, textAlign: "center", padding: "16px 0",
          borderTop: "1px solid #ffffff08", color: "#444", fontSize: 11,
        }}>
          Atlanta Falcons Tracker — 2026 offseason · Data via NFL.com, Spotrac, Over The Cap & team reporting
          <br />
          <span style={{ color: "#333" }}>Rise Up</span>
        </div>
      </div>

      <PlayerDetailModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </div>
  );
}
