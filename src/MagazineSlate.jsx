import { useMemo } from "react";
import { SCHEDULE_2026, TEAM_LOGOS } from "./playerData.js";
import { MagazineShell } from "./MagazineView.jsx";
import bullFightingPhoto from "./assets/bull-fighting.jpeg";

const PRIMETIME_KICK = /8:|9:30/;
const PRIMETIME_TV = /PRIME|ESPN|NBC|AMAZON|NFL NETWORK/i;

function badgeFor(w, fmtNotes) {
  if (w.status === "bye") return "CLOSED";
  if (w.week === 1) return "OPENER";
  if (w.week === 2) return "HOME OPENER";
  if (w.opponent === "CIN") return "MADRID";
  if (w.opponent === "CLE" && w.side === "away") return "HOMECOMING";
  const tv = (w.tv || "").toUpperCase();
  if (PRIMETIME_TV.test(tv) && PRIMETIME_KICK.test(w.kickoffET || "")) {
    if (/AMAZON/.test(tv)) return "TNF";
    if (/ESPN/.test(tv))   return "MNF";
    if (/NBC/.test(tv))    return "SNF";
  }
  if (w.tv === "TBD" || w.kickoffET === "TBD") return "FLEX";
  return "";
}

function classFor(w) {
  if (w.status === "bye") return "week bye";
  const tv = (w.tv || "").toUpperCase();
  const prime = PRIMETIME_TV.test(tv) && PRIMETIME_KICK.test(w.kickoffET || "");
  if (prime) return "week prime";
  if (w.week === 1 || w.opponent === "CIN" || (w.opponent === "CLE" && w.side === "away")) return "week featured";
  return "week";
}

function noteFor(w) {
  return w.note || "—";
}

function netLabel(w) {
  const tv = (w.tv || "").toUpperCase();
  if (tv.startsWith("AMAZON")) return "PRIME";
  if (tv.startsWith("NFL NETWORK")) return "NFLN";
  return tv;
}

// Parse the ISO date at local noon so the weekday/day never rolls back to the
// previous day in timezones behind UTC (e.g. "2026-09-13" is a Sunday, but
// `new Date("2026-09-13")` is UTC midnight = Sat evening in ET → wrong day).
function gameDate(w) {
  return new Date(w.date + "T12:00:00");
}

function dayLine(w) {
  if (w.status === "bye") return "— · —";
  const day = gameDate(w).toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  return `${w.kickoffET} · ${day}`;
}

function dateShort(w) {
  return gameDate(w).toLocaleDateString("en-US", { month: "short", day: "2-digit" }).toUpperCase();
}

function venueShort(w) {
  return (w.venue || "").toUpperCase();
}

