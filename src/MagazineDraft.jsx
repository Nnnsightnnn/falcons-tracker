import { DRAFT_DATA } from "./draftData.js";
import { MagazineShell, formatRoman, POS_CLASS, jerseyByName, viaFrom, playerById } from "./MagazineView.jsx";

// Pick # → rookie player id (in PLAYERS) for headshot lookup
const PICK_TO_PLAYER_ID = {
  48:  "avieon-terrell",
  79:  "zachariah-branch",
  134: "kendal-daniels",
  208: "anterio-thompson",
  215: "harold-perkins",
  231: "ethan-onianwa",
};

const GRADES = {
  48:  { letter: "A", plus: "+", note: "unanimous" },
  79:  { letter: "A", plus: "−", note: "Day-1 producer" },
  134: { letter: "B", plus: "+", note: "Cheetah hybrid" },
  208: { letter: "B", plus: "",  note: "blocked-kick flyer" },
  215: { letter: "B", plus: "−", note: "swing on talent" },
  231: { letter: "C", plus: "+", note: "length flyer" },
};

const TRADES = [
  {
    pos: "I.",
    what: "Sent #122 (Sydney Brown trade asset) to Las Vegas.",
    got:  "Got #134 + #208 from LV (Daniels + Thompson).",
  },
  {
    pos: "II.",
    what: "Traded DT Ruke Orhorhoro to JAX.",
    got:  "Got DT Maason Smith (player-for-player).",
  },
  {
    pos: "III.",
    what: "Sent picks 114 + 197 to PHI.",
    got:  "Got S Sydney Brown + picks 122 + 215.",
  },
];

const UDFA_WAVE = [
  "DT Carlos Allen", "C James Brockermeyer", "RB Cash Jones", "OL Kam Dewberry",
  "OT Riley Mahlman", "WR Vinny Anthony II", "WR Malik Rutherford", "WR Keelan Marion",
  "QB Strand", "OT Mahlman", "G Dewberry", "TE Velling",
  "DL Nunnally IV", "CB Dewalt IV",
];

