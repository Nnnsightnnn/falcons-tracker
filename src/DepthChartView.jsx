import { useEffect, useMemo, useState } from "react";

// ─── Atlanta Falcons Depth Chart ────────────────────────────────────────────
// Three stacked surfaces:
//   1. Position Strength Strip — every body as a colored tile, quality-tiered.
//      Designed for at-a-glance "where are we thin / deep" scanning.
//   2. Depth Matrix — rows = position, columns = STARTER / 2ND / 3RD / DEPTH.
//      Fixed-height grid; read down column 1 to see the starting unit.
//   3. '26 Rookie Class Row — pinned cohort surface for the current side.
// Mobile: matrix collapses to stacked position cards. Strip stays scrollable.

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

// ─── Quality-tier color system (priority-ordered) ───────────────────────────
const TIER = {
  HEALTH:  { color: "#E67E22", label: "PUP / IR" },
  ROOKIE:  { color: "#00E5FF", label: "ROOKIE '26" },
  STAR:    { color: "#FF2D3D", label: "STAR · $15M+" },
  VET:     { color: "#C9A227", label: "VET · $5M+" },
  RISING:  { color: "#3498DB", label: "RISING STARTER" },
  FRINGE:  { color: "#6B7B8E", label: "DEPTH / FRINGE" },
};

const NAMED_STARS = new Set(["drake-london", "bijan", "bates", "pitts"]);
const NAMED_RISING = new Set(["jalon-walker", "penix-jr"]);

function tierFor(p) {
  const status = (p.status || "").toLowerCase();
  if (["pup", "ir", "nfi", "questionable", "suspended", "holdout"].includes(status)) return "HEALTH";
  if ((p.acquired || "").startsWith("draft-2026") || (p.acquired || "").includes("fa-2026-UDFA")) return "ROOKIE";
  const cap = p.contract?.cap2026 ?? 0;
  if (NAMED_STARS.has(p.id) || cap >= 15_000_000) return "STAR";
  if (cap >= 5_000_000) return "VET";
  if (p.depthRank === 1 && (p.experience ?? 0) >= 1) return "RISING";
  if (NAMED_RISING.has(p.id)) return "RISING";
  return "FRINGE";
}

// ─── Position groups ────────────────────────────────────────────────────────
const GROUPS = [
  { id: "offense", label: "OFFENSE", positions: ["QB", "RB", "FB", "WR", "TE", "OT", "OG", "C"] },
  { id: "defense", label: "DEFENSE", positions: ["DE", "EDGE", "DT", "LB", "CB", "S"] },
  { id: "special", label: "SPECIAL TEAMS", positions: ["K", "P", "LS"] },
];

// Positions that split into multiple rows. The first slot is the default
// bucket for any player at this position without a `posSlot` value, so the
// page never silently drops a body — unassigned shows in the first slot.
// Slot order = row order in the depth matrix.
const POSITION_SPLITS = {
  // Offense — WR uses X / Z / slot terminology, OL uses L/R
  WR: ["X", "Z", "SLOT"],
  OG: ["LG", "RG"],
  OT: ["LT", "RT"],
  // Defense — more granular roles
  DE:   ["LDE", "RDE"],
  EDGE: ["LEDGE", "REDGE"],
  DT:   ["1T", "3T"],
  LB:   ["MIKE", "WILL"],
  CB:   ["LCB", "RCB", "NICKEL"],
  S:    ["FS", "SS"],
};

// Human-readable slot labels, shown next to the position pill.
const SLOT_FULL = {
  X: "X · SPLIT END", Z: "Z · FLANKER", SLOT: "SLOT",
  LG: "LEFT GUARD",  RG: "RIGHT GUARD",
  LT: "LEFT TACKLE", RT: "RIGHT TACKLE",
  LDE: "LEFT DE",    RDE: "RIGHT DE",
  LEDGE: "LEFT EDGE", REDGE: "RIGHT EDGE",
  "1T": "1-TECH / NT", "3T": "3-TECH",
  MIKE: "MIKE (MLB)", WILL: "WILL (WLB)", SAM: "SAM (SLB)",
  LCB: "LEFT CB", RCB: "RIGHT CB", NICKEL: "NICKEL / SLOT",
  FS: "FREE SAFETY", SS: "STRONG SAFETY",
};

