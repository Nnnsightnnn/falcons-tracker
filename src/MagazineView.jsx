import { useMemo, useState, useEffect } from "react";
import {
  PLAYERS,
  NEWS_DIGEST,
  SCHEDULE_2026,
  SEASON_RECAP_2025,
  TEAM_LOGOS,
} from "./playerData.js";
import { DRAFT_DATA } from "./draftData.js";
import { CAP_STATE } from "./capState.js";
import { getCurrentPhase } from "./phases.js";
import "./magazine.css";

// ─── shared helpers ───────────────────────────────────────────────────────
export const playerById = (id) => PLAYERS.find((p) => p.id === id) || null;
export const fmtMoney = (n) => {
  if (n == null) return "—";
  const m = n / 1_000_000;
  return `$${m.toFixed(1)}M`;
};
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
export const formatRoman = (n) => ROMAN[n - 1] || String(n);
export const todayLong = (d) =>
  d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
export const todayShort = (d) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase();
// Surname that ignores generational suffixes, so "Michael Penix Jr." → "Penix"
// (not "Jr.") and "Kyle Pitts Sr." → "Pitts". Mirrors DepthChartView.lastName.
export const surname = (name) => {
  if (!name) return "";
  const parts = name.replace(/\s+(Jr\.?|Sr\.?|II|III|IV|V)$/i, "").trim().split(" ");
  return parts[parts.length - 1] || name;
};

// CoverImage — prefers a custom cover image when present, gracefully
// falls back to the player-headshot if the custom asset 404s (e.g. when
// the file hasn't been produced yet from a queued image-request).
function CoverImage({ customSrc, fallbackSrc }) {
  const initial = customSrc || fallbackSrc || null;
  const [src, setSrc] = useState(initial);
  // Re-sync when either source changes (e.g. on page navigation w/ memo)
  useEffect(() => { setSrc(customSrc || fallbackSrc || null); }, [customSrc, fallbackSrc]);
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      onError={() => {
        // If the custom URL failed and a fallback exists, swap to it.
        if (src === customSrc && fallbackSrc && fallbackSrc !== customSrc) {
          setSrc(fallbackSrc);
        }
      }}
    />
  );
}

// ─── PAGES INDEX (also acts as router/flipnav config) ────────────────────
export const MAG_PAGES = [
  { key: "cover",        label: "Cover",        page: "P.01" },
  { key: "slate",        label: "Schedule",     page: "P.04" },
  { key: "roster",       label: "The Roster",   page: "P.08" },
  { key: "draft",        label: "Class of '26", page: "P.12" },
  { key: "front-office", label: "Front Office", page: "P.16" },
  { key: "wire",         label: "The Wire",     page: "P.18" },
];

