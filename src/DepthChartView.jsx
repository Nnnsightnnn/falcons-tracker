import { useEffect, useMemo, useState } from "react";

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

// ─── Atlanta Falcons Depth Chart ────────────────────────────────────────────
// Broadcast lineup: starting-22 chyron. Angular position pills, stencil jersey
// numbers, ranked depth slot stacks. No rounded corners.

const POS_COLORS = {
  QB: "#C9A227", RB: "#2ECC71", WR: "#3498DB", TE: "#9B59B6",
  OT: "#95A5A6", OG: "#7F8C8D", C: "#BDC3C7",
  DE: "#E74C3C", EDGE: "#E67E22", DT: "#C0392B",
  LB: "#D35400", CB: "#1ABC9C", S: "#16A085",
  K: "#F39C12", P: "#D68910", LS: "#B9770E",
};

const GROUPS = [
  { id: "offense", label: "OFFENSE", positions: ["QB", "RB", "FB", "WR", "TE", "OT", "OG", "C"] },
  { id: "defense", label: "DEFENSE", positions: ["DE", "EDGE", "DT", "LB", "CB", "S"] },
  { id: "special", label: "SPECIAL TEAMS", positions: ["K", "P", "LS"] },
];

function PlayerPhoto({ player, size = 48 }) {
  const [failed, setFailed] = useState(false);
  const initials = player.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: size, height: size, flexShrink: 0,
      background: "linear-gradient(135deg, #1A0508 0%, #0B0C0F 70%)",
      border: "1px solid #ffffff15",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", position: "relative",
    }}>
      {player.image && !failed ? (
        <img src={player.image} alt={player.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="stencil" style={{ fontSize: size * 0.35, color: "var(--hot)", letterSpacing: "0.04em" }}>
          {initials}
        </span>
      )}
    </div>
  );
}

const ROOKIE_COLOR = "#00E5FF";

function rookieRound(player) {
  if (!player.acquired?.startsWith("draft-2026")) return null;
  const m = player.acquired.match(/-R(\d+)-P(\d+)/);
  if (!m) return null;
  return { round: Number(m[1]), pick: Number(m[2]) };
}

function statusTag(player) {
  if (player.status === "pup") return { label: "PUP", color: "#E67E22" };
  if (player.status === "ir") return { label: "IR", color: "#E74C3C" };
  if (player.status === "nfi") return { label: "NFI", color: "#E67E22" };
  if (player.status === "suspended") return { label: "SUS", color: "#8B0000" };
  if (player.status === "questionable") return { label: "Q", color: "#FFC107" };
  if (player.status === "holdout") return { label: "$", color: "#8E44AD" };
  const rook = rookieRound(player);
  if (rook) return { label: `R'26 · R${rook.round}`, color: ROOKIE_COLOR };
  if (player.id === "drake-london") return { label: "PRIMARY", color: "#FF2D3D" };
  if (player.id === "bijan") return { label: "WORKHORSE", color: "#FF2D3D" };
  if (player.id === "bates") return { label: "ANCHOR", color: "#FF2D3D" };
  if (player.id === "jalon-walker") return { label: "RISING", color: "#3498DB" };
  if (player.id === "pitts") return { label: "TAG '26", color: "#C9A227" };
  if (player.contract?.cap2026 >= 15_000_000) return { label: `$${(player.contract.cap2026 / 1_000_000).toFixed(1)}M`, color: "#C9A227" };
  return null;
}