const POS_FULL = {
  QB: "QUARTERBACK", RB: "RUNNING BACK", FB: "FULLBACK",
  WR: "WIDE RECEIVER", TE: "TIGHT END",
  OT: "OFFENSIVE TACKLE", OG: "OFFENSIVE GUARD", C: "CENTER",
  DE: "DEFENSIVE END", EDGE: "EDGE RUSHER", DT: "DEFENSIVE TACKLE",
  LB: "LINEBACKER", CB: "CORNERBACK", S: "SAFETY",
  K: "KICKER", P: "PUNTER", LS: "LONG SNAPPER",
  // Special-teams synthetic units (used only in the ST view)
  PK: "PLACEKICKER", KO: "KICKOFF SPECIALIST", H: "HOLDER",
  KR: "KICK RETURNER", PR: "PUNT RETURNER",
  GUNNER: "GUNNER (PUNT COVER)", PP: "PERSONAL PROTECTOR",
};

// Synthetic ST units rendered when the Special Teams tab is active.
// Each unit lists the players who fill that role, drawn from across the
// roster (returners are usually WRs/RBs, gunners are CBs, etc.).
// resolver(player) returns true if the player fills the unit.
// rankKey(player) returns a sort key (lower = higher on the unit's depth).
const ST_UNITS = [
  {
    id: "PK", label: "PK",
    resolver: (p) => p.position === "K",
    rankKey: (p) => p.depthRank ?? 99,
  },
  {
    id: "P", label: "P",
    resolver: (p) => p.position === "P",
    rankKey: (p) => p.depthRank ?? 99,
  },
  {
    id: "H", label: "H",
    resolver: (p) => (p.stRoles || []).includes("H"),
    rankKey: (p) => p.stRank?.H ?? 99,
  },
  {
    id: "LS", label: "LS",
    resolver: (p) => p.position === "LS",
    rankKey: (p) => p.depthRank ?? 99,
  },
  {
    id: "KR", label: "KR",
    resolver: (p) => (p.stRoles || []).includes("KR"),
    rankKey: (p) => p.stRank?.KR ?? 99,
  },
  {
    id: "PR", label: "PR",
    resolver: (p) => (p.stRoles || []).includes("PR"),
    rankKey: (p) => p.stRank?.PR ?? 99,
  },
  {
    id: "GUNNER", label: "GUNNER",
    resolver: (p) => (p.stRoles || []).includes("GUNNER"),
    rankKey: (p) => p.stRank?.GUNNER ?? 99,
  },
  {
    id: "PP", label: "PP",
    resolver: (p) => (p.stRoles || []).includes("PP"),
    rankKey: (p) => p.stRank?.PP ?? 99,
  },
];

// Resolve a player's slot within a split position. Falls back to the first
// configured slot when the player has no posSlot or a value not in the list.
function resolveSlot(player, slots) {
  if (!slots) return null;
  if (player.posSlot && slots.includes(player.posSlot)) return player.posSlot;
  return slots[0];
}

function lastName(name) {
  if (!name) return "";
  const parts = name.replace(/\s+Jr\.?$|\s+Sr\.?$|\s+II$|\s+III$|\s+IV$/, "").trim().split(" ");
  return (parts[parts.length - 1] || name).toUpperCase();
}

function rookieRound(p) {
  if (!(p.acquired || "").startsWith("draft-2026")) return null;
  const m = p.acquired.match(/-R(\d+)-P(\d+)/);
  if (!m) return null;
  return { round: Number(m[1]), pick: Number(m[2]) };
}

function statusGlyph(p) {
  const s = (p.status || "").toLowerCase();
  if (s === "pup")          return { label: "PUP", color: "#E67E22" };
  if (s === "ir")           return { label: "IR",  color: "#E74C3C" };
  if (s === "nfi")          return { label: "NFI", color: "#E67E22" };
  if (s === "questionable") return { label: "Q",   color: "#FFC107" };
  if (s === "suspended")    return { label: "SUS", color: "#8B0000" };
  if (s === "holdout")      return { label: "$",   color: "#8E44AD" };
  return null;
}

// ─── Player Photo (reused from prior design) ────────────────────────────────
function PlayerPhoto({ player, size = 40 }) {
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
        <span className="stencil" style={{ fontSize: size * 0.36, color: "var(--hot)", letterSpacing: "0.04em" }}>
          {initials}
        </span>
      )}
    </div>
  );
}

