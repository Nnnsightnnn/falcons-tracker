import { useMemo, useState } from "react";

// ─── Atlanta Falcons Depth Chart ────────────────────────────────────────────
// Replaces Hawks RotationView. NFL depth-chart layout:
//   Offense / Defense / Special Teams
//     → by position (QB, RB, WR, ...)
//        → ordered by depthRank (1 = starter, 2 = backup, ...)

const FALCONS_RED = "#A71930";
const FALCONS_SILVER = "#A5ACAF";

// Position colors by group
const POS_COLORS = {
  // Offense
  QB: "#C9A227",
  RB: "#2ecc71",
  WR: "#3498db",
  TE: "#9b59b6",
  OT: "#95a5a6",
  OG: "#7f8c8d",
  C: "#bdc3c7",
  // Defense
  DE: "#e74c3c",
  EDGE: "#e67e22",
  DT: "#c0392b",
  LB: "#d35400",
  CB: "#1abc9c",
  S: "#16a085",
  // Special
  K: "#f39c12",
  P: "#d68910",
  LS: "#b9770e",
};

// Canonical position ordering per group
const GROUPS = [
  {
    id: "offense",
    label: "Offense",
    color: FALCONS_RED,
    positions: ["QB", "RB", "FB", "WR", "TE", "OT", "OG", "C"],
  },
  {
    id: "defense",
    label: "Defense",
    color: "#000000",
    positions: ["DE", "EDGE", "DT", "LB", "CB", "S"],
  },
  {
    id: "special",
    label: "Special Teams",
    color: FALCONS_SILVER,
    positions: ["K", "P", "LS"],
  },
];

function formColor(form) {
  if (form >= 8.5) return "#28a745";
  if (form >= 7.5) return "#5cb85c";
  if (form >= 7.0) return "#ffc107";
  if (form >= 6.5) return "#fd7e14";
  if (form > 0) return "#dc3545";
  return "#6c757d";
}

function statusBadge(status) {
  if (status === "active") return null;
  const map = {
    ir: { label: "IR", color: "#dc3545" },
    pup: { label: "PUP", color: "#fd7e14" },
    nfi: { label: "NFI", color: "#fd7e14" },
    suspended: { label: "SUS", color: "#8b0000" },
    questionable: { label: "Q", color: "#ffc107" },
    holdout: { label: "HOLDOUT", color: "#e67e22" },
  };
  return map[status] || { label: status.toUpperCase(), color: "#6c757d" };
}

function positionStatLine(p) {
  const s = p.stats || {};
  switch (p.position) {
    case "QB":
      if (s.passYds) return `${s.passYds.toLocaleString()} yds · ${s.passTDs ?? 0} TD · ${s.qbRating ?? "—"} QBR`;
      return "No 2025 snaps";
    case "RB":
      if (s.rushYds) return `${s.rushYds.toLocaleString()} rush yds · ${s.rushTDs ?? 0} TD · ${s.recYds ?? 0} rec yds`;
      return s.rushAttempts ? `${s.rushAttempts} carries` : "";
    case "WR":
      if (s.recYds) return `${s.receptions ?? 0} rec · ${s.recYds.toLocaleString()} yds · ${s.recTDs ?? 0} TD`;
      return "";
    case "TE":
      if (s.recYds) return `${s.receptions ?? 0} rec · ${s.recYds} yds · ${s.recTDs ?? 0} TD`;
      return "";
    case "OT":
    case "OG":
    case "C":
      return `${p.height ? Math.floor(p.height / 12) + "'" + (p.height % 12) : "—"} · ${p.weight ?? "—"} lbs`;
    case "DE":
    case "EDGE":
    case "DT":
      if (s.sacks !== undefined) return `${s.tackles ?? 0} tkl · ${s.sacks} sacks · ${s.tfl ?? 0} TFL`;
      return "";
    case "LB":
      if (s.tackles !== undefined) return `${s.tackles} tkl · ${s.sacks ?? 0} sacks · ${s.tfl ?? 0} TFL`;
      return "";
    case "CB":
      if (s.pass_def !== undefined) return `${s.tackles ?? 0} tkl · ${s.int_def ?? 0} INT · ${s.pass_def} PD`;
      return "";
    case "S":
      if (s.int_def !== undefined) return `${s.tackles ?? 0} tkl · ${s.int_def} INT · ${s.pass_def ?? 0} PD`;
      return "";
    case "K":
      if (s.fgMade !== undefined) return `${s.fgMade}/${s.fgAttempted} FG · long ${s.longFG ?? "—"}`;
      return "";
    case "P":
      if (s.puntAvg !== undefined) return `${s.puntAvg} avg · ${s.netPuntAvg ?? "—"} net`;
      return "";
    default:
      return "";
  }
}

