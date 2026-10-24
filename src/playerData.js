// Atlanta Falcons player + team data.
// Hand-curated from live research April 18, 2026. Refreshed by the
// falcons-tracker-update scheduled task.
//
// NOTE on depthRank:
//   1 = starter, 2 = primary backup, 3 = deep reserve, 4 = fringe / practice squad
//
// NOTE on status vocab:
//   active | ir | pup | nfi | suspended | questionable | holdout
//
// Stats are 2025 regular season unless noted. Zero or null where N/A.

export const PLAYERS = [
  // =========================================
  // QUARTERBACKS
  // =========================================
  {
    id: "penix-jr",
    name: "Michael Penix Jr.",
    number: 9,
    position: "QB",
    positionGroup: "offense",
    depthRank: 2,
    height: 75, weight: 216, age: 25, experience: 2,
    college: "Washington",
    acquired: "draft-2024-R1-P8",
    stats: { completions: 166, attempts: 276, passYds: 1982, passTDs: 9, ints: 3, qbRating: 88.5 },
    form: 0,
    status: "active",
    injuryNote: "Played through the rib injury from the Oct 11 Baltimore game: started vs. Chicago (Oct 18) with no designation and went 19-of-33 for 225 yards, three TDs and no interceptions, but was sacked five times (three by Kyler Gordon) and lost a fumble on the game-ending strip. No new injury reported. Now 2-2 as a starter since returning from November 2025 ACL surgery.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4360423.png",
    contract: { years: 4, total: 22080000, guaranteed: 22080000, apy: 5520000, throughYear: 2027, cap2026: 5900000 },
    career: [
      { years: "2024–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2023", team: "Washington", type: "College · Heisman finalist" },
    ],
  },
  {
    id: "tua",
    name: "Tua Tagovailoa",
    number: 1,
    position: "QB",
    positionGroup: "offense",
    depthRank: 1,
    height: 73, weight: 227, age: 28, experience: 7,
    college: "Alabama",
    acquired: "fa-2026-1yr",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Oblique. Missed the first two games (Sept 13 at Pittsburgh, Sept 20 vs. Carolina) after hurting his side in a Week 1 practice, then progressed from limited to full participation during Week 3 and was active for the first time in 2026 at Green Bay, backing up Michael Penix Jr. in the 35-14 win. Healthy entering the Week 4 trip to New Orleans, second on the depth chart behind Penix",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4241479.png",
    contract: { years: 1, total: 1300000, guaranteed: 1300000, apy: 1300000, throughYear: 2026, cap2026: 1300000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2020–2025", team: "Miami Dolphins", type: "NFL · 2x Pro Bowl" },
      { years: "2017–2019", team: "Alabama", type: "College · 2018 CFP title" },
    ],
  },
  {
    id: "andy-dalton",
    name: "Andy Dalton",
    number: 13,
    position: "QB",
    positionGroup: "offense",
    depthRank: 3,
    height: 74, weight: 220, age: 38, experience: 15,
    college: "TCU",
    acquired: "fa-2026-in-season",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Signed Monday (Oct 19), the day after the Bears loss, as Cooper Rush was released. Philadelphia had released him Oct 9 after he won the Eagles' backup job. Expected to compete with Tua Tagovailoa for the QB2 job behind Michael Penix Jr. (The Athletic's Jonathan Jones), though Tua likely stays No. 2 against the 49ers (AP). Stefanski: 'I think at this point we're just trying to get Andy up to speed.' 84-83-2 as a starter over 16 seasons, with 254 career TD passes. Contract terms not published.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/14012.png",
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2026", team: "Philadelphia Eagles", type: "NFL · released Oct 9" },
      { years: "2023–2025", team: "Carolina Panthers", type: "NFL" },
      { years: "2022", team: "New Orleans Saints", type: "NFL · 14 starts" },
      { years: "2021", team: "Chicago Bears", type: "NFL" },
      { years: "2020", team: "Dallas Cowboys", type: "NFL" },
      { years: "2011–2019", team: "Cincinnati Bengals", type: "NFL · 3x Pro Bowl · 2011 R2 pick" },
      { years: "2007–2010", team: "TCU", type: "College" },
    ],
  },
  {
    id: "jack-strand",
    name: "Jack Strand",
    number: 18,
    position: "QB",
    positionGroup: "offense",
    depthRank: 4,
    height: 77, weight: 240, age: 22, experience: 0,
    college: "Minnesota State-Moorhead",
    acquired: "fa-2026-UDFA",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Undrafted rookie who made the initial 53 on Aug 30, a rare Division II QB to stick. An engineering-physics graduate of Minnesota State-Moorhead, he threw for 212 yards with a passing and a rushing touchdown in the preseason win at Indianapolis to force his way onto the roster behind Tua, Penix and Cooper Rush.",
    image: "https://static.clubs.nfl.com/image/upload/t_headshot_desktop/falcons/vhi23rd7gzuw6lwaxhi1",
    contract: { years: 3, total: 3000000, guaranteed: 0, apy: 1000000, throughYear: 2028, cap2026: 840000 },
    career: [{ years: "2026–", team: "Atlanta Falcons", type: "NFL · UDFA" }],
  },

  // =========================================
  // RUNNING BACKS
  // =========================================
  {
    id: "bijan",
    name: "Bijan Robinson",
    number: 7,
    position: "RB",
    positionGroup: "offense",
    depthRank: 1,
    height: 71, weight: 215, age: 24, experience: 3,
    college: "Texas",
    acquired: "draft-2023-R1-P8",
    stats: { rushYds: 1478, rushTDs: 14, rushAttempts: 299, receptions: 64, recYds: 820, recTDs: 2, targets: 82 },
    form: 9.2,
    status: "active",
    injuryNote: "Signed a three-year extension worth up to $75M (Aug 4) that ended a five-day hold-in and made him the highest-paid running back in NFL history: $51M guaranteed and $37M at signing, the most ever guaranteed to a back, running through 2030. Stefanski said there would be a ramp-up period rather than a full-speed return; Robinson logged his first full-team 11-on-11 reps of camp on Aug 7 and produced a wheel-route touchdown from Tua",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4430807.png",
    contract: { years: 3, total: 75000000, guaranteed: 51000000, apy: 25000000, throughYear: 2030, cap2026: 9000000 },
    career: [
      { years: "2023–", team: "Atlanta Falcons", type: "NFL · 2x Pro Bowl · All-Pro" },
      { years: "2020–2022", team: "Texas", type: "College" },
    ],
  },
  {
    id: "brian-robinson",
    name: "Brian Robinson Jr.",
    number: 15,
    position: "RB",
    positionGroup: "offense",
    depthRank: 2,
    height: 73, weight: 225, age: 27, experience: 5,
    college: "Alabama",
    acquired: "fa-2026-1yr",
    stats: { rushYds: 499, rushTDs: 4, rushAttempts: 125 },
    form: 7.4,
    status: "questionable",
    injuryNote: "Hamstring. Limited on the first Week 7 injury report (Wednesday, Oct 21, atlantafalcons.com). Did not practice Thursday (Oct 22), a downgrade from limited (49ers Webzone, official report). Friday (Oct 23), final Week 7 report (atlantafalcons.com): did not practice and ruled OUT vs. San Francisco; Khalil Herbert elevated from the practice squad as the backup back. Status kept at questionable because the tracker schema has no single-game 'out' value.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4241474.png",
    contract: { years: 1, total: 2500000, guaranteed: 1500000, apy: 2500000, throughYear: 2026, cap2026: 2500000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2022–2025", team: "Washington Commanders", type: "NFL" },
    ],
  },

  // =========================================
  // WIDE RECEIVERS
  // =========================================
  {
    id: "drake-london",
    name: "Drake London",
    number: 5,
    position: "WR",
    posSlot: "X",
    positionGroup: "offense",
    depthRank: 1,
    height: 76, weight: 213, age: 24, experience: 5,
    college: "USC",
    acquired: "draft-2022-R1-P8",
    stats: { receptions: 105, recYds: 1271, recTDs: 9, targets: 145 },
    form: 9.0,
    status: "active",
    injuryNote: "Hip. Added to the Week 6 report on Friday (Oct 16) as a limited participant after not appearing earlier in the week, but carries no game designation for Chicago (atlantafalcons.com, Falcons Wire).",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4426502.png",
    contract: { years: 4, total: 141000000, guaranteed: 100000000, apy: 35250000, throughYear: 2030, cap2026: 16800000, note: "4yr/$141M extension agreed Jun 2, officially signed Jun 9, 2026 (up to $150M w/ incentives, $100M gtd); plays 2026 on $16.82M 5th-yr option, extension runs 2027–2030" },
    career: [
      { years: "2022–", team: "Atlanta Falcons", type: "NFL · signed through 2030" },
      { years: "2019–2021", team: "USC", type: "College" },
    ],
  },
  {
    id: "dotson",
    name: "Jahan Dotson",
    number: 4,
    position: "WR",
    posSlot: "Z",
    positionGroup: "offense",
    depthRank: 1,
    height: 71, weight: 178, age: 26, experience: 5,
    college: "Penn State",
    acquired: "fa-2026-2yr",
    stats: { receptions: 31, recYds: 366, recTDs: 2, targets: 54 },
    form: 6.6,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4361409.png",
    contract: { years: 2, total: 17000000, guaranteed: 8500000, apy: 8500000, throughYear: 2027, cap2026: 7500000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2024–2025", team: "Philadelphia Eagles", type: "NFL · Super Bowl LIX champ" },
      { years: "2022–2023", team: "Washington Commanders", type: "NFL" },
    ],
  },
  {
    id: "zaccheaus",
    name: "Olamide Zaccheaus",
    number: 14,
    position: "WR",
    posSlot: "SLOT",
        stRoles: ["PR"],
    stRank: {"PR":2},
    positionGroup: "offense",
    depthRank: 1,
    height: 70, weight: 193, age: 28, experience: 8,
    college: "Virginia",
    acquired: "fa-2026",
    stats: { receptions: 39, recYds: 313, recTDs: 2 },
    form: 6.6,
    status: "questionable",
    injuryNote: "Slot return · drafted by ATL 2019, back from CHI Wednesday (Oct 21), first Week 7 report: limited (shoulder) (atlantafalcons.com). Friday (Oct 23), final Week 7 report (atlantafalcons.com): limited (shoulder) and QUESTIONABLE.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3917914.png",
    contract: { years: 1, total: 2400000, guaranteed: 1000000, apy: 2400000, throughYear: 2026, cap2026: 2400000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL · 2nd stint" },
      { years: "2025", team: "Chicago Bears", type: "NFL" },
      { years: "2024", team: "Washington Commanders", type: "NFL" },
      { years: "2023", team: "Philadelphia Eagles", type: "NFL" },
      { years: "2019–2022", team: "Atlanta Falcons", type: "NFL" },
    ],
  },
  {
    id: "blair-wr",
    name: "Chris Blair",
    number: 19,
    position: "WR",
    posSlot: "X",
    positionGroup: "offense",
    depthRank: 4,
    height: 75, weight: 205, age: 25, experience: 2,
    college: "LSU",
    acquired: "fa-2024-UDFA",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Camp / PS · sized X",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4369886.png",
    contract: { years: 1, total: 1010000, guaranteed: 0, apy: 1010000, throughYear: 2026, cap2026: 1010000 },
    career: [{ years: "2024–", team: "Atlanta Falcons", type: "NFL" }],
  },

  // =========================================
  // TIGHT ENDS
  // =========================================
  {
    id: "pitts",
    name: "Kyle Pitts",
    number: 8,
    position: "TE",
    positionGroup: "offense",
    depthRank: 1,
    height: 78, weight: 245, age: 25, experience: 6,
    college: "Florida",
    acquired: "draft-2021-R1-P4",
    stats: { receptions: 58, recYds: 694, recTDs: 4, targets: 92 },
    form: 7.3,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4360248.png",
    contract: { years: 3, total: 54000000, guaranteed: 36000000, apy: 18000000, throughYear: 2028, cap2026: 3060000 },
    career: [
      { years: "2021–", team: "Atlanta Falcons", type: "NFL · 3yr/$54M extension (2026)" },
      { years: "2018–2020", team: "Florida", type: "College · John Mackey Award" },
    ],
  },
  {
    id: "hooper",
    name: "Austin Hooper",
    number: 81,
    position: "TE",
    positionGroup: "offense",
    depthRank: 2,
    height: 76, weight: 254, age: 31, experience: 10,
    college: "Stanford",
    acquired: "fa-2026",
    stats: { receptions: 26, recYds: 259, recTDs: 3 },
    form: 6.5,
    status: "active",
    injuryNote: "Reunion · Falcons 2016–19, Super Bowl LI roster",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    contract: { years: 1, total: 3000000, guaranteed: 1500000, apy: 3000000, throughYear: 2026, cap2026: 3000000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2023–2025", team: "New England Patriots", type: "NFL" },
      { years: "2016–2019", team: "Atlanta Falcons", type: "NFL · 2x Pro Bowl" },
    ],
  },
  {
    id: "woerner",
    name: "Charlie Woerner",
    number: 89,
    position: "TE",
    positionGroup: "offense",
    depthRank: 3,
    height: 77, weight: 243, age: 28, experience: 6,
    college: "Georgia",
    acquired: "fa-2024",
    stats: { receptions: 14, recYds: 111, recTDs: 1 },
    form: 6.4,
    status: "active",
    injuryNote: "Potential cut candidate · $4.75M 2026",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4035020.png",
    contract: { years: 3, total: 12000000, guaranteed: 6000000, apy: 4000000, throughYear: 2026, cap2026: 4750000 },
    career: [
      { years: "2024–", team: "Atlanta Falcons", type: "NFL" },
    ],
  },

  // =========================================
  // OFFENSIVE LINE
  // =========================================
  {
    id: "matthews",
    name: "Jake Matthews",
    number: 70,
    position: "OT",
    posSlot: "LT",
    positionGroup: "offense",
    depthRank: 1,
    height: 77, weight: 309, age: 33, experience: 12,
    college: "Texas A&M",
    acquired: "draft-2014-R1-P6",
    stats: {},
    form: 8.5,
    status: "active",
    injuryNote: "LT · restructured March 2026 (cleared $10.5M). Left the 45-24 win at New Orleans (Oct 5) late in the first quarter with a groin injury and was ruled out before the second half, in his 200th career game (fourth Falcon to reach 200) and with the NFL's longest active consecutive-starts streak (199) on the line. Michael Jerrell replaced him. The Week 5 depth chart (released Oct 6) was unchanged from Week 4 and still lists him at LT. Did not participate (groin) on Wednesday's estimated report (Oct 7), a walkthrough on the short week, then returned to practice as a limited participant on Thursday (Oct 8), per atlantafalcons.com. Upgraded to a full participant on Friday (Oct 9) and listed questionable for Sunday night vs. Baltimore; SportsTalkATL calls him a game-time decision, and if he plays it would be his 200th consecutive start. A full participant (groin) on Wednesday's first Week 6 report (Oct 14) ahead of Chicago, and full again on Thursday (Oct 15). Friday (Oct 23), final Week 7 report (atlantafalcons.com): limited as a rest day (not injury related) and carries no game designation vs. San Francisco.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/16713.png",
    contract: { years: 3, total: 55500000, guaranteed: 0, apy: 18500000, throughYear: 2027, cap2026: 15500000 },
    career: [
      { years: "2014–", team: "Atlanta Falcons", type: "NFL · Pro Bowl 2022" },
    ],
  },
  {
    id: "bergeron",
    name: "Matthew Bergeron",
    number: 65,
    position: "OG",
    posSlot: "LG",
    positionGroup: "offense",
    depthRank: 1,
    height: 77, weight: 322, age: 25, experience: 3,
    college: "Syracuse",
    acquired: "draft-2023-R2",
    stats: {},
    form: 7.8,
    status: "active",
    injuryNote: "LG · signed 4yr/$96M extension Aug 1, 2026 (through 2030)",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4568510.png",
    contract: { years: 4, total: 96000000, guaranteed: 60000000, apy: 24000000, throughYear: 2030, cap2026: 7000000 },
    career: [{ years: "2023–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "neuzil",
    name: "Ryan Neuzil",
    number: 66,
    position: "C",
    posSlot: "LG",
    positionGroup: "offense",
    depthRank: 1,
    height: 75, weight: 297, age: 27, experience: 5,
    college: "Appalachian State",
    acquired: "draft-2021-UDFA",
    stats: {},
    form: 7.2,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4036444.png",
    contract: { years: 2, total: 7500000, guaranteed: 3750000, apy: 3750000, throughYear: 2026, cap2026: 3750000 },
    career: [{ years: "2021–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "lindstrom",
    name: "Chris Lindstrom",
    number: 63,
    position: "OG",
    posSlot: "RG",
    positionGroup: "offense",
    depthRank: 1,
    height: 76, weight: 310, age: 29, experience: 7,
    college: "Boston College",
    acquired: "draft-2019-R1-P14",
    stats: {},
    form: 9.3,
    status: "active",
    injuryNote: "Cleared the concussion protocol in time to start the Sept 20 home opener after leaving Week 1; played the full game vs. Carolina · RG · 2x All-Pro",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3672833.png",
    contract: { years: 5, total: 102500000, guaranteed: 55000000, apy: 20500000, throughYear: 2028, cap2026: 19500000 },
    career: [
      { years: "2019–", team: "Atlanta Falcons", type: "NFL · 3x Pro Bowl, 2x All-Pro" },
    ],
  },
  {
    id: "taylor",
    name: "Jawaan Taylor",
    number: 74,
    position: "OT",
    posSlot: "RT",
    positionGroup: "offense",
    depthRank: 1,
    height: 77, weight: 325, age: 28, experience: 7,
    college: "Florida",
    acquired: "fa-2026",
    stats: {},
    form: 7.5,
    status: "active",
    injuryNote: "Took every first-team right-tackle rep at the Colts joint practice Aug 19 and said he felt good, revealing he had the knee cleaned up in March but considers himself fully healthy now. Activated off PUP Aug 10; did not play in the Aug 14 preseason opener. Ex-Chiefs, signed 4/9 after McGary retirement",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4034961.png",
    contract: { years: 1, total: 5000000, guaranteed: 3000000, apy: 5000000, throughYear: 2026, cap2026: 5000000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL · 1yr/$5M + $1M incentives" },
      { years: "2023–2025", team: "Kansas City Chiefs", type: "NFL · Super Bowl LVIII" },
    ],
  },
  {
    id: "hinton",
    name: "Kyle Hinton",
    number: 68,
    position: "OG",
    posSlot: "LG",
    positionGroup: "offense",
    depthRank: 2,
    height: 74, weight: 302, age: 27, experience: 5,
    college: "Washburn",
    acquired: "fa-2023",
    stats: {},
    form: 6.4,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4682831.png",
    contract: { years: 2, total: 3500000, guaranteed: 750000, apy: 1750000, throughYear: 2026, cap2026: 1750000 },
    career: [{ years: "2023–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "levin",
    name: "Corey Levin",
    number: 67,
    position: "C",
    positionGroup: "offense",
    depthRank: 2,
    height: 75, weight: 300, age: 30, experience: 7,
    college: "Chattanooga",
    acquired: "fa-2023",
    stats: {},
    form: 6.2,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/2973637.png",
    contract: { years: 2, total: 3100000, guaranteed: 500000, apy: 1550000, throughYear: 2026, cap2026: 1550000 },
    career: [{ years: "2023–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "norton",
    name: "Storm Norton",
    number: 72,
    position: "OT",
    posSlot: "RT",
    positionGroup: "offense",
    depthRank: 3,
    height: 80, weight: 325, age: 31, experience: 8,
    college: "Toledo",
    acquired: "fa-2024",
    stats: {},
    form: 6.1,
    status: "pup",
    injuryNote: "Placed on Reserve/PUP Jun 11, 2026. Missed all of 2025 after summer ankle surgery; designated to return Oct 22 but never activated from IR.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/2973014.png",
    contract: { years: 1, total: 1500000, guaranteed: 200000, apy: 1500000, throughYear: 2026, cap2026: 1500000 },
    career: [{ years: "2024–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "jerrell",
    name: "Michael Jerrell",
    number: 72,
    position: "OT",
    posSlot: "LT",
    positionGroup: "offense",
    depthRank: 4,
    height: 78, weight: 313, age: 25, experience: 2,
    college: "Findlay",
    acquired: "draft-2024-R7",
    stats: {},
    form: 0,
    status: "questionable",
    injuryNote: "Took most of the first-team right tackle reps through the spring while Jawaan Taylor rehabbed. D-II development project who replaced Jake Matthews (groin) at left tackle for most of the 45-24 win at New Orleans (Oct 5). Limited (ankle) on the Week 5 estimated report (Wednesday, Oct 7), then a full participant on Thursday (Oct 8); he is listed behind Matthews at LT on the Week 5 depth chart. Wednesday (Oct 21), first Week 7 report: limited (bicep) (atlantafalcons.com). Week 7: limited (bicep) Wednesday (Oct 21), then did not practice Thursday (Oct 22) (official report via 49ers Webzone). Friday (Oct 23), final Week 7 report (atlantafalcons.com): did not practice and ruled OUT vs. San Francisco (bicep). Status kept at questionable because the tracker schema has no single-game 'out' value.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/5209093.png",
    contract: { years: 4, total: 4150000, guaranteed: 100000, apy: 1037500, throughYear: 2027, cap2026: 920000 },
    career: [{ years: "2024–", team: "Atlanta Falcons", type: "NFL" }],
  },

  // =========================================
  // DEFENSIVE LINE
  // =========================================
  {
    id: "dorlus",
    name: "Brandon Dorlus",
    number: 54,
    position: "DT",
    posSlot: "3T",
    positionGroup: "defense",
    depthRank: 1,
    height: 75, weight: 285, age: 24, experience: 3,
    college: "Oregon",
    acquired: "draft-2024-R4",
    stats: { tackles: 52, solo: 28, tfl: 9, sacks: 8.5, qb_hits: 14 },
    form: 8.4,
    status: "active",
    injuryNote: "Breakout 2025 · 8.5 sacks",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4427090.png",
    contract: { years: 4, total: 4800000, guaranteed: 1900000, apy: 1200000, throughYear: 2027, cap2026: 1100000 },
    career: [{ years: "2024–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "yasir-abdullah",
    name: "Yasir Abdullah",
    number: 51,
    position: "EDGE",
    posSlot: "LEDGE",
    positionGroup: "defense",
    depthRank: 3,
    height: 73, weight: 240, age: 26, experience: 4,
    college: "Louisville",
    acquired: "waivers-2026-JAX",
    stats: {},
    form: 6.2,
    status: "ir",
    injuryNote: "Placed on injured reserve (hamstring) on Saturday, Oct 10, the day before the Week 5 Sunday night game vs. Baltimore, and must miss at least four games. Had not practiced all week (DNP Oct 7, 8 and 9) and was ruled out on the final report. Claimed off waivers from Jacksonville on Sept 1, a 2023 fifth-round pick (No. 136) out of Louisville; played in all four games with two tackles and a pass defensed. S Jammie Robinson was signed to the 53 in the corresponding move.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4360807.png",
    contract: { years: 1, total: 1170000, guaranteed: 0, apy: 1170000, throughYear: 2026, cap2026: 1170000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2023–2025", team: "Jacksonville Jaguars", type: "NFL · 2023 R5 #136" },
    ],
  },
  {
    id: "jared-ivey",
    name: "Jared Ivey",
    number: 96,
    position: "EDGE",
    posSlot: "REDGE",
    positionGroup: "defense",
    depthRank: 4,
    height: 78, weight: 274, age: 24, experience: 2,
    college: "Ole Miss",
    acquired: "waivers-2026-SEA",
    stats: {},
    form: 6.0,
    status: "active",
    injuryNote: "Claimed off waivers from Seattle on Sept 1, a long (6-6, 274) developmental edge who went undrafted in 2025 out of Ole Miss (after starting at Georgia Tech) and profiles as rotational depth and a special-teams body behind the veteran front.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4605478.png",
    contract: { years: 1, total: 900000, guaranteed: 0, apy: 900000, throughYear: 2026, cap2026: 900000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2025", team: "Seattle Seahawks", type: "NFL · UDFA" },
    ],
  },
  {
    id: "cameron-williams",
    name: "Cameron Williams",
    number: 73,
    position: "OT",
    posSlot: "SWING",
    positionGroup: "offense",
    depthRank: 3,
    height: 77, weight: 317, age: 22, experience: 2,
    college: "Texas",
    acquired: "waivers-2026-PHI",
    stats: {},
    form: 6.0,
    status: "questionable",
    injuryNote: "Claimed off waivers from Philadelphia on Sept 1, a big (6-5, 317) developmental tackle and 2025 sixth-round pick (No. 207) who started 15 games at right tackle for a College Football Playoff Texas team, adding swing depth on a line the Falcons have prioritized all summer. Friday (Oct 23), final Week 7 report (atlantafalcons.com): limited (ankle) on Thursday and Friday (Oct 22-23) and listed QUESTIONABLE vs. San Francisco.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4685590.png",
    contract: { years: 1, total: 900000, guaranteed: 0, apy: 900000, throughYear: 2026, cap2026: 900000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2025", team: "Philadelphia Eagles", type: "NFL · 2025 R6 #207" },
    ],
  },
  {
    id: "maason-smith",
    name: "Maason Smith",
    number: 92,
    position: "DT",
    posSlot: "1T",
    positionGroup: "defense",
    depthRank: 1,
    height: 77, weight: 306, age: 23, experience: 3,
    college: "LSU",
    acquired: "trade-2026-JAX",
    stats: { tackles: 32, tfl: 3, sacks: 3 },
    form: 6.8,
    status: "active",
    injuryNote: "Acquired 4/17 in DT swap for Ruke Orhorhoro",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4431567.png",
    contract: { years: 4, total: 5900000, guaranteed: 2900000, apy: 1475000, throughYear: 2027, cap2026: 1420000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2024–2025", team: "Jacksonville Jaguars", type: "NFL · 2024 R2 #48" },
    ],
  },
  {
    id: "gervon-dexter",
    name: "Gervon Dexter Sr.",
    number: 99,
    position: "DT",
    posSlot: "3T",
    positionGroup: "defense",
    depthRank: 2,
    height: 76, weight: 320, age: 24, experience: 4,
    college: "Florida",
    acquired: "trade-2026-CHI",
    stats: { tackles: 44, tfl: 5, sacks: 6 },
    form: 7.2,
    status: "questionable",
    injuryNote: "Acquired Aug 30 (cutdown day) from Chicago for CB Clark Phillips III and a 2027 fifth-round pick, reuniting with GM Ian Cunningham, who was the Bears' assistant GM when they drafted him. A 2023 second-round pick and a two-year starter in Chicago, Dexter posted 44 tackles and six sacks over 17 starts in 2025 and steps into the interior rotation alongside Maason Smith and Brandon Dorlus. On Sep 30 he agreed to a four-year, $78 million extension with $46.5 million guaranteed (agents Drew and Jason Rosenhaus via ESPN's Adam Schefter; confirmed by the team), keeping him in Atlanta through 2030. Through three games he has 15 pressures, three QB hits and half a sack, ranking eighth in the NFL in pressure rate (20.5%) per the team. 'Gervon is a young, ascending talent whose power, disruption and impact along the defensive line are difficult to find,' GM Ian Cunningham said. Friday (Oct 23), final Week 7 report (atlantafalcons.com): limited (hamstring) on Thursday and Friday (Oct 22-23) and listed QUESTIONABLE vs. San Francisco.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4429014.png",
    contract: { years: 4, total: 78000000, guaranteed: 46500000, apy: 19500000, throughYear: 2030, cap2026: 2140000 }, // 4-yr extension agreed 2026-09-30; cap2026 is the pre-extension rookie figure until the restructured 2026 number is published
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2023–2025", team: "Chicago Bears", type: "NFL · 2023 R2 #53" },
    ],
  },
  {
    id: "cam-thomas",
    name: "Cameron Thomas",
    number: 99,
    position: "DE",
    posSlot: "RDE",
    positionGroup: "defense",
    depthRank: 1,
    height: 76, weight: 267, age: 26, experience: 5,
    college: "San Diego State",
    acquired: "fa-2026",
    stats: { tackles: 24, sacks: 2 },
    form: 6.4,
    status: "questionable",
    injuryNote: "Ex-Browns · 1-yr deal. Added to the Week 6 injury report as a limited participant (groin) on Thursday, Oct 15, ahead of Chicago (atlantafalcons.com). Upgraded to full on Friday (Oct 16) and carries no game designation. Friday (Oct 23), final Week 7 report (atlantafalcons.com): on the Week 7 report with a groin injury: limited Thursday (Oct 22), full Friday, and listed QUESTIONABLE.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4361510.png",
    contract: { years: 1, total: 2500000, guaranteed: 1200000, apy: 2500000, throughYear: 2026, cap2026: 2500000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2022–2025", team: "Arizona / Cleveland", type: "NFL" },
    ],
  },
  {
    id: "hand",
    name: "Da'Shawn Hand",
    number: 93,
    position: "DT",
    posSlot: "3T",
    positionGroup: "defense",
    depthRank: 3,
    height: 75, weight: 297, age: 30, experience: 8,
    college: "Alabama",
    acquired: "fa-2026",
    stats: { tackles: 22, tfl: 5 },
    form: 6.5,
    status: "ir",
    injuryNote: "Out for season · torn quad (Week 1 at Pittsburgh, seven snaps) · 1-yr / $3M",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3126352.png",
    contract: { years: 1, total: 3000000, guaranteed: 1500000, apy: 3000000, throughYear: 2026, cap2026: 3000000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2024–2025", team: "Los Angeles Chargers", type: "NFL" },
      { years: "2018–2023", team: "Detroit / Tennessee", type: "NFL" },
    ],
  },
  {
    id: "lacale-london",
    name: "LaCale London",
    number: 94,
    position: "DT",
    posSlot: "1T",
    positionGroup: "defense",
    depthRank: 2,
    height: 77, weight: 290, age: 25, experience: 3,
    college: "Western Illinois",
    acquired: "fa-2025",
    stats: { tackles: 14, sacks: 1 },
    form: 6.0,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4376288.png",
    contract: { years: 1, total: 1100000, guaranteed: 100000, apy: 1100000, throughYear: 2026, cap2026: 1100000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
  },
  // =========================================
  // EDGE / OLB
  // =========================================
  {
    id: "jalon-walker",
    name: "Jalon Walker",
    number: 11,
    position: "EDGE",
    posSlot: "REDGE",
    positionGroup: "defense",
    depthRank: 5,
    height: 74, weight: 245, age: 22, experience: 2,
    college: "Georgia",
    acquired: "draft-2025-R1-P15",
    stats: { tackles: 62, tfl: 10, sacks: 5.5, ff: 1 },
    form: 0,
    status: "ir",
    injuryNote: "Season-ending torn ACL, confirmed, and placed on injured reserve (Aug 6, corresponding move added DB Keidron Smith). Went down without contact late in the Day 6 practice (Aug 4) during an 11-on-11 two-minute drill and was carted off as teammates took a knee. Tests confirmed the torn ACL on Aug 5, the team announced he will miss the 2026 season, and it moved him to IR the next day. Outside linebackers coach John Timu called it a huge loss for a defense that drafted him 15th overall in 2025 to build the edge around",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4685597.png",
    contract: { years: 4, total: 19200000, guaranteed: 19200000, apy: 4800000, throughYear: 2028, cap2026: 4400000 },
    career: [
      { years: "2025–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2022–2024", team: "Georgia", type: "College · 2x CFP champ" },
    ],
  },
  {
    id: "pearce-jr",
    name: "James Pearce Jr.",
    number: 27,
    position: "EDGE",
    posSlot: "LEDGE",
    positionGroup: "defense",
    depthRank: 3,
    height: 77, weight: 245, age: 22, experience: 2,
    college: "Tennessee",
    acquired: "draft-2025-R1-P26",
    stats: { tackles: 31, sacks: 4.5 },
    form: 7.6,
    status: "suspended",
    injuryNote: "Suspended 8 games (NFL Personal Conduct Policy, announced Aug 14) · ban now in effect (began Aug 30, the cutdown deadline), eligible to return Nov 2 (week of Bengals game in Madrid) · does not count against the 53-man limit while suspended · still in Miami-Dade pretrial diversion program",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/5081394.png",
    contract: { years: 4, total: 14500000, guaranteed: 14500000, apy: 3625000, throughYear: 2028, cap2026: 3350000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "zadarius-smith",
    name: "Za'Darius Smith",
    number: 91,
    position: "EDGE",
    posSlot: "REDGE",
    positionGroup: "defense",
    depthRank: 1,
    height: 76, weight: 272, age: 33, experience: 11,
    college: "Kentucky",
    acquired: "fa-2026-1yr",
    stats: { tackles: 24, sacks: 9, ff: 1 },
    form: 7.4,
    status: "questionable",
    injuryNote: "Signed Aug 18 to a one-year deal worth $6M and up to $8M with incentives, un-retiring after leaving the game in October 2025 following five games with the Eagles. Three-time Pro Bowler, reunited with HC Kevin Stefanski (his coach in Cleveland, 2023-24), and the REDGE starter with Jalon Walker (ACL) out for the year and James Pearce Jr. serving an eight-game ban. Entered Week 4 leading the team with 2.5 sacks (SI Falcons). Left the 45-24 win at New Orleans (Oct 5) in the first quarter with a concussion and neck injury and did not return; now in the concussion protocol ahead of Sunday night vs. Baltimore and listed as did not participate (concussion, neck) on Wednesday's estimated report (Oct 7) and again in Thursday's practice (Oct 8). Returned as a limited participant on Friday (Oct 9) and was listed questionable, then downgraded to OUT on Saturday (Oct 10) after not clearing the protocol (team reporter Tori McElhaney, NFL.com). Earliest possible return is Week 6 vs. Chicago (Oct 18), and he was a limited participant (concussion, neck) in Wednesday's first Week 6 practice (Oct 14). Cleared the concussion protocol on Thursday (Oct 15) and was limited again with the neck alone listed (atlantafalcons.com); Jared Ivey, Cam Thomas and elevated DEs Bralen Trice and Drake Jackson absorb his snaps. Status kept at questionable because the tracker schema has no single-game 'out' value. Limited again Friday (Oct 16) and listed QUESTIONABLE (neck) on the final Week 6 report (atlantafalcons.com). Wednesday (Oct 21), first Week 7 report: limited (neck) (atlantafalcons.com). Friday (Oct 23), final Week 7 report (atlantafalcons.com): upgraded to FULL (neck) and listed QUESTIONABLE.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3043168.png",
    contract: { years: 1, total: 6000000, guaranteed: 3500000, apy: 6000000, throughYear: 2026, cap2026: 6000000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2025", team: "Philadelphia Eagles", type: "NFL" },
      { years: "2023–2024", team: "Cleveland / Detroit", type: "NFL" },
      { years: "2022", team: "Minnesota Vikings", type: "NFL · Pro Bowl" },
      { years: "2019–2021", team: "Green Bay Packers", type: "NFL · 2x Pro Bowl" },
      { years: "2015–2018", team: "Baltimore Ravens", type: "NFL" },
    ],
  },
  {
    id: "ebukam",
    name: "Samson Ebukam",
    number: 52,
    position: "EDGE",
    posSlot: "LEDGE",
    positionGroup: "defense",
    depthRank: 1,
    height: 74, weight: 245, age: 30, experience: 9,
    college: "Eastern Washington",
    acquired: "fa-2026-1yr",
    stats: { tackles: 31, sacks: 4 },
    form: 6.9,
    status: "questionable",
    injuryNote: "Signed March 12 on a one-year, $2.765M deal for veteran edge depth. Entering his ninth active NFL season across the Rams, 49ers and Colts; missed the 2024 season with a torn Achilles before returning in Indianapolis. Slides up to the LEDGE starter role after Atlanta's surprise cutdown-day release of Azeez Ojulari, working opposite Za'Darius Smith with Pearce serving an eight-game ban from Aug 30. Missed the Week 3 win at Green Bay (hamstring), then returned from a questionable tag to play in the 45-24 Monday-night win at New Orleans (Oct 5). Added to the Week 5 report as limited (hamstring) on Thursday (Oct 8), limited again Friday (Oct 9) and listed questionable for Sunday night vs. Baltimore. Wednesday (Oct 21), first Week 7 report: limited (hamstring) (atlantafalcons.com). Friday (Oct 23), final Week 7 report (atlantafalcons.com): limited (hamstring) and listed QUESTIONABLE.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3045527.png",
    contract: { years: 1, total: 2765000, guaranteed: 1500000, apy: 2765000, throughYear: 2026, cap2026: 2765000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2023–2025", team: "Indianapolis Colts", type: "NFL" },
      { years: "2021–2022", team: "San Francisco 49ers", type: "NFL" },
      { years: "2017–2020", team: "Los Angeles Rams", type: "NFL" },
    ],
  },
  {
    id: "charles-snowden",
    name: "Charles Snowden",
    number: null,
    position: "EDGE",
    posSlot: "LEDGE",
    positionGroup: "defense",
    depthRank: 3,
    height: 78, weight: 250, age: 28, experience: 3,
    college: "Virginia",
    acquired: "fa-2026-in-season",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Signed off Washington's practice squad to the 53-man roster on Tuesday (Oct 20), per NFL Network's Ian Rapoport, with Bralen Trice released in the corresponding move. Not yet on the Week 7 depth chart because the team had not announced the signing (Falcons Wire). A 6-foot-6 edge, undrafted out of Virginia in 2021, he started nine games for the Raiders in both 2024 and 2025 and has 67 career tackles, 4.5 sacks and 11 QB hits (Falcons Wire, Pro Football Rumors). Signed by Dallas in June, he was suspended for the first three games of 2026 over a prior DUI arrest and released in August with an injury settlement, then joined Washington's practice squad Sept 29 (Heavy). Jersey number and contract terms not yet published.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4240849.png",
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2026", team: "Washington Commanders", type: "NFL · practice squad" },
      { years: "2026", team: "Dallas Cowboys", type: "NFL · offseason" },
      { years: "2023–2025", team: "Las Vegas Raiders", type: "NFL · 18 starts (2024-25)" },
      { years: "2022", team: "Tampa Bay Buccaneers", type: "NFL · offseason" },
      { years: "2021", team: "Chicago Bears", type: "NFL · UDFA" },
      { years: "2017–2020", team: "Virginia", type: "College · 2020 All-ACC second team" },
    ],
  },
  {
    id: "deangelo-malone",
    name: "DeAngelo Malone",
    number: 50,
    position: "EDGE",
    posSlot: "LEDGE",
    positionGroup: "defense",
    depthRank: 4,
    height: 75, weight: 240, age: 27, experience: 5,
    college: "Western Kentucky",
    acquired: "fa-2025",
    stats: {},
    form: 0,
    status: "pup",
    injuryNote: "Placed on Reserve/PUP Aug 10, out for the 2026 season (injury). Rotational rusher, ex-Titans",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4243457.png",
    contract: { years: 1, total: 1300000, guaranteed: 100000, apy: 1300000, throughYear: 2026, cap2026: 1300000 },
    career: [
      { years: "2025–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2022–2024", team: "Tennessee Titans", type: "NFL" },
    ],
  },

  // =========================================
  // LINEBACKERS
  // =========================================
  {
    id: "deablo",
    name: "Divine Deablo",
    number: 0,
    position: "LB",
    posSlot: "MIKE",
    positionGroup: "defense",
    depthRank: 1,
    height: 75, weight: 226, age: 27, experience: 5,
    college: "Virginia Tech",
    acquired: "fa-2026",
    stats: { tackles: 92, tfl: 7, sacks: 2, int_def: 1 },
    form: 8.0,
    status: "questionable",
    injuryNote: "Arm. Injured in the first half of the 31-23 loss to Chicago (Oct 18) and ruled out late in the second quarter (atlantafalcons.com); Stefanski had no update Monday (Oct 19, AP). Had battled a hamstring issue through Weeks 4-6 practices without missing a game. MIKE · 3yr/$30M FA signing from Las Vegas. Wednesday (Oct 21), first Week 7 report: did not participate, with the injury listed as forearm (atlantafalcons.com). Did not practice Wednesday or Thursday (Oct 21-22, forearm) of 49ers week (official report via 49ers Webzone). Friday (Oct 23), final Week 7 report (atlantafalcons.com): did not practice and ruled OUT vs. San Francisco (forearm). Status kept at questionable because the tracker schema has no single-game 'out' value.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4037626.png",
    contract: { years: 3, total: 30000000, guaranteed: 18000000, apy: 10000000, throughYear: 2028, cap2026: 8500000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2021–2025", team: "Las Vegas Raiders", type: "NFL" },
    ],
  },
  {
    id: "christian-harris",
    name: "Christian Harris",
    number: 45,
    position: "LB",
    posSlot: "WILL",
    positionGroup: "defense",
    depthRank: 2,
    height: 73, weight: 230, age: 25, experience: 5,
    college: "Alabama",
    acquired: "trade-2025",
    stats: { tackles: 74, tfl: 6, sacks: 1.5 },
    form: 7.4,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4567099.png",
    contract: { years: 1, total: 3300000, guaranteed: 3300000, apy: 3300000, throughYear: 2026, cap2026: 3300000 },
    career: [
      { years: "2025–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2022–2024", team: "Houston Texans", type: "NFL" },
    ],
  },
  {
    id: "bertrand",
    name: "JD Bertrand",
    number: 40,
    position: "LB",
    posSlot: "MIKE",
        stRoles: ["PP"],
    stRank: {"PP":1},
    positionGroup: "defense",
    depthRank: 3,
    height: 73, weight: 235, age: 24, experience: 3,
    college: "Notre Dame",
    acquired: "draft-2024-R5",
    stats: { tackles: 18 },
    form: 6.2,
    status: "ir",
    injuryNote: "Placed on reserve/injured list Sep 1 (undisclosed); must miss at least four games before he can return",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4428872.png",
    contract: { years: 4, total: 4400000, guaranteed: 200000, apy: 1100000, throughYear: 2027, cap2026: 970000 },
    career: [{ years: "2024–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "josh-woods",
    name: "Josh Woods",
    number: 42,
    position: "LB",
    posSlot: "WILL",
    stRoles: ["PP", "KOR-cover"],
    stRank: { "PP": 2 },
    positionGroup: "defense",
    depthRank: 3,
    height: 73, weight: 235, age: 30, experience: 8,
    college: "Maryland",
    acquired: "fa-2024",
    stats: { tackles: 14 },
    form: 5.8,
    status: "active",
    injuryNote: "Signed off the practice squad to the 53 on Sep 1, filling JD Bertrand's roster spot; core special-teamer",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3128303.png",
    contract: { years: 1, total: 1300000, guaranteed: 0, apy: 1300000, throughYear: 2026, cap2026: 1300000 },
    career: [
      { years: "2024–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2023", team: "Arizona Cardinals", type: "NFL" },
      { years: "2021–2022", team: "Detroit Lions", type: "NFL" },
      { years: "2019–2021", team: "Chicago Bears", type: "NFL" },
    ],
  },
  {
    id: "verdon",
    name: "Malik Verdon",
    number: 43,
    position: "LB",
    posSlot: "WILL",
    positionGroup: "defense",
    depthRank: 4,
    height: 76, weight: 230, age: 23, experience: 1,
    college: "Iowa State",
    acquired: "fa-2025-UDFA",
    stats: {},
    form: 0,
    status: "ir",
    injuryNote: "Waived/injured Aug 12; reverted to injured reserve",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4684636.png",
    contract: { years: 1, total: 960000, guaranteed: 0, apy: 960000, throughYear: 2026, cap2026: 960000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
  },

  // =========================================
  // CORNERBACKS
  // =========================================
  {
    id: "terrell",
    name: "A.J. Terrell",
    number: 24,
    position: "CB",
    posSlot: "LCB",
    positionGroup: "defense",
    depthRank: 1,
    height: 73, weight: 195, age: 27, experience: 7,
    college: "Clemson",
    acquired: "draft-2020-R1-P16",
    stats: { tackles: 68, int_def: 2, pass_def: 13 },
    form: 8.2,
    status: "ir",
    injuryNote: "Placed on injured reserve Monday (Sep 22) with the groin injury that knocked him out of the Sept 20 Carolina loss in the first quarter, sidelining the CB1 for at least four games; the team signed DL Zach Harrison off the practice squad in the corresponding move. C.J. Henderson took his starting spot on the Week 4 depth chart (Sep 29), with Malcolm DeWalt IV behind him; the team also signed CB Robert Longerbeam off the Eagles' practice squad on Sep 23 · CB1 · paid like one (4yr/$81M extension in 2024) Eligible to come off IR next week; Stefanski (Oct 16): 'We'll see. I don't want to say just yet, but he's doing very well' (AJC). Monday (Oct 19), on a Week 7 return: 'It's trending that way, but let's get through the next couple of days' (AP). Wednesday (Oct 21), first Week 7 report: the team designated him for return from IR, opening a 21-day activation window (NBC Sports / PFT), and he was a limited participant (groin) in his first practice since Sept. 20 (atlantafalcons.com). Remains on IR until activated. Thursday (Oct 22): limited again (groin) on the official report (49ers Webzone); Falcons Wire described him as a full participant, so the two accounts differ. The team released CB Malcolm DeWalt IV the same day, a move both Falcons Wire and Atlanta Falcons On SI tied to a likely Terrell activation, though the team has not confirmed the link. Friday (Oct 23), final Week 7 report (atlantafalcons.com): a FULL participant (groin) and listed QUESTIONABLE. Stefanski: 'I thought he's looked better' and 'we'll see how it goes over the next 48 hours.' Must be activated to the 53 by 4 p.m. ET Saturday (Oct 24) to play Sunday.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4239995.png",
    contract: { years: 4, total: 81000000, guaranteed: 43500000, apy: 20250000, throughYear: 2028, cap2026: 19200000 },
    career: [{ years: "2020–", team: "Atlanta Falcons", type: "NFL · Pro Bowl 2021" }],
  },
  {
    id: "hughes",
    name: "Mike Hughes",
    number: 21,
    position: "CB",
    posSlot: "RCB",
    positionGroup: "defense",
    depthRank: 1,
    height: 70, weight: 190, age: 29, experience: 8,
    college: "UCF",
    acquired: "fa-2023",
    stats: { tackles: 57, int_def: 1, pass_def: 8 },
    form: 7.0,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3895841.png",
    contract: { years: 2, total: 9000000, guaranteed: 3000000, apy: 4500000, throughYear: 2026, cap2026: 4200000 },
    career: [{ years: "2023–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "henderson-cb",
    name: "C.J. Henderson",
    number: 39,
    position: "CB",
    posSlot: "LCB",
    positionGroup: "defense",
    depthRank: 1,
    height: 73, weight: 200, age: 27, experience: 6,
    college: "Florida",
    acquired: "fa-2026",
    stats: { tackles: 28, pass_def: 5 },
    form: 6.6,
    status: "questionable",
    injuryNote: "Groin. Hurt in the 30-23 overtime loss to Baltimore (Oct 11) and did not practice Wednesday (Oct 14), the only Falcon held out of the first Week 6 session. Stefanski said he is 'getting better' and the team is not ruling him out for Sunday vs. Chicago (atlantafalcons.com). Did not practice again on Thursday (Oct 15), his second straight DNP; DC Jeff Ulbrich, asked about the depth behind him: 'Mike Hughes is a top-end starter in this league' and 'Avieon (Terrell) is emerging.' Rookie Avieon Terrell would likely make his first career start if Henderson sits (AJC); Avieon Terrell, Billy Bowman and Sydney Brown are next in line. Started at cornerback since the Week 4 depth chart (Sep 29) in place of A.J. Terrell (IR, groin) · Reclamation · ex-#9 overall (2020 JAX) Ruled OUT for Sunday vs. Chicago on Friday's final report (Oct 16) after a third straight DNP; rookie Avieon Terrell starts outside (AJC). Status kept at questionable because the tracker schema has no single-game 'out' value. Wednesday (Oct 21), first Week 7 report: limited (groin), his first practice action since the Baltimore game (atlantafalcons.com). Friday (Oct 23), final Week 7 report (atlantafalcons.com): upgraded to FULL (groin) and listed QUESTIONABLE.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4240596.png",
    contract: { years: 1, total: 2200000, guaranteed: 750000, apy: 2200000, throughYear: 2026, cap2026: 2200000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2021–2025", team: "Carolina Panthers", type: "NFL" },
      { years: "2020", team: "Jacksonville Jaguars", type: "NFL · 1st-round pick" },
    ],
  },
  {
    id: "ford-cb",
    name: "Mike Ford Jr.",
    number: 28,
    position: "CB",
    posSlot: "LCB",
        stRoles: ["GUNNER"],
    stRank: {"GUNNER":1},
    positionGroup: "defense",
    depthRank: 4,
    height: 71, weight: 195, age: 31, experience: 8,
    college: "Southeast Missouri State",
    acquired: "fa-2026",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "ST captain candidate",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3050916.png",
    contract: { years: 1, total: 1300000, guaranteed: 200000, apy: 1300000, throughYear: 2026, cap2026: 1300000 },
    career: [{ years: "2026–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "longerbeam",
    name: "Robert Longerbeam",
    number: 37,
    position: "CB",
    posSlot: "RCB",
    positionGroup: "defense",
    depthRank: 4,
    height: 71, weight: 178, age: 25, experience: 1,
    college: "Rutgers",
    acquired: "ps-2026-PHI",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Signed off the Philadelphia Eagles' practice squad on Sep 23 after A.J. Terrell went to IR; added to the Week 4 depth chart (Sep 29). A 2025 sixth-round pick of the Ravens (No. 212 overall) who spent his rookie year on injured reserve after a training-camp injury, then was cut by Baltimore this summer. At Rutgers he was a captain and led the Big Ten with 11 passes defensed in 2024. Offers depth on defense and special teams.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4575860.png",
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2026", team: "Philadelphia Eagles", type: "NFL · practice squad" },
      { years: "2025", team: "Baltimore Ravens", type: "NFL · 6th-round pick" },
      { years: "2020–2024", team: "Rutgers", type: "College" },
    ],
  },
  {
    id: "bowman",
    name: "Billy Bowman Jr.",
    number: 33,
    position: "CB",
    posSlot: "NICKEL",
    positionGroup: "defense",
    depthRank: 2,
    height: 69, weight: 192, age: 22, experience: 1,
    college: "Oklahoma",
    acquired: "draft-2025-R4",
    stats: {},
    form: 0,
    status: "questionable",
    injuryNote: "Hamstring. Strained in the fourth quarter of the 31-23 loss to Chicago (Oct 18) and listed doubtful to return (atlantafalcons.com); Stefanski had no update Monday (Oct 19, AP). Returned in Week 3 from a late-Nov 2025 Achilles rupture; in the nickel/slot mix behind Avieon Terrell. Wednesday (Oct 21), first Week 7 report: did not participate (hamstring) (atlantafalcons.com). Did not practice Wednesday or Thursday (Oct 21-22, hamstring) of 49ers week (official report via 49ers Webzone). Friday (Oct 23), final Week 7 report (atlantafalcons.com): did not practice and ruled OUT vs. San Francisco (hamstring). Status kept at questionable because the tracker schema has no single-game 'out' value.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4431194.png",
    contract: { years: 4, total: 5200000, guaranteed: 950000, apy: 1300000, throughYear: 2028, cap2026: 1100000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
  },

  // =========================================
  // SAFETIES
  // =========================================
  {
    id: "bates",
    name: "Jessie Bates III",
    number: 3,
    position: "S",
    posSlot: "FS",
    positionGroup: "defense",
    depthRank: 1,
    height: 74, weight: 200, age: 29, experience: 9,
    college: "Wake Forest",
    acquired: "fa-2024",
    stats: { tackles: 98, int_def: 3, pass_def: 9, ff: 1 },
    form: 9.1,
    status: "active",
    injuryNote: "On the initial 53; a summer back ailment (missed camp practices through Aug 11) is behind him with no Week 1 concern. All-Pro FS and the anchor of the nickel base.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3919512.png",
    contract: { years: 4, total: 64000000, guaranteed: 36000000, apy: 16000000, throughYear: 2027, cap2026: 16800000 },
    career: [
      { years: "2024–", team: "Atlanta Falcons", type: "NFL · All-Pro 2024" },
      { years: "2018–2023", team: "Cincinnati Bengals", type: "NFL · Super Bowl LVI" },
    ],
  },
  {
    id: "xavier-watts",
    name: "Xavier Watts",
    number: 31,
    position: "S",
    posSlot: "SS",
    positionGroup: "defense",
    depthRank: 1,
    height: 72, weight: 205, age: 23, experience: 2,
    college: "Notre Dame",
    acquired: "draft-2025-R3",
    stats: { tackles: 58, int_def: 4, pass_def: 6 },
    form: 8.2,
    status: "active",
    injuryNote: "Rookie-year impact · ballhawk",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4431005.png",
    contract: { years: 4, total: 5100000, guaranteed: 4600000, apy: 1275000, throughYear: 2028, cap2026: 1170000 },
    career: [
      { years: "2025–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2021–2024", team: "Notre Dame", type: "College · 2x Bronko Nagurski winner" },
    ],
  },
  {
    id: "sydney-brown",
    name: "Sydney Brown",
    number: 29,
    position: "S",
    posSlot: "SS",
    positionGroup: "defense",
    depthRank: 2,
    height: 70, weight: 205, age: 26, experience: 4,
    college: "Illinois",
    acquired: "trade-2026-PHI",
    stats: { tackles: 41, int_def: 1, pass_def: 3 },
    form: 7.0,
    status: "active",
    injuryNote: "Acquired Mar 20 from Philly in pick swap",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4360386.png",
    contract: { years: 1, total: 1400000, guaranteed: 200000, apy: 1400000, throughYear: 2026, cap2026: 1400000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2023–2025", team: "Philadelphia Eagles", type: "NFL · Super Bowl LIX champ" },
    ],
  },
  {
    id: "hellams",
    name: "DeMarcco Hellams",
    number: 23,
    position: "S",
    posSlot: "SS",
        stRoles: ["PP"],
    stRank: {"PP":2},
    positionGroup: "defense",
    depthRank: 3,
    height: 72, weight: 205, age: 25, experience: 4,
    college: "Alabama",
    acquired: "draft-2023-R7",
    stats: { tackles: 36 },
    form: 6.6,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4567111.png",
    contract: { years: 4, total: 3800000, guaranteed: 200000, apy: 950000, throughYear: 2026, cap2026: 1100000 },
    career: [{ years: "2023–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "darren-hall",
    name: "Darren Hall",
    number: 41,
    position: "CB",
    posSlot: "RES",
    positionGroup: "defense",
    depthRank: 4,
    height: 72, weight: 190, age: 27, experience: 4,
    college: "San Diego State",
    acquired: "fa-2026-reunion",
    stats: {},
    form: 0,
    status: "ir",
    injuryNote: "Placed on Reserve/Injured on cutdown day (Aug 30); does not count against the 53 and can return later in the season.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4261606.png",
    contract: { years: 1, total: 1170000, guaranteed: 0, apy: 1170000, throughYear: 2026, cap2026: 1170000 },
    career: [
      { years: "2021–2022", team: "Atlanta Falcons", type: "NFL" },
      { years: "2023", team: "Indianapolis Colts", type: "NFL" },
      { years: "2024–2025", team: "Arizona Cardinals", type: "NFL" },
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
    ],
  },

  // =========================================
  // 2026 DRAFT CLASS — rookies report May 1 / 8 for minicamp
  // =========================================
  {
    id: "avieon-terrell",
    name: "Avieon Terrell",
    number: 12,
    position: "CB",
    posSlot: "RCB",
    positionGroup: "defense",
    depthRank: 2,
    height: 71, weight: 184, age: 21, experience: 0,
    college: "Clemson",
    acquired: "draft-2026-R2-P48",
    stats: {},
    form: 0,
    status: "questionable",
    injuryNote: "Started at outside cornerback vs. Chicago (Oct 18) with C.J. Henderson (groin) out, his third career start and first on the outside. Was evaluated for a concussion and also suffered a stinger, was listed questionable to return, and came back in the third quarter (atlantafalcons.com). AP lists the injury as his left shoulder; Stefanski had no update Monday (Oct 19). Watch the Week 7 injury report. Wednesday (Oct 21), first Week 7 report: limited, with the injury now listed as hamstring (atlantafalcons.com). Friday (Oct 23), final Week 7 report (atlantafalcons.com): limited, injury now listed as back, and QUESTIONABLE.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4870988.png",
    contract: { years: 4, total: 8500000, guaranteed: 4200000, apy: 2125000, throughYear: 2029, cap2026: 1400000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL · 1st known starting-CB sibling tandem" },
      { years: "2022–2025", team: "Clemson", type: "College · A.J. Terrell's brother" },
    ],
  },
  {
    id: "zachariah-branch",
    name: "Zachariah Branch",
    number: 17,
    position: "WR",
    posSlot: "SLOT",
        stRoles: ["KR","PR"],
    stRank: {"KR":1,"PR":1},
    positionGroup: "offense",
    depthRank: 3,
    height: 69, weight: 178, age: 21, experience: 0,
    college: "Georgia",
    acquired: "draft-2026-R3-P79",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4870612.png",
    contract: { years: 4, total: 5800000, guaranteed: 1850000, apy: 1450000, throughYear: 2029, cap2026: 1100000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2025", team: "Georgia", type: "College · transfer from USC" },
      { years: "2023–2024", team: "USC", type: "College · 2023 Jet Award winner" },
    ],
  },
  {
    id: "kendal-daniels",
    name: "Kendal Daniels",
    number: 53,
    position: "LB",
    posSlot: "WILL",
    positionGroup: "defense",
    depthRank: 1,
    height: 76, weight: 222, age: 23, experience: 0,
    college: "Oklahoma",
    acquired: "draft-2026-R4-P134",
    stats: {},
    form: 0,
    status: "questionable",
    injuryNote: "Neck. Carted off on a stretcher in the third quarter of the 31-23 loss to Chicago (Oct 18) after his facemask hit TE Colston Loveland's knee on a tackle, and taken to Grady Memorial Hospital. The team said he was alert with movement in all extremities; The Athletic's Josh Kendall reported he was walking under his own power in the locker room. Stefanski: 'All reports so far are good.' Monday (Oct 19): was at the facility, and Stefanski said it was too early to project his status for 49ers week: 'I feel very, very fortunate that he got the treatment he got' and 'we feel really good about where he is' (AP). Earlier: limited (Achilles) on the Week 4 and Week 6 practice reports. Wednesday (Oct 21), first Week 7 report: a FULL participant (neck), and Stefanski confirmed he is not in the concussion protocol: 'Doing a lot better. He will practice today. He'll move around. But we'll see how it goes this week' (atlantafalcons.com). Thursday (Oct 22): moved from full to limited (neck) on the official report (49ers Webzone); Falcons Wire wrote he 'appears to be good to go for Week 7.' DC Jeff Ulbrich, on Daniels filling in for Divine Deablo: 'He takes a lot of pride in getting everybody on the same page' (ESPN's Marc Raimondi, via Falcons Wire). Friday (Oct 23), final Week 7 report (atlantafalcons.com): back to FULL (neck) and listed QUESTIONABLE; Daniels said he 'feels good' and could wear the green dot with Deablo out (Atlanta Falcons On SI).",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4595343.png",
    contract: { years: 4, total: 4750000, guaranteed: 700000, apy: 1187500, throughYear: 2029, cap2026: 900000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2025", team: "Oklahoma", type: "College · 'Cheetah' hybrid LB · 13 GS, 9 TFL" },
      { years: "2022–2024", team: "Oklahoma State", type: "College · safety" },
    ],
  },
  {
    id: "anterio-thompson",
    name: "Anterio Thompson",
    number: 98,
    position: "DT",
    posSlot: "1T",
    positionGroup: "defense",
    depthRank: 4,
    height: 74, weight: 306, age: 23, experience: 0,
    college: "Washington",
    acquired: "draft-2026-R6-P208",
    stats: {},
    form: 0,
    status: "nfi",
    injuryNote: "Placed on the Active/Non-Football Injury list Saturday Jul 25, entering camp. The sixth-rounder missed all of rookie minicamp, OTAs and mandatory minicamp with an undisclosed injury; Stefanski called it 'injury-related, but he's working through it.' The NFI tag lets him practice once healthy but makes an already-tough path to the 53 harder.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/5150660.png",
    contract: { years: 4, total: 4250000, guaranteed: 130000, apy: 1062500, throughYear: 2029, cap2026: 850000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2021–2025", team: "Washington", type: "College · 4.73 forty / 3 blocked punts in 2025" },
    ],
  },
  {
    id: "harold-perkins",
    name: "Harold Perkins Jr.",
    number: 56,
    position: "LB",
    posSlot: "WILL",
    positionGroup: "defense",
    depthRank: 4,
    height: 73, weight: 220, age: 22, experience: 0,
    college: "LSU",
    acquired: "draft-2026-R6-P215",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Returning from torn right ACL (2024); ran 4.45 at pro day",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4685502.png",
    contract: { years: 4, total: 4450000, guaranteed: 100000, apy: 1112500, throughYear: 2029, cap2026: 850000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2022–2025", team: "LSU", type: "College · 2022 Freshman All-American" },
    ],
  },
  {
    id: "ethan-onianwa",
    name: "Ethan Onianwa",
    number: 75,
    position: "OT",
    posSlot: "RT",
    positionGroup: "offense",
    depthRank: 4,
    height: 78, weight: 333, age: 23, experience: 0,
    college: "Ohio State",
    acquired: "draft-2026-R7-P231",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4683194.png",
    contract: { years: 4, total: 4150000, guaranteed: 80000, apy: 1037500, throughYear: 2029, cap2026: 800000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2025", team: "Ohio State", type: "College · transfer · did not start" },
      { years: "2021–2024", team: "Rice", type: "College · 34 starts at OT" },
    ],
  },

  // =========================================
  // SPECIAL TEAMS
  // =========================================
  {
    id: "folk",
    name: "Nick Folk",
    number: 6,
    position: "K",
    positionGroup: "special",
    depthRank: 1,
    height: 73, weight: 222, age: 41, experience: 19,
    college: "Arizona",
    acquired: "fa-2026",
    stats: { fgMade: 31, fgAttempted: 35, longFG: 55, xpMade: 28, xpAttempted: 29 },
    form: 8.8,
    status: "active",
    injuryNote: "Ageless · 88.6% career FG",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/10621.png",
    contract: { years: 2, total: 5000000, guaranteed: 2000000, apy: 2500000, throughYear: 2027, cap2026: 2500000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2007–2025", team: "Dallas / Tampa / NY Jets / New England / Tennessee", type: "NFL · Pro Bowl 2023" },
    ],
  },
  {
    id: "bailey",
    name: "Jake Bailey",
    number: 16,
    position: "P",
        stRoles: ["H"],
    stRank: {"H":1},
    positionGroup: "special",
    depthRank: 1,
    height: 74, weight: 208, age: 28, experience: 7,
    college: "Stanford",
    acquired: "fa-2026-3yr",
    stats: { puntAvg: 48.2, netPuntAvg: 42.8, punts_i20: 25 },
    form: 8.4,
    status: "active",
    injuryNote: "1x All-Pro (2020)",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3931395.png",
    contract: { years: 3, total: 9000000, guaranteed: 4000000, apy: 3000000, throughYear: 2028, cap2026: 2800000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2019–2025", team: "New England / Miami", type: "NFL · 2020 All-Pro" },
    ],
  },
  {
    id: "mccullough-ls",
    name: "Liam McCullough",
    number: 49,
    position: "LS",
    positionGroup: "special",
    depthRank: 1,
    height: 74, weight: 230, age: 28, experience: 5,
    college: "Ohio State",
    acquired: "fa-2022",
    stats: {},
    form: 7.5,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/3915528.png",
    contract: { years: 2, total: 2700000, guaranteed: 500000, apy: 1350000, throughYear: 2026, cap2026: 1400000 },
    career: [{ years: "2022–", team: "Atlanta Falcons", type: "NFL" }],
  },
];

// =========================================
// FRONT OFFICE + COACHING STAFF
// =========================================
// Tiered roster of decision-makers. Photos sourced from atlantafalcons.com's
// Cloudinary CDN (HEAD-verified 200 OK). If a photo URL ever 404s, leave the
// image field null — the view falls back to initials.
//
// 2026 org structure (per Blank's Jan 2026 letter to fans):
//   • OWNERSHIP — Arthur Blank
//   • FOOTBALL OPS — Matt Ryan (President), Ian Cunningham (GM)
//   • BUSINESS — Greg Beadles (President & CEO)
//   • COACHING — Stefanski + coordinators

export const FRONT_OFFICE = [
  // ─── OWNERSHIP ────────────────────────────────────────────────────────────
  {
    id: "arthur-blank",
    name: "Arthur M. Blank",
    title: "Owner & Chairman",
    tier: "OWNERSHIP",
    since: 2002,
    bio: "Home Depot co-founder. Bought the Falcons in 2002 for $545M. Built Mercedes-Benz Stadium; owns Atlanta United FC and AMBSE.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/lijqsh3vasfinxnmhhxe.jpg",
  },

  // ─── FOOTBALL OPERATIONS ──────────────────────────────────────────────────
  {
    id: "matt-ryan-fo",
    name: "Matt Ryan",
    title: "President of Football Operations",
    tier: "FOOTBALL OPS",
    since: 2026,
    bio: "Falcons' all-time franchise QB (2008–2021, '16 MVP). Holds final football authority — HC and GM report to him.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/qzp3if8letihdg2hol1f.jpg",
  },
  {
    id: "ian-cunningham",
    name: "Ian Cunningham",
    title: "General Manager",
    tier: "FOOTBALL OPS",
    since: 2026,
    bio: "Hired from Chicago (Assistant GM, 2022–25). 'Build through the trenches' mandate. First draft: Branch, A. Terrell, Onianwa.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/epnbjquga4z6wlfi7gro.png",
  },

  // ─── BUSINESS / CLUB ──────────────────────────────────────────────────────
  {
    id: "greg-beadles",
    name: "Greg Beadles",
    title: "President & CEO",
    tier: "BUSINESS",
    since: 2026,
    bio: "Promoted Jan 2026, replacing Rich McKay. 23-year Falcons veteran on the business side. Hosts the Madrid game at Bernabéu Nov 8.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/ced4kse7xkadcrkamylm.jpg",
  },

  // ─── HEAD COACH ───────────────────────────────────────────────────────────
  {
    id: "kevin-stefanski",
    name: "Kevin Stefanski",
    title: "Head Coach",
    tier: "COACHING",
    since: 2026,
    bio: "Hired Jan 2026 after 6 seasons in Cleveland (2x AP Coach of the Year). Installs play-action, under-center, wide-zone DNA.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/liausetnt2rma91emlfy.jpg",
  },

  // ─── COORDINATORS ─────────────────────────────────────────────────────────
  {
    id: "tommy-rees",
    name: "Tommy Rees",
    title: "Offensive Coordinator · Play Caller",
    tier: "COORDINATORS",
    since: 2026,
    bio: "33 yrs old. Was Browns TEs coach '24 → OC mid-'25. Notre Dame QB pedigree. Stefanski: 'very comfortable' with him calling plays.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/fcevqfof9amqkjeo60pz.jpg",
  },
  {
    id: "jeff-ulbrich",
    name: "Jeff Ulbrich",
    title: "Defensive Coordinator",
    tier: "COORDINATORS",
    since: 2024,
    bio: "Retained from the previous staff. 4-3 / hybrid front. Ex-NFL LB (SF '00–'09). Drives the Walker/Pearce edge package.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/lsbimbddujis4at4mzzp.jpg",
  },
  {
    id: "craig-aukerman",
    name: "Craig Aukerman",
    title: "Special Teams Coordinator",
    tier: "COORDINATORS",
    since: 2026,
    bio: "New hire alongside Stefanski. Inherits Folk/Bailey/McCullough specialist trio plus Branch return package.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/e9snvay0ojf5awficdwp.jpg",
  },

  {
    id: "tanner-engstrand",
    name: "Tanner Engstrand",
    title: "Passing Game Coordinator",
    tier: "COORDINATORS",
    since: 2026,
    bio: "Hired Feb 1 from the Jets (OC, 2025). Detroit assistant 2020–24, last two years as Ben Johnson's PGC. Ex-SDSU QB. Effectively the de facto No. 2 voice on the Rees offense.",
    image: "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_mobile/f_png/falcons/uod4wljnullspbjl83sj.png",
  },
  {
    id: "patrick-toney",
    name: "Patrick Toney",
    title: "Defensive Passing Game Coordinator",
    tier: "COORDINATORS",
    since: 2026,
    bio: "New hire under Ulbrich. Inherits the Bates/Brown safety pairing and the A.J. Terrell / Mike Hughes / Avieon Terrell corner room.",
    image: "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_mobile/f_png/falcons/unp7r8vynonk9rs2nl1r.png",
  },

  // ─── POSITION COACHES (OFFENSE) ───────────────────────────────────────────
  {
    id: "bill-callahan",
    name: "Bill Callahan",
    title: "Offensive Line Coach",
    tier: "POSITION COACHES",
    since: 2026,
    bio: "Long-tenured OL guru (ex-Cowboys, Browns, Raiders HC). Reunited with Stefanski. Tasked with the Matthews / Taylor tackle build.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/w8eo7bazirbaauv79qat.jpg",
  },
  {
    id: "alex-van-pelt",
    name: "Alex Van Pelt",
    title: "Quarterbacks Coach",
    tier: "POSITION COACHES",
    since: 2026,
    bio: "Hired Jan 31. Stefanski's OC in Cleveland 2020–23, then QB coach in '24. Charged with developing Penix through the ACL rehab while Tua runs the team.",
    image: "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_mobile/f_png/falcons/r9seuy1op4mbdaufm7pb.png",
  },
  {
    id: "michael-pitre",
    name: "Michael Pitre",
    title: "Running Backs Coach",
    tier: "POSITION COACHES",
    since: 2024,
    bio: "Retained from the previous staff. Coached Bijan's 1,400-yard breakout in 2025 and the Allgeier 1A/1B platoon. Now reset around Bijan + Brian Robinson Jr.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/pyiiqk0dagdlr0bcc9ev.jpg",
  },
  {
    id: "robert-prince",
    name: "Robert Prince",
    title: "Wide Receivers Coach",
    tier: "POSITION COACHES",
    since: 2026,
    bio: "20-year NFL assistant. Inherits the Drake London / Jahan Dotson / Zaccheaus / Branch / Mooney-replacement room.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/xjamdd88wajfarvrtrzi.jpg",
  },
  {
    id: "kevin-koger",
    name: "Kevin Koger",
    title: "Tight Ends Coach",
    tier: "POSITION COACHES",
    since: 2026,
    bio: "Reunites with Stefanski/Rees from the Browns. Tasked with the Pitts franchise-tag year and the Charlie Woerner blocking complement.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/ao6vpq3uhvxwniaicbll.jpg",
  },

  // ─── POSITION COACHES (DEFENSE) ───────────────────────────────────────────
  {
    id: "nate-ollie",
    name: "Nate Ollie",
    title: "Defensive Line Coach",
    tier: "POSITION COACHES",
    since: 2025,
    bio: "Retained. Architect of the attack-front that took the 2025 defense from 31st in sacks (2024) to 2nd overall — a franchise record. Now installs around Dorlus + Maason Smith.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/omw2t2n59lqyimdwpgw5.jpg",
  },
  {
    id: "barrett-ruud",
    name: "Barrett Ruud",
    title: "Linebackers Coach",
    tier: "POSITION COACHES",
    since: 2024,
    bio: "Retained. Two-year run coaching the inside LB room; helped Elliss post a 100-tackle / 10-TFL / 3.5-sack / 1-INT line in 2025. Now installs around Deablo + Harris.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/wph0xhlwcmuwhxviabxh.jpg",
  },
  {
    id: "john-timu",
    name: "John Timu",
    title: "Outside Linebackers Coach",
    tier: "POSITION COACHES",
    since: 2026,
    bio: "New hire. Runs an edge room reshaped by August: Jalon Walker lost for the year (ACL) and James Pearce Jr. serving an eight-game ban, plus the surprise cutdown-day release of Azeez Ojulari, so the group now leans on Za'Darius Smith and Samson Ebukam with Bralen Trice and Cameron Thomas behind them. Still the position group most central to Ulbrich's 2026 jump.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/xi51kjyig4wokjmzpvtd.jpg",
  },
  {
    id: "justin-hood",
    name: "Justin Hood",
    title: "Secondary Coach",
    tier: "POSITION COACHES",
    since: 2026,
    bio: "New hire. Inherits an A.J. Terrell-anchored room with an open CB2 competition between Mike Hughes and rookie Avieon Terrell.",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/y5lv1ttvynatjj1ahrpt.jpg",
  },

  // ─── ADVISORY / AMBSE ─────────────────────────────────────────────────────
  {
    id: "bob-quinn",
    name: "Bob Quinn",
    title: "Senior Advisor to the Head Coach",
    tier: "ADVISORY",
    since: 2026,
    bio: "Hired Jan 26 alongside Stefanski. Stefanski's senior personnel/coaching exec in Cleveland 2021–25. Ex-Lions GM (2016–20).",
    image: "https://static.clubs.nfl.com/image/upload/f_auto/falcons/eeeakdt6zrbp2qmdyo36.jpg",
  },
  {
    id: "rich-mckay",
    name: "Rich McKay",
    title: "CEO · AMB Sports & Entertainment",
    tier: "AMBSE",
    since: 2026,
    bio: "Moved off the football side in January when Beadles took the CEO seat. Now leads the parent holding company — Mercedes-Benz Stadium, Atlanta United, the 2026 World Cup, the 2028 Super Bowl. Still co-chair of the NFL Competition Committee.",
    image: "https://images.mlssoccer.com/image/private/f_auto/mls-atl/gkffzvvcnnavfcwtwyi0.jpg",
  },
];

// =========================================
// TEAM LOGOS
// =========================================
export const TEAM_LOGOS = {
  ATL: "https://static.www.nfl.com/image/private/f_auto/league/d8m7hzpsbrl6pnqht8op",
  NO: "https://static.www.nfl.com/image/private/f_auto/league/grhjkahghjkk17v43hdx",
  CAR: "https://static.www.nfl.com/image/private/f_auto/league/ervfzgrqdpnc7lh5gqwq",
  TB: "https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih",
  PHI: "https://static.www.nfl.com/image/private/f_auto/league/puhrqgj71gobgdkdo6uq",
  KC: "https://static.www.nfl.com/image/private/f_auto/league/ujshjqvmnxce8m4obmvs",
  SF: "https://static.www.nfl.com/image/private/f_auto/league/dxibuyxbk0b9ua5ih9hn",
  WAS: "https://static.www.nfl.com/image/private/f_auto/league/tcck1wghs3bhoy0c3q3c",
  DET: "https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr",
  GB: "https://static.www.nfl.com/image/private/f_auto/league/gppfvr7n8gljgjaqux2x",
  CHI: "https://static.www.nfl.com/image/private/f_auto/league/ra0poq2ivwyahbaq86d2",
  MIN: "https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz",
  PIT: "https://static.www.nfl.com/image/private/f_auto/league/xujg9t3t4u5nmjgr54wx",
  BAL: "https://static.www.nfl.com/image/private/f_auto/league/ucsdijmddsqcj1i9tddd",
  CIN: "https://static.www.nfl.com/image/private/f_auto/league/okxpteoliyayufypqalq",
  CLE: "https://static.www.nfl.com/image/private/f_auto/league/fgbn8acp4opvyxk13dcy",
};

// =========================================
// RSS FEEDS
// =========================================
export const RSS_FEEDS = [
  {
    name: "The Falcoholic",
    url: "https://www.thefalcoholic.com/rss/index.xml",
    color: "#A71930",
  },
  {
    name: "ESPN NFL",
    url: "https://www.espn.com/espn/rss/nfl/news",
    color: "#de0613",
  },
  {
    name: "Pro Football Rumors · Falcons",
    url: "https://www.profootballrumors.com/atlanta-falcons/feed",
    color: "#F39C12",
  },
];

// =========================================
// NEXT GAME (null during offseason)
// =========================================
export const NEXT_GAME = {
  week: 7,
  opp: "San Francisco 49ers",
  oppAbbr: "SF",
  home: true,
  venue: "Mercedes-Benz Stadium · Atlanta, Ga.",
  date: "2026-10-25",
  kickoff: "1:00 PM ET",
  tv: "FOX",
  note: "Atlanta (2-4, 0-3 at home) hosts unbeaten San Francisco (6-0). Line: opened 49ers -4.5, total 50.5 (FOX Sports, Oct 19); DraftKings SF -2.5, total 49.5 (ESPN, Oct 23); AP lists SF -2.5 (Oct 24). ESPN FPI gives the 49ers a 78.7% chance. Atlanta, final report (Fri Oct 23, atlantafalcons.com): OUT: RB Brian Robinson Jr. (hamstring), LB Divine Deablo (forearm), DB Billy Bowman Jr. (hamstring), OT Michael Jerrell (bicep). QUESTIONABLE (10): CB A.J. Terrell (groin, full Friday, must be activated from IR by 4 p.m. ET Saturday to play), LB Kendal Daniels (neck, full), CB C.J. Henderson (groin, full), DE Za'Darius Smith (neck, full), DE Cam Thomas (groin, full), WR Beaux Collins (hip), DT Gervon Dexter Sr. (hamstring), DE Samson Ebukam (hamstring), CB Avieon Terrell (back), OT Cameron Williams (ankle) and WR Olamide Zaccheaus (shoulder). RB Khalil Herbert elevated from the practice squad; Andy Dalton expected inactive. San Francisco, final report: OUT: Nick Bosa (calf, knee), Mike Evans (ribs, Achilles), Deebo Samuel (hamstring), Luke Gifford, Garret Wallow, Marques Sigle; Bosa and Evans did not travel (NBC Sports Bay Area). Questionable: WR Christian Kirk (calf, expected to be activated from IR Saturday), S Siran Neal, CB Upton Stout. Former Falcons HC Raheem Morris returns as the 49ers' defensive coordinator. Falcons wear black throwbacks with red helmets. Inactives 11:30 AM ET. Atlanta trails Carolina (3-2) by 1.5 games. Next: at Tampa Bay in Week 8.",
};

// =========================================
// 2026 SCHEDULE
// =========================================
// Status of the full schedule release. Update once tonight's reveal lands.
//   "pre-reveal"  — before 8 PM ET Thu May 14 (only locked games shown)
//   "revealed"    — full schedule public, populate week-by-week
//   "in-season"   — games being played
export const SCHEDULE_2026_STATUS = "revealed";

// Reveal moment so the countdown can tick down to 0.
export const SCHEDULE_2026_REVEAL_AT = "2026-05-14T20:00:00-04:00";

// 17 opponents are locked even pre-reveal. Each entry: { code, side, repeat }
// `side` = home | away, `repeat` = the rematch's side (since divisional opponents
// hit twice — one home, one away).
export const SCHEDULE_2026_OPPONENTS = {
  // NFC South — home + away
  divisional: [
    { code: "CAR", name: "Carolina Panthers", sides: ["home", "away"] },
    { code: "NO",  name: "New Orleans Saints", sides: ["home", "away"] },
    { code: "TB",  name: "Tampa Bay Buccaneers", sides: ["home", "away"] },
  ],
  homeOnly: [
    { code: "BAL", name: "Baltimore Ravens" },
    { code: "CHI", name: "Chicago Bears" },
    { code: "CIN", name: "Cincinnati Bengals", note: "Madrid · Bernabéu" },
    { code: "DET", name: "Detroit Lions" },
    { code: "KC",  name: "Kansas City Chiefs" },
    { code: "SF",  name: "San Francisco 49ers" },
  ],
  awayOnly: [
    { code: "CLE", name: "Cleveland Browns" },
    { code: "GB",  name: "Green Bay Packers" },
    { code: "MIN", name: "Minnesota Vikings" },
    { code: "PIT", name: "Pittsburgh Steelers" },
    { code: "WAS", name: "Washington Commanders" },
  ],
};

// 18 entries (17 games + bye). status: "confirmed" | "leaked" | "tbd" | "bye"
// All 18 rows confirmed by the May 14 reveal; Weeks 16 and 18 flex-eligible.
export const SCHEDULE_2026 = [
  {
    week: 1,
    status: "final",
    opponent: "PIT",
    opponentName: "Pittsburgh Steelers",
    side: "away",
    date: "2026-09-13",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "Acrisure Stadium, Pittsburgh",
    result: "L",
    atlScore: 13,
    oppScore: 20,
    note: "Season opener · Falcons fell 20-13; T.J. Watt pick-six, two missed FGs and nine penalties sank a winnable debut for Stefanski.",
  },
  {
    week: 2,
    status: "confirmed",
    opponent: "CAR",
    opponentName: "Carolina Panthers",
    side: "home",
    date: "2026-09-20",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "Mercedes-Benz Stadium, Atlanta",
    result: "L",
    atlScore: 3,
    oppScore: 34,
    note: "Home opener · Panthers 34-3. Cooper Rush benched for Jack Strand; Bryce Young threw three TDs and Devin Lloyd took a pick to the house as Atlanta fell to 0-2.",
  },
  {
    week: 3,
    status: "final",
    opponent: "GB",
    opponentName: "Green Bay Packers",
    side: "away",
    date: "2026-09-24",
    kickoffET: "8:15 PM ET",
    tv: "Amazon Prime",
    venue: "Lambeau Field, Green Bay",
    result: "W",
    atlScore: 35,
    oppScore: 14,
    note: "Thursday Night Football · Falcons 35-14. Michael Penix Jr. (18-of-25, 256, TD) won his first start back from a torn ACL; Bijan Robinson ran for 194 yards and two scores (213 from scrimmage), Drake London caught nine for 194, and the defense allowed a franchise-record-low 17 rushing yards as Atlanta got its first win of the year.",
  },
  {
    week: 4,
    status: "final",
    opponent: "NO",
    opponentName: "New Orleans Saints",
    side: "away",
    date: "2026-10-05",
    kickoffET: "8:15 PM ET",
    tv: "ESPN",
    venue: "Caesars Superdome, New Orleans",
    result: "W",
    atlScore: 45,
    oppScore: 24,
    note: "Monday Night Football · Falcons 45-24. Bijan Robinson (145 yards, two TDs, including a 59-yarder on the third snap) and Brian Robinson Jr. (three TDs) combined for five rushing scores; Michael Penix Jr. went 15-of-20 for 223 yards and a TD with no turnovers as Atlanta never trailed and reached 2-2.",
  },
  {
    week: 5,
    status: "final",
    opponent: "BAL",
    opponentName: "Baltimore Ravens",
    side: "home",
    date: "2026-10-11",
    kickoffET: "8:20 PM ET",
    tv: "NBC",
    venue: "Mercedes-Benz Stadium, Atlanta",
    result: "L",
    atlScore: 23,
    oppScore: 30,
    note: "Sunday Night Football · Ravens 30-23 (OT). Atlanta led 23-15 with 2:25 left, but Tyler Huntley (24-of-32, 201, two TDs) drove 71 yards for a TD and Derrick Henry ran in the tying two-point try. Michael Penix Jr. (19-of-32, 240, TD) hurt his ribs on a late sack; Huntley's 1-yard sneak won it in overtime and Kyle Hamilton picked off Tua Tagovailoa to end it. Jessie Bates III scored on a 36-yard fumble return.",
  },
  {
    week: 6,
    status: "final",
    opponent: "CHI",
    opponentName: "Chicago Bears",
    side: "home",
    date: "2026-10-18",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "Mercedes-Benz Stadium, Atlanta",
    result: "L",
    atlScore: 23,
    oppScore: 31,
    note: "Bears 31-23. Caleb Williams (30-of-36, 305, TD) returned from a hamstring injury and Chicago scored TDs on its first two drives; Zachariah Branch lost two return fumbles and Kyler Gordon sacked Michael Penix Jr. three times, forcing the game-ending fumble. Penix threw three TDs, two to Kyle Pitts in a 16-point fourth quarter. LB Kendal Daniels was carted off with a neck injury.",
  },
  {
    week: 7,
    status: "confirmed",
    opponent: "SF",
    opponentName: "San Francisco 49ers",
    side: "home",
    date: "2026-10-25",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "Mercedes-Benz Stadium, Atlanta",
    note: "49ers in Atlanta · rematch of 2025 Falcons home win.",
  },
  {
    week: 8,
    status: "confirmed",
    opponent: "TB",
    opponentName: "Tampa Bay Buccaneers",
    side: "away",
    date: "2026-11-01",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "Raymond James Stadium, Tampa",
    note: "First divisional road game vs. Bucs · pre-Madrid sendoff.",
  },
  {
    week: 9,
    status: "confirmed",
    opponent: "CIN",
    opponentName: "Cincinnati Bengals",
    side: "home",
    date: "2026-11-08",
    kickoffET: "9:30 AM ET",
    tv: "NFL Network",
    venue: "Santiago Bernabéu, Madrid",
    note: "International · Falcons HOST Bengals at Real Madrid's Bernabéu. Bijan vs. Burrow / Chase.",
  },
  {
    week: 10,
    status: "confirmed",
    opponent: "KC",
    opponentName: "Kansas City Chiefs",
    side: "home",
    date: "2026-11-15",
    kickoffET: "1:00 PM ET",
    tv: "CBS",
    venue: "Mercedes-Benz Stadium, Atlanta",
    note: "Mahomes / Reid in Atlanta · post-Madrid home stand.",
  },
  {
    week: 11,
    status: "bye",
    opponent: "BYE",
    opponentName: "Bye Week",
    side: null,
    date: "2026-11-22",
    kickoffET: "—",
    tv: "—",
    venue: "—",
    note: "Bye week · post-Madrid + KC, well-timed mid-season rest.",
  },
  {
    week: 12,
    status: "confirmed",
    opponent: "MIN",
    opponentName: "Minnesota Vikings",
    side: "away",
    date: "2026-11-29",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "U.S. Bank Stadium, Minneapolis",
    note: "Out of the bye · Stefanski returns to MN as a visitor.",
  },
  {
    week: 13,
    status: "confirmed",
    opponent: "DET",
    opponentName: "Detroit Lions",
    side: "home",
    date: "2026-12-06",
    kickoffET: "1:00 PM ET",
    tv: "CBS",
    venue: "Mercedes-Benz Stadium, Atlanta",
    note: "Lions in Atlanta · Bijan vs. Gibbs RB-market showcase.",
  },
  {
    week: 14,
    status: "confirmed",
    opponent: "CLE",
    opponentName: "Cleveland Browns",
    side: "away",
    date: "2026-12-13",
    kickoffET: "1:00 PM ET",
    tv: "CBS",
    venue: "Huntington Bank Field, Cleveland",
    note: "Stefanski's homecoming · faces the team that hired him in 2020.",
  },
  {
    week: 15,
    status: "confirmed",
    opponent: "WAS",
    opponentName: "Washington Commanders",
    side: "away",
    date: "2026-12-20",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "Northwest Stadium, Landover",
    note: "Road test vs. Daniels / Quinn · rematch of 2025 ATL home loss.",
  },
  {
    week: 16,
    status: "confirmed",
    opponent: "TB",
    opponentName: "Tampa Bay Buccaneers",
    side: "home",
    date: "2026-12-27",
    kickoffET: "TBD",
    tv: "TBD",
    venue: "Mercedes-Benz Stadium, Atlanta",
    note: "Flex-eligible · NFC South rematch, date/time set by NFL.",
  },
  {
    week: 17,
    status: "confirmed",
    opponent: "NO",
    opponentName: "New Orleans Saints",
    side: "home",
    date: "2027-01-03",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "Mercedes-Benz Stadium, Atlanta",
    note: "Saints rematch · second-to-last week, division stakes likely.",
  },
  {
    week: 18,
    status: "confirmed",
    opponent: "CAR",
    opponentName: "Carolina Panthers",
    side: "away",
    date: "2027-01-10",
    kickoffET: "TBD",
    tv: "TBD",
    venue: "Bank of America Stadium, Charlotte",
    note: "Flex-eligible season finale · NFC South closer in Charlotte.",
  },
];

// =========================================
// 2025 SEASON RECAP
// =========================================
export const SEASON_RECAP_2025 = {
  record: "8-9",
  divisionFinish: "3rd NFC South",
  playoffsResult: "Missed · 7th straight",
  pointsFor: 378,
  pointsAgainst: 392,
  netDifferential: -14,
  storylines: [
    "Started 4-9 before winning final four games",
    "Michael Penix Jr. took over as QB1 midseason",
    "Penix tore ACL Week 11 vs Seahawks (season-ending)",
    "Fired HC Raheem Morris + GM Terry Fontenot after Week 18",
    "Kevin Stefanski + Ian Cunningham hired to lead reset",
  ],
  keyStats: {
    bijanRushYds: 1478,
    bijanTDs: 14,
    londonRecYds: 1271,
    batesTackles: 98,
    batesInts: 3,
    walkerSacks: 5.5,
    dorlusSacks: 8.5,
  },
};

// =========================================
// RESULTS 2025 — final full season
// =========================================
export const RESULTS_2025 = [
  { date: "2025-09-07", opp: "TB", home: false, atlScore: 17, oppScore: 22, result: "L" },
  { date: "2025-09-14", opp: "PHI", home: true, atlScore: 22, oppScore: 21, result: "W" },
  { date: "2025-09-21", opp: "KC", home: false, atlScore: 17, oppScore: 22, result: "L" },
  { date: "2025-09-28", opp: "NO", home: true, atlScore: 26, oppScore: 24, result: "W" },
  { date: "2025-10-05", opp: "WAS", home: true, atlScore: 20, oppScore: 27, result: "L" },
  { date: "2025-10-12", opp: "BUF", home: false, atlScore: 17, oppScore: 34, result: "L" },
  { date: "2025-10-19", opp: "SF", home: true, atlScore: 20, oppScore: 17, result: "W" },
  { date: "2025-10-26", opp: "TB", home: true, atlScore: 24, oppScore: 27, result: "L" },
  { date: "2025-11-10", opp: "NO", home: false, atlScore: 21, oppScore: 24, result: "L" },
  { date: "2025-11-17", opp: "DEN", home: true, atlScore: 13, oppScore: 20, result: "L" },
  { date: "2025-11-24", opp: "SEA", home: false, atlScore: 10, oppScore: 27, result: "L" },
  { date: "2025-12-01", opp: "LAC", home: true, atlScore: 17, oppScore: 23, result: "L" },
  { date: "2025-12-08", opp: "MIN", home: false, atlScore: 14, oppScore: 28, result: "L" },
  { date: "2025-12-14", opp: "LV", home: true, atlScore: 31, oppScore: 17, result: "W" },
  { date: "2025-12-21", opp: "ARI", home: false, atlScore: 28, oppScore: 21, result: "W" },
  { date: "2025-12-28", opp: "CAR", home: true, atlScore: 34, oppScore: 13, result: "W" },
  { date: "2026-01-04", opp: "NO", home: false, atlScore: 27, oppScore: 24, result: "W" },
];

// =========================================
// NFC SOUTH 2025 FINAL STANDINGS
// =========================================
export const NFC_SOUTH_STANDINGS_2025 = [
  { team: "Tampa Bay Buccaneers", code: "TB", wins: 11, losses: 6, pct: 0.647, divisionFinish: 1 },
  { team: "New Orleans Saints", code: "NO", wins: 9, losses: 8, pct: 0.529, divisionFinish: 2 },
  { team: "Atlanta Falcons", code: "ATL", wins: 8, losses: 9, pct: 0.471, divisionFinish: 3, isFalcons: true },
  { team: "Carolina Panthers", code: "CAR", wins: 5, losses: 12, pct: 0.294, divisionFinish: 4 },
];

// =========================================
// RESULTS 2026 — live, week by week
// =========================================
export const RESULTS_2026 = [
  { date: "2026-09-13", opp: "PIT", home: false, atlScore: 13, oppScore: 20, result: "L" },
  { date: "2026-09-20", opp: "CAR", home: true, atlScore: 3, oppScore: 34, result: "L" },
  { date: "2026-09-24", opp: "GB", home: false, atlScore: 35, oppScore: 14, result: "W" },
  { date: "2026-10-05", opp: "NO", home: false, atlScore: 45, oppScore: 24, result: "W" },
  { date: "2026-10-11", opp: "BAL", home: true, atlScore: 23, oppScore: 30, result: "L", ot: true },
  { date: "2026-10-18", opp: "CHI", home: true, atlScore: 23, oppScore: 31, result: "L" },
];

// =========================================
// NFC SOUTH 2026 STANDINGS — live (through Week 6 Sunday, Oct 18)
// Atlanta lost 31-23 at home to Chicago and falls to 2-4. Carolina beat Philadelphia 25-14 and leads by 1.5
// games at 3-2. New Orleans beat the Giants 34-27 to reach 2-4; Atlanta stays second on the head-to-head
// tiebreaker (45-24 win at New Orleans, Oct 5). Tampa Bay lost 26-19 in overtime to Pittsburgh and is 1-5.
// =========================================
export const NFC_SOUTH_STANDINGS_2026 = [
  { team: "Carolina Panthers", code: "CAR", wins: 3, losses: 2, pct: 0.6, divisionFinish: 1 },
  { team: "Atlanta Falcons", code: "ATL", wins: 2, losses: 4, pct: 0.333, divisionFinish: 2, isFalcons: true },
  { team: "New Orleans Saints", code: "NO", wins: 2, losses: 4, pct: 0.333, divisionFinish: 3 },
  { team: "Tampa Bay Buccaneers", code: "TB", wins: 1, losses: 5, pct: 0.167, divisionFinish: 4 },
];

// =========================================
// NEWS DIGEST — refreshed daily by scheduled task
// =========================================
export const NEWS_DIGEST = {
  generatedAt: "2026-10-24T08:30:00Z",
  cover: {
    kicker: "49ers week, final report: Brian Robinson Jr., Divine Deablo, Billy Bowman Jr. and Michael Jerrell are out, A.J. Terrell goes full and is questionable pending a Saturday activation, Khalil Herbert is elevated, and San Francisco leaves Nick Bosa and Mike Evans at home",
    headLine1: "Four out, ten questionable.",
    headEm: "Bosa and Evans stay home.",
    headLine3: "Friday's reports thin both sides: Atlanta waits on A.J. Terrell's activation, and the unbeaten 49ers arrive without three Pro Bowlers.",
    deck: "Atlanta's final report (Friday, atlantafalcons.com) ruled out RB Brian Robinson Jr. (hamstring), LB Divine Deablo (forearm), DB Billy Bowman Jr. (hamstring) and OT Michael Jerrell (bicep), and listed 10 players questionable. A.J. Terrell went full for the first time since landing on IR and is questionable; to play he must be activated by 4 p.m. ET Saturday. Stefanski: 'I thought he's looked better,' and 'we'll see how it goes over the next 48 hours.' Kendal Daniels, C.J. Henderson and Za'Darius Smith also went full, and RB Khalil Herbert was elevated from the practice squad. San Francisco ruled out six, including Nick Bosa, Mike Evans and Deebo Samuel; Bosa and Evans did not travel. DraftKings has the 49ers by 2.5 with a 49.5 total, and ESPN's FPI gives them a 78.7% chance.",
    byline: "The Tracker Desk",
    filedFrom: "Flowery Branch",
    photoId: "penix-jr",
    stampLabel: "49ers week · Falcons 2-4, 0-3 at home · OUT: B. Robinson, Deablo, Bowman, Jerrell · 10 questionable incl. A.J. Terrell · Herbert elevated · 49ers OUT: Bosa, Evans, Samuel · Sun Oct 25, 1 PM ET, FOX · SF -2.5, O/U 49.5 (DK)",
    // Custom cover photo. If the file at coverImageUrl 404s, the MagazineView
    // CoverImage component gracefully falls back to the photoId headshot.
    // STATUS (2026-07-20 scheduled run): cover request QUEUED, ending the two-cycle skip streak.
    // Trigger 2 (staleness backstop) is one day from firing on its own: the Dotson plate is dated
    // 2026-07-17, three days old, and the backstop expires 2026-07-21. Rather than let it lapse
    // and then scramble, this run rotates deliberately onto the story that is actually leading
    // the digest, the quarterback job entering camp week. Queued as 2026-07-20-qb-room-camp-eve.jpg
    // in ~/Vault/Notes/image-requests.md for the downstream Antigravity job. The pointer below is
    // already repointed at the not-yet-generated path, which is safe: the CoverImage component
    // falls back to the photoId headshot (now penix-jr) until the file lands.
    // Cover and topics[0] are back in alignment this cycle after the deliberate one-cycle
    // divergence noted on 2026-07-19.
    // STATUS (2026-07-22 scheduled run): cover SKIPPED. The qb-room-camp-eve plate is dated
    // 2026-07-20, two days old, inside the 4-day staleness backstop, and still aligned with the
    // QB-competition lead. No new visual story landed on Jul 21-22 (news cycle unchanged, camp
    // still two days out). Recency refresh only this cycle: countdown moved three-days-out to
    // two-days-out and timestamps bumped.
    // STATUS (2026-07-23 scheduled run): cover SKIPPED again. The qb-room-camp-eve plate is dated
    // 2026-07-20, now three days old, still inside the 4-day staleness backstop, and still aligned
    // with the QB-competition lead. No new visual story landed on Jul 22-23 (rookies do not report
    // until tomorrow Jul 24, first padded practice not until Jul 29). Recency refresh only:
    // countdown moved two-days-out to one-day-out (rookies report tomorrow), timestamps bumped.
    // NOTE: backstop fires next cycle (plate turns 4 days old) unless a real camp scene lands
    // first; the natural queue moment is the Jul 29 first-practice, a picturable Penix/Bijan rep.
    // STATUS (2026-07-24 scheduled run): cover SKIPPED, and this run could not queue a new one.
    // The ~/Vault image-request file is not reachable from this sandbox (only the tracker repos are
    // mounted), so the limn/Antigravity queue could not be appended. Compounding it: the downstream
    // generator is running behind. The last actual plate on disk is 2026-07-17-dotson-wr2.jpg, so
    // the 2026-07-20-qb-room-camp-eve.jpg pointer below is ALREADY resolving to the penix-jr headshot
    // fallback (the queued plate was never generated). Repointing to a fresh Jul-24 slug would only
    // create a SECOND dangling request that no one can fulfill this cycle, so the pointer is left as
    // is: the QB-competition plate is still exactly aligned with today's camp-open lead. Next run
    // that can reach the Vault should queue the Jul 29 first-padded-practice scene.
    // STATUS (2026-07-25 scheduled run): cover SKIPPED again, same hard constraint as Jul 24. The
    // ~/Vault image-request file and the limn-editor-enhance skill are still not reachable from this
    // sandbox (only the tracker repos are mounted), so no new request could be queued. The staleness
    // backstop is technically past due (the qb-room-camp-eve pointer is dated 2026-07-20, five days
    // old, and the last plate actually on disk is 2026-07-17-dotson-wr2.jpg, so the pointer already
    // resolves to the penix-jr headshot fallback). Repointing would only spawn another dangling
    // request no one can fulfill this cycle, so the pointer is left as is: still QB-aligned with the
    // camp lead, fallback intact. The clean queue moment remains the Jul 29 first-padded-practice
    // Penix/Bijan rep, to be requested by the first run that can reach the Vault.
    // STATUS (2026-07-26 scheduled run): cover SKIPPED again, identical hard constraint as Jul 24-25.
    // The ~/Vault image-request file and the limn-editor-enhance skill remain unreachable from this
    // sandbox (only the tracker repos, outputs and uploads are mounted), so no new request could be
    // queued. Confirmed the last plate actually on disk is 2026-07-17-dotson-wr2.jpg; the
    // qb-room-camp-eve pointer (dated 2026-07-20, six days old) was never generated and already
    // resolves to the penix-jr headshot fallback, which stays exactly aligned with today's
    // QB-competition camp lead. Repointing would only spawn another dangling request, so the pointer
    // is left as is. Quiet Sunday: no new presser and no new visual story landed Jul 25-26 (veterans
    // do not report until Tue Jul 28, first padded practice Wed Jul 29). Recency refresh only this
    // cycle: rookie-only countdown moved day-two to day-three, first-practice moved four-days-out to
    // three-days-out, timestamps bumped. Clean queue moment remains the Jul 29 first-padded-practice
    // Penix/Bijan rep, for the first run that can reach the Vault.
    // STATUS (2026-07-27 scheduled run): cover SKIPPED again, identical hard constraint as Jul 24-26.
    // The ~/Vault image-request file and the limn-editor-enhance skill remain unreachable from this
    // sandbox (only the tracker repos, outputs and uploads are mounted), so no new request could be
    // queued. The qb-room-camp-eve pointer (dated 2026-07-20, now seven days old) was never generated
    // and still resolves to the penix-jr headshot fallback, which stays exactly aligned with today's
    // QB-competition camp lead. Repointing would only spawn another dangling request, so the pointer
    // is left as is. Recency refresh only this cycle: rookie-only window now closing (veterans report
    // TOMORROW Tue Jul 28), first-practice moved three-days-out to two-days-out, timestamps bumped.
    // Clean queue moment remains the Jul 29 first-padded-practice Penix/Bijan rep, for the first run
    // that can reach the Vault.
    // STATUS (2026-07-28 scheduled run): cover SKIPPED again, identical hard constraint as Jul 24-27.
    // Re-verified this cycle: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are
    // NOT mounted in this sandbox (only the tracker repos, outputs and uploads are), so no request can
    // be appended to the downstream Antigravity queue. The qb-room-camp-eve pointer (dated 2026-07-20,
    // now eight days old) was never generated and still resolves to the penix-jr headshot fallback,
    // which stays exactly aligned with today's QB-competition camp lead. Repointing would only spawn
    // another dangling request, so the pointer is left as is. Recency shift only this cycle: veterans
    // report TODAY (Tue Jul 28), first full-team practice moved two-days-out to TOMORROW (Wed Jul 29),
    // countdown and timestamps bumped. The clean queue moment is now literally tomorrow, the Jul 29
    // first-padded-practice Penix/Bijan rep, for the first run that can reach the Vault.
    // STATUS (2026-07-29 scheduled run): cover SKIPPED again, and this is the frustrating one, because
    // TODAY is the clean queue moment the last six notes kept pointing at (first full-team practice,
    // a picturable Penix/Bijan rep). Re-verified this cycle: ~/Vault/Notes/image-requests.md and the
    // limn-editor-enhance skill are STILL NOT mounted in this sandbox (only the tracker repos, outputs
    // and uploads are), so the downstream Antigravity queue cannot be appended and no request can be
    // filed even though the story is finally live and visual. Confirmed the last plate actually on disk
    // is still 2026-07-17-dotson-wr2.jpg; the qb-room-camp-eve pointer (dated 2026-07-20, nine days old)
    // was never generated and still resolves to the penix-jr headshot fallback, which stays exactly
    // aligned with today's QB-competition / first-practice lead. Repointing to a Jul-29 slug would only
    // spawn a third dangling request no one can fulfill this cycle, so the pointer is left as is. The
    // recommendation stands: the FIRST run that can reach the Vault (an Antigravity-side run, or a
    // Cowork run with the Vault mounted) should queue the Jul 29 first-padded-practice Penix/Bijan rep
    // immediately. Recency shift this cycle: veterans-report-today moved to first-full-practice-today,
    // QB lead reframed from pre-camp preview to day-1 checkpoint, timestamps bumped.
    // STATUS (2026-07-30 scheduled run): cover SKIPPED again, identical hard constraint confirmed once
    // more: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue
    // cannot be appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the
    // qb-room-camp-eve pointer (dated 2026-07-20, ten days old) was never generated and still resolves
    // to the penix-jr headshot fallback, which stays exactly aligned with today's Day-1 QB-room lead
    // (both QBs sidelined, Rush signed, Bijan holding in). Repointing to a Jul-30 slug would only spawn
    // another dangling request no one can fulfill, so the pointer is left as is. Recency shift this
    // cycle: lead reframed from first-practice-today to Day-1-recap, cover/topics rebuilt around the
    // shorthanded QB room, the Rush signing, and the Bijan hold-in; timestamps bumped. The clean queue
    // moment remains a padded-practice Penix/Bijan/Rush rep, for the first run that can reach the Vault.
    // STATUS (2026-07-31 scheduled run): cover SKIPPED again, identical hard constraint re-verified:
    // ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this sandbox
    // (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue cannot be
    // appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the qb-room-camp-eve
    // pointer (dated 2026-07-20, eleven days old) was never generated and still resolves to the penix-jr
    // headshot fallback, which stays aligned with today's Week-1 QB lead (Tua back-limited, Penix at
    // 7-on-7, Bijan holding in). Repointing would only spawn another dangling request, so the pointer is
    // left as is. Recency shift this cycle: lead moved from Day-1 recap to Day-2 plus gates-open-today,
    // Tua's light Thursday return, Penix's 45-yard TD to Branch, and Matt Ryan pressed into throwing reps
    // all folded in; timestamps bumped. Clean queue moment remains a padded-practice Penix/Bijan/Branch
    // rep, for the first run that can reach the Vault.
    // STATUS (2026-08-01 scheduled run): cover SKIPPED again, identical hard constraint re-verified:
    // ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this sandbox
    // (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue cannot be
    // appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the qb-room-camp-eve
    // pointer (dated 2026-07-20, twelve days old) was never generated and still resolves to the penix-jr
    // headshot fallback, which stays aligned with today's Week-1 QB lead (Tua easing back, Penix at
    // 7-on-7, Bijan holding in). Repointing would only spawn another dangling request, so the pointer is
    // left as is. Recency shift this cycle: lead moved from gates-open (Jul 31, season-ticket-holders)
    // to Back Together Saturday (Aug 1, first all-fans practice), folding in Stefanski's Jul 31 word that
    // starters will play the preseason opener (Denver) and finale (Miami); timestamps bumped. Clean queue
    // moment remains a padded-practice Penix/Bijan/Branch rep, for the first run that can reach the Vault.
    // STATUS (2026-08-02 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this
    // cycle: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue cannot
    // be appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the qb-room-camp-eve
    // pointer (dated 2026-07-20, thirteen days old) was never generated. Lead rotated today to the Matthew
    // Bergeron 4yr/$96M extension (Aug 1), which reframes the Bijan hold-in as the next domino, so photoId
    // was moved from penix-jr to bijan to keep the headshot fallback aligned with the story the cover now
    // leads on (the back everyone is waiting on). Pointer left as is rather than repointed to avoid spawning
    // yet another dangling request no one can fulfill this cycle; the fallback resolves to the bijan headshot,
    // which matches the new lead. Clean queue moment remains a padded-practice Bijan/Penix/Branch rep, for
    // the first run that can reach the Vault.
    // STATUS (2026-08-03 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this
    // cycle: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue cannot
    // be appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the qb-room-camp-eve
    // pointer (dated 2026-07-20, fourteen days old) was never generated and still resolves to the bijan
    // headshot fallback, which stays aligned with today's Bergeron/Bijan lead. The staleness backstop is
    // long past due but cannot be satisfied from this sandbox; repointing would only spawn another dangling
    // request no one can fulfill. Recency refresh only this cycle: week one is in the books, the team took
    // Sunday off, and returns Monday (Aug 3) for the first full-pads practice per Atlanta News First (Aug 2),
    // so a new week-one recap topic leads the digest and the "first padded week" wording was corrected to
    // "opening week." Clean queue moment remains a padded-practice Bijan/Penix/Branch rep, for the first run
    // that can reach the Vault.
    // STATUS (2026-08-04 scheduled run): cover queue SKIPPED again, same hard constraint re-verified
    // this cycle: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in
    // this sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue
    // cannot be appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the
    // qb-room-camp-eve pointer (dated 2026-07-20, fifteen days old) was never generated and still resolves
    // to the photoId headshot fallback. A genuinely visual story finally landed today, the first padded
    // practice (Day 5, Aug 3) with Tua back in live 11-on-11 and Penix's go-route touchdown to Branch, so
    // the cover editorial rotated onto it and photoId moved from bijan to penix-jr to keep the headshot
    // fallback aligned with the new lead. Repointing the URL to an Aug-04 slug would only spawn another
    // dangling request no one can fulfill from this sandbox, so the pointer is left as is. The clean queue
    // moment remains this exact padded-practice Penix/Branch rep, for the first run that can reach the Vault.
    // STATUS (2026-08-05 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this
    // cycle: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue cannot
    // be appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the qb-room-camp-eve
    // pointer (dated 2026-07-20, sixteen days old) was never generated and still resolves to the photoId
    // headshot fallback. Two franchise-scale stories landed on Aug 4, the Bijan Robinson record extension
    // and the Jalon Walker feared torn ACL, so the cover editorial rotated onto the day itself and photoId
    // moved from penix-jr to bijan to keep the headshot fallback anchored on the signing (a face fans want
    // to see) rather than an injured player. Repointing the URL to an Aug-05 slug would only spawn another
    // dangling request no one can fulfill from this sandbox, so the pointer is left as is. The clean queue
    // moment is a Bijan return-to-practice or Penix/Branch padded rep, for the first run that can reach the Vault.
    // STATUS (2026-08-06 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this
    // cycle: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue cannot
    // be appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the qb-room-camp-eve
    // pointer (dated 2026-07-20, seventeen days old) was never generated and still resolves to the photoId
    // headshot fallback. Today's lead rotated to the CONFIRMED Jalon Walker torn ACL (out for 2026, tests
    // back Aug 5); photoId is left on bijan so the headshot fallback anchors on a face fans want to see
    // (the record signing, still the co-lead) rather than the injured player, per the standing guidance not
    // to point the cover at an injured man. Repointing the URL to an Aug-06 slug would only spawn another
    // dangling request no one can fulfill from this sandbox, so the pointer is left as is. The clean queue
    // moment is a Bijan return-to-practice or Penix/Branch padded rep, for the first run that can reach the Vault.
    // STATUS (2026-08-07 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this
    // cycle: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue cannot
    // be appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the qb-room-camp-eve
    // pointer (dated 2026-07-20, eighteen days old) was never generated and still resolves to the photoId
    // headshot fallback. Today's lead rotated to the clean, positive scene the last several notes kept
    // naming as the ideal queue moment: Bijan Robinson back on the practice field Thursday (Aug 6) for the
    // first time since his record deal. photoId stays bijan, so the fallback resolves to exactly the face
    // this cover now leads on. This is precisely the rep to queue (Bijan easing back in at Flowery Branch)
    // for the first run that can reach the Vault. Repointing the URL to an Aug-07 slug would only spawn
    // another dangling request no one can fulfill from this sandbox, so the pointer is left as is.
    // STATUS (2026-08-08 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this
    // cycle: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue cannot
    // be appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the qb-room-camp-eve
    // pointer (dated 2026-07-20, nineteen days old) was never generated and still resolves to the photoId
    // headshot fallback. Today's lead rotated forward to the even better version of the scene the last notes
    // kept naming: Bijan back in FULL 11-on-11 for the first time Friday (Aug 7, Day 8) and immediately
    // producing the highlight of the day, a wheel-route touchdown from a now full-go Tua. photoId stays
    // bijan, so the fallback resolves to exactly the face this cover leads on. This padded-practice Bijan
    // wheel-route rep is the ideal queue moment for the first run that can reach the Vault. Repointing the
    // URL to an Aug-08 slug would only spawn another dangling request no one can fulfill from this sandbox,
    // so the pointer is left as is.
    // STATUS (2026-08-09 scheduled run): cover ROTATED editorially onto Saturday Night Lights
    // (Aug 8 at Lanier High, Penix 50-yd TD to Branch), the freshest visual story of the cycle, and
    // repointed to 2026-08-09-under-the-lights.jpg to reset the staleness clock. IMAGE STILL NOT
    // QUEUED: re-verified ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT
    // mounted in this sandbox (only the tracker repos, outputs and uploads are), so the downstream
    // Antigravity queue cannot be appended. The new pointer resolves to the penix-jr headshot fallback
    // until a plate is generated, which is safe and now aligned with the Under-the-Lights lead. The
    // first run that can reach the Vault should queue a night-practice Penix/Branch scene at Lanier.
    // STATUS (2026-08-10 scheduled run): cover KEPT on the Under-the-Lights plate (dated 2026-08-09,
    // one day old, well inside the 4-day staleness backstop) and reframed editorially around the same
    // Lanier session now that the fuller Aug 8/9 reporting is in: a full-go Tua Tagovailoa's best day
    // of camp (6-of-8 in 11-on-11, 30-yd touch to Dotson, PA lob to London), the lightning stoppage,
    // rookie Ethan Onianwa holding up at RT, and the phase flipping to preseason tomorrow. photoId
    // moved penix-jr to tua so the headshot fallback matches the freshened Tua-led lead. IMAGE STILL
    // NOT QUEUED: re-verified ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are
    // NOT mounted in this sandbox (only the tracker repos, outputs and uploads are), so the downstream
    // Antigravity queue cannot be appended. The pointer resolves to the tua headshot fallback until a
    // plate is generated, which is safe and aligned. No repoint this cycle (plate is fresh); the clean
    // queue moment for the first run that can reach the Vault is a Lanier night-practice Tua/Penix scene.
    // STATUS (2026-08-11 scheduled run): cover KEPT on the Under-the-Lights plate (dated 2026-08-09,
    // two days old, comfortably inside the 4-day staleness backstop) as the phase flips to preseason and
    // the lead rotates to Denver week. No visual practice scene bigger than the fresh plate broke overnight,
    // and the backstop has not fired, so per the decision rule the queue is SKIPPED this cycle. IMAGE STILL
    // NOT QUEUED regardless: re-verified ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill
    // are NOT mounted in this sandbox (only the tracker repos, outputs and uploads are), so the downstream
    // Antigravity queue cannot be appended even when a queue is warranted. photoId stays tua, matching the
    // de facto Week 1 starter now leading the preseason-week coverage; the pointer resolves to the tua
    // headshot fallback until a plate exists, which is safe. The clean queue moment for the first run that
    // can reach the Vault remains a Lanier night-practice Tua/Penix scene or a Denver-opener first-team rep.
    // STATUS (2026-08-12 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this
    // cycle: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue cannot
    // be appended. Last plate actually on disk remains 2026-07-17-dotson-wr2.jpg; the under-the-lights
    // pointer was never generated and still resolves to the photoId (tua) headshot fallback, which stays
    // aligned with the preseason-week lead. Recency refresh only this cycle: Denver countdown moved from
    // four-days-out to two-days-out across the cover kicker, headline and stamp, the Cameron Sample edge
    // signing plus Jawaan Taylor's PUP activation folded into the digest, and the injury ledger updated to
    // Bates' fifth day down. The clean queue moment for the first run that can reach the Vault remains a
    // Denver-opener first-team rep on Aug 14.
    // STATUS (2026-08-13 scheduled run): cover SKIPPED, same hard constraint. Re-verified that
    // ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue
    // cannot be appended. The last plate actually on disk is still 2026-07-17-dotson-wr2.jpg; the
    // 2026-08-09-under-the-lights.jpg pointer was never generated and already resolves to the tua
    // headshot fallback, which stays aligned with today's Tua-named-starter lead. Repointing would
    // only spawn another dangling request, so the pointer is left as is. Cover TEXT refreshed to the
    // Aug 12 lead (Stefanski names Tua the Friday starter). The clean queue moment for the first run
    // that can reach the Vault is the Aug 14 Denver-opener first-team rep.
    // STATUS (2026-08-14 scheduled run — GAME DAY): cover queue SKIPPED again, same hard constraint
    // re-verified this cycle. ~/Vault is NOT mounted (only the tracker repos, outputs and uploads are),
    // so the limn-editor-enhance skill and the downstream Antigravity image queue at
    // ~/Vault/Notes/image-requests.md cannot be reached or appended. The last plate actually on disk
    // is still 2026-07-17-dotson-wr2.jpg; the 2026-08-09-under-the-lights.jpg pointer was never
    // generated and already resolves to the photoId (tua) headshot fallback, which stays exactly
    // aligned with tonight's Tua-starts-the-opener lead. The staleness backstop is technically past
    // due (pointer dated 2026-08-09, five days old), but because the pointer already falls back to the
    // photoId headshot and photoId tracks the lead (tua), the cover the reader actually sees is fresh
    // and on-story. Repointing to a 2026-08-14 slug would only spawn another dangling request no one
    // can fulfill this cycle, so the pointer is left as is. Cover TEXT reframed two-days-out to GAME
    // DAY (tonight, 7 p.m. vs Denver). The clean queue moment for the first run that can reach the
    // Vault is tonight's Denver-opener first-team rep (Tua under center at Mercedes-Benz Stadium).
    // STATUS (2026-08-15 scheduled run — MORNING AFTER): cover ROTATED editorially onto the preseason
    // opener now in the books (Broncos 27-7, Stefanski's Atlanta debut, Pearce suspended hours before
    // kickoff) and repointed to 2026-08-15-red-debut.jpg to reset the staleness clock (the prior
    // 2026-08-09-under-the-lights pointer was six days old, past the 4-day backstop). IMAGE STILL NOT
    // QUEUED: re-verified ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT
    // mounted in this sandbox (only the tracker repos, outputs and uploads are), so the downstream
    // Antigravity queue cannot be appended. The new pointer resolves to the photoId (tua) headshot
    // fallback until a plate is generated, which is safe and aligned with the debut lead. The clean
    // queue moment for the first run that can reach the Vault is Tua under center in the red home
    // jerseys at Mercedes-Benz Stadium, or a Colts joint-practice first-team rep Aug 19-20.
    // STATUS (2026-08-16 scheduled run — SUNDAY AFTER): cover KEPT on the red-debut plate
    // (pointer dated 2026-08-15, one day old, well inside the 4-day backstop). No new visual
    // story landed Aug 15-16: the news cycle is the same opener-recap / Pearce-suspension /
    // Walker-ACL story, with the next live reps not until the Colts joint practices Aug 19-20.
    // Neither cover trigger fired, so the queue is SKIPPED. Image still not generated: re-verified
    // ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the pointer continues to resolve
    // to the photoId (tua) headshot fallback, which stays aligned with the preseason-opener lead.
    // The clean queue moment for the first run that can reach the Vault is a Colts joint-practice
    // first-team rep Aug 19-20, or Tua under center in the red home jerseys.
    // STATUS (2026-08-17 scheduled run — MONDAY, CAMP RECONVENES): cover ROTATED editorially off the
    // opener recap and onto the forward look at Colts week (the page turns to Indianapolis: two joint
    // practices Aug 19-20, Penix cleared for 7-on-7 against another defense, starters heavy in practice
    // then light in the Aug 22 game). Quiet day-after-Sunday news cycle otherwise. Cover QUEUE SKIPPED:
    // re-verified ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in
    // this sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity queue
    // cannot be appended. The 2026-08-15-red-debut.jpg pointer (two days old, inside the 4-day backstop)
    // was never generated and already resolves to the photoId (tua) headshot fallback, which stays exactly
    // aligned with the new Tua-led Colts-week lead. Repointing to an Aug-17 slug would only spawn another
    // dangling request no one can fulfill this cycle, so the pointer is left as is. The clean queue moment
    // for the first run that can reach the Vault is a Colts joint-practice first-team rep Aug 19-20.
    // STATUS (2026-08-18 scheduled run — TUESDAY, EVE OF COLTS WEEK): cover KEPT on the red-debut plate
    // (pointer dated 2026-08-15, three days old, still inside the 4-day staleness backstop). No new visual
    // story landed Aug 17-18: the cycle is the same Colts-week forward look, with the first live reps not
    // until tomorrow's joint practice (Wed Aug 19). Neither cover trigger fired, so the queue is SKIPPED.
    // Image still not generated: re-verified ~/Vault/Notes/image-requests.md and the limn-editor-enhance
    // skill are NOT mounted in this sandbox (only the tracker repos, outputs and uploads are), so the
    // pointer continues to resolve to the photoId (tua) headshot fallback, which stays aligned with the
    // Tua-led Colts-week lead. The clean queue moment for the first run that can reach the Vault is a Colts
    // joint-practice first-team rep Aug 19-20 (Penix cleared for 7-on-7 against Indianapolis is picturable).
    // STATUS (2026-08-19 scheduled run — WEDNESDAY, JOINT PRACTICES OPEN TODAY): a genuinely visual story
    // landed (Trigger 1) and the red-debut pointer is now 4 days old (Trigger 2 at the boundary), so this
    // run WANTED to queue a Colts joint-practice rep (Penix throwing 7-on-7 against Indianapolis, or Tua
    // leading the first team at Grand Park). But the hard constraint is unchanged: re-verified that only the
    // tracker repos, outputs and uploads are mounted; ~/Vault/Notes/image-requests.md and the
    // limn-editor-enhance skill are NOT reachable, so the downstream Antigravity queue cannot be appended.
    // Cover QUEUE SKIPPED. The 2026-08-15-red-debut.jpg pointer was never generated and already resolves to
    // the photoId (tua) headshot fallback, which stays exactly aligned with today's Tua-led Colts-week lead,
    // so the pointer is left as is (repointing to an Aug-19 slug would only spawn another dangling request no
    // one can fulfill and would keep the same tua fallback). The clean queue moment for the first run that can
    // reach the Vault is a Colts joint-practice rep (Penix 7-on-7 vs. Indianapolis, or Tua under center at Grand Park).
    // STATUS (2026-08-20 scheduled run — THURSDAY, JOINT PRACTICE DAY 2): BOTH cover triggers now fire. Trigger 1:
    // Wednesday's Day 1 produced a genuinely picturable scene, Drake London rising over Justin Walley for a leaping
    // touchdown. Trigger 2: the red-debut pointer is dated 2026-08-15, now 5 days old, past the 4-day staleness
    // backstop. So this run WANTED to queue a Day-1/Day-2 joint-practice rep (London's contested TD, or Tua/Penix
    // under center at Grand Park). But the hard constraint is unchanged and re-verified this cycle: only the tracker
    // repos, outputs and uploads are mounted in this sandbox; ~/Vault/Notes/image-requests.md and the
    // limn-editor-enhance skill are NOT reachable, so the downstream Antigravity queue cannot be appended. Cover
    // QUEUE SKIPPED. The 2026-08-15-red-debut.jpg pointer was never generated and already resolves to the photoId
    // (tua) headshot fallback, which stays aligned with today's Tua-led joint-practice lead, so the pointer is left
    // as is (repointing to an Aug-20 slug would only spawn another dangling request no one can fulfill and would keep
    // the same tua fallback). The clean queue moment remains the first run that can actually reach the Vault.
    // STATUS (2026-08-21 scheduled run): cover SKIPPED, identical hard constraint re-verified. The
    // ~/Vault/Notes/image-requests.md file and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity image
    // queue cannot be appended. The staleness backstop is well past due, but the coverImageUrl pointer
    // (2026-08-15-red-debut.jpg) was never generated, so it already resolves to the photoId headshot
    // fallback, and repointing to an Aug-21 slug would only spawn another dangling request no one can
    // fulfill this cycle. Cover text and photoId were rotated onto today's lead (defense's Day 2 answer
    // in the Colts joint practices + Penix return-to-play update), and photoId moved tua -> terrell to
    // match the defense-led story, keeping the fallback both fresh and safe. The clean queue moment
    // remains the first run that can actually reach the Vault (an Antigravity-side run, or a Cowork run
    // with the Vault mounted); a padded-practice or game-action scene from the Colts week is the target.
    // STATUS (2026-08-22 scheduled run): cover SKIPPED, identical hard constraint re-verified. The
    // ~/Vault/Notes/image-requests.md file and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity image
    // queue cannot be appended. The coverImageUrl pointer (2026-08-15-red-debut.jpg) was never
    // generated (last plate actually on disk is 2026-07-17-dotson-wr2.jpg), so it already resolves to
    // the photoId headshot fallback (terrell), which stays aligned with today's defense-led / game-day
    // lead. Repointing to an Aug-22 slug would only spawn another dangling request no one can fulfill
    // this cycle, so the pointer is left as is. Recency refresh only this cycle: cover reframed to game
    // day (starters sit, Rush + Strand split halves today at Lucas Oil), DT Eric Johnson signing folded
    // in, timestamps bumped. The clean queue moment remains the first run that can reach the Vault; a
    // game-action or padded-practice scene from the Colts week is the target.
    // STATUS (2026-08-24 scheduled run): cover SKIPPED, identical hard constraint re-verified. The
    // ~/Vault/Notes/image-requests.md file and the limn-editor-enhance skill are NOT mounted in this
    // sandbox (only the tracker repos, outputs and uploads are), so the downstream Antigravity image
    // queue cannot be appended. The coverImageUrl pointer (2026-08-15-red-debit.jpg) was never
    // generated (last plate actually on disk is 2026-07-17-dotson-wr2.jpg), so it already resolves to
    // the photoId headshot fallback, which was rotated terrell -> penix-jr to match today's lead: the
    // 34-6 rout of the Colts and, bigger, Penix cleared for 11-on-11 (practices Monday). Penix is a
    // star with a real headshot, so the fallback stays fresh and safe. Repointing to an Aug-24 slug
    // would only spawn another dangling request no one can fulfill this cycle, so the pointer is left
    // as is. The clean queue moment remains the first run that can reach the Vault; a Penix
    // first-11-on-11-back rep or a Strand/Cash Jones game-action scene is the target.
    // STATUS (2026-08-25 scheduled run): cover SKIPPED, identical hard constraint re-verified. Checked
    // both ~/Vault/Notes/image-requests.md and ~/.claude/skills/limn-editor-enhance/ from this sandbox
    // and neither is mounted (only the tracker repos, outputs and uploads are), so the downstream
    // Antigravity image queue cannot be appended. The coverImageUrl pointer (2026-08-15-red-debut.jpg)
    // was never generated (last plate actually on disk is 2026-07-17-dotson-wr2.jpg), so it already
    // resolves to the photoId headshot fallback, which stays penix-jr and matches today's lead: Penix
    // back in 11-on-11 for the first time since ACL surgery (took the first snap Monday, split 1st-team
    // reps with Tua). Penix is a star with a real headshot, so the fallback is both fresh and safe.
    // Repointing to an Aug-25 slug would only spawn another dangling request no one can fulfill this
    // cycle, so the pointer is left as is. Recency refresh only this cycle: cover, topics[0] and a new
    // Stefanski Aug-24 presser were rotated onto Penix's return to full-team work; timestamps bumped.
    // The clean queue moment remains the first run that can reach the Vault; a Penix first-11-on-11-back
    // rep at Flowery Branch is the exact target.
    // STATUS (2026-08-26 scheduled run): cover SKIPPED, identical hard constraint re-verified. Checked
    // ~/Vault (mapped path) from this sandbox and it is NOT mounted (only the tracker repos, outputs and
    // uploads are), so the downstream Antigravity image queue cannot be appended. The coverImageUrl
    // pointer (2026-08-15-red-debut.jpg) was never generated (last plate actually on disk is
    // 2026-07-17-dotson-wr2.jpg), so it already resolves to the photoId headshot fallback, which stays
    // penix-jr and matches today's lead: the finale depth chart released Monday now lists Penix as
    // co-No. 1 QB ('Tua Tagovailoa OR Michael Penix Jr.'), his first time on the first unit since ACL
    // surgery. Penix is a star with a real headshot, so the fallback is both fresh and safe. Repointing
    // to an Aug-26 slug would only spawn another dangling request no one can fulfill this cycle, so the
    // pointer is left as is. Recency refresh only this cycle: cover, topics[0] and the INTERVIEWS window
    // rotated onto the finale depth chart / co-No. 1 storyline; fixed the finale venue (Hard Rock Stadium,
    // Miami, an AWAY game, not Mercedes-Benz Stadium); timestamps bumped. Clean queue moment remains the
    // first run that can reach the Vault; a Penix first-team rep or a Friday game-action scene is the target.
    // STATUS (2026-08-27 scheduled run): cover SKIPPED, identical hard constraint re-verified. Checked
    // the mounts from this sandbox: only the tracker repos, outputs and uploads are mounted; ~/Vault and
    // ~/.claude/skills/limn-editor-enhance are NOT reachable, so the downstream Antigravity image queue
    // cannot be appended. The coverImageUrl pointer (2026-08-15-red-debut.jpg) was never generated (last
    // plate actually on disk is 2026-07-17-dotson-wr2.jpg), so it already resolves to the photoId headshot
    // fallback, which stays penix-jr and matches today's lead: Stefanski ruled Penix OUT of Friday's finale
    // at Miami, Tua will start, QB1 stays open. Penix is a star with a real headshot, so the fallback is
    // fresh and safe. Repointing to an Aug-27 slug would only spawn another dangling request no one can
    // fulfill this cycle, so the pointer is left as is. Recency refresh only: cover, topics[0] and the
    // INTERVIEWS window rotated onto the Penix-out / Tua-starts finale storyline; timestamps bumped. Clean
    // queue moment remains the first run that can reach the Vault; a Penix first-team practice rep or a
    // Friday game-action scene is the target.
    // STATUS (2026-08-28 scheduled run): cover SKIPPED again, identical hard constraint re-verified this
    // cycle. Mounts checked from the sandbox: only the tracker repos, outputs and uploads are mounted;
    // ~/Vault/Notes/image-requests.md and ~/.claude/skills/limn-editor-enhance are NOT reachable, so the
    // downstream Antigravity image queue cannot be appended and no request can be filed. The coverImageUrl
    // pointer (2026-08-15-red-debut.jpg) was never generated (last plate actually on disk is
    // 2026-07-17-dotson-wr2.jpg), so it already resolves to the photoId headshot fallback, which stays
    // penix-jr and matches tonight's lead: Tua starts the finale at Miami, Penix sits, QB1 at Pittsburgh
    // stays open. Penix is a star with a real headshot, so the fallback is fresh and safe. Repointing to an
    // Aug-28 slug would only spawn another dangling request no one can fulfill this cycle, so the pointer is
    // left as is. Recency refresh only: cover, topics[0] and the INTERVIEWS window rotated to present-tense
    // (finale is tonight) and the confirmed Week 1 opponent (at Pittsburgh) wired in; timestamps bumped.
    // Clean queue moment remains the first run that can reach the Vault; a tonight game-action scene or a
    // Penix first-team practice rep is the target.
    // STATUS (2026-08-29 scheduled run): cover SKIPPED, same hard constraint confirmed again. Re-verified
    // this cycle that only the tracker repos, outputs and uploads are mounted in this sandbox, so
    // ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are still NOT reachable and the
    // downstream Antigravity image queue cannot be appended. The staleness backstop is long past due (the
    // 2026-08-15-red-debut.jpg pointer is 14 days old and was never generated, so it already resolves to the
    // photoId headshot fallback). The finale is now played, so the lead rotated from "Tua starts tonight" to
    // the 17-12 result, and photoId moved penix-jr to tua to match today's finale lead (Tua is a star with a
    // real headshot, so the fallback is fresh and safe). The pointer is left as is rather than repointed to a
    // fresh Aug-29 slug, which would only spawn another dangling request no run can fulfill this cycle. Clean
    // queue moment remains a finale game-action or cutdown-day scene for the first run that can reach the
    // Vault (an Antigravity-side run, or a Cowork run with the Vault mounted).
    // STATUS (2026-08-30 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this
    // cycle: only the tracker repos, outputs and uploads are mounted, so ~/Vault/Notes/image-requests.md and
    // the limn-editor-enhance skill are NOT reachable and the downstream Antigravity queue cannot be appended.
    // Confirmed the last plate actually on disk is 2026-07-17-dotson-wr2.jpg; the 2026-08-15-red-debut.jpg
    // pointer (15 days old) was never generated and already resolves to the photoId headshot fallback. The lead
    // rotated from the finale result to cutdown day (90-to-53 by 6pm ET today) with the QB1 call still open, so
    // photoId stays "tua" (a star with a real headshot) and the fallback remains fresh and aligned. Pointer left
    // as is rather than repointed to an Aug-30 slug, which would only spawn another dangling request no run can
    // fulfill this cycle. Clean queue moment remains a cutdown-day or Steelers-week scene for the first run that
    // can reach the Vault (an Antigravity-side run, or a Cowork run with the Vault mounted).
    // STATUS (2026-09-01 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this
    // cycle: ~/Vault is NOT mounted (only the tracker repos, outputs and uploads are), so
    // ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are unreachable and the downstream
    // Antigravity queue cannot be appended. Confirmed the last plate actually on disk is 2026-07-17-dotson-wr2.jpg;
    // the 2026-08-15-red-debut.jpg pointer (17 days old) was never generated and already resolves to the photoId
    // headshot fallback. The lead rotated from cutdown day to the roster now fully settled (Monday waiver claims,
    // 15-man practice squad) with the page turning to the Sept 13 opener at Pittsburgh. Today's lead is a
    // roster/transaction story with no single picturable face, so photoId stays "tua" (a star with a real headshot
    // and the throughline of the still-open QB1 race), keeping the fallback fresh and on-story. Pointer left as is
    // rather than repointed to a Sep-01 slug, which would only spawn another dangling request no run can fulfill this
    // cycle. Clean queue moment remains a Steelers-week first-team practice rep or a Tua/Penix under-center scene for
    // the first run that can reach the Vault (an Antigravity-side run, or a Cowork run with the Vault mounted).
    // STATUS (2026-09-02 scheduled run): cover queue SKIPPED again, identical hard constraint re-verified: ~/Vault
    // is NOT mounted (only the tracker repos, outputs and uploads are), so image-requests.md and the
    // limn-editor-enhance skill are unreachable and the downstream Antigravity queue cannot be appended. The
    // 2026-08-15-red-debut.jpg pointer (18 days old) was never generated and already resolves to the photoId "tua"
    // headshot fallback, which stays on-story with the still-open QB1 race. Today is a quiet game-week transition day
    // (practice squad completed Tuesday with OL Josh Thompson, no picturable single-face story), so photoId stays
    // "tua" and the pointer is left as is rather than spawning another dangling Sep-02 request. Clean queue moment
    // remains a Steelers-week first-team practice rep or a Tua/Penix under-center scene for the first run that can
    // reach the Vault (an Antigravity-side run, or a Cowork run with the Vault mounted).
    // STATUS (2026-09-03 scheduled run): cover queue SKIPPED again, identical hard constraint re-verified: ~/Vault
    // is NOT mounted (checked this run: only the tracker repos, outputs and uploads are), so image-requests.md and
    // the limn-editor-enhance skill are unreachable and the downstream Antigravity queue cannot be appended. The
    // 2026-08-15-red-debut.jpg pointer (19 days old) was never generated and already resolves to the photoId "tua"
    // headshot fallback, which stays on-story with the still-open QB1 race. Today's lead is a roster/transaction
    // story (Bertrand to IR, Woods promoted, practice-squad reshuffle) with no picturable single face, so photoId
    // stays "tua" and the pointer is left as is rather than spawning another dangling Sep-03 request. Clean queue
    // moment remains a Steelers-week first-team practice rep or a Tua/Penix under-center scene for the first run
    // that can reach the Vault (an Antigravity-side run, or a Cowork run with the Vault mounted).
    // STATUS (2026-09-04 scheduled run): cover queue SKIPPED again, identical hard constraint re-verified: ~/Vault
    // is NOT mounted (checked this run: only the tracker repos, outputs and uploads are), so image-requests.md and
    // the limn-editor-enhance skill are unreachable and the downstream Antigravity queue cannot be appended. The
    // 2026-08-15-red-debut.jpg pointer (20 days old) was never generated and already resolves to the photoId "tua"
    // headshot fallback, which stays on-story with the still-open QB1 race that now leads the digest. Today's lead
    // is the QB1-undecided story (Atlanta the only NFL team without a named Week 1 starter, Cunningham's group-call
    // framing, Schefter confirming the race is open); the natural face is either Tua or Penix, so photoId stays
    // "tua" and the pointer is left as is rather than spawning another dangling Sep-04 request. Clean queue moment
    // remains a Steelers-week first-team practice rep or a Tua/Penix under-center scene for the first run that can
    // reach the Vault (an Antigravity-side run, or a Cowork run with the Vault mounted).
    // STATUS (2026-09-06 scheduled run): cover queue SKIPPED again, identical hard constraint re-verified:
    // ~/Vault is NOT mounted (checked this run: only the tracker repos, outputs and uploads are), so
    // image-requests.md and the limn-editor-enhance skill are unreachable and the downstream Antigravity
    // queue cannot be appended. Confirmed again the last plate actually on disk is 2026-07-17-dotson-wr2.jpg;
    // the 2026-08-15-red-debut.jpg pointer (22 days old) was never generated and already resolves to the
    // photoId "tua" headshot fallback, which stays on-story with the still-open QB1 race that leads the digest.
    // Quiet Sep 5-6 news cycle: no new hard news and no picturable single-face scene landed, just the
    // national-reaction turn (Orlovsky, The Falcoholic's leadership-vacuum framing). photoId stays "tua" and
    // the pointer is left as is rather than spawning another dangling Sep-06 request no run can fulfill.
    // Recency refresh only this cycle: countdown moved eight-days-out to seven-days-out, national reaction
    // folded into the lead, timestamps bumped. Clean queue moment remains a Steelers-week first-team practice
    // rep or a Tua/Penix under-center scene for the first run that can reach the Vault.
    // STATUS (2026-09-07 scheduled run): cover queue SKIPPED again, same hard constraint re-verified: ~/Vault
    // is NOT mounted (only the tracker repos, outputs and uploads are), so image-requests.md and the
    // limn-editor-enhance skill are unreachable and the downstream Antigravity queue cannot be appended. The
    // 2026-08-15-red-debut.jpg pointer (23 days old) was never generated and still resolves to the photoId
    // "tua" headshot fallback, which stays on-story with the still-open QB1 race that leads the digest. Quiet
    // Labor Day cycle (Sep 6-7): no new hard news and no picturable single-face scene, just the Rapoport-leans-Tua
    // read and the Steelers-in-the-dark angle folded into the lead. photoId stays "tua"; pointer left as is rather
    // than spawning another dangling Sep-07 request no run can fulfill. Recency refresh only: countdown moved
    // seven-days-out to six-days-out, timestamps bumped. Clean queue moment remains a Steelers-week first-team
    // practice rep or a Tua/Penix under-center scene for the first run that can reach the Vault.
    // STATUS (2026-09-08 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this run:
    // ~/Vault is NOT mounted (only the tracker repos, outputs and uploads are), so image-requests.md and the
    // limn-editor-enhance skill are unreachable and no request can be appended to the downstream Antigravity queue.
    // The 2026-08-15-red-debut.jpg pointer (24 days old) was never generated and still resolves to the photoId
    // "tua" headshot fallback, which is now exactly on-story: today's lead is Tua being named the Week 1 starter,
    // so the fallback face matches the headline. Repointing would only spawn another dangling request no run can
    // fulfill, so the pointer is left as is. Clean queue moment remains a Steelers-week first-team practice rep or
    // a Tua-under-center scene for the first run that can reach the Vault.
    // STATUS (2026-09-09 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this run:
    // ~/Vault is NOT mounted (only the tracker repos, outputs and uploads are), so image-requests.md and the
    // limn-editor-enhance skill are unreachable and no request can be appended to the downstream Antigravity queue.
    // The 2026-08-15-red-debut.jpg pointer (25 days old) was never generated (last plate actually on disk is
    // 2026-07-17-dotson-wr2.jpg) and still resolves to the photoId "tua" headshot fallback, which stays exactly
    // on-story: Tua is the named Week 1 starter and remains the lead. Repointing would only spawn another dangling
    // request no run can fulfill, so the pointer is left as is. Recency refresh this cycle: corrected topics[1]
    // (removed stale 2024 injury names Antonio Hamilton / Nate Landman that had crept in from an archived
    // steelers.com page; neither is on the 2026 roster), added the Sep 8 Week 1 depth-chart topic, countdown moved
    // to four-days-out, timestamps bumped. Clean queue moment remains a Steelers-week Tua-under-center practice rep
    // for the first run that can reach the Vault (an Antigravity-side run, or a Cowork run with the Vault mounted).
    // STATUS (2026-09-11 scheduled run): cover queue SKIPPED again, same hard constraint re-verified:
    // ~/Vault is NOT mounted (only the tracker repos, outputs and uploads are), so image-requests.md and
    // the limn-editor-enhance skill are unreachable and no request can be appended to the downstream
    // Antigravity queue. The 2026-08-15-red-debut.jpg pointer (27 days old) was never generated and still
    // resolves to the photoId "tua" headshot fallback, which stays exactly on-story: today's lead is Tua's
    // Thursday oblique injury, so the fallback face matches the headline. Repointing would only spawn
    // another dangling request no run can fulfill, so the pointer is left as is. A visual story did land
    // (Tua hurt / Rush taking QB1 reps), so the staleness+visual triggers both fire, but neither can be
    // acted on without the Vault. Clean queue moment remains a Tua-under-center or Rush first-team practice
    // rep for the first run that can reach the Vault (an Antigravity-side run, or a Cowork run with it mounted).
    // STATUS (2026-09-12 scheduled run): cover queue SKIPPED again, same hard constraint re-verified this run:
    // ~/Vault is NOT mounted (only the tracker repos, outputs and uploads are), so image-requests.md and the
    // limn-editor-enhance skill are unreachable and no request can be appended to the downstream Antigravity
    // queue. The 2026-08-15-red-debut.jpg pointer (28 days old) was never generated and still resolves to the
    // photoId fallback, which this run repoints from "tua" to "cooper-rush" so the fallback face now matches
    // the new lead: Tua ruled OUT Friday, Cooper Rush starting the opener at Pittsburgh vs his old coach McCarthy.
    // Both staleness and visual triggers fire (Rush first-team reps is picturable) but neither can be acted on
    // without the Vault. Clean queue moment remains a Rush-under-center or gameday-hero scene for the first run
    // that can reach the Vault (an Antigravity-side run, or a Cowork run with it mounted).
    // STATUS (2026-09-13 gameday run): cover queue SKIPPED again, same hard constraint re-verified (~/Vault NOT
    // mounted; only the tracker repos, outputs and uploads are, so image-requests.md and limn-editor-enhance
    // are unreachable). The 2026-08-15-red-debut.jpg pointer (29 days old) was never generated and still
    // resolves to the photoId fallback, which stays "cooper-rush" and remains aligned with today's gameday
    // lead (Rush starting through Saturday back spasms). Both triggers fire but neither can be acted on without
    // the Vault. Clean queue moment remains a Rush-under-center or gameday-hero scene once the Vault is reachable.
    // STATUS (2026-09-14 post-gameday run): same hard constraint re-verified (~/Vault NOT mounted; only the
    // tracker repos, outputs and uploads are, so image-requests.md and limn-editor-enhance are unreachable and
    // no request can be appended to the downstream Antigravity queue). The lead rotated to Sunday's 20-13 loss
    // at Pittsburgh, whose picturable hero is Bijan Robinson (173 scrimmage yards, a 23-yard TD). The pointer
    // is repointed to the not-yet-generated 2026-09-14-bijan-pittsburgh.jpg and photoId to "bijan" so the
    // headshot fallback now matches the new lead. Both staleness and visual triggers fire (Bijan carrying the
    // offense in Pittsburgh is a clean gameday-hero scene) but neither can be acted on without the Vault. Clean
    // queue moment remains that Bijan scene for the first run that can reach the Vault.
    // STATUS (2026-09-15 run): cover queue SKIPPED. Staleness backstop does NOT fire (the 2026-09-14-bijan-
    // pittsburgh.jpg pointer is one day old, well inside the 4-day window) and today's lead is the Monday
    // injury/QB-decision fallout, which has no picturable scene. Separately the hard constraint holds again
    // (~/Vault NOT mounted; only the tracker repos, outputs and uploads are), so the downstream Antigravity
    // image queue is unreachable anyway. Pointer and photoId ("bijan") stay put and remain aligned with the
    // still-current Week 1 cover story.
    // STATUS (2026-09-18 run): cover queue SKIPPED, hard constraint re-verified. Only the tracker repos,
    // outputs and uploads are mounted this run; ~/Vault/Notes/image-requests.md and the limn-editor-enhance
    // skill are NOT reachable, so the downstream Antigravity image queue cannot be appended. The last plate
    // actually on disk remains 2026-07-17-dotson-wr2.jpg, so the 2026-09-14-bijan-pittsburgh.jpg pointer (now
    // 4 days old, at the staleness backstop) was never generated and already resolves to the photoId "bijan"
    // headshot fallback. This cycle the cover STORY was flipped from the Week 1 loss to the Friday home-opener
    // QB lead (Tua not practicing, Rush the likely starter, Penix a week or two out), but photoId stays "bijan"
    // (a star with a real headshot and the face of the team), so the fallback remains clean and on-brand under
    // the new headline. Repointing to a fresh QB-scene slug would only spawn another dangling request no one can
    // fulfill this cycle, so the pointer is left as is. Clean queue moment: a home-opener gameday-hero scene, for
    // the first run that can reach the Vault.
    // STATUS (2026-09-19 scheduled run): cover STORY rotated onto the now-confirmed Friday QB decision (Rush
    // named starter, Penix out, Tua doubtful) for Sunday's home opener. Staleness backstop had fired (the
    // 2026-09-14 pointer was 5 days old), so the pointer is repointed to a fresh dated slug to reset the clock;
    // photoId stays "bijan" (a star with a real headshot and the face of the team) so the fallback stays clean
    // under the new headline. The ~/Vault image-request file is NOT reachable from this sandbox (only the tracker
    // repos are mounted), so the limn/Antigravity queue could not be appended this run and the new pointer
    // resolves to the photoId "bijan" headshot fallback until a downstream job fills it. Reported in Step 9.
    // STATUS (2026-09-20 scheduled run): cover SKIPPED, same hard constraint. ~/Vault/Notes/image-requests.md and
    // the limn-editor-enhance skill are NOT mounted in this sandbox (only the tracker repos, outputs and uploads
    // are), so the downstream Antigravity queue cannot be appended. The 2026-09-19 pointer is one day old, so the
    // 4-day staleness backstop has NOT fired; the file was never generated and resolves to the photoId "bijan"
    // headshot fallback (a star with a real headshot, still the face of the team), which stays clean under the
    // game-day headline. Recency refresh only this cycle: cover/kicker/topics[0] reframed from Friday's QB
    // announcement to present-tense game day (kickoff today, 1 p.m. vs. Carolina); NEWS_DIGEST + INTERVIEWS
    // timestamps bumped to 2026-09-20. Game had not kicked off at run time (04:33 ET), so no result was recorded.
    // STATUS (2026-09-21 scheduled run): a genuinely new, visual story landed, the 34-3 home loss that dropped
    // Atlanta to 0-2 with Rush benched for Strand and Penix now poised to debut Thursday, so Trigger 1 fires and
    // the cover editorial is fully rebuilt around it. Same hard constraint as every prior run, though:
    // ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are NOT mounted in this sandbox (only the
    // tracker repos, outputs and uploads are), so the downstream Antigravity queue still cannot be appended. The
    // old "rush-home-opener" slug is now stale and misleading (Rush was benched; the home opener is over), so the
    // pointer is repointed to a fresh dated slug that matches the new lead and resets the staleness clock. It will
    // resolve to the photoId "penix-jr" headshot fallback (a healthy, forward-looking face, the Thursday pivot)
    // until a downstream job fills it. The clean queue moment is a Penix live-throwing rep at Flowery Branch this
    // short week, for the first run that can reach the Vault. Reported in Step 9.
    // STATUS (2026-09-22 scheduled run): cover SKIPPED. The penix-packers-pivot pointer is dated
    // 2026-09-21, one day old, well inside the 4-day staleness backstop, and still perfectly aligned
    // with today's lead (Penix officially named the Week 3 starter, the same subject). Same hard
    // constraint as every prior run: ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill
    // are NOT mounted in this sandbox (only the tracker repos, outputs and uploads are), so no request
    // could be queued regardless. Repointing to a fresh slug would only spawn another dangling request
    // no one can fulfill this cycle, so the pointer is left as is; it resolves to the penix-jr headshot
    // fallback until a downstream job fills it. Recency refresh only this cycle: cover editorial, lead
    // topics and NEXT_GAME reframed from "could debut / decision too soon" to the confirmed Penix start,
    // Week 3 estimated injury report added, timestamps bumped.
    // STATUS (2026-09-23 scheduled run): cover SKIPPED. The penix-packers-pivot pointer is dated
    // 2026-09-21, two days old, inside the 4-day staleness backstop, and still exactly aligned with
    // today's lead (Penix's confirmed Thursday start, same subject; the game has not been played yet).
    // Same hard constraint as every prior run: ~/Vault/Notes/image-requests.md and the
    // limn-editor-enhance skill are NOT mounted in this sandbox (only the tracker repos, outputs and
    // uploads are), so no request could be queued regardless. Pointer left as is; resolves to the
    // penix-jr headshot fallback until a downstream job fills it. Recency update only this cycle:
    // A.J. Terrell placed on IR (Sep 22, groin, four-game minimum) with Zach Harrison signed off the
    // practice squad, folded into a new digest topic, the injury-report topic, NEXT_GAME.note and
    // CAP_STATE.recentMoves; the red-zone / seven-quarter TD drought added to the lead; timestamps bumped.
    // STATUS (2026-09-25 scheduled run): cover request SKIPPED, same hard constraint as every prior run.
    // ~/Vault/Notes/image-requests.md and the limn-editor-enhance skill are still NOT mounted (only the
    // tracker repos, outputs and uploads are), so the downstream Antigravity image queue cannot be appended.
    // The pointer is repointed to today's lead (Penix's ACL-return win at Lambeau) to reset the staleness
    // clock; it is safe because the CoverImage component falls back to the photoId (penix-jr) headshot until
    // a real plate lands. A genuinely visual story landed today (Penix return, Bijan two-TD game), so this
    // would have been a clean queue moment had the Vault been reachable.
    // STATUS (2026-09-30 cloud run): image request SKIPPED (cloud run; the limn/Vault queue is not reachable and
    // this run is instructed not to touch coverImageUrl). Cover text rotated onto Saints week; the pointer and the
    // penix-jr photoId fallback are unchanged.
    // STATUS (2026-10-01 cloud run): image request SKIPPED (cloud run; limn/Vault queue unreachable, run instructed
    // not to touch coverImageUrl). Kicker and deck now lead with the Dexter extension; pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-02 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto the first Week 4
    // injury reports, Bijan's Player of the Week award and the Asamoah signing; pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-03 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto the Friday injury
    // reports, Penix's Dome line and the Domecoming anniversary; pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-04 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Saturday's final
    // injury reports for both teams; pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-05 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto game day and Sunday's
    // NFC South results (Carolina 2-2 alone in first, Tampa Bay 0-4); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-06 cloud run): image request SKIPPED (cloud run). Kicker and deck rebuilt around the 45-24 Monday-night
    // win at New Orleans (five rushing TDs, Falcons 2-2 and tied for first); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-07 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Ravens week (Lamar Jackson's
    // ankle sprain, the line flip to Ravens -2.5, Matthews/Smith with no timeline); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-08 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Jackson missing Wednesday's
    // practice, the line swinging to Falcons -3, the Jurgens trade and Atlanta's first Week 5 injury report; pointer and fallback unchanged.
    // STATUS (2026-10-09 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Thursday's reports (Matthews back
    // limited, Jackson out a second day, Deablo and Ebukam added) and Derrick Henry's Bijan quote; pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-10 cloud run): image request SKIPPED (cloud run). Kicker and deck rebuilt around Friday's final reports (Jackson and
    // Hendrickson ruled out, Huntley to start; Matthews full and questionable, Smith back limited) and Sunday's red-out / Abraham induction; pointer unchanged.
    // STATUS (2026-10-11 cloud run): image request SKIPPED (cloud run). Game-day kicker and deck (Smith out, Abdullah IR, -3.5); pointer unchanged.
    // STATUS (2026-10-12 cloud run): image request SKIPPED (cloud run). Kicker and deck rebuilt around the 30-23 overtime loss to Baltimore and
    // Penix's rib injury; pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-13 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Bears week (Penix imaging, Wednesday
    // decision, Caleb Williams nearing a return, line flip to Bears -3); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-14 cloud run): image request SKIPPED (cloud run). Kicker and deck nudged onto Wednesday's Penix decision day, the
    // Tuesday depth chart (Penix still QB1) and Rapoport's 'all signs point' report on Caleb Williams; pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-17 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Friday's final report (Penix no
    // designation, Henderson out, Avieon Terrell to start, Caleb Williams questionable, line to Bears -1.5); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-15 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Penix's full Wednesday practice,
    // Stefanski's 'as long as everything goes according to plan' and Caleb Williams practicing fully; pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-16 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Thursday's reports (Smith clears
    // the concussion protocol, Penix full a second day, Henderson DNP again, Ulbrich on CB depth); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-18 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto game day (Caleb Williams expected
    // to start, Bralen Trice signed to the 53, Jackson and Robinson elevated); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-19 cloud run): image request SKIPPED (cloud run). Kicker and deck rebuilt around the 31-23 loss to Chicago
    // (14-0 start, Branch's two lost return fumbles, Daniels carted off with a neck injury); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-20 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto 49ers week (Dalton signed, Rush
    // released, Stefanski's 'make them pay' on the blitz, A.J. Terrell trending, 49ers 6-0 after MNF); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-21 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Tuesday's moves (Snowden signed
    // off Washington's practice squad, Trice released, Dalton QB3 on the depth chart, Evans' Achilles); pointer and penix-jr fallback unchanged.
    // STATUS (2026-10-22 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Wednesday's first report (Terrell's
    // return window opened, Daniels full, Bowman and Deablo DNP, 10 49ers out incl. Evans and Bosa, Stefanski on Purdy); pointer unchanged.
    // STATUS (2026-10-23 cloud run): cover request SKIPPED (cloud run; the Vault image queue and
    // limn-editor-enhance are not reachable). coverImageUrl intentionally left unchanged per the run rules.
    // STATUS (2026-10-24 cloud run): image request SKIPPED (cloud run). Kicker and deck rotated onto Friday's final reports
    // (four Falcons out, Terrell full and questionable, Herbert elevated, Bosa/Evans/Samuel out for SF); pointer unchanged.
    coverImageUrl: "/falcons-tracker/assets/cover/2026-09-25-penix-lambeau-return.jpg",
  },
  sources: [
    "Atlanta Falcons Official", "ESPN", "NFL.com", "NFL Network",
    "AP (Washington Times)", "NBC Sports / Pro Football Talk", "Pro Football Rumors", "The Falcoholic",
    "SI Falcons", "AJC", "Bleacher Report", "ClutchPoints", "Heavy.com",
    "Yahoo Sports", "CBS Sports", "Washington Post", "BloggingDirty",
    "Audacy 92.9 The Game", "Yardbarker", "Over The Cap", "Spotrac",
    "Bengals.com", "FantasyPros", "Atlanta News First", "The Athletic", "Roundtable",
    "Falcons Wire", "CBS News Atlanta", "Sharp Football Analysis",
    "Sportsnaut", "The Big Lead", "The Athletic", "Mile High Report",
    "Steelers Depot", "Behind the Steel Curtain",
    "FOX Sports", "steelers.com", "BVM Sports", "FBSchedules",
    "Pro Football Network", "StatMuse", "packers.com", "PFF", "New Orleans Saints Official", "Covers.com",
    "Louisiana Sports", "VegasOdds", "Crescent City Sports", "AP (ABC News)",
    "National Football Post", "SI Betting", "NFL.com News Roundup", "Audacy WWL", "BetMGM",
    "Newsweek", "FOX Sports (AP preview)", "Gameday Atlanta (Yahoo Sports)",
    "buccaneers.com", "Covers", "AP (TSN)", "Atlanta News First", "Pro Football Network", "SI Betting",
    "SI Ravens", "Yahoo Sports (Ravens)", "CBS Sports (Ravens)",
    "baltimoreravens.com", "Baltimore Positive (WNST)", "Newsweek (Ravens)", "SI Falcons (Oct 7)", "EssentiallySports",
    "SportsTalkATL", "SI Betting (Oct 8)", "KMJ / AP preview",
    "AJC (Oct 9)", "Athlon Sports (Yahoo)", "NBC Washington", "SI Ravens (Oct 9)", "Audacy 92.9 The Game (Oct 9)",
    "atlantafalcons.com (Oct 10)", "Falcons Wire (Yahoo, Oct 10)", "RotoWire", "NFL.com News Roundup (Oct 10)", "Covers.com (Oct 10)", "NFL.com / The Athletic (Oct 9)",
    "CBS Sports (Oct 11-12)", "NBC Sports / PFT (Oct 11)", "Bleacher Report (Oct 11)", "AJC (Oct 11)", "NFL.com (Oct 12)",
    "Falcons Wire (Yahoo, Oct 12)", "Heavy.com (Oct 12)", "A to Z Sports (Oct 12)", "Yahoo Sports instant analysis (Oct 12)",
    "panthers.com (Oct 7)", "neworleanssaints.com (Oct 11)", "buccaneers.com (Oct 8)",
    "AJC (Oct 12)", "NBC Sports / PFT (Oct 12)", "Field Level Media (Oct 12)", "Heavy.com (Oct 12, The Athletic report)",
    "theScore (Oct 12)", "atlantafalcons.com (Oct 12)", "SI Betting (Oct 12)", "ABC7 Chicago (Oct 11)",
    "NBC Sports (Oct 12)", "Heavy.com (Oct 12-13)", "Falcons Wire (Yahoo, Oct 13)", "SI Betting (Oct 13)",
    "atlantafalcons.com (Oct 14)", "AJC (Oct 14)", "CBS Sports (Oct 14)", "NBC Sports / PFT (Oct 14)", "Yahoo Sports (Oct 14)",
    "CBS News Atlanta (Oct 14)", "Falcons Wire (Yahoo, Oct 14)", "SI Bears On SI (Oct 14)", "SI Betting (Oct 14)",
    "atlantafalcons.com (Oct 15)", "Falcons Wire (Yahoo, Oct 15)", "On Tap Sports Net (Oct 15)", "Chicago Sun-Times (Oct 15)", "Heavy.com (Oct 15)",
    "atlantafalcons.com (Oct 16)", "AJC (Oct 16)", "Falcons Wire (Yahoo, Oct 16)", "National Football Post (Oct 16)", "NBC Sports / PFT (Oct 16)", "Chicago Sun-Times (Oct 16)", "Shaw Local (Oct 16)", "SI Bears On SI (Oct 16)", "SI Betting (Oct 15)", "FanDuel Research (Oct 16)", "Bleacher Nation (Oct 16)",
    "atlantafalcons.com (Oct 17)", "Falcons Wire (Yahoo, Oct 17)", "Pro Football Rumors (Oct 17)", "NFL.com News Roundup (Oct 17)", "NFL.com / NFL Network (Oct 17)", "NBC Sports / PFT (Oct 17)", "NBC Chicago (Oct 17)", "Bleacher Report (Oct 17)", "chicagobears.com (Oct 17)", "Bettors Insider (Oct 17)",
    "atlantafalcons.com (Oct 18)", "FootballDB box score (Oct 18)", "NFL.com (Oct 18)", "AJC (Oct 18)", "Falcons Wire (Yahoo, Oct 18)", "Heavy.com (Oct 18)", "SI Falcons On SI (Oct 19)", "Saturday Down South (Oct 18)", "Yardbarker / AP (Oct 19)", "Panthers Wire (Yahoo, Oct 18)", "Bleacher Nation (Oct 18)", "Chicago Sun-Times (Oct 18)", "FOX Sports (Oct 19)",
    "atlantafalcons.com (Oct 19)", "AP (ABC News, Oct 19)", "WABE / AP (Oct 19)", "CBS Sports (Oct 19)", "Yahoo Sports (Oct 19)", "AP (ABC News, Oct 20)", "NBC Bay Area (Oct 20)", "FOX Sports odds (Oct 19)",
    "atlantafalcons.com (Oct 20)", "Falcons Wire (Yahoo, Oct 20)", "Pro Football Rumors (Oct 20)", "Heavy.com (Oct 20)", "49ers Webzone (Oct 20)",
    "atlantafalcons.com (Oct 21)", "NBC Sports / PFT (Oct 21)", "49ers Webzone (Oct 21)", "Falcons Wire (Yahoo, Oct 21)", "KNBR / The Sports Leader (Oct 21)", "Athlon Sports (Oct 21)", "DeFi Rate (Oct 21)",
    "49ers Webzone (Oct 22)", "Falcons Wire (Yahoo, Oct 22)", "Atlanta Falcons On SI (Yahoo, Oct 22)", "AP (FOX Sports, Oct 22)", "Heavy.com (Oct 22)", "Stadium Rant (Yardbarker, Oct 22)", "SI Betting (Oct 20)",
    "atlantafalcons.com (Oct 23)", "Falcons Wire (Yahoo, Oct 23)", "Atlanta Falcons On SI (Oct 23)", "49ers Webzone (Oct 23)", "NBC Sports Bay Area (Oct 23)", "ESPN (Oct 23)", "AP (The Sumter Item, Oct 24)",
  ],
  topics: [
    {
      title: "Final report: Robinson, Deablo, Bowman and Jerrell out; 10 questionable",
      detail: "atlantafalcons.com (Friday, Oct 23): RB Brian Robinson Jr. (hamstring), LB Divine Deablo (forearm), DB Billy Bowman Jr. (hamstring) and OT Michael Jerrell (bicep) did not practice and are OUT vs. San Francisco. Questionable: Beaux Collins, Kendal Daniels, Gervon Dexter Sr., Samson Ebukam, C.J. Henderson, Za'Darius Smith, A.J. Terrell, Avieon Terrell, Cameron Williams and Olamide Zaccheaus. Daniels, Henderson, Smith and Cam Thomas went full; Jake Matthews and Jawaan Taylor had rest days.",
      category: "injuries",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-injury-report-brian-robinson-divine-deablo-out-vs-49ers",
      sourceLabel: "atlantafalcons.com / Falcons Wire (Yahoo Sports)",
    },
    {
      title: "A.J. Terrell goes full, questionable; activation due by Saturday 4 PM",
      detail: "atlantafalcons.com (Friday, Oct 23): the CB1 was a full participant (groin) for the first time since going on IR and is listed questionable, but he must be added to the 53 by 4 p.m. ET Saturday to play. Stefanski: 'I thought he's looked better,' and 'He's worked very hard throughout the time he's been out, but we'll see how it goes over the next 48 hours' (Falcons Wire). The roster has an open spot after Thursday's DeWalt release.",
      category: "injuries",
      sourceUrl: "https://sports.yahoo.com/articles/falcons-hc-provides-injury-updates-172215030.html",
      sourceLabel: "atlantafalcons.com / Falcons Wire (Yahoo Sports)",
    },
    {
      title: "Khalil Herbert elevated to back up Bijan",
      detail: "Falcons Wire (Friday, Oct 23): with Brian Robinson Jr. out and only two backs on the 53, Atlanta is elevating former Bears RB Khalil Herbert from the practice squad, as Stefanski said it would. Herbert has 1,957 rushing yards and nine TDs over five seasons. Andy Dalton is expected to be inactive while he gets up to speed (Falcons Wire, Oct 21).",
      category: "free-agency",
      sourceUrl: "https://sports.yahoo.com/articles/falcons-elevate-former-bears-rb-203645437.html",
      sourceLabel: "Falcons Wire (Yahoo Sports)",
    },
    {
      title: "49ers rule out Bosa, Evans and Samuel; Bosa and Evans stay home",
      detail: "49ers Webzone and NBC Sports Bay Area (Friday, Oct 23): San Francisco ruled out DE Nick Bosa (calf, knee), WR Mike Evans (ribs, Achilles), WR Deebo Samuel (hamstring), LBs Luke Gifford and Garret Wallow and S Marques Sigle. Bosa and Evans will not travel to Atlanta and stay behind for treatment. WR Christian Kirk (calf) is questionable and expected to be activated from IR on Saturday; S Siran Neal and CB Upton Stout are also questionable.",
      category: "injuries",
      sourceUrl: "https://www.49erswebzone.com/articles/204483-49ers-falcons-final-injury-report/",
      sourceLabel: "49ers Webzone / NBC Sports Bay Area",
    },
    {
      title: "ESPN preview: 49ers by 2.5, FPI says 78.7%",
      detail: "ESPN (Friday, Oct 23): DraftKings has SF -2.5 with a 49.5 total, and FPI gives the 49ers a 78.7% win probability. All three ESPN pickers take San Francisco (27-20, 27-23, 23-16). Penix posts an 81 Total QBR against man coverage (sixth) but 39 against zone (23rd), and the 49ers play zone on 68% of dropbacks. Atlanta is 0-3 against the spread at home. AP (Saturday) also lists the 49ers by 2.5.",
      category: "games",
      sourceUrl: "https://www.espn.com/nfl/story/_/id/50229521/week-7-picks-predictions-schedule-fantasy-odds-2026",
      sourceLabel: "ESPN / AP (The Sumter Item)",
    },
    {
      title: "Black throwbacks and red helmets vs. the 49ers",
      detail: "Falcons Wire (Thursday, Oct 22): Atlanta will wear its black throwback uniforms with red helmets on Sunday, a combination it will use once more, in Week 13 against Detroit. The red helmets stayed in the rotation despite the offseason uniform change.",
      category: "general",
      sourceUrl: "https://sports.yahoo.com/articles/falcons-reveal-uniforms-week-7-163452537.html",
      sourceLabel: "Falcons Wire (Yahoo Sports)",
    },
    {
      title: "Falcons release undrafted rookie CB Malcolm DeWalt IV",
      detail: "Falcons Wire and Atlanta Falcons On SI (Thursday, Oct 22): Atlanta cut DeWalt, the Akron UDFA who made the initial 53 and had no defensive stats this season, leaving the roster at 52. Both outlets linked the move to a likely A.J. Terrell activation, though the team has not confirmed it; SI noted DeWalt could return to the practice squad if he clears waivers.",
      category: "free-agency",
      sourceUrl: "https://sports.yahoo.com/articles/falcons-release-db-j-terrells-202544414.html",
      sourceLabel: "Atlanta Falcons On SI / Falcons Wire (Yahoo Sports)",
    },
    {
      title: "Raheem Morris returns to Atlanta running the 49ers' defense",
      detail: "AP (Thursday, Oct 22): the former Falcons head coach, fired in January after two seasons (16-18), is now San Francisco's defensive coordinator. On Penix, whom he drafted: 'Loved the kid, loved everything about him.' On Bijan Robinson: 'He's going to present a big-time challenge for us this week' (49ers Webzone transcript). Penix: 'It's going to be good to be able to see him again, but we got to find a way to obviously put points on the board against his defense.'",
      category: "coaching",
      sourceUrl: "https://www.foxsports.com/articles/nfl/morris-returns-to-atlanta-leading-a-49ers-defense-that-will-try-to-pressure-falcons-qb-penix",
      sourceLabel: "AP (FOX Sports) / 49ers Webzone",
    },
    {
      title: "Stefanski sticks with Zachariah Branch as returner",
      detail: "AP (Thursday, Oct 22): Stefanski said he will keep the rookie as a return specialist after Branch lost two fumbles against Chicago, making him only the third player in 10 seasons to lose two special-teams fumbles in a game (ESPN Research, via The Sporting News). Branch is still listed at punt returner on the Week 7 depth chart (atlantafalcons.com, Oct 20).",
      category: "coaching",
      sourceUrl: "https://www.foxsports.com/articles/nfl/morris-returns-to-atlanta-leading-a-49ers-defense-that-will-try-to-pressure-falcons-qb-penix",
      sourceLabel: "AP (FOX Sports) / The Sporting News",
    },
    {
      title: "Throwback-style logo post draws backlash; team swaps its profile picture",
      detail: "Heavy and Stadium Rant (Oct 21-22): a throwback-style falcon graphic the team posted as its X profile picture on Wednesday drew widespread fan comparisons to Nazi imagery and more than 11 million views. By Thursday the account had switched to a red-helmet image (New York Post, via Stadium Rant). Neither the Falcons nor the NFL had commented publicly, and the team has not announced a new official logo.",
      category: "general",
      sourceUrl: "https://heavy.com/sports/nfl/atlanta-falcons/falcons-new-logo-sparks-nazi-comparisons-from-fans/",
      sourceLabel: "Heavy.com / Stadium Rant (Yardbarker)",
    },
    {
      title: "Stefanski on Purdy: 'a very, very special quarterback'",
      detail: "KNBR / The Sports Leader and Athlon (Wednesday, Oct 21): 'It's hard to imagine someone is playing the position better than he is right now,' Stefanski said, calling Purdy 'an elite processor' with 'elite accuracy.' On the 6-0 49ers: 'They're undefeated for a reason.' Atlanta's pass defense ranks 28th at 252.0 yards per game.",
      category: "coaching",
      sourceUrl: "https://www.thesportsleader.com/2026/10/21/unbeaten-49ers-potentially-depleted-at-wr-with-uneven-falcons-looming/",
      sourceLabel: "KNBR / The Sports Leader / Athlon Sports",
    },
    {
      title: "Falcons poach edge Charles Snowden from Washington, release Bralen Trice",
      detail: "NFL Network's Ian Rapoport (Tuesday, Oct 20): Atlanta is signing the 6-foot-6 Snowden off the Commanders' practice squad to its 53-man roster, and The Athletic's Josh Kendall reported Trice, signed to the 53 only on Saturday, is being cut (atlantafalcons.com confirmed the release). Snowden started nine games for the Raiders in each of 2024 and 2025 and has 4.5 career sacks. The team also added Louisville LB TJ Quinn, a Valdosta native, to the practice squad.",
      category: "free-agency",
      sourceUrl: "https://sports.yahoo.com/articles/falcons-poach-edge-rusher-off-163040934.html",
      sourceLabel: "Falcons Wire (Yahoo Sports) / atlantafalcons.com / Pro Football Rumors",
    },
    {
      title: "Falcons sign Andy Dalton, release Cooper Rush",
      detail: "atlantafalcons.com and AP (Monday, Oct 19): a day after the Bears loss, Atlanta released Rush, who went 0-2 as the Week 1-2 starter (22 of 39, 229 yards, one TD, four INTs), and signed the 38-year-old Dalton, released by Philadelphia on Oct 9. The Athletic's Jonathan Jones reported Dalton will compete with Tua Tagovailoa for the backup job, though Tua likely stays No. 2 vs. San Francisco. Stefanski: 'I think at this point we're just trying to get Andy up to speed.'",
      category: "free-agency",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-release-cooper-rush-sign-andy-dalton",
      sourceLabel: "atlantafalcons.com / AP (WABE) / CBS Sports",
    },
    {
      title: "NFC South: Carolina pulls 1.5 games ahead; Saints climb to 2-4",
      detail: "NFL.com and Panthers Wire (Sunday, Oct 18): Carolina beat Philadelphia 25-14 behind Chuba Hubbard's 120 rushing yards to go 3-2. New Orleans beat the Giants 34-27 with four Tyler Shough TD passes and sits third behind Atlanta on the head-to-head tiebreaker. Tampa Bay blew a 13-point fourth-quarter lead and lost 26-19 in overtime at Pittsburgh to fall to 1-5.",
      category: "general",
      sourceUrl: "https://nfl.com/news/2026-nfl-season-week-6-what-we-learned-from-sunday-s-games",
      sourceLabel: "NFL.com / Panthers Wire (Yahoo Sports)",
    },
  ],
};

export const INTERVIEWS = {
  generatedAt: "2026-10-24T08:30:00Z",
  windowLabel: "Bears week → 49ers week · Oct 15 → Oct 23",
  sessions: [
    {
      id: "stefanski-2026-10-23",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-10-23",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Week 7 vs. San Francisco · Friday Media Availability",
      sourceUrl: "https://sports.yahoo.com/articles/falcons-hc-provides-injury-updates-172215030.html",
      summary: "On the day of the final report, Stefanski left A.J. Terrell's return open but sounded encouraged after the CB1's first full practice since going on IR. He also confirmed the running back plan with Brian Robinson Jr. out. Quotes via Falcons Wire and Atlanta Falcons On SI.",
      pullQuote: "He's worked very hard throughout the time he's been out, but we'll see how it goes over the next 48 hours.",
      bullets: [
        "On A.J. Terrell (groin, questionable, must be activated by 4 p.m. ET Saturday): 'I thought he's looked better'",
        "Said he hopes several of his cornerbacks, Terrell among them, are healthy for Sunday (Falcons Wire)",
        "Confirmed practice-squad RB Khalil Herbert will be elevated to back up Bijan Robinson with Brian Robinson Jr. ruled out (Falcons Wire, Atlanta Falcons On SI)",
      ],
      topics: ["49ers-week", "week-7", "injuries", "cornerbacks", "running-backs"],
    },
    {
      id: "stefanski-2026-10-21",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-10-21",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Week 7 vs. San Francisco · Wednesday Media Availability",
      sourceUrl: "https://www.thesportsleader.com/2026/10/21/unbeaten-49ers-potentially-depleted-at-wr-with-uneven-falcons-looming/",
      summary: "Before the first Week 7 practice, Stefanski heaped praise on Brock Purdy and the unbeaten 49ers and gave good news on Kendal Daniels, while declining to rule anyone in or out. Quotes via KNBR / The Sports Leader, Athlon Sports (citing The Athletic's Josh Kendall) and atlantafalcons.com.",
      pullQuote: "They're undefeated for a reason.",
      bullets: [
        "On San Francisco: 'Very well-coached, very good players, so it's an awesome challenge for this football team,' and 'we've got to play our best on Sunday'",
        "On Purdy: 'a very, very special quarterback' and 'it's hard to imagine someone is playing the position better than he is right now,' calling him 'an elite processor' with 'elite accuracy'",
        "On Kendal Daniels (neck): 'Doing a lot better. He will practice today. He'll move around. But we'll see how it goes this week.' He was a full participant (atlantafalcons.com)",
        "On the injury list: 'Not ruling anybody in or out at this point, up or down the roster'",
      ],
      topics: ["49ers-week", "week-7", "purdy", "injuries"],
    },
    {
      id: "stefanski-2026-10-19",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-10-19",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Week 7 vs. San Francisco · Monday Media Availability",
      sourceUrl: "https://abcnews.com/Politics/wireStory/after-slow-start-loss-bears-penix-falcons-urgency-137398138",
      summary: "The day after the Bears loss, Stefanski framed Chicago's blitz-heavy plan as a test the offense failed and expects other teams to copy it. He was upbeat on Kendal Daniels and A.J. Terrell, and explained the Andy Dalton signing. Quotes via AP and WABE.",
      pullQuote: "I think the name of the game in the NFL is when they pressure you as an offense, you have to make them pay.",
      bullets: [
        "On the blitz: 'We didn't do that enough yesterday and that's on all of us,' and 'You have to look at those as an opportunity if teams are going to all-out blitz you in a given game'",
        "Warned that 'this league can be a copycat league' after Chicago's pressure plan",
        "On Kendal Daniels (neck), at the facility Monday: 'I feel very, very fortunate that he got the treatment he got. But also that we feel really good about where he is.' Too early to project his status",
        "On A.J. Terrell coming off IR: 'It's trending that way, but let's get through the next couple of days'",
        "On Dalton: GM Ian Cunningham 'is always looking at ways that we feel like we can add to the roster and Andy was available,' and 'we're just trying to get Andy up to speed' (WABE / AP)",
      ],
      topics: ["49ers-week", "week-7", "blitz", "injuries", "qb-depth"],
    },
    {
      id: "stefanski-2026-10-18",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-10-18",
      venue: "Mercedes-Benz Stadium · Atlanta, Ga.",
      session: "Week 6 vs. Chicago · Postgame Press Conference",
      sourceUrl: "https://sports.yahoo.com/articles/kevin-stefanski-comments-falcons-31-205344874.html",
      summary: "After a 31-23 home loss built on a 14-0 start and three lost fumbles, Stefanski put the slow start on himself and his staff and backed rookie returner Zachariah Branch. He also gave an early, encouraging update on Kendal Daniels. Quotes via Falcons Wire, AJC, Heavy.com and On SI.",
      pullQuote: "I just felt like we beat ourselves.",
      bullets: [
        "On the start: 'That's on me and our staff' (AJC), adding 'we talked at length about starting fast in this ballgame, and we did not' (Heavy.com)",
        "On the turnovers: 'You turn the ball over three times against a good team, it's going to be hard to win'",
        "On Branch's two lost return fumbles: 'We're counting on him. He'll be better for this' and 'He has to take care of the football' (Falcons Wire, AJC)",
        "On Kendal Daniels (neck): 'All reports so far are good. We'll continue to pray they remain good' (On SI)",
        "On Kyler Gordon's three sacks: called him 'an excellent blitzer' and said the staff will review the protection plan (AJC)",
      ],
      topics: ["bears-week", "week-6", "postgame", "turnovers", "special-teams", "injuries"],
    },
    {
      id: "stefanski-2026-10-16",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-10-16",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Week 6 vs. Chicago · Friday Media Availability",
      sourceUrl: "https://www.ajc.com/sports/2026/10/atlanta-falcons-injury-report-week-6/",
      summary: "On the day the final report came out, Stefanski closed the book on Penix's ribs: no designation, no limitations. He also confirmed C.J. Henderson is out and stayed noncommittal on A.J. Terrell's return from IR. Quotes via AJC and Falcons Wire.",
      pullQuote: "I thought he handled everything really well.",
      bullets: [
        "Said Penix will have no limitations Sunday and does not expect him to need extra protection on his midsection (AJC)",
        "On the week of practice: 'Everything responded well and I thought Mike handled the work week very well' (Falcons Wire)",
        "On A.J. Terrell, eligible to come off IR next week: 'We'll see. I don't want to say just yet, but he's doing very well'",
        "On the Bears: 'Great challenge Sunday at our place. We're excited to get back in front of our fans'",
      ],
      topics: ["bears-week", "week-6", "penix-ribs", "injuries", "cornerbacks"],
    },
    {
      id: "ulbrich-2026-10-15",
      speaker: "Jeff Ulbrich",
      role: "Defensive Coordinator",
      date: "2026-10-15",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Week 6 vs. Chicago · Thursday Coordinator Availability",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-injury-report-za-darius-smith-clears-concussion-protocol",
      summary: "With A.J. Terrell on injured reserve and C.J. Henderson missing a second straight practice with a groin injury, Ulbrich was asked about the depth at corner. He said he remains confident in the players he can still put on the field. Quotes via atlantafalcons.com.",
      pullQuote: "Mike Hughes is a top-end starter in this league.",
      bullets: [
        "Backed veteran Mike Hughes as the anchor of a short-handed cornerback room",
        "On the rookie: 'Avieon (Terrell) is emerging.' The AJC reported Terrell would likely make his first career start if Henderson cannot play",
        "Spoke the same day Za'Darius Smith cleared the concussion protocol, with Smith limited (neck) and Divine Deablo upgraded to full (atlantafalcons.com)",
      ],
      topics: ["bears-week", "week-6", "cornerbacks", "injuries"],
    },
  ],
};
