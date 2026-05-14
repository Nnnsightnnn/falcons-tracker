// ─── SCHEDULE VIEW ──────────────────────────────────────────────────────────
// 2026 schedule surface. Pre-reveal: countdown + locked games (PIT Wk1, CIN
// Madrid Wk9) + 17-opponent home/away split. Post-reveal: populates into a
// week-by-week grid as SCHEDULE_2026 fills out.

import { useState, useEffect } from "react";
import {
  SCHEDULE_2026,
  SCHEDULE_2026_STATUS,
  SCHEDULE_2026_REVEAL_AT,
  SCHEDULE_2026_OPPONENTS,
  TEAM_LOGOS,
} from "./playerData.js";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}

function formatCountdown(ms) {
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
    done: false,
  };
}

function pad2(n) { return String(n).padStart(2, "0"); }

// ─── HEADER ─────────────────────────────────────────────────────────────────
function ScheduleHeader() {
  const isMobile = useIsMobile();
  const now = useNow(1000);
  const revealMs = new Date(SCHEDULE_2026_REVEAL_AT).getTime();
  const cd = formatCountdown(revealMs - now);
  const isPreReveal = SCHEDULE_2026_STATUS === "pre-reveal";

  return (
    <div className="panel" style={{ marginBottom: 16 }}>
      <div className="panel-title">
        <span className="bug" />
        <span className="name">2026 SCHEDULE · CHAPTER 02</span>
        <span className="meta">
          {isPreReveal ? "PRE-REVEAL" : "REVEALED"}
        </span>
      </div>
      <div className="diag-cut" style={{
        padding: isMobile ? "18px 14px 22px" : "26px 22px 30px",
        background: "linear-gradient(180deg, #ffffff04, transparent 60%)",
      }}>
        <div style={{
          display: "flex", flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 16 : 24,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="mono" style={{
              fontSize: 10, letterSpacing: "0.22em", color: "var(--hot)",
              fontWeight: 700, marginBottom: 8,
            }}>
              FULL CALENDAR REVEAL · THU MAY 14 · 8 PM ET
            </div>
            <div className="display" style={{
              fontSize: isMobile ? 24 : 34, lineHeight: 1.05, color: "var(--ivory)",
              letterSpacing: "-0.005em",
            }}>
              17 OPPONENTS LOCKED.<br />
              <span style={{ color: "var(--hot)" }}>BYE WEEK + PRIMETIME</span> UNLOCK TONIGHT.
            </div>
            <div className="mono" style={{
              fontSize: 11, color: "var(--silver)", letterSpacing: "0.04em",
              marginTop: 10, lineHeight: 1.5,
            }}>
              NFL Network · ESPN2 · NFL+ at 8:00 PM ET. Week 1 (AT Steelers, Sun Sep 13)
              and Madrid Week 9 (vs Bengals, Sun Nov 8) are the only public locks.
            </div>
          </div>

          {/* Countdown */}
          {!cd.done && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: isMobile ? 6 : 10,
              minWidth: isMobile ? "100%" : 320,
            }}>
              {[
                { v: cd.d, l: "DAYS" },
                { v: cd.h, l: "HRS" },
                { v: cd.m, l: "MIN" },
                { v: cd.s, l: "SEC" },
              ].map((u) => (
                <div key={u.l} style={{
                  background: "#0B0C0F",
                  border: "1px solid #ffffff10",
                  borderTop: "2px solid var(--hot)",
                  padding: isMobile ? "10px 6px" : "14px 8px",
                  textAlign: "center",
                  boxShadow: "var(--hot-glow)",
                }}>
                  <div className="stencil num" style={{
                    fontSize: isMobile ? 26 : 36, color: "var(--ivory)",
                    lineHeight: 1, letterSpacing: "0.02em",
                  }}>{pad2(u.v)}</div>
                  <div className="mono" style={{
                    fontSize: 9, color: "var(--silver)",
                    letterSpacing: "0.18em", marginTop: 6, fontWeight: 700,
                  }}>{u.l}</div>
                </div>
              ))}
            </div>
          )}
          {cd.done && (
            <div className="stencil" style={{
              fontSize: isMobile ? 18 : 24, color: "var(--hot)",
              letterSpacing: "0.04em",
            }}>
              <span className="blink">●</span> SCHEDULE LIVE
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── LOCKED GAME CARD ───────────────────────────────────────────────────────
function LockedGameCard({ game }) {
  const isMobile = useIsMobile();
  const logo = TEAM_LOGOS[game.opponent];
  const sideLabel = game.side === "home" ? "VS" : "AT";
  const statusColor = game.status === "confirmed" ? "var(--green)" : "var(--gold)";
  const statusLabel = game.status === "confirmed" ? "CONFIRMED" : "LEAKED";

  return (
    <div style={{
      background: "var(--carbon)",
      border: "1px solid #ffffff10",
      borderLeft: `3px solid ${statusColor}`,
      padding: isMobile ? "14px 14px 16px" : "18px 20px 20px",
      display: "flex", flexDirection: "column", gap: 12,
      position: "relative",
      minWidth: 0,
    }}>
      {/* Week pill + status */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <span className="stencil" style={{
          background: "#0B0C0F", border: "1px solid #ffffff15",
          padding: "4px 10px", fontSize: 11, color: "var(--ivory)",
          letterSpacing: "0.12em",
        }}>WEEK {game.week}</span>
        <span className="mono" style={{
          fontSize: 9, color: statusColor, letterSpacing: "0.2em", fontWeight: 700,
        }}>● {statusLabel}</span>
      </div>

      {/* Matchup row */}
      <div style={{
        display: "flex", alignItems: "center", gap: isMobile ? 12 : 16,
        minWidth: 0,
      }}>
        {logo && (
          <img src={logo} alt={game.opponent} style={{
            width: isMobile ? 52 : 64, height: isMobile ? 52 : 64,
            objectFit: "contain", flexShrink: 0,
          }} />
        )}
        <div style={{ minWidth: 0, flex: 1 }}>
          <div className="mono" style={{
            fontSize: 10, color: "var(--hot)", letterSpacing: "0.2em",
            fontWeight: 700, marginBottom: 4,
          }}>
            ATL {sideLabel} {game.opponent}
          </div>
          <div className="display" style={{
            fontSize: isMobile ? 20 : 24, color: "var(--ivory)",
            lineHeight: 1.05, letterSpacing: "-0.005em",
          }}>
            {game.opponentName}
          </div>
        </div>
      </div>

      {/* Meta row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, minmax(0, 1fr))",
        gap: 10, paddingTop: 10,
        borderTop: "1px solid #ffffff0d",
      }}>
        <div>
          <div className="mono" style={{
            fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.18em",
            fontWeight: 700, marginBottom: 3,
          }}>DATE</div>
          <div className="stencil" style={{
            fontSize: 13, color: "var(--ivory)", letterSpacing: "0.03em",
          }}>
            {new Date(game.date + "T12:00:00").toLocaleDateString("en-US", {
              weekday: "short", month: "short", day: "numeric",
            }).toUpperCase()}
          </div>
        </div>
        <div>
          <div className="mono" style={{
            fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.18em",
            fontWeight: 700, marginBottom: 3,
          }}>KICKOFF</div>
          <div className="stencil" style={{
            fontSize: 13, color: "var(--ivory)", letterSpacing: "0.03em",
          }}>{game.kickoffET}</div>
        </div>
        <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
          <div className="mono" style={{
            fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.18em",
            fontWeight: 700, marginBottom: 3,
          }}>TV</div>
          <div className="stencil" style={{
            fontSize: 13, color: "var(--ivory)", letterSpacing: "0.03em",
          }}>{game.tv}</div>
        </div>
      </div>

      {/* Venue + note */}
      {game.venue && (
        <div className="mono" style={{
          fontSize: 10, color: "var(--silver)", letterSpacing: "0.04em",
        }}>{game.venue}</div>
      )}
      {game.note && (
        <div className="mono" style={{
          fontSize: 10, color: "var(--steel-2)", letterSpacing: "0.04em",
          lineHeight: 1.5, fontStyle: "italic",
        }}>{game.note}</div>
      )}
    </div>
  );
}

// ─── OPPONENT LOGO TILE ─────────────────────────────────────────────────────
function OpponentTile({ opp, sideLabel, accent }) {
  const logo = TEAM_LOGOS[opp.code];
  return (
    <div style={{
      background: "#0B0C0F",
      border: "1px solid #ffffff10",
      borderTop: `2px solid ${accent}`,
      padding: "12px 10px",
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: 8, minHeight: 110,
    }}>
      {logo ? (
        <img src={logo} alt={opp.code} style={{
          width: 44, height: 44, objectFit: "contain",
        }} />
      ) : (
        <div style={{
          width: 44, height: 44, background: "var(--carbon)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span className="stencil" style={{
            fontSize: 14, color: "var(--silver)",
          }}>{opp.code}</span>
        </div>
      )}
      <div className="stencil" style={{
        fontSize: 12, color: "var(--ivory)", letterSpacing: "0.04em",
        textAlign: "center", lineHeight: 1.1,
      }}>{opp.code}</div>
      <div className="mono" style={{
        fontSize: 8, color: accent, letterSpacing: "0.2em",
        fontWeight: 700, textAlign: "center",
      }}>{sideLabel}</div>
      {opp.note && (
        <div className="mono" style={{
          fontSize: 8, color: "var(--steel-2)", letterSpacing: "0.06em",
          textAlign: "center", lineHeight: 1.2,
        }}>{opp.note}</div>
      )}
    </div>
  );
}

// ─── OPPONENT SPLIT ─────────────────────────────────────────────────────────
function OpponentSplit() {
  const isMobile = useIsMobile();
  const { divisional, homeOnly, awayOnly } = SCHEDULE_2026_OPPONENTS;

  const homeTiles = [
    ...divisional.map((o) => ({ ...o, sideLabel: "HOME · NFC S", accent: "var(--hot)" })),
    ...homeOnly.map((o) => ({ ...o, sideLabel: "HOME", accent: "var(--green)" })),
  ];
  const awayTiles = [
    ...divisional.map((o) => ({ ...o, sideLabel: "AWAY · NFC S", accent: "var(--hot)" })),
    ...awayOnly.map((o) => ({ ...o, sideLabel: "AWAY", accent: "var(--gold)" })),
  ];

  return (
    <div className="panel" style={{ marginBottom: 16 }}>
      <div className="panel-title">
        <span className="bug" />
        <span className="name">OPPONENT BOARD · 17 LOCKED</span>
        <span className="meta">9 HOME · 8 AWAY</span>
      </div>
      <div style={{
        padding: isMobile ? "14px 12px" : "18px 18px",
        display: "flex", flexDirection: "column", gap: 18,
      }}>
        {/* HOME */}
        <div>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 10,
          }}>
            <span className="stencil" style={{
              fontSize: 14, color: "var(--ivory)", letterSpacing: "0.06em",
            }}>HOME · 9</span>
            <div style={{ flex: 1, height: 1, background: "#ffffff10" }} />
            <span className="mono" style={{
              fontSize: 9, color: "var(--silver)", letterSpacing: "0.18em",
            }}>MERCEDES-BENZ STADIUM</span>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(3, minmax(0, 1fr))"
              : "repeat(9, minmax(0, 1fr))",
            gap: 8,
          }}>
            {homeTiles.map((o) => (
              <OpponentTile
                key={`home-${o.code}`}
                opp={o}
                sideLabel={o.sideLabel}
                accent={o.accent}
              />
            ))}
          </div>
        </div>

        {/* AWAY */}
        <div>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 10,
          }}>
            <span className="stencil" style={{
              fontSize: 14, color: "var(--ivory)", letterSpacing: "0.06em",
            }}>AWAY · 8</span>
            <div style={{ flex: 1, height: 1, background: "#ffffff10" }} />
            <span className="mono" style={{
              fontSize: 9, color: "var(--silver)", letterSpacing: "0.18em",
            }}>ROAD SLATE</span>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(3, minmax(0, 1fr))"
              : "repeat(8, minmax(0, 1fr))",
            gap: 8,
          }}>
            {awayTiles.map((o) => (
              <OpponentTile
                key={`away-${o.code}`}
                opp={o}
                sideLabel={o.sideLabel}
                accent={o.accent}
              />
            ))}
          </div>
        </div>

        {/* Legend */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 14,
          paddingTop: 8, borderTop: "1px solid #ffffff0d",
        }}>
          {[
            { color: "var(--hot)",   label: "NFC South · home + away" },
            { color: "var(--green)", label: "Home-only matchup" },
            { color: "var(--gold)",  label: "Away-only matchup" },
          ].map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{
                width: 16, height: 2, background: l.color, display: "inline-block",
              }} />
              <span className="mono" style={{
                fontSize: 9, color: "var(--silver)", letterSpacing: "0.06em",
              }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── WEEK-BY-WEEK GRID (post-reveal placeholder) ─────────────────────────────
function WeeklyGrid() {
  // 18 rows = 17 games + 1 bye. Pre-reveal, only the locked games are filled.
  const slots = Array.from({ length: 18 }, (_, i) => i + 1);
  const byWeek = new Map(SCHEDULE_2026.map((g) => [g.week, g]));

  return (
    <div className="panel">
      <div className="panel-title">
        <span className="bug" />
        <span className="name">WEEK-BY-WEEK · 18 SLOTS</span>
        <span className="meta">{SCHEDULE_2026.length} / 18 FILLED</span>
      </div>
      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 6 }}>
        {slots.map((week) => {
          const game = byWeek.get(week);
          if (game) return <WeekRow key={week} week={week} game={game} />;
          return <WeekRow key={week} week={week} game={null} />;
        })}
      </div>
    </div>
  );
}