// ─── MAGAZINE SHELL ───────────────────────────────────────────────────────
// Used by every page: masthead + flipnav (top) + children + folio (bottom).
// Visually consistent paper background, single page-block, no broadcast chrome.
export function MagazineShell({ activeKey, setView, pageInfo, children }) {
  const today = new Date();
  const currentPhase = getCurrentPhase(today);
  const dateLong = todayLong(today);
  const phaseLabel = currentPhase.name;

  const pageLabel = MAG_PAGES.find((p) => p.key === activeKey)?.label || "";
  const pageNum = MAG_PAGES.find((p) => p.key === activeKey)?.page || "P.01";
  const folioMid = pageInfo?.folioMid ?? `— ${pageNum.replace("P.", "pg. ")} of 24 · ${pageLabel} —`;

  return (
    <div className="mag-root">
      <div className="page paper">

        {/* MASTHEAD */}
        <header className="masthead">
          <div className="runner-l">
            Vol. XXVI · No. 18<br/>
            {dateLong}<br/>
            Atlanta · Flowery Branch
          </div>
          <div className="wordmark">
            <div className="kicker">A FALCONS TRACKER · ESTAB. 2024</div>
            <div className="title">Gameday<span className="amp">&amp;</span>Co.</div>
            <div className="sub">— the year-round dispatch for a city that won't stop checking the depth chart —</div>
          </div>
          <div className="runner-r">
            Stefanski Era · Yr. I<br/>
            {phaseLabel}<br/>
            $0 — for the faithful
          </div>
        </header>

        {/* FLIPNAV — magazine page index across the top */}
        <nav className="flipnav">
          <div className="l">↳ INDEX</div>
          {MAG_PAGES.map((p) => (
            <button
              key={p.key}
              type="button"
              className={`fp${p.key === activeKey ? " active" : ""}`}
              onClick={() => setView?.(p.key)}
            >
              {p.label} <span className="pg">{p.page}</span>
            </button>
          ))}
          <div className="r">VOL. XXVI · NO. 18</div>
        </nav>

        {children}

        {/* FOLIO */}
        <footer className="folio">
          <div>Gameday &amp; Co. · A Falcons Tracker</div>
          <div className="c">{folioMid}</div>
          <div className="r">Vol. XXVI · No. 18 · {today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
        </footer>

        {/* COLOPHON */}
        <div className="colophon">
          <a href="https://nnnsightnnn.com" target="_blank" rel="noopener noreferrer">
            Built by nnnsightnnn
          </a>
        </div>

      </div>
    </div>
  );
}

// ─── COVER PAGE (P.01) ───────────────────────────────────────────────────
export default function MagazineCover({ setView }) {
  const today = new Date();
  const currentPhase = getCurrentPhase(today);

  const coverFeature = NEWS_DIGEST?.cover || null;
  const cover = playerById(coverFeature?.photoId || "bijan");
  const penix = playerById("penix-jr");
  const bijan = playerById("bijan");
  const tua   = playerById("tua");

  const rosterTotal = PLAYERS.length;
  const rosterActive = PLAYERS.filter((p) => p.status === "active").length;
  const rosterPUP = PLAYERS.filter((p) => ["ir", "pup", "nfi", "suspended"].includes(p.status)).length;

  const classMade = DRAFT_DATA.falconsPicks.filter((p) => p.status === "made");

  const capM = (CAP_STATE.capSpaceSpotrac / 1_000_000).toFixed(1);
  const deadM = (CAP_STATE.deadMoney.total / 1_000_000).toFixed(1);
  const capPct = Math.min(100, Math.max(0, Number(capM) / 40 * 100));

  const dispatches = useMemo(() => {
    const items = (NEWS_DIGEST?.topics || []).slice(0, 6);
    const catCls = { coaching: "ox", contracts: "gold", games: "navy", "free-agency": "", injuries: "", general: "" };
    return items.map((t, i) => {
      const titleParts = t.title.split(" — ");
      const head = titleParts[0];
      const tail = titleParts.slice(1).join(" — ");
      const detailFirst = (t.detail || "").split(/[.•]\s/)[0];
      const trimmedDetail = detailFirst.length > 280 ? detailFirst.slice(0, 277) + "…" : detailFirst;
      return {
        cat: (t.category || "general").toUpperCase().replace("-", " "),
        catClass: catCls[t.category] ?? "",
        sources: (t.detail || "").match(/^[^:]+/)?.[0]?.slice(0, 40) || "",
        head, tail, detail: trimmedDetail,
        lead: i === 0,
      };
    });
  }, []);

  const slate = useMemo(() => {
    return SCHEDULE_2026.slice(0, 18).map((w) => {
      const isBye = w.status === "bye";
      const tvUp = (w.tv || "").toUpperCase();
      const isPrime = !isBye && /PRIME|ESPN|NBC|AMAZON|NFL NETWORK/.test(tvUp) && /8:|9:30/.test(w.kickoffET || "");
      const dayLabel = isBye ? "— BYE —" : `${w.side === "home" ? "vs" : "@"} ${w.opponent}`;
      const net = isBye
        ? todayShort(new Date(w.date))
        : `${new Date(w.date).toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()} · ${tvUp.split(" ")[0]}`;
      return { wk: w.week, isBye, isPrime, dayLabel, opp: w.opponent, net };
    });
  }, []);

  const lastRecord = SEASON_RECAP_2025?.record || "8-9";

  return (
    <MagazineShell activeKey="cover" setView={setView} pageInfo={{ folioMid: "— pg. 18 of 24 —" }}>

      {/* PHASE TOC */}
      <nav className="toc">
        <div className="label">THE SEASON <span className="pg">PG. 03</span></div>
        {MAG_CHAPTERS.map((c, i) => (
          <div key={c.no} className={`ch${c.phases.includes(currentPhase.id) ? " active" : ""}`}>
            <div className="no">{c.no}{c.phases.includes(currentPhase.id) ? " · NOW READING" : ""}</div>
            <div className="name">{c.name}</div>
            <div className="win">{c.win}</div>
          </div>
        ))}
        <div className="dateline">
          <span className="live">ON THE FIELD</span>
          <span style={{ marginTop: 4 }}>UPDATED {today.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })} ET</span>
        </div>
      </nav>

      {/* COVER FEATURE */}
      <section className="cover">
        <div className="lede">
          <div className="kicker-row">
            <span className="feature-badge">Cover Story</span>
            <span className="kicker">{coverFeature?.kicker || "The Knee, The Camp & The Cunningham Era"}</span>
            <span className="kicker-rule"></span>
          </div>

          <h1 className="head">
            {coverFeature?.headLine1 || "Six rookies."}<br/>
            <span className="em">{coverFeature?.headEm || "One knee."}</span><br/>
            <span className="amp">&amp;</span> {coverFeature?.headLine3 || "a road to OTAs."}
          </h1>

          <p className="deck">
            {coverFeature?.deck ||
              "Phase III opens on the grass at Flowery Branch. Tua takes QB1 reps. Penix throws a clean rep to London six months removed. Stefanski says the words \"right where he needs to be\" — for the fourth time this month."}
          </p>

          <div className="byline">
            <span className="by">By</span><span className="author">{coverFeature?.byline || "The Tracker Desk"}</span>
            &nbsp;·&nbsp; <span className="m-mute">Filed from {coverFeature?.filedFrom || "Flowery Branch"} · {todayShort(today)}</span>
          </div>

          <div className="drop">
            <p>The doors opened at seven. The pads stayed in the closet. The lights went on over Branch Field anyway, and what the cameras saw was a quarterback room with two ranks of jerseys — <em>9</em> in red, <em>1</em> in white — sharing the same line of cones for the first time since Cunningham's first day on the job.</p>
            <p>Tua took the team-period reps. Penix took the air. Drake London caught both. Stefanski watched from three steps behind, hand on a clipboard, saying nothing the beat could quote. The line of the morning came after, in the building: <em>"This is where the identity gets installed."</em></p>
            <p>The new regime has a list. Twelve names long. Six wear rookie black. Three will be paid before the calendar says August. One has a hamstring. One has an ACL. One — the safety with twenty-seven career picks — has a voidable year and a public preference to retire in red.</p>
          </div>
        </div>

        <div className="image">
          <div className="photo"><CoverImage customSrc={coverFeature?.coverImageUrl} fallbackSrc={cover?.image} /></div>
          <div className="duo"></div>
          <div className="halftone"></div>
          <div className="number">{cover?.number ?? 7}</div>
          <div className="corner">
            <div className="k">{currentPhase.name.toUpperCase()}</div>
            <div className="v">DAY 2</div>
            <div className="s">OF 10 · {todayShort(today)}</div>
          </div>
          <div className="stamp">
            <div className="k">{coverFeature?.stampLabel || "PRIMARY · WORKHORSE"}</div>
            <div className="name">{cover ? `${cover.name.split(" ")[0][0]}. ${surname(cover.name)}` : "B. Robinson"}</div>
            <div className="pos">#{cover?.number} · {cover?.position} · {(cover?.college || "TEXAS").toUpperCase()}</div>
          </div>
          <div className="caption">PHOTOGRAPH — {(surname(cover?.name) || "BIJAN").toUpperCase()} AT BRANCH, {currentPhase.name.toUpperCase()} · {todayShort(today)}</div>
        </div>
      </section>

      {/* BY THE NUMBERS / AGATE */}
      <section className="agate-strip">
        <div className="label">
          <div>
            <div className="k">DEPT.</div>
            <div className="v">By the Numbers</div>
          </div>
        </div>
        <AgateCell k="Roster" v={rosterTotal} s="POST-DRAFT" />
        <AgateCell k="Active" v={rosterActive} s="PRE-PHASE III" />
        <AgateCell k="PUP / IR" v={String(rosterPUP).padStart(2, "0")} s="PENIX · BOWMAN · ETC." />
        <AgateCell k="Class '26" v={String(classMade.length).padStart(2, "0")} s="RD 2 → RD 7" />
        <AgateCell k="Cap Space" v={`$${capM}M`} s={`RANK ${CAP_STATE.leagueRank} / 32`} ox />
        <AgateCell k="Dead $" v={`$${deadM}M`} s="COUSINS · MOONEY" />
        <AgateCell k="'25 Mark" v={lastRecord.replace("-", "—")} s="MISSED PLAYOFFS" />
      </section>

      {/* DOSSIERS */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Dossiers</span></div>
          <div className="meta">Three players · One open question · Page 06</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="dossiers">
        <Dossier
          player={penix}
          badge={{ text: "PUP · RETURN PENDING", className: "steel" }}
          role={["QB1 in waiting", "6 mo. post-op", "aiming Wk 1"]}
          stats={[{ v: "88.5", k: "Rating" }, { v: "9", k: "TD" }, { v: "3", k: "INT" }]}
          ranks={[
            { lk: "Throwing Reps", lv: "PHASE II", pct: 62, color: "" },
            { lk: "Team Period Cleared", lv: "PENDING", pct: 30, color: "navy" },
            { lk: "Week-1 Implied Odds", lv: "+102", pct: 49, color: "gold" },
          ]}
          quote={{ text: "Right where he needs to be. Not so focused on timetables just yet.", cite: "— K. Stefanski, head coach" }}
        />
        <Dossier
          player={bijan}
          badge={{ text: "PRIMARY · WORKHORSE", className: "" }}
          role={["All-Pro", "5th-yr option exercised", "extension queued"]}
          stats={[{ v: "1,478", k: "Rush Yds" }, { v: "16", k: "Scrimmage TD" }, { v: "4.9", k: "YPC" }]}
          ranks={[
            { lk: "Broken Tackle %", lv: "88 · TOP 5", pct: 88, color: "" },
            { lk: "EPA / Touch", lv: "91", pct: 91, color: "" },
            { lk: "Receiving Grade", lv: "72", pct: 72, color: "gold" },
          ]}
          quote={{ text: "Between Gibbs, Bijan and Achane, they're about to completely reset the running-back market.", cite: "— A. Schefter, ESPN" }}
        />
        <Dossier
          player={tua}
          badge={{ text: "QB1 — REPS NOW", className: "gold" }}
          role={["1-yr / $1.3M", "holds the seat", "2× Pro Bowl"]}
          stats={[{ v: "—", k: "In Red" }, { v: String(tua?.age ?? 28), k: "Age" }, { v: String(tua?.experience ?? 7), k: "Yrs Exp." }]}
          ranks={[
            { lk: "Week-1 Implied Odds", lv: "-136 · 57.6%", pct: 58, color: "gold" },
            { lk: "Rees Install Fit", lv: "UNDER-CENTER", pct: 70, color: "navy" },
            { lk: "Reps Taken · Phase III", lv: "QB1", pct: 84, color: "" },
          ]}
          quote={{ text: "Tua took the QB1 reps with Penix continuing to ramp.", cite: "— Yahoo Sports · Branch Field, May 18" }}
        />
      </section>

      {/* PULL QUOTE */}
      <section className="pullquote">
        <q>The goal is to learn our system. If a rookie earns a role and Week 1 he's ready to go, then he'll be out there.</q>
        <cite>— Head Coach <span className="nm">Kevin Stefanski</span> · Rookie Minicamp Wrap, May 10</cite>
      </section>

      {/* WIRE + CAP SPREAD */}
      <section className="spread">
        <div className="col left">
          <div className="colhead">
            <div className="t">The <span className="em">Wire</span></div>
            <div className="m">DISPATCHES · MAY 7 — {todayShort(today)}</div>
          </div>

          <div className="wire">
            {dispatches.map((d, i) => (
              <article key={i} className={`item${d.lead ? " lead" : ""}`}>
                <div className="top">
                  <span className={`cat ${d.catClass}`}>{d.cat}</span>
                  <span className="src">{d.sources}</span>
                </div>
                <h3>{d.head}{d.tail ? " — " : ""}<em>{d.tail}</em></h3>
                <p>{d.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="col right">
          <div className="colhead">
            <div className="t">Cap <span className="em">&amp;</span> Contracts</div>
            <div className="m">2026 SNAPSHOT · {todayShort(today)}</div>
          </div>

          <div className="cap-fig">
            <div className="gauge">
              <div className="kk">— Working Cap Space —</div>
              <div className="vv">
                <span className="big">
                  <span className="em">${Math.floor(Number(capM))}</span>.{(capM + "").split(".")[1] || "0"}
                  <span className="suf">&nbsp;M</span>
                </span>
                <span className="suf">· RANK {CAP_STATE.leagueRank} / 32</span>
              </div>
              <div className="meter">
                <div className="fill" style={{ width: `${capPct}%` }}></div>
                <div className="pointer" style={{ left: `${capPct}%` }}></div>
              </div>
              <div className="tick-row">
                <span>$0</span><span>$10M</span><span>$20M</span><span>$30M</span><span>$40M+</span>
              </div>
              <div className="footnote">
                Spotrac, post-signings. OTC reads ${(CAP_STATE.capSpaceOTC / 1_000_000).toFixed(1)}M.
                Room enough for one more veteran IDL move — not two.
              </div>
            </div>

            <div className="hits">
              <div className="h">Top Cap Hits, 2026</div>
              {CAP_STATE.topCapHits2026.map((h) => {
                const p = playerById(h.playerId);
                if (!p) return null;
                const small = h.playerId === "drake-london" ? "WR · OPT." :
                              h.playerId === "pitts" ? "TE · TAG" : p.position;
                return (
                  <div key={h.playerId} className="row">
                    <div className="nm">{p.name} <span className="small">{small}</span></div>
                    <div className="v">{fmtMoney(h.amount)}</div>
                  </div>
                );
              })}
            </div>

            <div className="deadbox">
              <div className="h">— Dead Money —</div>
              <div className="v">${deadM}M</div>
              <ul>
                {CAP_STATE.deadMoney.breakdown.map((d, i) => (
                  <li key={i}>
                    <span>{d.name} <em>· {d.note.toLowerCase().split(";")[0]}</em></span>
                    <span className="amt">{fmtMoney(d.amount)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      {/* DRAFT CLASS */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">Class of <span className="em">'26</span></div>
          <div className="meta">Six rookies · No first-rounder · National grade: B / B+ · Page 12</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="draftclass">
        <div className="tbl">
          <div className="tr head">
            <div>PICK</div><div>ROUND</div><div>PLAYER</div>
            <div>POS.</div><div>GRADE</div><div>SCOUT NOTE</div><div>STATUS</div>
          </div>
          {classMade.map((pick) => {
            const target = DRAFT_DATA.topTargets.find((t) => t.projection?.includes("#" + pick.overallPick));
            const grade = pickGrade(pick.overallPick);
            const posClass = posCss(pick.selection?.split(" · ")[1]);
            const playerName = (pick.selection || "").split(" · ")[0] || "—";
            const college = target?.college || (pick.selection || "").split(" · ")[2] || "";
            const note = shortenNote(pick.selectionNote || target?.fit || "");
            const isVia = !!pick.tradeNote && pick.tradeNote.startsWith("Acquired");
            const jersey = jerseyByName(playerName);
            return (
              <div key={pick.overallPick} className="tr">
                <div className="pk"><span className="em">#</span>{pick.overallPick}</div>
                <div className="rd">Round {formatRoman(pick.round)}</div>
                <div className="name">{playerName} <span className="col">{college}</span></div>
                <div className={`pos ${posClass}`}>{pick.selection?.split(" · ")[1]}</div>
                <div className="grade"><span className="b">{grade.letter}</span>{grade.note}</div>
                <div className="note">{note}</div>
                <div className={`status${isVia ? " via" : ""}`}>
                  {isVia ? `VIA ${viaFrom(pick.tradeNote)}` : "SIGNED"}{jersey ? ` · #${jersey}` : ""}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SCHEDULE STRIP */}
      <section className="schedule">
        <div className="section-head" style={{ padding: "0 0 6px" }}>
          <div className="rule"></div>
          <div>
            <div className="title">The <span className="em">Schedule</span></div>
            <div className="meta">2026 · 18 weeks · SoS .465 · 5th-easiest in the league</div>
          </div>
          <div className="rule"></div>
        </div>

        <div className="grid">
          {slate.map((w) => (
            <div key={w.wk} className={`wk${w.isBye ? " bye" : ""}${w.isPrime ? " prime" : ""}`}>
              {w.isPrime && <div className="dot"></div>}
              <div className="no">WK {String(w.wk).padStart(2, "0")}</div>
              <div className="ha">{w.dayLabel}</div>
              {!w.isBye && TEAM_LOGOS[w.opp] && (
                <img className="opp-logo" src={TEAM_LOGOS[w.opp]} alt={w.opp} />
              )}
              <div className="opp">{w.isBye ? "·" : w.opp}</div>
              <div className="net">{w.net}</div>
            </div>
          ))}
        </div>
      </section>

    </MagazineShell>
  );
}

// ─── SHARED CHAPTERS (used by Cover phase TOC) ───────────────────────────
const MAG_CHAPTERS = [
  { no: "CH. 01", name: "Offseason",      win: "JAN — APR",        phases: ["offseason-lull", "rookie-class", "draft-week"] },
  { no: "CH. 02", name: "Rookie Class",   win: "APR 26 — MAY 4",   phases: ["rookie-class"] },
  { no: "CH. 03", name: "OTAs & Minicamp", win: "MAY 19 — JUN 20", phases: ["otas-minicamp"] },
  { no: "CH. 04", name: "Training Camp",  win: "JUL — AUG",        phases: ["dead-period", "training-camp", "preseason"] },
  { no: "CH. 05", name: "Regular Season", win: "SEP — JAN",        phases: ["regular-season", "postseason"] },
];

// ─── small subcomponents ─────────────────────────────────────────────────
function AgateCell({ k, v, s, ox }) {
  return (
    <div className="cell">
      <div className="k">{k}</div>
      <div className={`v${ox ? " ox" : ""}`}>{v}</div>
      <div className="s">{s}</div>
    </div>
  );
}

function Dossier({ player, badge, role, stats, ranks, quote }) {
  const name = player?.name?.split(" ");
  const last = player?.name ? surname(player.name) : "—";
  const display = name ? `${name[0][0]}. ${last}` : "—";
  const collegeShort = (player?.college || "").toUpperCase();
  return (
    <article className="dossier">
      <div className="portrait">
        <div className="bg"></div>
        {player?.image && <img src={player.image} alt="" />}
        <div className="duo"></div>
        <div className="halftone"></div>
        <div className="num">{player?.number ?? ""}</div>
        {badge?.text && <div className={`badge ${badge.className}`}>{badge.text}</div>}
        <div className="nameplate">
          <div className="pos">#{player?.number} · {player?.position} · {collegeShort}</div>
          <div className="nm">{display}</div>
        </div>
      </div>
      <div className="body">
        <div className="role">
          {role.map((r, i) => (
            <span key={i}>{r}{i < role.length - 1 && <span className="dot">●</span>}</span>
          ))}
        </div>
        <div className="statline">
          {stats.map((s, i) => (
            <div key={i} className="s">
              <div className="v">{s.v}</div>
              <div className="k">{s.k}</div>
            </div>
          ))}
        </div>
        <div className="ranks">
          {ranks.map((r, i) => (
            <div key={i} className="rank">
              <span className="lk">{r.lk}</span>
              <span className="lv">{r.lv}</span>
              <div className="bar"><div className={`fill${r.color ? " " + r.color : ""}`} style={{ width: `${r.pct}%` }}></div></div>
            </div>
          ))}
        </div>
        <blockquote className="quote">
          {quote.text}
          <cite>{quote.cite}</cite>
        </blockquote>
      </div>
    </article>
  );
}

// ─── data helpers ─────────────────────────────────────────────────────────
function pickGrade(overall) {
  const map = {
    48:  { letter: "A+", note: " unanimous" },
    79:  { letter: "A−", note: "" },
    134: { letter: "B+", note: "" },
    208: { letter: "B",  note: "" },
    215: { letter: "B−", note: " swing" },
    231: { letter: "C+", note: "" },
  };
  return map[overall] || { letter: "B", note: "" };
}
function shortenNote(s) {
  const first = s.split(/\. /)[0];
  return first.length > 200 ? first.slice(0, 197) + "…" : first + (first.endsWith(".") ? "" : ".");
}
function viaFrom(tradeNote) {
  const m = /from (Las Vegas|Eagles|Philadelphia|Jacksonville|Chicago|Detroit)/i.exec(tradeNote);
  if (!m) return "TRADE";
  const k = m[1].toLowerCase();
  if (k.startsWith("las")) return "LV";
  if (k.startsWith("eagle") || k.startsWith("phil")) return "PHI";
  if (k.startsWith("jack")) return "JAX";
  if (k.startsWith("chic")) return "CHI";
  if (k.startsWith("det"))  return "DET";
  return "TRADE";
}
export const POS_CLASS = { CB: "cb", WR: "wr", LB: "lb", DT: "dt", OT: "ot" };
function posCss(p) { return POS_CLASS[p] || ""; }
function jerseyByName(name) {
  const map = {
    "Avieon Terrell":     12,
    "Zachariah Branch":   17,
    "Kendal Daniels":     53,
    "Harold Perkins Jr.": 56,
    "Ethan Onianwa":      75,
    "Anterio Thompson":   98,
  };
  return map[name] || null;
}
export { pickGrade, jerseyByName, viaFrom };