function PlayerRow({ player, depthRank, onClick }) {
  const [imgFailed, setImgFailed] = useState(false);
  const [hover, setHover] = useState(false);
  const accent = POS_COLORS[player.position] || "#888";
  const initials = player.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const fc = formColor(player.form);
  const isStarter = depthRank === 1;
  const sb = statusBadge(player.status);

  return (
    <div
      onClick={onClick ? () => onClick(player) : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(player); } } : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        background: hover && onClick ? "#2f2f3c" : (isStarter ? "#252530" : "#1e1e28"),
        borderRadius: 8, padding: "8px 10px",
        borderLeft: `3px solid ${isStarter ? FALCONS_RED : accent}`,
        cursor: onClick ? "pointer" : "default",
        transition: "background 0.15s",
      }}>
      {/* Depth # badge */}
      <div style={{
        width: 20, height: 20, borderRadius: 4, flexShrink: 0,
        background: isStarter ? FALCONS_RED : "#2a2a35",
        color: "#fff", fontSize: 10, fontWeight: 800,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {depthRank}
      </div>
      {/* Avatar */}
      <div style={{ position: "relative", width: 36, height: 36, flexShrink: 0 }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%", overflow: "hidden",
          border: `2px solid ${player.status === "active" ? accent : "#dc3545"}`,
          background: "#2a2a3a",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {player.image && !imgFailed ? (
            <img
              src={player.image}
              alt={player.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div style={{
              width: "100%", height: "100%",
              background: `linear-gradient(135deg, ${accent}55, ${FALCONS_RED}88)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 800, fontSize: 12,
            }}>
              {initials}
            </div>
          )}
        </div>
      </div>
      {/* Name + pos + stat */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "nowrap" }}>
          <span style={{ color: FALCONS_RED, fontWeight: 800, fontSize: 10 }}>#{player.number ?? "—"}</span>
          <span style={{
            color: "#fff", fontWeight: 700, fontSize: 12,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {player.name}
          </span>
        </div>
        <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>
          {positionStatLine(player)}
        </div>
      </div>
      {/* Right side: form or status badge */}
      {sb ? (
        <div style={{
          fontSize: 9, color: "#fff", fontWeight: 700,
          background: sb.color + "dd", padding: "3px 7px", borderRadius: 6,
          lineHeight: 1.2, flexShrink: 0, letterSpacing: 0.5,
        }}>
          {sb.label}
        </div>
      ) : player.form > 0 ? (
        <div style={{
          width: 28, height: 28, borderRadius: "50%", background: fc,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 700, fontSize: 10, flexShrink: 0,
          boxShadow: `0 0 6px ${fc}55`,
        }}>
          {player.form.toFixed(1)}
        </div>
      ) : null}
    </div>
  );
}

function PositionBlock({ position, players, onPlayerClick }) {
  const color = POS_COLORS[position] || "#888";
  if (players.length === 0) return null;

  const sorted = [...players].sort((a, b) => a.depthRank - b.depthRank);
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
      }}>
        <span style={{
          background: color, color: "#fff",
          fontSize: 10, padding: "2px 9px", borderRadius: 9,
          fontWeight: 800, letterSpacing: 1,
        }}>
          {position}
        </span>
        <span style={{ fontSize: 10, color: "#666", fontWeight: 600 }}>
          {players.length} {players.length === 1 ? "player" : "players"}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {sorted.map((p) => (
          <PlayerRow key={p.id} player={p} depthRank={p.depthRank} onClick={onPlayerClick} />
        ))}
      </div>
    </div>
  );
}

function GroupColumn({ group, players, onPlayerClick }) {
  const byPos = useMemo(() => {
    const map = {};
    group.positions.forEach((pos) => { map[pos] = []; });
    players.forEach((p) => {
      if (!map[p.position]) map[p.position] = [];
      map[p.position].push(p);
    });
    return map;
  }, [group, players]);

  return (
    <div style={{
      background: "#1e1e28", borderRadius: 14, padding: 16,
      minHeight: 200,
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10, marginBottom: 14,
        borderBottom: `2px solid ${group.color}`, paddingBottom: 10,
      }}>
        <span style={{
          width: 6, height: 18, background: group.color, borderRadius: 3, flexShrink: 0,
        }} />
        <span style={{
          fontSize: 13, color: "#fff", fontWeight: 800,
          textTransform: "uppercase", letterSpacing: 1.5,
        }}>
          {group.label}
        </span>
        <span style={{ fontSize: 11, color: "#888", marginLeft: "auto", fontWeight: 600 }}>
          {players.length} players
        </span>
      </div>
      {group.positions.map((pos) => (
        <PositionBlock key={pos} position={pos} players={byPos[pos] || []} onPlayerClick={onPlayerClick} />
      ))}
    </div>
  );
}

export default function DepthChartView({ players, currentPhase, onPlayerClick }) {
  const byGroup = useMemo(() => {
    const map = { offense: [], defense: [], special: [] };
    players.forEach((p) => {
      if (map[p.positionGroup]) {
        map[p.positionGroup].push(p);
      }
    });
    return map;
  }, [players]);

  const starters = players.filter((p) => p.depthRank === 1);
  const onIR = players.filter((p) => p.status === "ir" || p.status === "pup" || p.status === "nfi");

  return (
    <div>
      {/* Header */}
      <div style={{
        background: "#1e1e28", borderRadius: 14, padding: 18, marginBottom: 16,
        display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
      }}>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontSize: 11, color: FALCONS_RED, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 1.5,
          }}>
            Projected Depth Chart
          </div>
          <div style={{ fontSize: 13, color: "#ccc", marginTop: 4 }}>
            Post-FA roster · will update after the draft · Phase: <span style={{ color: "#fff", fontWeight: 700 }}>{currentPhase?.name ?? "—"}</span>
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 10, flexWrap: "wrap" }}>
          <div style={{ textAlign: "center", background: "#252530", borderRadius: 8, padding: "8px 14px" }}>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>{players.length}</div>
            <div style={{ color: "#888", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>Roster</div>
          </div>
          <div style={{ textAlign: "center", background: "#252530", borderRadius: 8, padding: "8px 14px" }}>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>{starters.length}</div>
            <div style={{ color: "#888", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>Starters</div>
          </div>
          <div style={{ textAlign: "center", background: "#252530", borderRadius: 8, padding: "8px 14px" }}>
            <div style={{ color: FALCONS_SILVER, fontWeight: 800, fontSize: 18 }}>{onIR.length}</div>
            <div style={{ color: "#888", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>PUP/IR</div>
          </div>
        </div>
      </div>

      {/* Three-column depth chart */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: 14,
      }}>
        {GROUPS.map((g) => (
          <GroupColumn
            key={g.id}
            group={g}
            players={byGroup[g.id] || []}
            onPlayerClick={onPlayerClick}
          />
        ))}
      </div>
    </div>
  );
}
