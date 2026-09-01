import { useMemo, useState } from "react";
import { PLAYERS } from "./playerData.js";
import { MagazineShell, playerById } from "./MagazineView.jsx";
import MagazinePlayerModal from "./MagazinePlayerModal.jsx";

// Roster — magazine "The Fifty-Three" + room spotlights + starting eleven + ladder.

const ROOM_LADDER = [
  { code: "QB",   label: "Quarterback",      positions: ["QB"] },
  { code: "RB",   label: "Running Back",     positions: ["RB"] },
  { code: "WR",   label: "Wide Receiver",    positions: ["WR"] },
  { code: "TE",   label: "Tight End",        positions: ["TE"] },
  { code: "OT",   label: "Offensive Tackle", positions: ["OT"] },
  { code: "IOL",  label: "Interior O-Line",  positions: ["OG", "C"] },
  { code: "DT",   label: "Defensive Tackle", positions: ["DT"] },
  { code: "DE",   label: "Defensive End",    positions: ["DE"] },
  { code: "EDGE", label: "Edge Rusher",      positions: ["EDGE"] },
  { code: "LB",   label: "Linebacker",       positions: ["LB"] },
  { code: "CB",   label: "Cornerback",       positions: ["CB"] },
  { code: "S",    label: "Safety",           positions: ["S"] },
  { code: "ST",   label: "Specialists",      positions: ["K", "P", "LS"] },
];

function topByPosition(positions, n) {
  return PLAYERS
    .filter((p) => positions.includes(p.position))
    .sort((a, b) => (a.depthRank ?? 9) - (b.depthRank ?? 9))
    .slice(0, n);
}

// ─── Base personnel (the on-field eleven) ───────────────────────────────────
// The Ladder below lists every room at full depth (wrapping past 4). This surfaces the simpler
// truth: who lines up. Offense is base 11 personnel (3 WR); defense is the
// nickel base (4-2-5), so the NICKEL slot is a true starter, not CB depth.
const POS_SPLITS = {
  WR: ["X", "Z", "SLOT"], OG: ["LG", "RG"], OT: ["LT", "RT"],
  EDGE: ["LEDGE", "REDGE"], DT: ["1T", "3T"], LB: ["MIKE", "WILL"],
  CB: ["LCB", "RCB", "NICKEL"], S: ["FS", "SS"],
};
const UNAVAILABLE = new Set(["ir", "pup", "nfi", "suspended"]);

function resolveSlotOf(p, slots) {
  if (!slots) return null;
  return p.posSlot && slots.includes(p.posSlot) ? p.posSlot : slots[0];
}
function starterFor(pos, slot) {
  let list = PLAYERS.filter((p) => p.position === pos);
  if (slot) list = list.filter((p) => resolveSlotOf(p, POS_SPLITS[pos]) === slot);
  list.sort((a, b) => (a.depthRank ?? 9) - (b.depthRank ?? 9));
  const avail = list.filter((p) => !UNAVAILABLE.has((p.status || "").toLowerCase()));
  return avail[0] || list[0] || null;
}

const BASE_OFFENSE = {
  scheme: "11 Personnel · 3 WR",
  units: [
    { label: "Backfield & Receivers", slots: [
      { pos: "QB", role: "QB" }, { pos: "RB", role: "RB" },
      { pos: "WR", slot: "X", role: "WR · X" }, { pos: "WR", slot: "Z", role: "WR · Z" },
      { pos: "WR", slot: "SLOT", role: "Slot" }, { pos: "TE", role: "TE" },
    ]},
    { label: "Offensive Line", slots: [
      { pos: "OT", slot: "LT", role: "LT" }, { pos: "OG", slot: "LG", role: "LG" },
      { pos: "C", role: "C" }, { pos: "OG", slot: "RG", role: "RG" },
      { pos: "OT", slot: "RT", role: "RT" },
    ]},
  ],
};
const BASE_DEFENSE = {
  scheme: "Nickel · 4-2-5",
  units: [
    { label: "Front Four", slots: [
      { pos: "EDGE", slot: "LEDGE", role: "Edge" }, { pos: "DT", slot: "1T", role: "Nose" },
      { pos: "DT", slot: "3T", role: "3-Tech" }, { pos: "EDGE", slot: "REDGE", role: "Edge" },
    ]},
    { label: "Linebackers", slots: [
      { pos: "LB", slot: "MIKE", role: "Mike" }, { pos: "LB", slot: "WILL", role: "Will" },
    ]},
    { label: "Secondary · 5 DB", slots: [
      { pos: "CB", slot: "LCB", role: "CB" }, { pos: "S", slot: "FS", role: "FS" },
      { pos: "CB", slot: "NICKEL", role: "Nickel", highlight: true },
      { pos: "S", slot: "SS", role: "SS" }, { pos: "CB", slot: "RCB", role: "CB" },
    ]},
  ],
};

