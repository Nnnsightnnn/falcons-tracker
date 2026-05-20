import { useMemo } from "react";
import { NEWS_DIGEST, INTERVIEWS } from "./playerData.js";
import { MagazineShell } from "./MagazineView.jsx";

const CALENDAR = [
  { d: "MAY 18", what: <span><span className="em">Day 1 on grass</span> — voluntary, no pads, no live tackling.</span> },
  { d: "MAY 19", what: <span>Day 2. <span className="em">First media window</span> — Stefanski + Cunningham + Tua + London + Bates.</span> },
  { d: "MAY 21", what: <span>Day 3 · open media.</span> },
  { d: "MAY 26-27", what: <span>Days 4–5 · two-a-day-style installs.</span> },
  { d: "MAY 29", what: <span>Day 6 · final week before break.</span> },
  { d: "JUN 8-9",  what: <span>Days 7–8 · CB2 battle live.</span> },
  { d: "JUN 11",   what: <span>Final voluntary day.</span> },
  { d: "JUN 16-18", what: <span><span className="em">Mandatory veteran minicamp.</span> Attendance not optional.</span> },
];

const TICKER = [
  "MEDIA DAY 1 · STEFANSKI & CUNNINGHAM OPEN THE OTA WINDOW",
  "TUA TAKES QB1 REPS · PENIX RAMPING",
  "AVIEON TERRELL HAMSTRING \"100 PERCENT\"",
  "LONDON EXT. PROJECTED 4YR / $135M",
  "BIJAN DEAL \"THIS OFFSEASON\" — SCHEFTER",
];

const BEAT_MAP = {
  contracts:    "contracts",
  injuries:     "football",
  coaching:     "football",
  "free-agency": "football",
  games:        "slate",
  general:      "slate",
};

function shortDetail(detail, n = 240) {
  const first = (detail || "").split(/[.•]\s/)[0];
  return first.length > n ? first.slice(0, n - 3) + "…" : first + (first.endsWith(".") ? "" : ".");
}

function srcLine(detail) {
  return (detail || "").match(/^[^:]+/)?.[0]?.slice(0, 40) || "";
}

function timestamp(detail) {
  // look for date or month in detail
  const m = /\b(May|Apr|Mar|Jun)\s?\d{1,2}/i.exec(detail || "");
  return m ? m[0].toUpperCase() : "—";
}

function formatPressDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase();
}

function titleSplit(title) {
  const parts = title.split(" — ");
  const head = parts[0];
  const tail = parts.slice(1).join(" — ");
  return { head, tail };
}