export default function MagazineDraft({ setView }) {
  const picks = DRAFT_DATA.falconsPicks.filter((p) => p.status === "made");

  return (
    <MagazineShell activeKey="draft" setView={setView}>

      {/* GRADE COVER */}
      <section className="grade-cover">
        <div className="lede">
          <div className="kicker-row">
            <span className="feature-badge">Cover · The Class</span>
            <span className="kicker">Department IV · Class of '26</span>
            <span className="kicker-rule"></span>
          </div>

          <h1 style={{ fontFamily: "var(--m-display)", fontSize: 96, lineHeight: 0.88, letterSpacing: "-0.022em", margin: 0, color: "var(--ink)" }}>
            No first.<br/>
            <span style={{ fontStyle: "italic", color: "var(--oxblood)" }}>Six picks.</span><br/>
            <span style={{ fontStyle: "italic", color: "var(--m-gold)" }}>&amp;</span> a B+.
          </h1>

          <p className="deck" style={{ fontFamily: "var(--m-serif)", fontStyle: "italic", fontSize: 19, lineHeight: 1.4, color: "var(--ink-2)", margin: "22px 0 0", maxWidth: 540 }}>
            Cunningham's first draft as a GM ended at 12:24 AM Sunday. Two trades, one tradeback, six rookies on the bus. The national panorama: B / B+, edge-rusher gap as the chief critique.
          </p>

          <div className="byline" style={{ marginTop: 22, fontFamily: "var(--m-cond)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink-2)" }}>
            BY <span style={{ color: "var(--ink)", fontWeight: 600 }}>THE TRACKER DESK</span>
            &nbsp;·&nbsp; <span className="m-mute">FILED FROM ATLANTA · APR 27</span>
          </div>

          <div style={{
            marginTop: 28, display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)",
          }}>
            {[
              { k: "Picks Made", v: String(picks.length).padStart(2, "0"), s: "RD 2 → RD 7" },
              { k: "Top Grade",  v: "A+", s: "AVIEON · #48" },
              { k: "UDFA Wave",  v: "14", s: "SIGNED MAY 7" },
            ].map((c) => (
              <div key={c.k} style={{ padding: "12px 14px", borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
                <div style={{ fontFamily: "var(--m-cond)", fontSize: 9, letterSpacing: "0.24em", color: "var(--ink-mute)", textTransform: "uppercase" }}>{c.k}</div>
                <div style={{ fontFamily: "var(--m-display)", fontSize: 30, lineHeight: 1, marginTop: 4, color: "var(--ink)" }}>{c.v}</div>
                <div style={{ fontFamily: "var(--m-mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--ink-mute)", marginTop: 4 }}>{c.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="gradepanel">
          <div className="halftone"></div>
          <div className="frame"></div>
          <div className="k">— NATIONAL CONSENSUS —</div>
          <div className="big">B<span className="plus">/B+</span></div>
          <div className="sub">"Edge-rusher gap is the chief critique." NFL.com Reuter <em>B−</em>, CBS Bahns <em>B+</em>.</div>
          <div className="source">CONSENSUS · APR 27 · 2026</div>
        </div>
      </section>

      {/* SCOUT CARDS */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Six</span></div>
          <div className="meta">Cunningham's class · scout cards · pick by pick</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="scout-cards">
        <div className="scout-grid">
          {picks.map((pick) => {
            const target = DRAFT_DATA.topTargets.find((t) => t.projection?.includes("#" + pick.overallPick));
            const grade = GRADES[pick.overallPick] || { letter: "B", plus: "", note: "" };
            const isFeature = pick.overallPick === 48;
            const playerName = (pick.selection || "").split(" · ")[0] || "—";
            const college = target?.college || (pick.selection || "").split(" · ")[2] || "";
            const pos = pick.selection?.split(" · ")[1] || "";
            const isVia = !!pick.tradeNote && pick.tradeNote.startsWith("Acquired");
            const jersey = jerseyByName(playerName);
            const combine = target?.combine;
            const p = playerById(PICK_TO_PLAYER_ID[pick.overallPick]);
            return (
              <article key={pick.overallPick} className={`scout${isFeature ? " feature" : ""}`}>
                <div className="stamp">{isVia ? `VIA ${viaFrom(pick.tradeNote)}` : "ORIG. ATL"}</div>
                {p?.image && (
                  <div style={{
                    position: "relative", width: "100%", aspectRatio: "16 / 10",
                    overflow: "hidden", marginBottom: 14,
                    background: "linear-gradient(180deg, #3a261a, #0b0704)",
                    border: "1px solid var(--rule)",
                  }}>
                    <img src={p.image} alt={playerName}
                      style={{
                        position: "absolute", bottom: "-6%", left: "50%",
                        transform: "translateX(-50%)", height: "118%", width: "auto",
                        filter: "sepia(0.3) saturate(0.75) contrast(1.04)",
                        mixBlendMode: "lighten",
                      }} />
                    <div style={{
                      position: "absolute", inset: 0,
                      backgroundImage: "radial-gradient(rgba(20,12,5,0.45) 1px, transparent 1.2px)",
                      backgroundSize: "4px 4px", mixBlendMode: "multiply", opacity: 0.4,
                    }} />
                  </div>
                )}
                <div className="pk"><span className="em">#</span>{pick.overallPick}</div>
                <div className="rd">Round {formatRoman(pick.round)} · {pos}</div>
                <div className="nm">{playerName}{jersey ? ` · #${jersey}` : ""}</div>
                <div className="col">{college}</div>
                <div className="grade">{grade.letter}{grade.plus} <span style={{ fontStyle: "normal", fontFamily: "var(--m-cond)", fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-mute)", marginLeft: 6 }}>{grade.note}</span></div>

                {target && (
                  <div className="measurables">
                    <div className="t"><div className="k">HT</div><div className="v">{formatHeight(target.heightIn)}</div></div>
                    <div className="t"><div className="k">WT</div><div className="v">{target.weight ?? "—"}</div></div>
                    <div className="t"><div className="k">AGE</div><div className="v">{target.age ?? "—"}</div></div>
                    <div className="t"><div className="k">40</div><div className="v">{combine?.fortyYd || target.fortyTime || "—"}</div></div>
                  </div>
                )}

                <div className="blurb">{target?.fit || pick.selectionNote || ""}</div>

                {(target?.strengths?.length || target?.concerns?.length) && (
                  <div className="swot">
                    <div className="col-s">
                      <h6>Strengths</h6>
                      <ul>
                        {(target.strengths || []).map((s) => (
                          <li key={s}><span className="plus">+</span> {s}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-s">
                      <h6>Concerns</h6>
                      <ul>
                        {(target.concerns || []).map((c) => (
                          <li key={c}><span className="minus">−</span> {c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {target?.playerComp && (
                  <div className="comp">
                    <span className="lbl">NFL comp: </span>
                    <em>{target.playerComp}</em>
                    {target.playerCompSource && <span className="src"> · {target.playerCompSource}</span>}
                  </div>
                )}

                {target?.collegeProduction && (
                  <div className="prod">{target.collegeProduction}</div>
                )}

                {target?.otaStatus && (
                  <div className="ota-pill">OTA Week 1 · {target.otaStatus}</div>
                )}

                {combine && (
                  <>
                    <div className="testing">
                      <div className="t"><div className="k">FORTY</div><div className="v">{combine.fortyYd || "—"}</div></div>
                      <div className="t"><div className="k">VERT</div><div className="v">{combine.verticalIn ? `${combine.verticalIn}"` : "—"}</div></div>
                      <div className="t"><div className="k">BENCH</div><div className="v">{combine.benchReps ?? "—"}</div></div>
                    </div>
                    {combine.note && (
                      <div className="testing-note">{combine.source === "combine" ? "Combine · Indianapolis" : "Pro Day"} — {combine.note}</div>
                    )}
                  </>
                )}

                {target?.proProjection && (
                  <div className="projection">{target.proProjection}</div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="pullquote">
        <q>Build through the trenches.</q>
        <cite>— General Manager <span className="nm">Iggy Cunningham</span> · first press conference</cite>
      </section>

      {/* TRADE LEDGER */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Trade Ledger</span></div>
          <div className="meta">Three moves · pre-draft and during the call · Page 14</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="ledger">
        <div className="row head">
          <div>POSITION</div>
          <div>SENT</div>
          <div>RECEIVED</div>
        </div>
        {TRADES.map((t, i) => (
          <div key={i} className="row">
            <div className="pos">{t.pos}</div>
            <div className="what">{t.what}</div>
            <div className="got">{t.got}</div>
          </div>
        ))}
      </section>

      {/* UDFA WAVE */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">UDFA Wave</span></div>
          <div className="meta">Fourteen signed off rookie minicamp · May 7</div>
        </div>
        <div className="rule"></div>
      </div>

      <section style={{
        padding: "20px 40px 36px", borderBottom: "1px solid var(--rule)",
      }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)",
          background: "var(--paper-soft)",
        }}>
          {UDFA_WAVE.map((name) => (
            <div key={name} style={{
              padding: "12px 14px",
              borderRight: "1px solid var(--rule-soft)",
              borderBottom: "1px solid var(--rule-soft)",
              fontFamily: "var(--m-cond)", fontSize: 12, letterSpacing: "0.10em",
              color: "var(--ink-2)", textTransform: "uppercase",
            }}>
              <span style={{ color: "var(--oxblood)", marginRight: 8 }}>·</span>{name}
            </div>
          ))}
        </div>
      </section>

    </MagazineShell>
  );
}

function formatHeight(inches) {
  if (!inches) return "—";
  const ft = Math.floor(inches / 12);
  const inch = inches % 12;
  return `${ft}'${inch}"`;
}