function shortName(name) {
  if (!name) return "—";
  const parts = name.split(" ");
  if (parts.length < 2) return name;
  return `${parts[0][0]}. ${parts.slice(1).join(" ")}`;
}

function slotNote(p) {
  if (!p) return null;
  if (p.status === "pup") return "PUP · ramping reps";
  if (p.status === "ir") return "IR";
  if (p.id === "bijan") return "All-Pro · ext. queued";
  if (p.id === "drake-london") return "extension queued";
  if (p.id === "pitts") return "tagged · $14.1M";
  if (p.id === "matthews") return "12 yrs · franchise LT";
  if (p.id === "lindstrom") return "$19.5M cap '26";
  if (p.id === "bates") return "All-Pro · void '27";
  if (p.id === "terrell") return "$19.2M cap '26";
  if (p.id === "avieon-terrell") return "R2 · brother battle";
  if (p.id === "branch-z") return "R3 · slot / returner";
  if (p.id === "daniels-k") return "R4 · sub-package SAM";
  if (p.id === "perkins-h") return "R6 · ACL bet";
  if (p.id === "thompson-a") return "R6 · 4.73 forty";
  if (p.id === "onianwa-e") return "R7 · 6'6 / 333";
  return null;
}

function slotFlags(p) {
  // returns css class additions for rookie/injured indicators
  const flags = [];
  const rookies = ["avieon-terrell", "branch-z", "daniels-k", "perkins-h", "thompson-a", "onianwa-e"];
  if (rookies.includes(p?.id)) flags.push("rookie");
  if (p?.status === "pup" || p?.status === "ir") flags.push("injured");
  return flags.join(" ");
}

