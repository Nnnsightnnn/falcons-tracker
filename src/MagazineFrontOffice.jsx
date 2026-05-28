import { FRONT_OFFICE } from "./playerData.js";
import { MagazineShell } from "./MagazineView.jsx";

const get = (id) => FRONT_OFFICE.find((f) => f.id === id) || null;

export default function MagazineFrontOffice({ setView }) {
  const blank      = get("arthur-blank");
  const ryan       = get("matt-ryan-fo");
  const cunningham = get("ian-cunningham");
  const stefanski  = get("kevin-stefanski");
  const beadles    = get("greg-beadles");
  const rees       = get("tommy-rees");
  const ulbrich    = get("jeff-ulbrich");
  const aukerman   = get("craig-aukerman");
  const callahan   = get("bill-callahan");

  // Engstrand, Toney + position-coach room + advisory tier
  const engstrand  = get("tanner-engstrand");
  const toney      = get("patrick-toney");
  const vanPelt    = get("alex-van-pelt");
  const pitre      = get("michael-pitre");
  const prince     = get("robert-prince");
  const koger      = get("kevin-koger");
  const ollie      = get("nate-ollie");
  const ruud       = get("barrett-ruud");
  const timu       = get("john-timu");
  const hood       = get("justin-hood");
  const quinn      = get("bob-quinn");
  const mckay      = get("rich-mckay");

  return (
    <MagazineShell activeKey="front-office" setView={setView}>

      {/* COVER + ORG CHART */}
      <section className="fo-cover">
        <div className="lede">
          <div className="kicker-row">
            <span className="feature-badge">Cover · The Reset</span>
            <span className="kicker">Department V · Front Office</span>
            <span className="kicker-rule"></span>
          </div>

          <h1>Year One <span className="em">in the Building.</span></h1>

          <p className="deck">
            Three football chairs replaced inside one calendar quarter. A Cleveland reunion at the top of the install plan. Matt Ryan in red again, but in a suit this time.
          </p>

          <div className="byline">
            BY <span className="author">THE TRACKER DESK</span>
            &nbsp;·&nbsp; <span className="m-mute">FILED FROM FLOWERY BRANCH · MAY 19</span>
          </div>

          <div className="drop">
            <p>The lights at Flowery Branch are on a different timer this year. Morris and Fontenot are gone — fired Week-18 night, January. <span className="em">McKay moved off the football side entirely</span> to run AMB Sports &amp; Entertainment (the World Cup, the '28 Super Bowl, the United room). Greg Beadles took the CEO seat after twenty-three quiet years on the business side.</p>
            <p>Atop the football pyramid, Arthur Blank planted a face the city knows. Matt Ryan, MVP in '16, framed photo on the way to the cafeteria, came back from a year of broadcast booths to take a title nobody in the building had held before: <em>President of Football Operations</em>. Stefanski and Cunningham report up to him. He runs the room.</p>
            <p>Cunningham comes from Chicago. Stefanski comes from Cleveland — and brought two assistants with him. The phrase <em>"build through the trenches"</em> appears in Cunningham's first press conference twice. The phrase <em>"X's and O's, techniques, fundamentals, identity"</em> appears in every Stefanski availability since.</p>
          </div>
        </div>

        <div className="org">
          <div className="frame"></div>
          <div className="halftone"></div>
          <div className="top-strip">
            <span>— THE ORG CHART · MAY 2026 —</span>
            <span>FALCONS · FOOTBALL OPS</span>
          </div>

          <div className="chart">
            <div className="tier">
              <OrgNode lg p={blank} title="OWNER · CHAIRMAN" since="SINCE 2002" />
            </div>
            <div className="tier">
              <OrgNode lg p={ryan} title="PRES · FOOTBALL OPS" since="SINCE JAN '26" />
            </div>
            <div className="tier">
              <OrgNode p={cunningham} title="GENERAL MANAGER" since="EX-CHI · 2026" />
              <OrgNode p={stefanski}  title="HEAD COACH"      since="EX-CLE · 2026" />
              <OrgNode p={beadles}    title="PRESIDENT · CEO" since="SINCE JAN '26" />
            </div>
            <div className="tier">
              <OrgNode p={rees}      title="OFF. COORDINATOR" since="PLAY-CALLER" />
              <OrgNode p={engstrand} title="PASSING GAME"     since="EX-NYJ · 2026" />
              <OrgNode p={ulbrich}   title="DEF. COORDINATOR" since="RETAINED · '24" />
              <OrgNode p={aukerman}  title="ST COORDINATOR"   since="NEW · 2026" />
              <OrgNode p={callahan}  title="OFFENSIVE LINE"   since="EX-CLE · 2026" />
            </div>
          </div>

          <div className="caption">— BLANK ↓ RYAN ↓ STEFANSKI / CUNNINGHAM / BEADLES ↓ COORDINATORS —</div>
        </div>
      </section>

      {/* THREE CHAIRS */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Three Chairs</span></div>
          <div className="meta">President · Coach · General Manager · Page 17</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="leads">
        <div className="leads-grid">
          <Lead
            p={ryan}
            badge={{ text: "PRESIDENT · FB OPS", className: "gold" }}
            role="FRANCHISE QB '08—21 · MVP '16"
            meta={["HIRED JAN '26", "FINAL FB AUTHORITY", "HC + GM REPORT"]}
            body={
              <>The franchise's all-time leading passer, back in the building in a tie. <span className="em">HC and GM report to him.</span> Brought a quiet voice on Penix this offseason: <span className="it">"Mike's in a good spot."</span></>
            }
            pull={`"Mike's in a good spot right now."`}
          />
          <Lead
            p={stefanski}
            badge={{ text: "HEAD COACH", className: "" }}
            role="SIX SEASONS · CLEVELAND"
            meta={["2× COACH OF THE YEAR", "WIDE-ZONE DNA", "HIRED JAN '26"]}
            body={
              <>Came with two assistants. Installs play-action, under-center, wide-zone. <span className="em">Phase II identity install</span> already on tape. Confirmed publicly he's <span className="it">"very comfortable"</span> with Rees calling plays in 2026.</>
            }
            pull={`"X's and O's, techniques, fundamentals, identity."`}
          />
          <Lead
            p={cunningham}
            badge={{ text: "GENERAL MANAGER", className: "" }}
            role="EX-CHICAGO ASST. GM '22—'25"
            meta={[`"BUILD THROUGH THE TRENCHES"`, "FIRST DRAFT WRAPPED", "2026"]}
            body={
              <>First draft as a GM ended at 12:24 AM Sunday. Two trades, one tradeback, six rookies. <span className="em">London extension "top of mind."</span> Bijan deal expected this offseason — Schefter: <span className="it">about to reset the running-back market.</span></>
            }
            pull={`"Build through the trenches."`}
          />
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="pullquote">
        <q>This is where the identity gets installed. The rest follows from there.</q>
        <cite>— Overheard at Branch Field · <span className="nm">May 18</span></cite>
      </section>

      {/* STAFF GRID */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Coordinators &amp; the Room</span></div>
          <div className="meta">Coordinators · position coaches · ownership · the whole top sheet</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="staff">
        <div className="staff-grid">
          <StaffCard p={blank}      tier="OWNERSHIP" />
          <StaffCard p={beadles}    tier="BUSINESS" />
          <StaffCard p={rees}       tier="COORDINATORS" />
          <StaffCard p={engstrand}  tier="COORDINATORS" />
          <StaffCard p={ulbrich}    tier="COORDINATORS" />
          <StaffCard p={aukerman}   tier="COORDINATORS" />
          <StaffCard p={toney}      tier="COORDINATORS" />
          <StaffCard p={callahan}   tier="POSITION COACH" />
        </div>
      </section>

      {/* POSITION ROOM — full pyramid of position coaches */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Position Room</span></div>
          <div className="meta">Offense · Defense · the rooms that actually run the install</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="staff">
        <div className="staff-grid">
          <StaffCard p={vanPelt}  tier="QB ROOM" />
          <StaffCard p={pitre}    tier="RB ROOM" />
          <StaffCard p={prince}   tier="WR ROOM" />
          <StaffCard p={koger}    tier="TE ROOM" />
          <StaffCard p={ollie}    tier="DL ROOM" />
          <StaffCard p={ruud}     tier="ILB ROOM" />
          <StaffCard p={timu}     tier="EDGE ROOM" />
          <StaffCard p={hood}     tier="SECONDARY" />
        </div>
      </section>

      {/* ADVISORY / AMBSE */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Advisory Tier</span></div>
          <div className="meta">Stefanski's senior counsel · the AMBSE link upstairs</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="staff">
        <div className="staff-grid">
          <StaffCard p={quinn}  tier="ADVISORY" />
          <StaffCard p={mckay}  tier="AMBSE" />
        </div>
      </section>

      {/* CLEVELAND REUNION */}
      <div className="section-head">
        <div className="rule"></div>
        <div>
          <div className="title">The <span className="em">Cleveland Reunion</span></div>
          <div className="meta">Four voices from one staff · Page 18 · Sidebar</div>
        </div>
        <div className="rule"></div>
      </div>

      <section className="reunion">
        <div className="reunion-card">
          <div className="icon">
            <div className="k">— FROM CLEVELAND —</div>
            <div className="v">×4</div>
            <div className="s">four voices, one install plan</div>
          </div>
          <div className="rbody">
            <h3>The <span className="em">Cleveland</span> install plan.</h3>
            <p>
              Four Browns voices reunited inside one offensive staff:{" "}
              <span className="em">Stefanski</span> at the top of the program,{" "}
              <span className="em">Rees</span> at the headset,{" "}
              <span className="em">Van Pelt</span> in the QB room,{" "}
              <span className="em">Callahan</span> at the line. The system DNA:{" "}
              <span className="em">play-action, under-center, wide-zone</span> as the foundation, blended with gap concepts. Suits Bijan's Texas pedigree. The Penix–Rees adjustment is real —{" "}
              <span className="em">less pistol and shotgun</span> than Penix has run his whole career, and now Van Pelt — Stefanski's Cleveland OC '20–'23 — runs Penix's QB room day to day.
            </p>
          </div>
          <div className="rroster">
            <div className="r">
              <div className="k">— THE COACH —</div>
              <div className="nnm">Kevin Stefanski</div>
              <div className="role">HC · 6 seasons in Cleveland</div>
            </div>
            <div className="r">
              <div className="k">— THE PLAY-CALLER —</div>
              <div className="nnm">Tommy Rees</div>
              <div className="role">OC · Browns TEs '24, OC mid-'25</div>
            </div>
            <div className="r">
              <div className="k">— THE QB ROOM —</div>
              <div className="nnm">Alex Van Pelt</div>
              <div className="role">QB · Browns OC '20–'23, QB '24</div>
            </div>
            <div className="r">
              <div className="k">— THE LINE —</div>
              <div className="nnm">Bill Callahan</div>
              <div className="role">OL · long-tenured OL guru</div>
            </div>
          </div>
        </div>
      </section>

    </MagazineShell>
  );
}

function OrgNode({ p, title, since, lg }) {
  if (!p) return null;
  return (
    <div className={`node${lg ? " lg" : ""}`}>
      <div className="pic">
        {p.image && <img src={p.image} alt="" />}
        <div className="ht"></div>
      </div>
      <div className="ntitle">{title}</div>
      <div className="nnm">{shortName(p.name)}</div>
      <div className="since">{since}</div>
    </div>
  );
}

function Lead({ p, badge, role, meta, body, pull }) {
  if (!p) return null;
  return (
    <article className="lead">
      <div className="portrait">
        {p.image && <img src={p.image} alt="" />}
        <div className="duo"></div>
        <div className="ht"></div>
        <div className={`lbadge${badge.className ? " " + badge.className : ""}`}>{badge.text}</div>
        <div className="nameplate">
          <div className="role">{role}</div>
          <div className="nnm">{shortName(p.name)}</div>
        </div>
      </div>
      <div className="lbody">
        <div className="meta">
          {meta.map((m, i) => (
            <span key={i}>{m}{i < meta.length - 1 && <span className="dot">●</span>}</span>
          ))}
        </div>
        <p>{body}</p>
        <div className="pull">{pull}</div>
      </div>
    </article>
  );
}

function StaffCard({ p, tier }) {
  if (!p) return null;
  return (
    <article className="staff-card">
      <div className="pic">
        {p.image && <img src={p.image} alt="" />}
        <div className="duo"></div>
        <div className="ht"></div>
      </div>
      <div className="info">
        <div className="tier">— {tier} —</div>
        <div className="nnm">{p.name}</div>
        <div className="ttl">{p.title}</div>
        <p className="bio">{p.bio}</p>
        <div className="since">SINCE {p.since}</div>
      </div>
    </article>
  );
}

function shortName(name) {
  if (!name) return "—";
  const parts = name.split(" ");
  if (parts.length < 2) return name;
  return `${parts[0][0]}. ${parts.slice(1).join(" ")}`;
}