function WeekRow({ week, game }) {
  const isMobile = useIsMobile();
  if (!game) {
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "44px 1fr" : "60px 80px 1fr 100px 140px",
        gap: 10, alignItems: "center",
        padding: "10px 12px",
        background: "#0B0C0F",
        border: "1px solid #ffffff08",
        borderLeft: "3px solid var(--steel-2)",
      }}>
        <span className="stencil" style={{
          fontSize: 13, color: "var(--silver)", letterSpacing: "0.04em",
        }}>WK {week}</span>
        <span className="mono" style={{
          fontSize: 10, color: "var(--steel-2)", letterSpacing: "0.18em",
          fontWeight: 700,
        }}>· · · · · TBD · · · · ·</span>
      </div>
    );
  }

  const logo = TEAM_LOGOS[game.opponent];
  const sideLabel = game.side === "home" ? "VS" : "AT";
  const statusColor = game.status === "confirmed" ? "var(--green)" : "var(--gold)";

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "44px 1fr 36px" : "60px 80px 1fr 110px 140px",
      gap: 10, alignItems: "center",
      padding: "10px 12px",
      background: "#0B0C0F",
      border: "1px solid #ffffff10",
      borderLeft: `3px solid ${statusColor}`,
    }}>
      <span className="stencil" style={{
        fontSize: 13, color: "var(--ivory)", letterSpacing: "0.04em",
      }}>WK {week}</span>

      {!isMobile && (
        <span className="mono" style={{
          fontSize: 10, color: "var(--hot)", letterSpacing: "0.18em",
          fontWeight: 700,
        }}>{sideLabel} {game.opponent}</span>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
        {logo && (
          <img src={logo} alt={game.opponent} style={{
            width: 28, height: 28, objectFit: "contain", flexShrink: 0,
          }} />
        )}
        <div style={{ minWidth: 0 }}>
          <div className="stencil" style={{
            fontSize: 13, color: "var(--ivory)", letterSpacing: "0.03em",
            lineHeight: 1.1,
          }}>{game.opponentName}</div>
          {isMobile ? (
            <div className="mono" style={{
              fontSize: 9, color: "var(--silver)", letterSpacing: "0.06em",
              marginTop: 2,
            }}>{sideLabel} · {new Date(game.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}</div>
          ) : (
            <div className="mono" style={{
              fontSize: 9, color: "var(--silver)", letterSpacing: "0.06em",
              marginTop: 2,
            }}>{game.venue || ""}</div>
          )}
        </div>
      </div>

      {!isMobile && (
        <span className="mono" style={{
          fontSize: 11, color: "var(--ivory)", letterSpacing: "0.04em",
        }}>
          {new Date(game.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
        </span>
      )}

      {!isMobile && (
        <span className="mono" style={{
          fontSize: 10, color: "var(--silver)", letterSpacing: "0.06em",
          textAlign: "right",
        }}>{game.kickoffET} · {game.tv}</span>
      )}

      {isMobile && (
        <span className="mono" style={{
          fontSize: 9, color: statusColor, letterSpacing: "0.18em",
          fontWeight: 700, textAlign: "right",
        }}>{game.status === "confirmed" ? "✓" : "L"}</span>
      )}
    </div>
  );
}

// ─── MAIN VIEW ──────────────────────────────────────────────────────────────
export default function ScheduleView() {
  const isMobile = useIsMobile();
  const lockedGames = SCHEDULE_2026.filter((g) => g.status === "confirmed" || g.status === "leaked")
    .sort((a, b) => a.week - b.week);

  return (
    <div>
      <ScheduleHeader />

      {/* Locked games */}
      <div className="panel" style={{ marginBottom: 16 }}>
        <div className="panel-title">
          <span className="bug" />
          <span className="name">LOCKED GAMES · {lockedGames.length}</span>
          <span className="meta">PRE-REVEAL FIRM DATA</span>
        </div>
        <div style={{
          padding: isMobile ? "14px 12px" : "18px 18px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 14,
        }}>
          {lockedGames.map((g) => (
            <LockedGameCard key={`${g.week}-${g.opponent}`} game={g} />
          ))}
        </div>
      </div>

      <OpponentSplit />

      <WeeklyGrid />

      <div className="mono" style={{
        fontSize: 10, color: "var(--steel-2)", letterSpacing: "0.04em",
        marginTop: 14, lineHeight: 1.6, fontStyle: "italic",
      }}>
        Schedule will populate week-by-week once the full reveal lands tonight at 8 PM ET.
        Live updates pushed by the nightly tracker job.
      </div>
    </div>
  );
}