export default function MagazineRoster({ setView }) {
  const [selected, setSelected] = useState(null);
  const rosterTotal = PLAYERS.length;
  const reserveCount = PLAYERS.filter((p) => ["pup", "ir", "nfi", "suspended"].includes(p.status)).length;
  const activeCount = rosterTotal - reserveCount;
  const qbCount = PLAYERS.filter((p) => p.position === "QB").length;
  const rookies = ["avieon-terrell", "zachariah-branch", "kendal-daniels", "harold-perkins", "anterio-thompson", "ethan-onianwa"];
  const drafted = PLAYERS.filter((p) => rookies.some((id) => p.id?.startsWith(id.split("-")[0]))).length || 6;
  const pupir = PLAYERS.filter((p) => ["pup", "ir", "nfi", "suspended"].includes(p.status)).length;
  const tagged = 1; // Pitts

  const bijan  = playerById("bijan");
  const london = playerById("drake-london");
  const penix  = playerById("penix-jr");
  const bates  = playerById("bates");

  const qbRoom = topByPosition(["QB"], 3);
  const edgeRoom = topByPosition(["EDGE"], 3);

  const open = (p) => p && setSelected(p);

  return (
    <MagazineShell activeKey="roster" setView={setView}>

      {/* COVER */}
      <section className="roster-cover">
        <div className="lede">
          <div className="kicker-row">
            <span className="feature-badge">Cover · The Fifty-Three</span>
            <span className="kicker">Department III · The Roster</span>
            <span className="kicker-rule"></span>
          </div>

          <h1>The <span className="em">Fifty-Three.</span></h1>

          <p className="deck">
            Ninety became fifty-three on Sunday's moved-up cutdown. Atlanta kept four quarterbacks, traded for Gervon Dexter, and let some surprises go. Stefanski's first Falcons roster is set, and the seating chart hardens now for the Sept 13 opener at Pittsburgh.
          </p>

          <div className="byline">
            BY <span className="author">THE TRACKER DESK</span>
            &nbsp;·&nbsp; <span className="m-mute">FILED FROM FLOWERY BRANCH · AUG 31</span>
          </div>

          <div className="anatomy">
            <div className="b"><div className="k">Roster</div><div className="v">{activeCount}</div><div className="s">INITIAL 53</div></div>
            <div className="b"><div className="k">Reserve</div><div className="v">{String(reserveCount).padStart(2, "0")}</div><div className="s">IR · PUP · SUSP</div></div>
            <div className="b"><div className="k">QBs Kept</div><div className="v ox">{String(qbCount).padStart(2, "0")}</div><div className="s">TUA·PENIX·RUSH·STRAND</div></div>
            <div className="b"><div className="k">Cut Day</div><div className="v">37</div><div className="s">MOVED OFF · AUG 30</div></div>
            <div className="b"><div className="k">Added</div><div className="v ox">01</div><div className="s">DEXTER · TRADE</div></div>
            <div className="b"><div className="k">Drafted</div><div className="v">{String(drafted).padStart(2, "0")}</div><div className="s">'26 CLASS</div></div>
            <div className="b"><div className="k">Pro Bowls</div><div className="v">08</div><div className="s">BIJAN · BATES · LINDSTROM</div></div>
            <div className="b"><div className="k">All-Pros</div><div className="v ox">04</div><div className="s">BIJAN · BATES</div></div>
          </div>
        </div>

        <div className="collage">
          <div className="num">53</div>
          <CollageTile className="t1" player={bijan}  label="B. ROBINSON · #7" />
          <CollageTile className="t2" player={london} label="D. LONDON · #5" />
          <CollageTile className="t3" player={penix}  label="M. PENIX JR. · #9" />
          <CollageTile className="t4" player={bates}  label="J. BATES III · #3" />
          <div className="center">
            <div className="k">— FALCONS · ROSTER 2026 · THE INITIAL 53 —</div>
          </div>
          <div className="halftone"></div>
        </div>
      </section>

      {/* ROOM SPOTLIGHTS */}
      <section className="rooms">
        <RoomSpotlight
          num="I."
          kk="The Room · Three Deep"
          name="The"
          emName="Quarterback"
          tail=" Room"
          meta1="QB1 OPEN"
          meta2="WK 1 TBD"
          rows={qbRoom.map((p, i) => ({ ...roomRowFor(p, i, "qb"), _p: p }))}
          onSelect={open}
        />
        <RoomSpotlight
          num="II."
          kk="The Room · The Pearce Question"
          name="The"
          emName="Edge"
          tail=" Rotation"
          meta1="EBIKETIE → PHI"
          meta2="DISCIPLINE PENDING"
          rows={edgeRoom.map((p, i) => ({ ...roomRowFor(p, i, "edge"), _p: p }))}
          onSelect={open}
        />
      </section>

      {/* PULL QUOTE */}
      <section className="pullquote">
        <q>If a rookie earns a role and Week 1 he's ready to go, then he'll be out there. The goal is to learn our system.</q>
        <cite>— Head Coach <span className="nm">Kevin Stefanski</span> · on the depth ladder</cite>
      </section>

      {/* THE STARTING ELEVEN */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The Starting <span className="em">Eleven</span></div>
          <div className="meta">Base personnel · 11 pers. offense · Nickel (4-2-5) defense · five defensive backs</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="eleven">
        <ElevenSide title="Offense" scheme={BASE_OFFENSE.scheme} units={BASE_OFFENSE.units} onSelect={open} />
        <ElevenSide title="Defense" scheme={BASE_DEFENSE.scheme} units={BASE_DEFENSE.units} onSelect={open} />
      </section>

      {/* THE LADDER */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Ladder</span></div>
          <div className="meta">Thirteen position rooms · Full depth · Starter to fringe · Page 10</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="ladder">
        <div className="heads">
          <div className="h">Position</div>
          <div className="h depth-1">▎ Starter · 1</div>
          <div className="h">Backup · 2</div>
          <div className="h">Reserve · 3</div>
          <div className="h">Fringe · 4</div>
        </div>

        {ROOM_LADDER.map((room) => {
          // Show EVERY body in the room (starter → fringe), sorted by depth.
          // Rooms deeper than 4 wrap to additional rows via the .slots grid,
          // so nobody gets chopped. Pad only to fill the first row of 4.
          const players = PLAYERS
            .filter((p) => room.positions.includes(p.position))
            .sort((a, b) => (a.depthRank ?? 9) - (b.depthRank ?? 9));
          const padTo = Math.max(4, Math.ceil(players.length / 4) * 4);
          const slots = Array.from({ length: padTo }, (_, i) => players[i] || null);

          return (
            <div key={room.code} className="lrow">
              <div className="pos">
                <div className="n">{room.code}</div>
                <div className="l">{room.label}</div>
              </div>
              <div className="slots">
                {slots.map((p, i) => {
                  if (!p) {
                    return (
                      <div key={i} className="slot empty">
                        <div className="snm">— open camp body —</div>
                      </div>
                    );
                  }
                  const cls = ["slot", "clickable"];
                  if (i === 0) cls.push("starter");
                  const flags = slotFlags(p);
                  if (flags) cls.push(flags);
                  const college = (p.college || "").slice(0, 4).toUpperCase();
                  const note = slotNote(p);
                  return (
                    <div
                      key={p.id}
                      className={cls.join(" ")}
                      onClick={() => open(p)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") open(p); }}
                    >
                      <div className="slot-row">
                        <div className="ladder-photo">
                          <div className="bg"></div>
                          {p.image && <img src={p.image} alt="" />}
                          <div className="halftone"></div>
                        </div>
                        <div className="slot-text">
                          <div className="jn">#{p.number} · {college}</div>
                          <div className="snm">{shortName(p.name)}</div>
                          {note && <div className="snote">{note}</div>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <MagazinePlayerModal player={selected} onClose={() => setSelected(null)} />

    </MagazineShell>
  );
}

function ElevenSide({ title, scheme, units, onSelect }) {
  return (
    <div className="eleven-side">
      <div className="eleven-head">
        <span className="side">{title}</span>
        <span className="scheme">{scheme}</span>
      </div>
      {units.map((u) => (
        <div key={u.label} className="eleven-unit">
          <div className="ulabel">{u.label}</div>
          <div className="ugrid">
            {u.slots.map((slot, i) => {
              const p = starterFor(slot.pos, slot.slot);
              const cls = ["ecard"];
              if (slot.highlight) cls.push("hot");
              if (p) cls.push("clickable");
              return (
                <div
                  key={slot.role + i}
                  className={cls.join(" ")}
                  onClick={p ? () => onSelect?.(p) : undefined}
                  role={p ? "button" : undefined}
                  tabIndex={p ? 0 : undefined}
                  onKeyDown={p ? (e) => { if (e.key === "Enter" || e.key === " ") onSelect?.(p); } : undefined}
                >
                  <div className="erole">{slot.role}</div>
                  <div className="ename">{p ? shortName(p.name) : "—"}</div>
                  <div className="enum">{p ? `#${p.number ?? "—"}` : "unfilled"}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function CollageTile({ className, player, label }) {
  return (
    <div className={`tile ${className}`}>
      <div className="bg"></div>
      {player?.image && <img src={player.image} alt="" />}
      <div className="name">{label}</div>
    </div>
  );
}

function RoomSpotlight({ num, kk, name, emName, tail, meta1, meta2, rows, onSelect }) {
  return (
    <div className="room">
      <div className="head">
        <div className="num">{num}</div>
        <div className="ttl">
          <div className="kk">{kk}</div>
          <div className="nm">{name} <span className="em">{emName}</span>{tail}</div>
        </div>
        <div className="meta">{meta1}<br/>{meta2}</div>
      </div>

      <div className="roomlist">
        {rows.map((r, i) => (
          <div
            key={i}
            className={`roomrow${i === 0 ? " starter" : ""}${r._p ? " clickable" : ""}`}
            onClick={r._p ? () => onSelect?.(r._p) : undefined}
            role={r._p ? "button" : undefined}
            tabIndex={r._p ? 0 : undefined}
            onKeyDown={r._p ? (e) => { if (e.key === "Enter" || e.key === " ") onSelect?.(r._p); } : undefined}
          >
            <div className="photo">
              <div className="bg"></div>
              {r.image && <img src={r.image} alt="" />}
              <div className="duo"></div>
              <div className="ht"></div>
              <div className="jn">{r.number}</div>
            </div>
            <div className="info">
              <div className="ranktag">{r.ranktag}</div>
              <div className="nm">{r.name}</div>
              <div className="pmeta">
                #{r.number}<span className="dot">●</span>{r.college}
                {r.tag && <><span className="dot">●</span>{r.tag}</>}
              </div>
              {r.quote && <div className="quote">{r.quote}</div>}
            </div>
            <div className="right">
              <div className="stat"><div className="k">{r.statk}</div><div className="v">{r.statv}</div></div>
              <span className={`pos-chip ${r.posChip}`}>{r.posChipText}</span>
              <div className={`status${r.statusCls ? " " + r.statusCls : ""}`}>{r.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function roomRowFor(p, i, chipKey) {
  if (!p) return {};
  // Tailored to QB + EDGE rooms per the design.
  const isQB = chipKey === "qb";
  let ranktag = "○ Reserve";
  if (i === 0) ranktag = isQB ? "▎ Starter · QB1 in waiting" : "▎ Starter · the franchise edge";
  else if (i === 1) ranktag = isQB ? "▶ Backup · taking QB1 reps" : "▶ Co-starter · case pending";
  else ranktag = isQB ? "○ Reserve · veteran mentor" : "○ Vet rotation";

  const stat = pickRoomStat(p, isQB, i);
  const statusInfo = pickRoomStatus(p, isQB, i);
  const quote = i === 0 ? pickRoomQuote(p, isQB) : null;
  const college = (p.college || "").toUpperCase();
  const tag = p.acquired?.includes("draft") ? p.acquired.replace("draft-", "") : (p.id === "tua" ? "1-YR / $1.3M" : null);

  return {
    image: p.image,
    number: p.number,
    ranktag,
    name: p.name,
    college,
    tag,
    quote,
    statk: stat.k,
    statv: stat.v,
    posChip: chipKey,
    posChipText: chipKey.toUpperCase(),
    status: statusInfo.text,
    statusCls: statusInfo.cls,
  };
}

function pickRoomStat(p, isQB, i) {
  if (isQB) {
    if (p.id === "penix-jr") return { k: "'25 RATING", v: p.stats?.qbRating || "88.5" };
    if (p.id === "tua")      return { k: "WK-1 ODDS", v: "-136" };
    return { k: "YR EXP.", v: String(p.experience ?? 10) };
  }
  // EDGE
  if (p.stats?.sacks)  return { k: "'25 SACKS", v: String(p.stats.sacks) };
  if (i === 1)         return { k: "PRETRIAL", v: "6 MO." };
  return { k: "'25 SACKS", v: "—" };
}

function pickRoomStatus(p, isQB, i) {
  if (p.status === "pup") return { text: "● PUP — RAMP", cls: "pup" };
  if (p.status === "ir")  return { text: "● IR", cls: "pup" };
  if (p.id === "tua")     return { text: "★ FAV · 57.6%", cls: "tag" };
  if (p.id === "pearce-j" || p.id === "pearce") return { text: "⌛ DISCIPLINE TBD", cls: "pup" };
  if (i === 2 && isQB)    return { text: "○ ROOM", cls: "" };
  return { text: "● ACTIVE", cls: "" };
}

function pickRoomQuote(p, isQB) {
  if (isQB && p.id === "penix-jr") {
    return `"Right where he needs to be." — six months removed from the November ACL; threw a clean Phase II rep to Drake London.`;
  }
  if (!isQB) {
    return `Sophomore leap year. The rotation behind him got thinner by the day — Ebiketie's gone, Pearce's case is open.`;
  }
  return null;
}