export default function MagazineWire({ setView }) {
  const topics = NEWS_DIGEST?.topics || [];

  const byBeat = useMemo(() => {
    const out = { contracts: [], football: [], slate: [] };
    topics.forEach((t) => {
      const beat = BEAT_MAP[t.category] || "slate";
      out[beat].push(t);
    });
    return out;
  }, [topics]);

  const sources = (NEWS_DIGEST?.sources || []).slice(0, 48);

  return (
    <MagazineShell activeKey="wire" setView={setView}>

      {/* TICKER */}
      <section className="ticker">
        <span className="live">● LIVE</span>
        <div className="scroll">
          {TICKER.map((t, i) => (
            <span key={i} style={{ display: "inline-flex", gap: 28 }}>
              <span className="it">{t}</span>
              {i < TICKER.length - 1 && <span className="sep">◆</span>}
            </span>
          ))}
        </div>
      </section>

      {/* LEAD FEATURE */}
      <section className="lead-feature">
        <div>
          <div className="kicker-row">
            <span className="feature-badge">Lead Dispatch</span>
            <span className="cat">Coaching · Department VI · The Wire</span>
            <span className="rule"></span>
            <span className="timestamp">TUE 09:00 ET</span>
          </div>

          <h1>Media Day One: the OTA window <span className="em">opens.</span></h1>

          <p className="deck">
            Stefanski, Cunningham, Tua and Drake London take their first periodic media availability of the year.
            Tua takes QB1 reps. Penix continues to ramp. The QB-1-by-Week-1 question gets asked. Nobody answers it.
          </p>

          <div className="byline">
            BY <span className="author">THE TRACKER DESK</span>
            &nbsp;·&nbsp; <span className="m-mute">ATL · ESPN · YAHOO · MAY 19</span>
          </div>

          <div className="lf-body">
            <p>Phase III opened on the field at Flowery Branch yesterday and rolled into Day 2 this morning. Tua took team-period reps with the ones; Drake London caught everything. Bijan Robinson and Brandon Dorlus were both on the grass in Day 1 drills per Yahoo's on-site coverage.</p>
            <p>Penix continues to ramp — six months out from the November ACL, his Phase II throwing rep to London is on the team's social feed. Stefanski's repeat line: <em>"right where he needs to be."</em> Matt Ryan from upstairs: <em>"in a good spot right now,"</em> with the caveat that <em>"we don't really know what to expect at the beginning of training camp."</em></p>
            <p>The Tua vs. Penix Week-1 betting market opens with Tua as the −136 favorite, Penix at +102. Tuesday's media window is the first chance to ask Stefanski directly whether Penix is cleared for any team-period work. He won't be.</p>
          </div>
        </div>

        <aside className="sidebar">
          <div className="corner">— OTA PHASE III · MAY 18 → JUN 18 —</div>
          <h3>The <span className="em">Calendar.</span></h3>
          {CALENDAR.map((e, i) => (
            <div key={i} className="ev">
              <div className="d">{e.d}</div>
              <div className="what">{e.what}</div>
            </div>
          ))}
        </aside>
      </section>

      {/* BROADSHEET COLUMNS */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Wire</span></div>
          <div className="meta">All dispatches · sorted by beat · May 7 — May 19</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="columns">
        <div className="heads">
          <div className="ch"><span className="ic">§</span>Contracts &amp; Cap</div>
          <div className="ch"><span className="ic">§</span>The Football Side</div>
          <div className="ch"><span className="ic">§</span>The Slate &amp; The Building</div>
        </div>

        <div className="cgrid">
          <BeatColumn items={byBeat.contracts} />
          <BeatColumn items={byBeat.football} />
          <BeatColumn items={byBeat.slate} />
        </div>
      </section>

      {/* PRESS ROOM — interview dispatches */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Press Room</span></div>
          <div className="meta">{INTERVIEWS?.windowLabel || "Media availabilities"} · {(INTERVIEWS?.sessions || []).length} sessions on file</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="pressroom">
        {(INTERVIEWS?.sessions || []).slice(0, 4).map((s) => (
          <article key={s.id} className="podium">
            <div className="podium-mast">
              <span className="role">{s.role.toUpperCase()}</span>
              <span className="sep">◆</span>
              <span className="date">{formatPressDate(s.date)}</span>
            </div>
            <h3 className="speaker">{s.speaker}</h3>
            <div className="session">
              <span className="em">{s.session}</span> · {s.venue}
            </div>

            <blockquote className="podium-quote">
              <q>{s.pullQuote}</q>
            </blockquote>

            <p className="podium-summary">{s.summary}</p>

            <ul className="podium-bullets">
              {(s.bullets || []).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="podium-src">
              <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer">↗ Primary source</a>
            </div>
          </article>
        ))}
      </section>

      {/* PULL QUOTE */}
      <section className="pullquote">
        <q>The doors opened at seven. The pads stayed in the closet. The lights went on over Branch Field anyway.</q>
        <cite>— ON THE FIELD · <span className="nm">Day Two of Phase III</span></cite>
      </section>

      {/* SOURCES */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">From the <span className="em">Wires</span></div>
          <div className="meta">Eighty-plus sources behind this week's dispatch · Page 20</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="sources">
        <div className="sources-box">
          <div className="top">
            <div>
              <div className="k">DEPT.</div>
              <div className="v">Tuesday's Source Roll</div>
            </div>
            <div className="meta">UPDATED 09:00 ET · {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase()}</div>
          </div>
          <ul>
            {sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

    </MagazineShell>
  );
}

function BeatColumn({ items }) {
  return (
    <div className="col">
      {items.slice(0, 5).map((t, i) => {
        const { head, tail } = titleSplit(t.title);
        return (
          <article key={i} className={`item${i === 0 ? " top" : ""}`}>
            <div className="top-row">
              <span className="src">{srcLine(t.detail)}</span>
              <span className="ts">{timestamp(t.detail)}</span>
            </div>
            <h3>{head}{tail && " — "}<span className="em">{tail}</span></h3>
            <p>{shortDetail(t.detail, i === 0 ? 280 : 220)}</p>
          </article>
        );
      })}
    </div>
  );
}