// ─── 1. POSITION STRENGTH STRIP ─────────────────────────────────────────────
// Horizontal row of position columns. Each column = stacked colored tiles
// (one per body, color = quality tier). Position label + body count below.
function StrengthStrip({ positionsForGroup, byPos, isMobile }) {
  const TILE = 16;
  const MAX_TILES = 9; // cap to keep the strip a uniform height

  return (
    <div style={{
      background: "var(--carbon)",
      border: "1px solid #ffffff10",
      padding: isMobile ? "14px 12px 12px" : "18px 18px 14px",
      marginTop: 16,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
        <span className="mono" style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--silver)" }}>
          ▎ STRENGTH READOUT
        </span>
        <span className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "var(--steel-2)" }}>
          ONE TILE = ONE BODY
        </span>
      </div>

      <div style={{
        display: "flex",
        gap: 10,
        overflowX: "auto",
        paddingBottom: 4,
      }}>
        {positionsForGroup.map((pos) => {
          const inPos = (byPos[pos] || []).slice().sort((a, b) => a.depthRank - b.depthRank);
          const shown = inPos.slice(0, MAX_TILES);
          const overflow = Math.max(0, inPos.length - MAX_TILES);
          // Empty columns get one gray slot so the layout stays consistent.
          const tiles = shown.length === 0
            ? [{ key: "empty", tier: "FRINGE", empty: true }]
            : shown.map((p) => ({ key: p.id, tier: tierFor(p), player: p }));

          return (
            <div key={pos} style={{
              flex: "0 0 auto",
              minWidth: isMobile ? 48 : 56,
              display: "flex", flexDirection: "column", alignItems: "center",
            }}>
              {/* Tile stack — bottom-anchored so all positions visually line up */}
              <div style={{
                display: "flex", flexDirection: "column-reverse", alignItems: "center",
                gap: 2, height: MAX_TILES * (TILE + 2), justifyContent: "flex-start",
              }}>
                {tiles.map((t, i) => (
                  <div key={t.key + i}
                    title={t.player ? `${t.player.name} · ${TIER[t.tier].label}` : "empty"}
                    style={{
                      width: TILE, height: TILE,
                      background: t.empty ? "transparent" : TIER[t.tier].color,
                      border: t.empty
                        ? "1px dashed #ffffff20"
                        : `1px solid ${TIER[t.tier].color}cc`,
                      opacity: t.empty ? 0.5 : 1,
                    }}
                  />
                ))}
                {overflow > 0 && (
                  <div className="mono" style={{
                    fontSize: 8, color: "var(--silver)", letterSpacing: "0.1em",
                    marginTop: 2,
                  }}>
                    +{overflow}
                  </div>
                )}
              </div>

              {/* Position label + count */}
              <div style={{
                marginTop: 8, textAlign: "center",
                borderTop: `2px solid ${inPos.length === 0 ? "#3A3E46" : "var(--hot)"}`,
                paddingTop: 6, width: "100%",
              }}>
                <div className="stencil" style={{
                  fontSize: 13, color: "var(--ivory)", letterSpacing: "0.06em", lineHeight: 1,
                }}>{pos}</div>
                <div className="mono" style={{
                  fontSize: 9, color: inPos.length === 0 ? "#E74C3C" : "var(--steel-2)",
                  letterSpacing: "0.12em", marginTop: 4,
                }}>
                  {inPos.length === 0 ? "EMPTY" : `${inPos.length} DEEP`}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Physical-profile helpers ───────────────────────────────────────────────
function formatHeight(inches) {
  if (!inches || typeof inches !== "number") return null;
  const ft = Math.floor(inches / 12);
  const inch = inches % 12;
  return `${ft}'${inch}`;
}

function profileLine(p) {
  const parts = [];
  const ht = formatHeight(p.height);
  if (ht) parts.push(ht);
  if (p.weight) parts.push(`${p.weight}`);
  if (p.age) parts.push(`${p.age}YO`);
  if (typeof p.experience === "number") {
    parts.push(p.experience === 0 ? "ROOK" : `Y${p.experience}`);
  }
  return parts.join(" · ");
}

// ─── 2. DEPTH MATRIX ────────────────────────────────────────────────────────
// Desktop: table with sticky header. Mobile: stacked position cards.
// Each cell is a full mini player card: photo + jersey # + name + HT/WT/AGE/EXP.
// No click required to see the basics; click still opens the full modal.

function DepthCell({ player, onPlayerClick, dense = false }) {
  if (!player) {
    return (
      <div style={{
        padding: "12px 10px",
        background: "#0B0C0F",
        borderLeft: "1px solid #ffffff08",
        opacity: 0.4,
        minHeight: dense ? 60 : 78,
        display: "flex", alignItems: "center",
      }}>
        <span className="mono" style={{ fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.2em" }}>—</span>
      </div>
    );
  }
  const tier = tierFor(player);
  const glyph = statusGlyph(player);
  const rook = rookieRound(player);
  const photoSize = dense ? 40 : 48;

  return (
    <div onClick={() => onPlayerClick && onPlayerClick(player)}
      style={{
        padding: dense ? "8px 10px" : "10px 10px",
        background: "#0B0C0F",
        borderLeft: "1px solid #ffffff08",
        cursor: onPlayerClick ? "pointer" : "default",
        position: "relative",
        display: "flex", alignItems: "center", gap: 10,
        minWidth: 0,
        minHeight: dense ? 60 : 78,
      }}>
      {/* Quality tier accent bar */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
        background: TIER[tier].color,
        boxShadow: tier === "STAR" ? `0 0 10px ${TIER[tier].color}aa` : "none",
      }} />

      {/* Photo */}
      <PlayerPhoto player={player} size={photoSize} />

      {/* Jersey # + name + profile */}
      <div style={{ minWidth: 0, flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, minWidth: 0 }}>
          <span className="stencil" style={{
            fontSize: dense ? 18 : 22, color: "var(--ivory)", letterSpacing: "0.02em",
            lineHeight: 1, flexShrink: 0,
            textShadow: tier === "STAR" ? `0 0 10px ${TIER[tier].color}66` : "none",
          }}>
            {player.number ?? "—"}
          </span>
          <span className="stencil" style={{
            fontSize: dense ? 12 : 13, color: "var(--ivory)", letterSpacing: "0.04em",
            lineHeight: 1.1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            minWidth: 0, flex: 1,
          }}>
            {lastName(player.name)}
          </span>
        </div>
        <div className="mono" style={{
          fontSize: dense ? 8.5 : 9, color: "var(--silver)", letterSpacing: "0.1em",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {profileLine(player) || "—"}
        </div>
        {player.college && (
          <div className="mono" style={{
            fontSize: 8, color: "var(--steel-2)", letterSpacing: "0.14em",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {player.college.toUpperCase()}
          </div>
        )}
      </div>

      {/* Right rail: rookie pill / status glyph (stacked) */}
      {(rook || glyph) && (
        <div style={{ display: "flex", flexDirection: "column", gap: 3, flexShrink: 0, alignItems: "flex-end" }}>
          {rook && (
            <span className="mono" style={{
              fontSize: 8, color: "#000", background: TIER.ROOKIE.color,
              padding: "2px 5px", letterSpacing: "0.18em", fontWeight: 700,
            }}>R{rook.round}</span>
          )}
          {glyph && (
            <span className="mono" style={{
              fontSize: 8, color: "#fff", background: glyph.color,
              padding: "2px 5px", letterSpacing: "0.18em", fontWeight: 700,
            }}>{glyph.label}</span>
          )}
        </div>
      )}
    </div>
  );
}

function DepthMatrix({ positionsForGroup, byPos, onPlayerClick, isMobile }) {
  const SLOT_LABELS = ["STARTER", "2ND", "3RD", "DEPTH"];

  // Build rows. If a position has a split config, emit one row per sub-slot.
  // Otherwise emit a single row for the position. Empty rows are filtered out.
  const rows = [];
  positionsForGroup.forEach((pos) => {
    const sortFn = (a, b) => {
      if (a.depthRank !== b.depthRank) return a.depthRank - b.depthRank;
      return (b.experience ?? 0) - (a.experience ?? 0);
    };
    const allAtPos = (byPos[pos] || []).slice().sort(sortFn);
    if (allAtPos.length === 0) return;

    const splits = POSITION_SPLITS[pos];
    if (!splits) {
      rows.push({ pos, slotLabel: null, slotFull: null, players: allAtPos });
      return;
    }

    // Bucket players by posSlot (with fallback to first slot)
    const buckets = Object.fromEntries(splits.map((s) => [s, []]));
    allAtPos.forEach((p) => {
      const slot = resolveSlot(p, splits);
      buckets[slot].push(p);
    });
    splits.forEach((slot) => {
      const slotPlayers = buckets[slot].slice().sort(sortFn);
      if (slotPlayers.length === 0) return;
      rows.push({
        pos,
        slotLabel: slot,
        slotFull: SLOT_FULL[slot] || slot,
        players: slotPlayers,
      });
    });
  });

  if (isMobile) {
    // Mobile: each row (position or sub-slot) becomes its own card with name chips
    return (
      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 1, background: "#ffffff08", border: "1px solid #ffffff10" }}>
        {rows.map(({ pos, slotLabel, slotFull, players }, idx) => (
          <div key={(slotLabel || pos) + "-" + idx} style={{ background: "var(--carbon)", padding: "12px 14px" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
              <span className="stencil" style={{ fontSize: 16, color: "var(--ivory)", letterSpacing: "0.12em" }}>
                {slotLabel ? `${pos} · ${slotLabel}` : pos}
              </span>
              <span className="mono" style={{ fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.16em" }}>
                {slotFull || POS_FULL[pos]} · {players.length} DEEP
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#ffffff08" }}>
              {players.slice(0, 4).map((p, i) => (
                <div key={p.id} style={{ display: "flex", alignItems: "stretch", background: "#0B0C0F" }}>
                  <div style={{
                    background: i === 0 ? "var(--red)" : "transparent",
                    padding: "0 8px", display: "flex", alignItems: "center",
                    borderRight: "1px solid #ffffff10", minWidth: 56,
                  }}>
                    <span className="mono" style={{
                      fontSize: 9,
                      color: i === 0 ? "#fff" : "var(--steel-2)",
                      letterSpacing: "0.18em", fontWeight: 700,
                    }}>{SLOT_LABELS[i]}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <DepthCell player={p} onPlayerClick={onPlayerClick} />
                  </div>
                </div>
              ))}
              {players.length > 4 && (
                <div style={{ padding: "6px 10px", background: "#0B0C0F" }}>
                  <span className="mono" style={{ fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.16em" }}>
                    +{players.length - 4} MORE: {players.slice(4).map((p) => lastName(p.name)).join(" · ")}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Desktop: matrix table
  return (
    <div style={{
      marginTop: 16,
      background: "var(--carbon)",
      border: "1px solid #ffffff10",
      overflow: "auto",
    }}>
      {/* Header row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(110px, 0.5fr) repeat(4, minmax(190px, 1fr))",
        minWidth: 870,
        background: "#160407",
        borderBottom: "1px solid #ffffff15",
      }}>
        <div style={{ padding: "10px 14px", display: "flex", alignItems: "center" }}>
          <span className="mono" style={{ fontSize: 9, color: "var(--silver)", letterSpacing: "0.24em" }}>POS</span>
        </div>
        {SLOT_LABELS.map((label) => (
          <div key={label} style={{
            padding: "10px 12px",
            borderLeft: "1px solid #ffffff10",
          }}>
            <span className="mono" style={{
              fontSize: 9, color: label === "STARTER" ? "var(--hot)" : "var(--silver)",
              letterSpacing: "0.22em", fontWeight: 700,
            }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Body rows */}
      {rows.map(({ pos, slotLabel, slotFull, players }, idx) => {
        const starter = players[0];
        const slot2 = players[1];
        const slot3 = players[2];
        const slot4Plus = players.slice(3);
        const slot4Display = slot4Plus[0];
        const extra = slot4Plus.length - 1;

        return (
          <div key={(slotLabel || pos) + "-" + idx} style={{
            display: "grid",
            gridTemplateColumns: "minmax(110px, 0.5fr) repeat(4, minmax(190px, 1fr))",
            minWidth: 870,
            borderBottom: "1px solid #ffffff08",
          }}>
            {/* Position label */}
            <div style={{
              padding: "10px 14px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              borderRight: "1px solid #ffffff10",
              background: "#0B0C0F",
            }}>
              <span className="stencil" style={{
                fontSize: 16, color: "var(--ivory)", letterSpacing: "0.08em", lineHeight: 1,
              }}>{pos}</span>
              {slotLabel && (
                <span className="mono" style={{
                  fontSize: 10, color: "var(--hot)", letterSpacing: "0.16em",
                  marginTop: 4, fontWeight: 700,
                }}>{slotLabel}</span>
              )}
              <span className="mono" style={{
                fontSize: 8, color: "var(--steel-2)", letterSpacing: "0.16em", marginTop: 4,
              }}>{players.length} DEEP</span>
            </div>
            <DepthCell player={starter} onPlayerClick={onPlayerClick} />
            <DepthCell player={slot2} onPlayerClick={onPlayerClick} />
            <DepthCell player={slot3} onPlayerClick={onPlayerClick} />
            {/* DEPTH cell — show 4th + count of additional */}
            {slot4Display ? (
              <div style={{ position: "relative" }}>
                <DepthCell player={slot4Display} onPlayerClick={onPlayerClick} />
                {extra > 0 && (
                  <div style={{
                    position: "absolute", top: 4, right: 6,
                    background: "var(--steel)",
                    padding: "1px 5px",
                  }}>
                    <span className="mono" style={{
                      fontSize: 8, color: "var(--ivory)", letterSpacing: "0.16em", fontWeight: 700,
                    }}>+{extra}</span>
                  </div>
                )}
              </div>
            ) : (
              <DepthCell player={null} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── 3. ROOKIE CLASS ROW ────────────────────────────────────────────────────
// Drafted rookies as photo cards; UDFA/2026 rookies as chips below.
// Always shows the FULL '26 class — not filtered by side toggle — because the
// class is a fixed cohort, not a side-specific view.
function RookieClassRow({ allPlayers, side, onPlayerClick, isMobile }) {
  const drafted = allPlayers
    .filter((p) => (p.acquired || "").startsWith("draft-2026"))
    .sort((a, b) => {
      const ra = rookieRound(a)?.pick ?? 999;
      const rb = rookieRound(b)?.pick ?? 999;
      return ra - rb;
    });
  const udfa = allPlayers
    .filter((p) => /fa-2026-UDFA/.test(p.acquired || ""))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (drafted.length === 0 && udfa.length === 0) return null;

  return (
    <div style={{
      marginTop: 16,
      background: "var(--carbon)",
      border: "1px solid #ffffff10",
      borderTop: `2px solid ${TIER.ROOKIE.color}`,
      padding: isMobile ? "14px 12px" : "18px 18px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12, flexWrap: "wrap", gap: 6 }}>
        <span className="mono" style={{ fontSize: 10, letterSpacing: "0.26em", color: TIER.ROOKIE.color, fontWeight: 700 }}>
          ▎ ROOKIE CLASS '26 · FULL TEAM
        </span>
        <span className="mono" style={{ fontSize: 9, letterSpacing: "0.16em", color: "var(--steel-2)" }}>
          {drafted.length} DRAFTED · {udfa.length} UDFA · INDEPENDENT OF {side?.toUpperCase()} TOGGLE
        </span>
      </div>

      {/* Drafted: photo cards */}
      {drafted.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 1, background: "#ffffff08",
        }}>
          {drafted.map((p) => {
            const meta = rookieRound(p);
            const glyph = statusGlyph(p);
            return (
              <div key={p.id} onClick={() => onPlayerClick && onPlayerClick(p)}
                style={{
                  background: "#0B0C0F", padding: "12px",
                  cursor: onPlayerClick ? "pointer" : "default",
                  display: "flex", flexDirection: "column", gap: 8,
                  borderLeft: `2px solid ${TIER.ROOKIE.color}`,
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <PlayerPhoto player={p} size={44} />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div className="stencil" style={{
                      fontSize: 12, color: "var(--ivory)", letterSpacing: "0.04em", lineHeight: 1.1,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>{p.name.toUpperCase()}</div>
                    <div className="mono" style={{
                      fontSize: 9, color: TIER.ROOKIE.color, letterSpacing: "0.16em", marginTop: 4,
                    }}>
                      R{meta?.round ?? "?"} · #{meta?.pick ?? "?"} · {p.position}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span className="mono" style={{ fontSize: 8, color: "var(--steel-2)", letterSpacing: "0.16em" }}>
                    {p.college?.toUpperCase()}
                  </span>
                  {glyph && (
                    <span className="mono" style={{
                      fontSize: 8, color: "#fff", background: glyph.color,
                      padding: "2px 5px", letterSpacing: "0.18em", fontWeight: 700,
                    }}>{glyph.label}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* UDFA: chip row */}
      {udfa.length > 0 && (
        <div style={{ marginTop: drafted.length > 0 ? 12 : 0 }}>
          <div className="mono" style={{
            fontSize: 9, letterSpacing: "0.22em", color: "var(--silver)", marginBottom: 8,
          }}>UDFA / TRYOUT SIGNINGS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {udfa.map((p) => (
              <button key={p.id} onClick={() => onPlayerClick && onPlayerClick(p)}
                style={{
                  background: "#0B0C0F",
                  border: `1px solid ${TIER.ROOKIE.color}40`,
                  padding: "5px 9px",
                  cursor: onPlayerClick ? "pointer" : "default",
                  display: "inline-flex", alignItems: "center", gap: 6,
                }}>
                <span className="mono" style={{
                  fontSize: 9, color: TIER.ROOKIE.color, letterSpacing: "0.12em",
                }}>#{p.number ?? "—"}</span>
                <span className="mono" style={{
                  fontSize: 10, color: "var(--ivory)", letterSpacing: "0.04em",
                }}>{p.name.toUpperCase()}</span>
                <span className="mono" style={{
                  fontSize: 8, color: "var(--steel-2)", letterSpacing: "0.14em",
                }}>{p.position}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Legend strip ───────────────────────────────────────────────────────────
function LegendRow({ groupPlayers, slotsCount }) {
  const entries = [
    { tier: "STAR", short: "STAR · $15M+" },
    { tier: "VET", short: "VET · $5M+" },
    { tier: "RISING", short: "RISING" },
    { tier: "ROOKIE", short: "ROOKIE '26" },
    { tier: "HEALTH", short: "PUP / IR" },
    { tier: "FRINGE", short: "DEPTH" },
  ];
  return (
    <div style={{
      display: "flex", gap: 14, marginTop: 16, alignItems: "center", flexWrap: "wrap",
      padding: "10px 14px", background: "var(--carbon)", border: "1px solid #ffffff10",
    }}>
      <span className="mono" style={{ fontSize: 9, color: "var(--silver)", letterSpacing: "0.22em" }}>
        ▎ LEGEND
      </span>
      {entries.map((e) => (
        <div key={e.tier} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, background: TIER[e.tier].color }} />
          <span className="mono" style={{ fontSize: 9, color: "var(--ivory)", letterSpacing: "0.14em" }}>
            {e.short}
          </span>
        </div>
      ))}
      <span className="mono" style={{
        fontSize: 9, color: "var(--steel-2)", letterSpacing: "0.16em", marginLeft: "auto",
      }}>
        {groupPlayers.length} PLAYERS · {slotsCount} POSITIONS
      </span>
    </div>
  );
}

// ─── BASE PERSONNEL (starting eleven) ───────────────────────────────────────
// The depth matrix below lists every position's ladder. This strip sits on top
// and answers the simpler question: who actually lines up? Offense shows base
// 11 personnel (3 WR). Defense shows Atlanta's nickel base (4-2-5) — five DBs,
// with the NICKEL slot treated as a true starter, not buried under CB depth.
const FORMATIONS = {
  offense: {
    scheme: "11 PERSONNEL · 3 WR",
    groups: [
      { label: "SKILL", slots: [
        { pos: "QB", role: "QB" }, { pos: "RB", role: "RB" },
        { pos: "WR", slot: "X", role: "WR" }, { pos: "WR", slot: "Z", role: "WR" },
        { pos: "WR", slot: "SLOT", role: "SLOT" }, { pos: "TE", role: "TE" },
      ]},
      { label: "OFFENSIVE LINE", slots: [
        { pos: "OT", slot: "LT", role: "LT" }, { pos: "OG", slot: "LG", role: "LG" },
        { pos: "C", role: "C" }, { pos: "OG", slot: "RG", role: "RG" },
        { pos: "OT", slot: "RT", role: "RT" },
      ]},
    ],
  },
  defense: {
    scheme: "NICKEL · 4-2-5",
    groups: [
      { label: "FRONT FOUR", slots: [
        { pos: "EDGE", slot: "LEDGE", role: "EDGE" }, { pos: "DT", slot: "1T", role: "NT" },
        { pos: "DT", slot: "3T", role: "3T" }, { pos: "EDGE", slot: "REDGE", role: "EDGE" },
      ]},
      { label: "LINEBACKERS", slots: [
        { pos: "LB", slot: "MIKE", role: "MIKE" }, { pos: "LB", slot: "WILL", role: "WILL" },
      ]},
      { label: "SECONDARY (5 DB)", slots: [
        { pos: "CB", slot: "LCB", role: "LCB" }, { pos: "S", slot: "FS", role: "FS" },
        { pos: "CB", slot: "NICKEL", role: "NICKEL", highlight: true },
        { pos: "S", slot: "SS", role: "SS" }, { pos: "CB", slot: "RCB", role: "RCB" },
      ]},
    ],
  },
};

const UNAVAILABLE = new Set(["ir", "pup", "nfi", "suspended"]);

// Pick the on-field starter for a formation slot: lowest depthRank in that
// posSlot bucket, preferring an available body over an injured/suspended one.
function resolveStarter(byPos, pos, slot) {
  let list = (byPos[pos] || []).slice();
  if (slot) {
    const splits = POSITION_SPLITS[pos];
    list = list.filter((p) => resolveSlot(p, splits) === slot);
  }
  list.sort((a, b) => a.depthRank - b.depthRank);
  const available = list.filter((p) => !UNAVAILABLE.has((p.status || "").toLowerCase()));
  return available[0] || list[0] || null;
}

function BaseUnitChip({ slot, player, onPlayerClick }) {
  const hot = slot.highlight;
  const glyph = player ? statusGlyph(player) : null;
  return (
    <div
      onClick={() => player && onPlayerClick && onPlayerClick(player)}
      title={player ? player.name : "unfilled"}
      style={{
        flex: "1 1 92px", minWidth: 88,
        background: hot ? "rgba(255,45,61,0.10)" : "#0B0C0F",
        border: hot ? "1px solid var(--hot)" : "1px solid #ffffff12",
        boxShadow: hot ? "0 0 12px rgba(255,45,61,0.28)" : "none",
        padding: "8px 9px",
        cursor: player && onPlayerClick ? "pointer" : "default",
        display: "flex", flexDirection: "column", gap: 6,
      }}>
      <span className="mono" style={{
        fontSize: 8.5, letterSpacing: "0.2em", fontWeight: 700,
        color: hot ? "var(--hot)" : "var(--silver)",
      }}>{slot.role}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 7, minWidth: 0 }}>
        {player && <PlayerPhoto player={player} size={26} />}
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 1 }}>
          <span className="stencil" style={{
            fontSize: 12.5, color: "var(--ivory)", letterSpacing: "0.02em", lineHeight: 1,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>{player ? lastName(player.name) : "—"}</span>
          <span className="mono" style={{ fontSize: 8, color: "var(--steel-2)", letterSpacing: "0.12em" }}>
            {player ? `#${player.number ?? "—"}${glyph ? " · " + glyph.label : ""}` : "UNFILLED"}
          </span>
        </div>
      </div>
    </div>
  );
}

function BaseUnitStrip({ side, byPos, onPlayerClick }) {
  const spec = FORMATIONS[side];
  if (!spec) return null;
  return (
    <div style={{
      background: "var(--carbon)", border: "1px solid #ffffff10",
      borderTop: "2px solid var(--hot)", padding: "14px 16px 16px", marginTop: 16,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12, flexWrap: "wrap", gap: 6 }}>
        <span className="mono" style={{ fontSize: 10, letterSpacing: "0.26em", color: "var(--hot)", fontWeight: 700 }}>
          ▎ BASE {side === "defense" ? "DEFENSE" : "OFFENSE"} · STARTING ELEVEN
        </span>
        <span className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "var(--steel-2)" }}>
          {spec.scheme}
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
        {spec.groups.map((group) => (
          <div key={group.label} style={{ display: "flex", flexDirection: "column", gap: 6, flex: "1 1 240px", minWidth: 220 }}>
            <span className="mono" style={{ fontSize: 8.5, letterSpacing: "0.22em", color: "var(--steel-2)" }}>
              {group.label}
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {group.slots.map((slot, i) => (
                <BaseUnitChip key={slot.role + i} slot={slot}
                  player={resolveStarter(byPos, slot.pos, slot.slot)}
                  onPlayerClick={onPlayerClick} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main view ──────────────────────────────────────────────────────────────
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

  // For offense/defense, use the canonical position list. For special teams,
  // build synthetic units (PK, P, H, LS, KR, PR, GUNNER, PP) that draw
  // players from across the WHOLE roster (returners are usually WRs/RBs,
  // gunners are CBs, etc.), not just positionGroup === "special".
  const { positionsForGroup, byPos, viewPlayers } = useMemo(() => {
    if (side !== "special") {
      const pos = GROUPS.find((g) => g.id === side)?.positions || [];
      const map = {};
      groupPlayers.forEach((p) => {
        if (!map[p.position]) map[p.position] = [];
        map[p.position].push(p);
      });
      return { positionsForGroup: pos, byPos: map, viewPlayers: groupPlayers };
    }
    // Special-teams synthetic view
    const map = {};
    const unitIds = ST_UNITS.map((u) => u.id);
    const seen = new Set();
    ST_UNITS.forEach((unit) => {
      const matches = players
        .filter(unit.resolver)
        .slice()
        .sort((a, b) => unit.rankKey(a) - unit.rankKey(b));
      map[unit.id] = matches;
      matches.forEach((p) => seen.add(p.id));
    });
    // Unique-player count for the legend
    const uniqueViewPlayers = Array.from(seen).map((id) => players.find((p) => p.id === id)).filter(Boolean);
    return { positionsForGroup: unitIds, byPos: map, viewPlayers: uniqueViewPlayers };
  }, [side, players, groupPlayers]);

  const slotsCount = positionsForGroup.filter((pos) => (byPos[pos] || []).length > 0).length;

  return (
    <div>
      {/* Header bar — title + side toggle */}
      <div className="panel" style={{ display: "flex", padding: 0, alignItems: "stretch", flexWrap: "wrap" }}>
        <div style={{
          padding: isMobile ? "12px 14px" : "16px 22px",
          borderRight: "1px solid #ffffff10",
          flex: isMobile ? "1 1 100%" : "0 0 auto",
        }}>
          <div className="mono" style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--silver)" }}>
            ▎ ROSTER · DEPTH CHART
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
          const count = byGroup[g.id]?.length || 0;
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
              minWidth: 0,
            }}>
              {active && (
                <div className="hot-bar bar-grow" style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                }} />
              )}
              <div>{g.label}</div>
              <div className="mono" style={{
                fontSize: 9, color: active ? "var(--hot)" : "var(--steel-2)",
                letterSpacing: "0.18em", marginTop: 4, fontWeight: 400,
              }}>{count} PLAYERS</div>
            </button>
          );
        })}
      </div>

      {side !== "special" && (
        <BaseUnitStrip side={side} byPos={byPos} onPlayerClick={onPlayerClick} />
      )}

      <StrengthStrip
        positionsForGroup={positionsForGroup}
        byPos={byPos}
        isMobile={isMobile}
      />

      <DepthMatrix
        positionsForGroup={positionsForGroup}
        byPos={byPos}
        onPlayerClick={onPlayerClick}
        isMobile={isMobile}
      />

      <RookieClassRow
        allPlayers={players}
        side={side}
        onPlayerClick={onPlayerClick}
        isMobile={isMobile}
      />

      <LegendRow groupPlayers={viewPlayers} slotsCount={slotsCount} />
    </div>
  );
}