function DepthSlot({ position, players, rookies, slotNum, onPlayerClick }) {
  const [s1, s2, s3] = players;
  if (!s1) return null;
  return (
    <div style={{
      background: "var(--carbon)",
      position: "relative",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{
        display: "flex", alignItems: "stretch",
        background: "#0B0C0F",
        borderBottom: "1px solid #ffffff10",
      }}>
        <div style={{
          background: "var(--red)", padding: "5px 9px",
          position: "relative",
        }}>
          <span className="mono" style={{ fontSize: 9, color: "#fff", letterSpacing: "0.18em" }}>
            {String(slotNum).padStart(2, "0")}
          </span>
          <div style={{
            position: "absolute", right: -8, top: 0, bottom: 0, width: 10,
            background: "var(--red)",
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          }} />
        </div>
        <div style={{ flex: 1, padding: "5px 12px 5px 18px", display: "flex", alignItems: "center" }}>
          <span className="stencil" style={{
            fontSize: 13, color: "var(--ivory)", letterSpacing: "0.18em",
          }}>{position}</span>
        </div>
      </div>

      <div onClick={() => onPlayerClick && onPlayerClick(s1)}
        style={{
          padding: "12px 14px", borderBottom: s2 ? "1px solid #ffffff08" : "none",
          position: "relative", minHeight: 76,
          cursor: onPlayerClick ? "pointer" : "default",
        }}>
        {(() => {
          const tag = statusTag(s1);
          if (!tag) return null;
          return (
            <div style={{
              position: "absolute", top: 0, right: 0,
              background: tag.color, padding: "2px 7px",
            }}>
              <span className="mono" style={{ fontSize: 8, color: "#fff", letterSpacing: "0.2em", fontWeight: 700 }}>
                {tag.label}
              </span>
            </div>
          );
        })()}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <PlayerPhoto player={s1} size={48} />
          <span className="stencil" style={{
            fontSize: 36, lineHeight: 1, color: "var(--ivory)",
            textShadow: ["drake-london", "bijan", "bates"].includes(s1.id) ? "0 0 14px #FF2D3D55" : "none",
          }}>{s1.number ?? "—"}</span>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div className="stencil" style={{
              fontSize: 13, color: "var(--ivory)", letterSpacing: "0.04em", lineHeight: 1.1,
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>{s1.name.toUpperCase()}</div>
            <div className="mono" style={{ fontSize: 8, color: "var(--silver)", letterSpacing: "0.22em", marginTop: 4 }}>
              STARTER
            </div>
          </div>
        </div>
      </div>

      {s2 && (
        <div onClick={() => onPlayerClick && onPlayerClick(s2)}
          style={{
            padding: "8px 14px", display: "flex", alignItems: "center", gap: 10,
            borderBottom: s3 ? "1px solid #ffffff08" : "none",
            cursor: onPlayerClick ? "pointer" : "default",
          }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--silver)", letterSpacing: "0.12em", minWidth: 24 }}>
            #{s2.number ?? "—"}
          </span>
          <span className="mono" style={{ fontSize: 11, color: "var(--ivory)", letterSpacing: "0.06em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0, flex: 1 }}>
            {s2.name.toUpperCase()}
          </span>
          <span className="mono" style={{ fontSize: 8, color: "var(--steel-2)", letterSpacing: "0.22em" }}>2ND</span>
        </div>
      )}
      {s3 && (
        <div onClick={() => onPlayerClick && onPlayerClick(s3)}
          style={{
            padding: "8px 14px", display: "flex", alignItems: "center", gap: 10,
            cursor: onPlayerClick ? "pointer" : "default",
          }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--steel-2)", letterSpacing: "0.12em", minWidth: 24 }}>
            #{s3.number ?? "—"}
          </span>
          <span className="mono" style={{ fontSize: 11, color: "var(--silver)", letterSpacing: "0.06em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0, flex: 1 }}>
            {s3.name.toUpperCase()}
          </span>
          <span className="mono" style={{ fontSize: 8, color: "var(--steel-2)", letterSpacing: "0.22em" }}>3RD</span>
        </div>
      )}
      {rookies && rookies.length > 0 && rookies.map((r) => {
        const meta = rookieRound(r);
        return (
          <div key={r.id} onClick={() => onPlayerClick && onPlayerClick(r)}
            style={{
              padding: "8px 14px", display: "flex", alignItems: "center", gap: 10,
              borderTop: `1px solid ${ROOKIE_COLOR}25`,
              background: `linear-gradient(90deg, ${ROOKIE_COLOR}10 0%, transparent 60%)`,
              cursor: onPlayerClick ? "pointer" : "default",
            }}>
            <span className="mono" style={{ fontSize: 11, color: ROOKIE_COLOR, letterSpacing: "0.12em", minWidth: 24 }}>
              #{r.number ?? "—"}
            </span>
            <span className="mono" style={{ fontSize: 11, color: "var(--ivory)", letterSpacing: "0.06em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0, flex: 1 }}>
              {r.name.toUpperCase()}
            </span>
            <span className="mono" style={{
              fontSize: 8, color: "#000", background: ROOKIE_COLOR,
              padding: "2px 6px", letterSpacing: "0.2em", fontWeight: 700,
            }}>
              {meta ? `R'26·R${meta.round}` : "ROOKIE"}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Legend({ swatch, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ width: 10, height: 10, background: swatch }} />
      <span className="mono" style={{ fontSize: 9, color: "var(--ivory)", letterSpacing: "0.16em" }}>{children}</span>
    </div>
  );
}

export default function DepthChartView({ players, currentPhase, onPlayerClick }) {
  const [side, setSide] = useState("offense");
  const isMobile = useIsMobile();

  const byGroup = useMemo(() => {
    const map = { offense: [], defense: [], special: [] };
    players.forEach((p) => {
      if (map[p.positionGroup]) map[p.positionGroup].push(p);
    });
    return map;
  }, [players]);

  const groupPlayers = byGroup[side] || [];
  const positionsForGroup = GROUPS.find((g) => g.id === side)?.positions || [];

  const slots = useMemo(() => {
    return positionsForGroup
      .map((pos) => {
        const inPos = groupPlayers
          .filter((p) => p.position === pos)
          .sort((a, b) => a.depthRank - b.depthRank);
        const top = inPos.slice(0, 3);
        const topIds = new Set(top.map((p) => p.id));
        const rookies = inPos.filter((p) => rookieRound(p) && !topIds.has(p.id));
        return { position: pos, players: top, rookies };
      })
      .filter((s) => s.players.length > 0 || (s.rookies && s.rookies.length > 0));
  }, [groupPlayers, positionsForGroup]);

  return (
    <div>
      <div className="panel" style={{ display: "flex", padding: 0, alignItems: "stretch", flexWrap: "wrap" }}>
        <div style={{
          padding: isMobile ? "12px 14px" : "16px 22px",
          borderRight: "1px solid #ffffff10",
          flex: isMobile ? "1 1 100%" : "0 0 auto",
        }}>
          <div className="mono" style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--silver)" }}>
            ▎ STARTING UNIT
          </div>
          <div className="stencil" style={{ fontSize: isMobile ? 22 : 28, color: "var(--ivory)", marginTop: 4, lineHeight: 1 }}>
            DEPTH CHART
          </div>
          <div className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "var(--steel-2)", marginTop: 6 }}>
            PHASE · {currentPhase?.name?.toUpperCase() ?? "—"}
          </div>
        </div>
        {GROUPS.map((g) => {
          const active = side === g.id;
          return (
            <button key={g.id} onClick={() => setSide(g.id)} style={{
              flex: 1, border: "none", borderRight: "1px solid #ffffff10",
              background: active ? "#160407" : "transparent",
              cursor: "pointer",
              fontFamily: "var(--display)", fontWeight: 700,
              fontSize: isMobile ? 12 : 16,
              letterSpacing: isMobile ? "0.16em" : "0.22em",
              color: active ? "var(--ivory)" : "var(--silver)",
              padding: isMobile ? "12px 8px" : "16px 18px",
              position: "relative",
            }}>
              {active && (
                <div className="hot-bar bar-grow" style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                }} />
              )}
              {g.label}
            </button>
          );
        })}
      </div>

      <div style={{
        marginTop: 16,
        display: "grid",
        gridTemplateColumns: isMobile
          ? "minmax(0, 1fr)"
          : "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 1,
        background: "#ffffff08",
        border: "1px solid #ffffff10",
      }}>
        {slots.map((s, idx) => (
          <DepthSlot
            key={s.position + idx}
            position={s.position}
            players={s.players}
            rookies={s.rookies}
            slotNum={idx + 1}
            onPlayerClick={onPlayerClick}
          />
        ))}
      </div>

      <div style={{ display: "flex", gap: 16, marginTop: 16, alignItems: "center", flexWrap: "wrap" }}>
        <span className="mono" style={{ fontSize: 9, color: "var(--silver)", letterSpacing: "0.18em" }}>LEGEND ·</span>
        <Legend swatch="#FF2D3D">STAR · APY $15M+</Legend>
        <Legend swatch="#C9A227">TAG / EXTENSION</Legend>
        <Legend swatch="#3498DB">RISING</Legend>
        <Legend swatch={ROOKIE_COLOR}>ROOKIE '26</Legend>
        <Legend swatch="#E67E22">PUP / IR</Legend>
        <Legend swatch="#3A3E46">DEAD MONEY</Legend>
        <span className="mono" style={{ fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.16em", marginLeft: "auto" }}>
          {POS_COLORS.QB ? `${groupPlayers.length} PLAYERS · ${slots.length} SLOTS` : ""}
        </span>
      </div>
    </div>
  );
}
