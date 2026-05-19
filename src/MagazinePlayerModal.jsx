import { useEffect } from "react";

const fmtHeight = (inches) => {
  if (!inches) return "—";
  return `${Math.floor(inches / 12)}'${inches % 12}"`;
};
const fmtM = (n) => (n == null ? "—" : `$${(n / 1_000_000).toFixed(2)}M`);

export default function MagazinePlayerModal({ player, onClose }) {
  useEffect(() => {
    if (!player) return;
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [player, onClose]);

  if (!player) return null;
  const cap = player.contract?.cap2026;
  const collegeUp = (player.college || "").toUpperCase();

  return (
    <div
      onClick={onClose}
      className="mag-modal-backdrop"
      style={{
        position: "fixed", inset: 0,
        background: "rgba(20, 14, 6, 0.78)",
        backdropFilter: "blur(2px)",
        zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mag-root"
        style={{
          maxWidth: 760, width: "100%",
          maxHeight: "88vh", overflowY: "auto",
          padding: 0, background: "transparent",
        }}
      >
        <div className="paper" style={{
          padding: 0,
          boxShadow: "0 1px 0 rgba(0,0,0,0.4), 0 30px 80px -10px rgba(0,0,0,0.75), 0 0 0 1px #0a0805",
        }}>
          {/* HEADER STRIP */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            padding: "12px 20px",
            borderBottom: "4px double var(--rule)",
            background: "var(--paper-deep)",
          }}>
            <div style={{
              fontFamily: "var(--m-cond)", fontSize: 11, letterSpacing: "0.32em",
              color: "var(--oxblood)", textTransform: "uppercase", fontWeight: 600,
            }}>
              — Player Dossier · A Falcons Tracker —
            </div>
            <button
              onClick={onClose}
              style={{
                border: "1px solid var(--rule)", background: "var(--paper)",
                fontFamily: "var(--m-cond)", fontSize: 10, letterSpacing: "0.24em",
                color: "var(--ink)", padding: "5px 12px", cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Close ✕
            </button>
          </div>

          {/* NAME + PORTRAIT BLOCK */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: 24,
            padding: "24px 28px",
            borderBottom: "1px solid var(--rule)",
            alignItems: "stretch",
          }}>
            <div style={{
              position: "relative", overflow: "hidden",
              background: "linear-gradient(180deg, #3a261a 0%, #0c0703 100%)",
              border: "1px solid var(--rule)",
              minHeight: 220,
            }}>
              {player.image && (
                <img
                  src={player.image}
                  alt={player.name}
                  style={{
                    position: "absolute", bottom: 0, left: "50%",
                    transform: "translateX(-50%)",
                    height: "100%", width: "auto",
                    filter: "sepia(0.4) saturate(0.6) contrast(1.05)",
                    mixBlendMode: "lighten",
                  }}
                />
              )}
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(rgba(20,12,5,0.5) 1px, transparent 1.2px)",
                backgroundSize: "3.2px 3.2px",
                mixBlendMode: "multiply", opacity: 0.5,
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(165deg, rgba(139,29,29,0.30), rgba(31,42,62,0.50))",
                mixBlendMode: "multiply", pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: -10, left: -4,
                fontFamily: "var(--m-display)", fontStyle: "italic",
                fontSize: 130, lineHeight: 0.7,
                color: "rgba(239,231,210,0.12)",
                pointerEvents: "none",
              }}>
                {player.number ?? ""}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{
                fontFamily: "var(--m-cond)", fontSize: 11, letterSpacing: "0.30em",
                color: "var(--oxblood)", textTransform: "uppercase", fontWeight: 600,
              }}>
                #{player.number} · {player.position} · {collegeUp}
              </div>
              <h2 style={{
                fontFamily: "var(--m-display)", fontSize: 48, lineHeight: 0.95,
                margin: "8px 0 0", color: "var(--ink)", letterSpacing: "-0.018em",
                fontWeight: 400,
              }}>
                {player.name}
              </h2>
              <div style={{
                marginTop: 12,
                fontFamily: "var(--m-cond)", fontSize: 11, letterSpacing: "0.22em",
                color: "var(--ink-2)", textTransform: "uppercase",
              }}>
                AGE {player.age} <Dot/> {fmtHeight(player.height)} <Dot/> {player.weight} LBS <Dot/> YR {player.experience}
              </div>
              {player.injuryNote && (
                <div style={{
                  marginTop: 12,
                  fontFamily: "var(--m-serif)", fontStyle: "italic", fontSize: 14,
                  color: "var(--ink-2)",
                  borderLeft: "3px solid var(--oxblood)",
                  padding: "4px 0 4px 12px",
                }}>
                  {player.injuryNote}
                </div>
              )}
            </div>
          </div>

          {/* CONTRACT GRID */}
          {cap && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderBottom: "4px double var(--rule)",
              background: "var(--paper-soft)",
            }}>
              {[
                { l: "2026 Cap", v: fmtM(cap) },
                { l: "Deal", v: `${player.contract.years}Y / ${fmtM(player.contract.total)}` },
                { l: "Guaranteed", v: fmtM(player.contract.guaranteed) },
                { l: "Through", v: String(player.contract.throughYear) },
              ].map((s, i) => (
                <div key={s.l} style={{
                  padding: "14px 16px",
                  borderRight: i < 3 ? "1px solid var(--rule-soft)" : "none",
                  textAlign: "center",
                }}>
                  <div style={{
                    fontFamily: "var(--m-cond)", fontSize: 9, letterSpacing: "0.28em",
                    color: "var(--ink-mute)", textTransform: "uppercase",
                  }}>
                    {s.l}
                  </div>
                  <div style={{
                    fontFamily: "var(--m-display)", fontSize: 22, lineHeight: 1,
                    color: "var(--ink)", marginTop: 6,
                    fontVariantNumeric: "tabular-nums",
                  }}>
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CAREER */}
          {player.career && player.career.length > 0 && (
            <div style={{ padding: "20px 28px 24px" }}>
              <div style={{
                fontFamily: "var(--m-display)", fontSize: 22, lineHeight: 1,
                color: "var(--ink)", marginBottom: 10,
                borderBottom: "1px solid var(--rule)", paddingBottom: 6,
              }}>
                Career
              </div>
              {player.career.map((row, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "120px 1fr 1fr",
                  gap: 14, padding: "8px 0",
                  borderBottom: "1px dotted var(--rule-soft)",
                  alignItems: "baseline",
                }}>
                  <span style={{
                    fontFamily: "var(--m-mono)", fontSize: 11,
                    color: "var(--oxblood)", letterSpacing: "0.10em", fontWeight: 600,
                  }}>{row.years}</span>
                  <span style={{
                    fontFamily: "var(--m-display)", fontSize: 16, lineHeight: 1.1,
                    color: "var(--ink)",
                  }}>{row.team}</span>
                  <span style={{
                    fontFamily: "var(--m-serif)", fontStyle: "italic", fontSize: 12,
                    color: "var(--ink-mute)",
                  }}>{row.type}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function Dot() {
  return (
    <span style={{ color: "var(--oxblood)", margin: "0 8px" }}>●</span>
  );
}