export default function MagazineSlate({ setView }) {
  const slate = SCHEDULE_2026;

  const act1 = slate.filter((w) => w.week >= 1 && w.week <= 6);
  const act2 = slate.filter((w) => w.week >= 7 && w.week <= 12);
  const act3 = slate.filter((w) => w.week >= 13 && w.week <= 18);

  const primeCount = slate.filter((w) => {
    const tv = (w.tv || "").toUpperCase();
    return PRIMETIME_TV.test(tv) && PRIMETIME_KICK.test(w.kickoffET || "");
  }).length;
  const flexCount = slate.filter((w) => w.tv === "TBD" || w.kickoffET === "TBD").length;
  const homeCount = slate.filter((w) => w.side === "home").length;
  const awayCount = slate.filter((w) => w.side === "away").length;
  const divisional = slate.filter((w) => ["CAR", "NO", "TB"].includes(w.opponent)).length;

  return (
    <MagazineShell activeKey="slate" setView={setView}>

      {/* COVER FEATURE — MADRID */}
      <section className="madrid">
        <div className="text">
          <div className="kicker-row">
            <span className="feature-badge">Cover · Schedule '26</span>
            <span className="kicker">Department II · The Schedule</span>
            <span className="kicker-rule"></span>
          </div>

          <h1>
            Eighteen weeks.<br/>
            <span className="em">One bye.</span><br/>
            <span className="gold">&amp;</span> a flight to Madrid.
          </h1>

          <p className="deck">
            Three straight primetime out of the gate. The Bernabéu in Week 9. Stefanski's homecoming at Cleveland.
            A closing stretch with three divisional dates in four. The fifth-easiest opponent set in the league — on paper.
          </p>

          <div className="byline">
            BY <span className="author">THE TRACKER DESK</span>
            &nbsp;·&nbsp; <span className="m-mute">FILED FROM ATLANTA · MAY 14, 8 PM</span>
          </div>

          <div className="stats">
            <div className="b"><div className="k">SoS '25</div><div className="v">.465</div><div className="s">5TH-EASIEST</div></div>
            <div className="b"><div className="k">Primetime</div><div className="v">{String(primeCount).padStart(2, "0")}</div><div className="s">WK 3 · 4 · 5</div></div>
            <div className="b"><div className="k">Divisional</div><div className="v">{String(divisional).padStart(2, "0")}</div><div className="s">TB · NO · CAR ×2</div></div>
            <div className="b"><div className="k">International</div><div className="v ox">01</div><div className="s">BERNABÉU · WK 9</div></div>
          </div>
        </div>

        <div className="postcard">
          <img className="photo" src={bullFightingPhoto} alt="Bullfight at sunset — Madrid" />
          <div className="photo-tint"></div>
          <div className="halftone"></div>
          <div className="frame"></div>
          <div className="corner-tl"></div>
          <div className="corner-tr"></div>
          <div className="corner-bl"></div>
          <div className="corner-br"></div>

          <div className="city">
            <div className="k">— PAR AVION —</div>
            <h2>Madrid.</h2>
            <div className="sub">Estadio Santiago Bernabéu · 9:30 AM ET</div>
          </div>

          <div className="stamp">
            <div className="l">WEEK<br/>NINE</div>
            <div className="h">N°9</div>
            <div className="d">NOV · 08<br/>· 2026 ·</div>
          </div>

          <div className="matchup">
            <div className="t"><div className="c">ATL</div><div className="n">FALCONS · HOST</div></div>
            <div className="vs">vs.</div>
            <div className="t"><div className="c">CIN</div><div className="n">BENGALS</div></div>
          </div>

          <div className="caption">— FROM ATLANTA, WITH LOVE · NFL NETWORK EXCLUSIVE —</div>
        </div>
      </section>

      {/* STRENGTH OF SCHEDULE STRIP */}
      <section className="sos">
        <div className="label">
          <div className="k">DEPT.</div>
          <div className="v">By the Schedule</div>
        </div>
        <div className="cell"><div className="k">Opener</div><div className="v">PIT</div><div className="s">SEP 13 · 1PM · FOX</div></div>
        <div className="cell"><div className="k">Home / Away</div><div className="v">{homeCount} / {awayCount}</div><div className="s">+ MADRID HOME</div></div>
        <div className="cell"><div className="k">Bye</div><div className="v ox">11</div><div className="s">NOV 22 · POST-KC</div></div>
        <div className="cell"><div className="k">Flex</div><div className="v">{String(flexCount).padStart(2, "0")}</div><div className="s">WK 16 · 18</div></div>
        <div className="cell"><div className="k">Closer</div><div className="v">CAR</div><div className="s">JAN 10 · BOA</div></div>
        <div className="cell"><div className="k">Last Year</div><div className="v">8—9</div><div className="s">7TH STRAIGHT MISS</div></div>
      </section>

      {/* ACT I */}
      <ActBlock act="I." kk="Act One · Weeks 01—06" nm="The" emName="Opening Stand" meta={"SEP 13 — OCT 18"} meta2={"4 OF 6 ON ESPN / NBC / AMAZON"} games={act1} />

      {/* ACT II */}
      <ActBlock act="II." kk="Act Two · Weeks 07—12" nm="Across the" emName="Atlantic" meta={"OCT 25 — NOV 29"} meta2={"BYE WEEK 11 · POST-MADRID"} games={act2} />

      {/* ACT III */}
      <ActBlock act="III." kk="Act Three · Weeks 13—18" nm="The" emName="Stretch" meta={"DEC 06 — JAN 10"} meta2={"3 OF LAST 4 DIVISIONAL"} games={act3} />

      {/* PULL QUOTE */}
      <section className="pullquote">
        <q>Three straight under the lights. Two flex spots. One trip to a soccer cathedral. The toughest part of this calendar is whether the team is ready by Week 3.</q>
        <cite>— EDITOR'S NOTE · <span className="nm">The Tracker Desk</span> · May 14</cite>
      </section>

      {/* THREE TO CIRCLE */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">Three to <span className="em">Circle</span></div>
          <div className="meta">The Schedule's biggest swings · Page 07</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="featured-matchups">
        <div className="row">
          <div className="card">
            <div className="num">N°1</div>
            <div className="k">SEP 24 · WEEK 03 · TNF</div>
            <h3>Lambeau, <span className="em">under the lights.</span></h3>
            <div className="meta">@ GREEN BAY · 8:15 PM ET · AMAZON</div>
            <p>The first national look at whichever quarterback wins the seat. <span className="em">Three primetime games in twelve days</span> — Falcons need to be installed by mid-September, not mid-October.</p>
          </div>
          <div className="card">
            <div className="num">N°2</div>
            <div className="k">NOV 08 · WEEK 09 · INTL</div>
            <h3>The Bernabéu, <span className="em">at sunrise.</span></h3>
            <div className="meta">vs CINCINNATI · 9:30 AM ET · NFLN</div>
            <p>9:30 AM ET kickoff in Madrid means a Saturday-morning routine and a Tuesday flight. <span className="em">Falcons' 6th international game</span> and 5th European trip in six seasons.</p>
          </div>
          <div className="card">
            <div className="num">N°3</div>
            <div className="k">DEC 13 · WEEK 14 · CLE</div>
            <h3>Stefanski's <span className="em">homecoming.</span></h3>
            <div className="meta">@ CLEVELAND · 1:00 PM ET · CBS</div>
            <p>Six seasons in Cleveland. Two Coach of the Year awards. Atlanta's coach goes back to the building that hired him in 2020 for a December afternoon — <span className="em">circle it.</span></p>
          </div>
        </div>
      </section>

    </MagazineShell>
  );
}

function ActBlock({ act, kk, nm, emName, meta, meta2, games }) {
  return (
    <section className="slate-block">
      <div className="block-head">
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <div className="actno">{act}</div>
          <div className="ttl">
            <div className="kk">{kk}</div>
            <div className="nm">{nm} <span className="em">{emName}</span></div>
          </div>
        </div>
        <div></div>
        <div className="meta">{meta}<br/>{meta2}</div>
      </div>

      <div className="slate-grid">
        {games.map((w) => {
          const badge = badgeFor(w);
          const cls = classFor(w);
          const isBye = w.status === "bye";
          const logo = !isBye ? TEAM_LOGOS[w.opponent] : null;
          return (
            <div key={w.week} className={cls}>
              {badge && <div className="wkbadge">{badge}</div>}
              <div className="week-num">{String(w.week).padStart(2, "0")}</div>
              {logo && <img className="watermark-logo" src={logo} alt={w.opponent} />}
              <div className="top">
                <span className="wk">WEEK {String(w.week).padStart(2, "0")}</span>
                <span className={`ha${w.side === "away" ? " away" : ""}`}>
                  {isBye ? "— BYE —" : (w.side === "away" ? "@ AWAY" : "vs HOME")}
                </span>
              </div>
              <div className="matchup-row">
                {logo && <img className="opp-logo" src={logo} alt={w.opponent} />}
                <div className="opp">
                  {isBye ? "BYE" : (
                    <>{w.side === "away" && <span className="lt">@ </span>}{w.opponent}</>
                  )}
                </div>
              </div>
              <div className="opname">{isBye ? "no game scheduled" : w.opponentName}</div>
              <div className="when">
                <span className="d">{dateShort(w)}</span>
                <span className="t">{dayLine(w)}</span>
                {!isBye && <span className="tv">{netLabel(w)}</span>}
              </div>
              <div className="venue">{isBye ? "FLOWERY BRANCH · REST WEEK" : venueShort(w)}</div>
              <div className="note">{noteFor(w)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
