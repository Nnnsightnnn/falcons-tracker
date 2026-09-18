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
    injuryNote: "Inactive for the Sept 13 opener at Pittsburgh as he builds back from the Week 11 2025 ACL surgery. At Wednesday's game-week practice (Sep 16) he was a full participant and split first-team reps with Cooper Rush while Tua Tagovailoa (oblique) sat, and he would not rule out Sunday: 'I'm working extremely hard. I'm dying to be out there.' Called himself 'close' and stressed he has final say on his own body. Stefanski has not named a Week 2 starter and ruled no one out, leaving Penix a live option for the home opener vs. Carolina and still framed as the eventual starter once fully cleared for contact",
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
    status: "questionable",
    injuryNote: "Oblique. Missed the Sept 13 opener at Pittsburgh after hurting his side in Thursday's individual period; Stefanski called him week to week. Named the Week 1 starter on Sep 7, he ceded the debut to Cooper Rush (who threw two interceptions in a 20-13 loss). His status for the Sept 20 home opener vs. Carolina is uncertain, and a nearly-ready Michael Penix Jr. could factor into the Week 2 quarterback call",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4241479.png",
    contract: { years: 1, total: 1300000, guaranteed: 1300000, apy: 1300000, throughYear: 2026, cap2026: 1300000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2020–2025", team: "Miami Dolphins", type: "NFL · 2x Pro Bowl" },
      { years: "2017–2019", team: "Alabama", type: "College · 2018 CFP title" },
    ],
  },
  {
    id: "cooper-rush",
    name: "Cooper Rush",
    number: 10,
    position: "QB",
    positionGroup: "offense",
    depthRank: 3,
    height: 75, weight: 225, age: 32, experience: 9,
    college: "Central Michigan",
    acquired: "fa-2026-camp",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Named the Week 1 starter on Friday (Sep 11) after Tua Tagovailoa was ruled out with an oblique, drawing his former Cowboys head coach Mike McCarthy in McCarthy's Pittsburgh debut. Took every first-team rep in Thursday's practice, said he was told 'early on' he was going and called the reps 'huge.' Undrafted rookie Jack Strand backs him up. Signed Jul 29, the morning of the first camp practice, after the team released Trevor Siemian",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/2972515.png",
    contract: { years: 1, total: 1500000, guaranteed: 0, apy: 1500000, throughYear: 2026, cap2026: 1210000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2025", team: "Baltimore Ravens", type: "NFL" },
      { years: "2017–2024", team: "Dallas Cowboys", type: "NFL · 9–5 as a starter" },
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
    status: "active",
    injuryNote: null,
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
    injuryNote: null,
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
    status: "active",
    injuryNote: "Slot return · drafted by ATL 2019, back from CHI",
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
    injuryNote: "LT · restructured March 2026 (cleared $10.5M)",
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
    status: "questionable",
    injuryNote: "In concussion protocol (left Week 1 after 51 snaps); limited in Thursday's practice (Sep 17), availability for the home opener tied to clearing the protocol · RG · 2x All-Pro",
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
    status: "active",
    injuryNote: "Took most of the first-team right tackle reps through the spring while Jawaan Taylor rehabbed. D-II development project now in a live three-way RT battle.",
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
    status: "active",
    injuryNote: "Claimed off waivers from Jacksonville on Sept 1, a 2023 fifth-round pick (No. 136) out of Louisville, an undersized, twitchy edge/outside linebacker (6-1, 240) who adds pass-rush depth to a room down Jalon Walker for the year and James Pearce Jr. for eight games.",
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
    status: "active",
    injuryNote: "Claimed off waivers from Philadelphia on Sept 1, a big (6-5, 317) developmental tackle and 2025 sixth-round pick (No. 207) who started 15 games at right tackle for a College Football Playoff Texas team, adding swing depth on a line the Falcons have prioritized all summer.",
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
    status: "active",
    injuryNote: "Acquired Aug 30 (cutdown day) from Chicago for CB Clark Phillips III and a 2027 fifth-round pick, reuniting with GM Ian Cunningham, who was the Bears' assistant GM when they drafted him. A 2023 second-round pick and a two-year starter in Chicago, Dexter posted 44 tackles and six sacks over 17 starts in 2025 and steps into the interior rotation alongside Maason Smith and Brandon Dorlus. In the final year of his rookie deal, so a 2027 extension call now belongs to Atlanta.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4429014.png",
    contract: { years: 1, total: 2140000, guaranteed: 0, apy: 2140000, throughYear: 2026, cap2026: 2140000 },
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
    status: "active",
    injuryNote: "Ex-Browns · 1-yr deal",
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
    status: "active",
    injuryNote: "Signed Aug 18 to a one-year deal worth $6M and up to $8M with incentives, un-retiring after leaving the game in October 2025 following five games with the Eagles. Three-time Pro Bowler, reunited with HC Kevin Stefanski (his coach in Cleveland, 2023-24). Steps into the REDGE starter role vacated by Jalon Walker's season-ending ACL and shores up an edge room that also loses James Pearce Jr. to an eight-game ban from Aug 30. Debut on the grass still to come as of the Colts joint week.",
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
    status: "active",
    injuryNote: "Signed March 12 on a one-year, $2.765M deal for veteran edge depth. Entering his ninth active NFL season across the Rams, 49ers and Colts; missed the 2024 season with a torn Achilles before returning in Indianapolis. Slides up to the LEDGE starter role after Atlanta's surprise cutdown-day release of Azeez Ojulari, working opposite Za'Darius Smith with Pearce serving an eight-game ban from Aug 30.",
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
    status: "active",
    injuryNote: "MIKE · 3yr/$30M FA splash from LV",
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
    status: "active",
    injuryNote: "Shoulder (Week 1 at Pittsburgh): missed Wednesday but returned as a full participant Thursday (Sep 17) and is on track for the home opener · CB1 · paid like one (4yr/$81M extension in 2024)",
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
    posSlot: "RCB",
    positionGroup: "defense",
    depthRank: 2,
    height: 73, weight: 200, age: 27, experience: 6,
    college: "Florida",
    acquired: "fa-2026",
    stats: { tackles: 28, pass_def: 5 },
    form: 6.6,
    status: "active",
    injuryNote: "Reclamation · ex-#9 overall (2020 JAX)",
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
    id: "dewalt-cb",
    name: "Malcolm DeWalt IV",
    number: 36,
    position: "CB",
    posSlot: "RCB",
        stRoles: ["GUNNER"],
    stRank: {"GUNNER":4},
    positionGroup: "defense",
    depthRank: 4,
    height: 71, weight: 190, age: 23, experience: 0,
    college: "Akron",
    acquired: "fa-2026-UDFA",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Undrafted rookie out of Akron (Bremerton, Wash. native) who made the initial 53 on Aug 30 on the strength of elite testing (4.35 forty, 36-inch vertical) and special-teams value. Signed Apr 25 on a three-year UDFA deal.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/5225251.png",
    contract: { years: 3, total: 3120000, guaranteed: 0, apy: 1040000, throughYear: 2028, cap2026: 840000 },
    career: [{ years: "2026–", team: "Atlanta Falcons", type: "NFL · UDFA" }],
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
    status: "active",
    injuryNote: "Ruled OUT (Achilles) on Friday's final injury report for the Pittsburgh opener, but practicing again roughly nine months after the late-Nov 2025 rupture. Activated off Reserve/PUP onto the initial 53 on cutdown day (Aug 30); in the nickel/slot mix behind Avieon Terrell.",
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
    status: "active",
    injuryNote: "Hamstring re-aggravation at private pro day; expected fully cleared by minicamp",
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
    status: "active",
    injuryNote: "Foot · the injury cost him spring practices entirely; out of the walking boot and 'good to go' per Stefanski, but the Jul 10 camp preview still lists him as needing to recover before he gets ILB looks next to Deablo",
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
  week: 2,
  opp: "Carolina Panthers",
  oppAbbr: "CAR",
  home: true,
  venue: "Mercedes-Benz Stadium · Atlanta, Ga.",
  date: "2026-09-20",
  kickoff: "1:00 PM ET",
  tv: "FOX",
  note: "Home opener and NFC South opener, with both teams reeling from lopsided Week 1 losses: Atlanta fell 20-13 at Pittsburgh, Carolina was routed 59-37 at home by Chicago. The Falcons' quarterback picture is unsettled: Tua Tagovailoa (oblique) has not practiced all week and is uncertain, Michael Penix Jr. (ACL rehab) is a full participant but reportedly a week or two from starting, and Cooper Rush profiles as the likely starter after a two-interception debut. Oddsmakers open the Panthers as a 2.5-point favorite. Every NFC South team opened 0-1, so the division race is level entering Sunday.",
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
    note: "Home opener · vs. defending NFC South champion Panthers.",
  },
  {
    week: 3,
    status: "confirmed",
    opponent: "GB",
    opponentName: "Green Bay Packers",
    side: "away",
    date: "2026-09-24",
    kickoffET: "8:15 PM ET",
    tv: "Amazon Prime",
    venue: "Lambeau Field, Green Bay",
    note: "Thursday Night Football · first of three straight primetime games.",
  },
  {
    week: 4,
    status: "confirmed",
    opponent: "NO",
    opponentName: "New Orleans Saints",
    side: "away",
    date: "2026-10-05",
    kickoffET: "8:15 PM ET",
    tv: "ESPN",
    venue: "Caesars Superdome, New Orleans",
    note: "Monday Night Football · divisional road trip.",
  },
  {
    week: 5,
    status: "confirmed",
    opponent: "BAL",
    opponentName: "Baltimore Ravens",
    side: "home",
    date: "2026-10-11",
    kickoffET: "8:20 PM ET",
    tv: "NBC",
    venue: "Mercedes-Benz Stadium, Atlanta",
    note: "Sunday Night Football · third straight primetime, vs. Lamar Jackson.",
  },
  {
    week: 6,
    status: "confirmed",
    opponent: "CHI",
    opponentName: "Chicago Bears",
    side: "home",
    date: "2026-10-18",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "Mercedes-Benz Stadium, Atlanta",
    note: "Bears at MBS · post-primetime breather.",
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
];

// =========================================
// NFC SOUTH 2026 STANDINGS — live (through Week 1)
// All four clubs opened 0-1; ordered by point differential as an early tiebreak.
// =========================================
export const NFC_SOUTH_STANDINGS_2026 = [
  { team: "New Orleans Saints", code: "NO", wins: 0, losses: 1, pct: 0.0, divisionFinish: 1 },
  { team: "Tampa Bay Buccaneers", code: "TB", wins: 0, losses: 1, pct: 0.0, divisionFinish: 2 },
  { team: "Atlanta Falcons", code: "ATL", wins: 0, losses: 1, pct: 0.0, divisionFinish: 3, isFalcons: true },
  { team: "Carolina Panthers", code: "CAR", wins: 0, losses: 1, pct: 0.0, divisionFinish: 4 },
];

// =========================================
// NEWS DIGEST — refreshed daily by scheduled task
// =========================================
export const NEWS_DIGEST = {
  generatedAt: "2026-09-18T12:00:00Z",
  cover: {
    kicker: "Home opener · Panthers at Falcons · Sun 1 p.m. FOX",
    headLine1: "The quarterback job,",
    headEm: "still open.",
    headLine3: "Tua hasn't practiced.",
    deck:
      "Five days after a winnable opener slipped away in Pittsburgh, the Falcons return to Mercedes-Benz Stadium on Sunday to open NFC South play against Carolina with their quarterback room still unsettled. Tua Tagovailoa, out for Week 1 with the oblique he tweaked in a Thursday practice, has not practiced all week and is a real question for the home opener, leaving Cooper Rush, who is managing back spasms, as the likely starter after a rocky debut (12 of 22, 143 yards, a touchdown and two interceptions, one a 35-yard T.J. Watt pick-six). Michael Penix Jr., ten months back from ACL surgery and a full participant again this week, split first-team reps but is still described as a week or two from being ready to start, and would not rule himself out: 'I'm working extremely hard. I'm dying to be out there.' Kevin Stefanski has named no starter and ruled no one out, undrafted rookie Jack Strand included: 'We are working through it,' he said Wednesday. The report brought relief in one corner, with A.J. Terrell (shoulder) back as a full participant Thursday, though captain and two-time All-Pro guard Chris Lindstrom (concussion protocol) was limited and defensive tackle Da'Shawn Hand is lost for the year with a torn quad. Both teams arrive reeling, Carolina routed 59-37 at home by Chicago in Week 1, yet oddsmakers still make the Panthers a 2.5-point favorite in Atlanta, a sign of how little the openers settled. Every NFC South club opened 0-1, so Sunday is the division's first chance for anyone to climb above water, and the Falcons enter it a game back of no one.",
    byline: "The Tracker Desk",
    filedFrom: "Flowery Branch",
    photoId: "bijan",
    stampLabel: "Week 2 · Home opener vs. Carolina",
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
    coverImageUrl: "/falcons-tracker/assets/cover/2026-09-14-bijan-pittsburgh.jpg",
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
  ],
  topics: [
    {
      title: "Quarterback job still open on the eve of the home opener: Tua Tagovailoa has not practiced all week, Cooper Rush takes the first-team reps and profiles as the likely Sunday starter, and Michael Penix Jr. is called a week or two from starting",
      detail: "atlantafalcons.com, The Falcoholic and Yahoo Sports (Sep 17-18): Atlanta closed its practice week with the picture clearer only at the edges. Tua Tagovailoa (oblique) did not practice at all this week, putting his availability for Sunday's home opener in real doubt, while Cooper Rush, managing back spasms, handled the bulk of the first-team work and looks the likely starter. Michael Penix Jr. was a full participant again but is reported to be roughly a week or two from being ready to start as he builds back from November's ACL surgery, and Stefanski has still not named a starter or ruled anyone out. Elsewhere on the report, cornerback A.J. Terrell (shoulder) returned as a full participant Thursday, right guard Chris Lindstrom (concussion protocol) was limited, and rookie linebacker Kendal Daniels was added as limited. Oddsmakers open the reeling Panthers as a 2.5-point favorite in Atlanta.",
      category: "injuries",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-injury-report-a-j-terrell-chris-lindstrom-tua-tagovailoa-panthers",
      sourceLabel: "atlantafalcons.com / The Falcoholic / Yahoo Sports",
    },
    {
      title: "Still no Week 2 quarterback: Stefanski rules no one out as Penix and Rush split first-team reps Wednesday, Tua sits, and Penix says he is 'close' and 'dying to be out there'",
      detail: "Pro Football Rumors, Larry Brown Sports and The Athletic (Sep 16): opening the first full game-week practice, Kevin Stefanski said the Falcons have not decided their starter for Sunday's home opener and have not ruled anybody out. 'We are working through it. Tua is not going to practice today, but he is getting better. Mike and Cooper will practice,' he said, holding Tua Tagovailoa (oblique) out while Michael Penix Jr. and Cooper Rush split first-team reps. Penix, ten months back from ACL surgery, was a full participant and would not rule out playing: 'I'm working extremely hard. I'm dying to be out there.' The relabeled 'QB Cooper Rush press conference' listing looked less settled by day's end, with undrafted rookie Jack Strand also not ruled out.",
      category: "games",
      sourceUrl: "https://www.thefalcoholic.com/atlanta-falcons-depth-chart/96234/cooper-rush-starting-quarterback-week-2-carolina-panthers-tua-tagovailoa-michael-penix-jr-jack-strand",
      sourceLabel: "The Falcoholic / Yahoo Sports / Roundtable",
    },
    {
      title: "Monday fallout in Flowery Branch: Da'Shawn Hand is out for the year with a torn quad, Chris Lindstrom lands in the concussion protocol, and Kevin Stefanski still won't name a Week 2 quarterback",
      detail: "NBC Sports (Pro Football Talk), atlantafalcons.com and The Falcoholic (Sep 14): Stefanski's Monday availability turned Week 1's bruises into hard news. Defensive tackle Da'Shawn Hand tore his quad in Sunday's opener and will miss the rest of the season, needing surgery after just seven snaps in what will be his only Atlanta appearance, a costly hit to an already thin interior. Right guard Chris Lindstrom, a captain and two-time All-Pro, is in the concussion protocol after playing 51 snaps before leaving, with Kyle Hinton filling in for the final nine; his progress through the protocol will decide whether he starts the home opener. On the quarterback front, Stefanski said he had 'no updates' on Tua Tagovailoa (oblique) or Michael Penix Jr. and would not commit to a Week 2 starter, saying only that he needed to 'get through today' first.",
      category: "injuries",
      sourceUrl: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/falcons-say-chris-lindstrom-is-in-concussion-protocol-dashawn-hand-is-out-for-the-year",
      sourceLabel: "NBC Sports (PFT) / atlantafalcons.com / The Falcoholic",
    },
    {
      title: "Falcons open 0-1: Pittsburgh escapes 20-13 as a T.J. Watt pick-six, two missed field goals and nine penalties sink a winnable opener, spoiling Kevin Stefanski's Falcons debut and Cooper Rush's emergency start",
      detail: "ESPN, AP, Yahoo Sports and The Falcoholic (Sep 13): Atlanta lost its season opener 20-13 at Acrisure Stadium, a game it was in until the mistakes piled up. T.J. Watt was the difference, finishing with two sacks and an interception he returned 35 yards for the go-ahead fourth-quarter touchdown after jumping a Cooper Rush throw. Atlanta also missed two field goals and committed nine penalties for 96 yards, and Rush's two interceptions (a minus-one turnover margin, plus the defensive score) left too much to overcome. Aaron Rodgers managed the Steelers offense cleanly, throwing for 221 yards and a touchdown with no turnovers in Mike McCarthy's Pittsburgh debut. The loss drops Atlanta to 0-1 with the home opener against Carolina next.",
      category: "games",
      sourceUrl: "https://www.espn.com/nfl/recap?gameId=401872658",
      sourceLabel: "ESPN / AP / Yahoo Sports / The Falcoholic",
    },
    {
      title: "Quarterback play tanks it: Cooper Rush goes 12-of-22 for 143 yards with a touchdown and two interceptions in his emergency start, and owns it afterward ('I wish I played better... I want that one back')",
      detail: "AJC, SI Falcons and Yahoo Sports (Sep 13): pressed into the start when Tua Tagovailoa was ruled out Friday, Rush completed 12 of 22 passes for 143 yards with a 23-yard touchdown to Bijan Robinson but threw two costly interceptions, including the T.J. Watt pick-six that flipped the fourth quarter. The veteran did not deflect: 'I wish I played better' and 'wish I put us in a better position to win,' he said, and of the second pick, 'I want that one back.' The thin passing output (143 yards, with Drake London limited to two catches for 29) put the quarterback question back at the center of Atlanta's week as it turns to the home opener.",
      category: "games",
      sourceUrl: "https://www.ajc.com/sports/2026/09/falcons-third-string-qb-cooper-rush-falls-short-in-emergency-start/",
      sourceLabel: "AJC / SI Falcons / Yahoo Sports",
    },
    {
      title: "Bijan carries the offense: Robinson posts 173 yards from scrimmage (83 rushing, 90 receiving) and a 23-yard receiving touchdown in the loss, the lone consistent source of offense around a struggling passing game",
      detail: "Bleacher Report and steelers.com box score (Sep 13): the Falcons' first-year captain was the one thing that worked in Pittsburgh, leading the team in both rushing (83 yards) and receiving (90 yards) for 173 all-purpose yards and hauling in a 23-yard touchdown pass from Cooper Rush. Robinson's dual-threat afternoon underscored both his value and the offense's imbalance: with the passing game producing just 143 yards and Drake London held to 29, Atlanta leaned on Robinson but could not build enough around him to overcome the turnovers and missed kicks.",
      category: "games",
      sourceUrl: "https://bleacherreport.com/articles/25499116-steelers-beat-falcons-box-score-stats-highlights-aaron-rodgers-bijan-dk-rush-top-players",
      sourceLabel: "Bleacher Report / steelers.com",
    },
    {
      title: "Stefanski on the miscues: 'It's just hard to win on the road when you do those things,' the new head coach says, pointing at the penalties, the turnovers and the defensive score in his debut",
      detail: "atlantafalcons.com and BVM Sports (Sep 13): in his first postgame press conference as Falcons head coach, Stefanski credited his team for fighting to the end but was direct about the self-inflicted damage. 'Our guys fought to the end there, but really if you look at the penalties, the turnovers, including a defensive score for them, it's just hard to win on the road when you do those things,' he said. On the nine flags, he added: 'We've got to look at our technique and look at if there's ways to be better,' distinguishing between technique lapses and plays where the Falcons 'got beat quickly and then resorted to holding.'",
      category: "coaching",
      sourceUrl: "https://www.atlantafalcons.com/news/kevin-stefanski-penalties-turnovers-steelers-game-recap",
      sourceLabel: "atlantafalcons.com / BVM Sports",
    },
    {
      title: "The QB picture for Week 2: Tua Tagovailoa (oblique) remains week to week and uncertain for Sunday's home opener, while NFL Network's Ian Rapoport reports Michael Penix Jr. could be ready for Week 2 or 3 as he nears full strength from ACL surgery",
      detail: "NBC Sports, Yahoo Sports and NFL.com (Sep 12 into Sep 13): Atlanta's quarterback room stays unsettled heading home. Tagovailoa, who hurt his oblique in a Thursday practice and missed the opener, is week to week and his status for the Carolina game is unclear. Penix, roughly ten months removed from the November ACL surgery that ended his 2025 season, is healthy but 'not where he feels like he needs to be right now,' though Rapoport reported he could be in play for Week 2 or Week 3. Whether the Falcons turn back to a healthy Penix or ride Rush again against the Panthers is the question of the week at Flowery Branch.",
      category: "injuries",
      sourceUrl: "https://sports.yahoo.com/articles/atlanta-falcons-major-injury-michael-182515548.html",
      sourceLabel: "NBC Sports / Yahoo Sports / NFL.com",
    },
    {
      title: "Next up, the home opener: Atlanta hosts the Carolina Panthers on Sunday, Sept 20 at 1 p.m. ET on FOX to open NFC South play, with both teams reeling from lopsided Week 1 losses (Carolina fell 59-37 to Chicago in a record-setting shootout)",
      detail: "NFL.com and FBSchedules (Sep 13): the Falcons return to Mercedes-Benz Stadium for their home opener against the defending division-winning Panthers, a divisional date that suddenly looks like an early measuring stick for two struggling teams. Carolina was blown out 59-37 at home by the Bears in the highest-scoring opener the two franchises have produced, the first game in NFL history to end on that exact scoreline. For Atlanta, a home crowd and a familiar NFC South opponent offer a chance to steady a week that opened with turnovers and penalties in Pittsburgh.",
      category: "games",
      sourceUrl: "https://www.atlantafalcons.com/schedule/",
      sourceLabel: "NFL.com / atlantafalcons.com / FBSchedules",
    },
    {
      title: "Everyone's a loser in the NFC South: all four division teams dropped their openers, leaving Atlanta, Tampa Bay, New Orleans and Carolina tied at 0-1 before divisional play even begins",
      detail: "The Falcoholic and Yahoo Sports (Sep 13): the division could not have started flatter. Tampa Bay lost 33-27 at Cincinnati despite four lost Baker Mayfield fumbles, New Orleans blew a 21-point lead and fell 31-30 in overtime to Detroit when a two-point try failed, Carolina was routed 59-37 by Chicago, and Atlanta dropped its 20-13 game at Pittsburgh. Every NFC South club sits 0-1, so the Falcons' loss costs them no ground in the standings and Sunday's home date with the Panthers becomes the division's first chance for anyone to get above water.",
      category: "general",
      sourceUrl: "https://www.thefalcoholic.com/atlanta-falcons-scores-results/96166/nfc-south-standings-week-1-buccaneers-saints-panthers",
      sourceLabel: "The Falcoholic / Yahoo Sports",
    },
    {
      title: "How it got here: Tua was ruled OUT of the opener Friday with an oblique and Stefanski named Cooper Rush the starter, sending the veteran against his old Cowboys coach Mike McCarthy with undrafted rookie Jack Strand backing up and Penix inactive",
      detail: "ESPN, AP and atlantafalcons.com (Sep 11): the week that ended in Pittsburgh turned on Friday's final injury report, when Atlanta ruled Tagovailoa out with the oblique he tweaked Thursday and handed the start to Cooper Rush. Stefanski called Tua week to week and said he was 'disappointed for him, obviously,' adding that Tua would 'rally behind Coop.' Rush, who started 40-plus games under McCarthy in Dallas, drew his former coach in McCarthy's Steelers debut. The Falcons also ruled out OL Cameron Williams (ankle) and CB Billy Bowman Jr. (Achilles) and listed edge Za'Darius Smith (shoulder) as questionable on a front already down Jalon Walker for the year and James Pearce Jr. for eight games.",
      category: "injuries",
      sourceUrl: "https://www.espn.com/nfl/story/_/id/49905536/tagovailoa-rush-start-qb-falcons-vs-steelers",
      sourceLabel: "ESPN / AP / atlantafalcons.com",
    },
    {
      title: "No quarterback among the captains: Atlanta voted in five for 2026 (Nick Folk, Jessie Bates III, Bijan Robinson, Chris Lindstrom and Divine Deablo), and Robinson rewarded the nod with a 173-yard opener",
      detail: "AJC and atlantafalcons.com (Sep 4): for the first time in years the Falcons named no quarterback among their captains, with kicker Nick Folk, safety Jessie Bates III, running back Bijan Robinson, guard Chris Lindstrom and linebacker Divine Deablo getting the vote. Robinson, Deablo and Folk earned the honor for the first time; Lindstrom returns to the group and Bates has been a captain every season since 2023. Robinson made the case for the choice in Week 1, leading Atlanta in both rushing and receiving in the loss at Pittsburgh.",
      category: "general",
      sourceUrl: "https://www.ajc.com/sports/2026/09/bijan-robinson-among-falcons-5-captains-for-2026/",
      sourceLabel: "AJC / atlantafalcons.com",
    },
    {
      title: "The retooled front's first test: with Jalon Walker out for the year and James Pearce Jr. serving an eight-game suspension, Atlanta's un-retired Za'Darius Smith and trade addition Gervon Dexter Sr. anchored a defense that held Pittsburgh to 20 points",
      detail: "ESPN and CBS Sports (Sep 13, background Aug 30): the defense largely did its job in the opener, keeping Atlanta within one score until the offense's turnovers tilted the game. The group is leaning on pieces added late in the summer: edge Za'Darius Smith, who came out of retirement, and defensive tackle Gervon Dexter Sr., acquired from Chicago on cutdown day for CB Clark Phillips III and a 2027 fifth-round pick, are covering for the season-long loss of first-rounder Jalon Walker (ACL) and the eight-game suspension of rookie James Pearce Jr. Holding a Rodgers-led offense to 20 is a workable baseline as the front continues to jell.",
      category: "general",
      sourceUrl: "https://www.espn.com/nfl/story/_/id/49771892/sources-falcons-add-gervon-dexter-sr-trade-bears",
      sourceLabel: "ESPN / CBS Sports",
    },
    {
      title: "Rookies in the rotation: second-year-class linebacker Kendal Daniels started inside next to Divine Deablo and second-round nickel Avieon Terrell drew a starting role in the opener, with rookie returner Zachariah Branch active despite a hamstring",
      detail: "atlantafalcons.com (Sep 8): Atlanta's Week 1 debut leaned on its young defenders. Rookie linebacker Kendal Daniels was listed as a starting inside linebacker alongside Divine Deablo, with fellow draftee Harold Perkins Jr. behind him, and second-round rookie Avieon Terrell (A.J. Terrell's younger brother) opened as the starting nickel. Second-round receiver Zachariah Branch, the listed punt returner, was active through a hamstring issue. The rookie usage is a marker of how much the staff is asking of its 2026 class right out of the gate.",
      category: "general",
      sourceUrl: "https://www.atlantafalcons.com/news/atlanta-falcons-week-1-depth-chart-vs-pittsburgh-steelers",
      sourceLabel: "atlantafalcons.com",
    },
  ],
};

// ─── INTERVIEWS — press conference & podium dispatches ────────────────────
// Refreshed by the falcons-tracker-update skill. Each session is a structured
// summary of a real press availability: speaker, role, date, venue, a single
// pullQuote, 3–5 bullets of substantive content, and a sourceUrl pointing
// back to the team site / NFL.com / NBC PFT / AJC primary source. Order is
// reverse-chronological — newest session first.
export const INTERVIEWS = {
  generatedAt: "2026-09-18T12:00:00Z",
  windowLabel: "Panthers Week · practice week into the Sept 20 home opener",
  sessions: [
    {
      id: "stefanski-2026-09-16",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-09-16",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Panthers Week · Wednesday Media Availability",
      sourceUrl: "https://www.profootballrumors.com/2026/09/falcons-undecided-on-week-2-qb",
      transcriptUrl: "https://larrybrownsports.com/football/kevin-stefanski-falcons-uncertain-qb-situation-week-2/770415",
      verified: true,
      summary: "Opening the first full game-week practice, Stefanski still would not name a Week 2 starter and pointedly ruled no one out. He held Tua Tagovailoa out of Wednesday's session while calling him improved, and had Michael Penix Jr. and Cooper Rush split first-team reps, with Penix a full participant. The listing that had put Rush's name on the midweek podium looked less settled by day's end.",
      pullQuote: "We are working through it. Tua is not going to practice today, but he is getting better. Mike and Cooper will practice.",
      bullets: [
        "On the decision: said the Falcons have not decided their quarterback and have not ruled anybody out, with all four options still live",
        "On Tua Tagovailoa: kept him out of Wednesday's practice with the oblique but said he 'is getting better'",
        "On the reps: had Penix and Rush split first-team work, and called Penix a full participant while declining to detail exactly what he is doing",
        "On Jack Strand: did not rule out the undrafted rookie for the game either, per reporters in the room",
      ],
      topics: ["panthers-week", "qb-decision", "penix-acl", "first-team-reps"],
    },
    {
      id: "penix-2026-09-16",
      speaker: "Michael Penix Jr.",
      role: "Quarterback",
      date: "2026-09-16",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Panthers Week · Wednesday Media Availability",
      sourceUrl: "https://larrybrownsports.com/football/kevin-stefanski-falcons-uncertain-qb-situation-week-2/770415",
      transcriptUrl: "https://x.com/CameronWolfe/status/2100315945419845711",
      verified: true,
      summary: "Ten months removed from the ACL tear that ended his 2025, Penix spoke for the first time this week and made plain how badly he wants back on the field. He called himself 'close,' would not rule out playing Sunday, and stressed the final call on his body is his, drawing a line between his rehab and other high-profile return timelines. He split first-team reps with Rush on Wednesday.",
      pullQuote: "I'm working extremely hard. I'm dying to be out there.",
      bullets: [
        "On his status: called himself 'close' and did not rule out playing Sunday against Carolina",
        "On the decision: said he has final say on his own body and framed his injury as different from other recent high-profile returns",
        "On the work: 'I'm working extremely hard,' and 'I'm dying to be out there,' on pushing to return from November's ACL surgery",
        "On Wednesday: split first-team reps with Cooper Rush while Tua Tagovailoa did not practice",
      ],
      topics: ["qb-decision", "penix-acl", "panthers-week"],
    },
    {
      id: "stefanski-2026-09-14",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-09-14",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Panthers Week · Monday Media Availability",
      sourceUrl: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/falcons-say-chris-lindstrom-is-in-concussion-protocol-dashawn-hand-is-out-for-the-year",
      transcriptUrl: "https://sports.yahoo.com/articles/kevin-stefanski-no-decision-made-185843719.html",
      verified: true,
      summary: "The day after the 20-13 loss at Pittsburgh, Stefanski opened Panthers week by confirming two Week 1 casualties on the lines and holding off on a quarterback decision for the home opener. He said Da'Shawn Hand is out for the season with a torn quad and Chris Lindstrom is in the concussion protocol, and offered no timeline on either injured quarterback.",
      pullQuote: "I need to get through today.",
      bullets: [
        "On Da'Shawn Hand: confirmed the defensive tackle tore his quad in Sunday's opener and is out for the year after seven snaps in his Atlanta debut",
        "On Chris Lindstrom: said the two-time All-Pro right guard is in the concussion protocol after leaving Week 1, with his availability against Carolina tied to clearing the protocol",
        "On the Week 2 quarterback: declined to name a starter, saying 'I need to get through today' before committing, with no timeline set",
        "On Tua Tagovailoa and Michael Penix Jr.: said he had 'no updates' on the health of either quarterback",
      ],
      topics: ["panthers-week", "injuries", "qb-decision", "concussion-protocol"],
    },
    {
      id: "rush-2026-09-13",
      speaker: "Cooper Rush",
      role: "Quarterback",
      date: "2026-09-13",
      venue: "Acrisure Stadium · Pittsburgh, Pa.",
      session: "Week 1 at Steelers · Postgame Press Conference",
      sourceUrl: "https://www.atlantafalcons.com/video/quarterback-cooper-rush-week-1-at-steelers-post-game-press-conference-atlanta-falcons",
      transcriptUrl: "https://www.ajc.com/sports/2026/09/falcons-third-string-qb-cooper-rush-falls-short-in-emergency-start/",
      verified: true,
      summary: "Pressed into an emergency start when Tua Tagovailoa was ruled out Friday, Rush finished 12 of 22 for 143 yards with a touchdown and two interceptions in the 20-13 loss, and he did not deflect afterward. He took ownership of the giveaways, singling out the second interception as the one he most wanted back, and credited the Steelers' front for a physical afternoon.",
      pullQuote: "I wish I played better. I want that one back.",
      bullets: [
        "On his performance: 'I wish I played better,' and 'wish I put us in a better position to win,' after the 20-13 loss",
        "On the second interception: said plainly, 'I want that one back,' calling it the play he most regretted",
        "Line: completed 12 of 22 passes for 143 yards with a 23-yard touchdown to Bijan Robinson and two interceptions, one returned for a score by T.J. Watt",
        "Context: Rush started against his former Dallas head coach Mike McCarthy in McCarthy's Pittsburgh debut, with Tua Tagovailoa (oblique) out and Michael Penix Jr. inactive",
      ],
      topics: ["week-1", "postgame", "cooper-rush", "turnovers"],
    },
    {
      id: "stefanski-2026-09-13",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-09-13",
      venue: "Acrisure Stadium · Pittsburgh, Pa.",
      session: "Week 1 at Steelers · Postgame Press Conference",
      sourceUrl: "https://www.atlantafalcons.com/news/kevin-stefanski-penalties-turnovers-steelers-game-recap",
      transcriptUrl: "https://bvmsports.com/2026/09/13/kevin-stefanski-on-falcons-miscues-vs-steelers-hard-to-win-on-the-road-when-you-do-those-things/",
      verified: true,
      summary: "In his first game as Falcons head coach, Stefanski credited his team for fighting to the finish but was direct about the self-inflicted damage that decided a winnable road opener. He pointed to the penalties, the turnovers and Pittsburgh's defensive score, and said the coaching staff would look hard at technique on the flags.",
      pullQuote: "It's just hard to win on the road when you do those things.",
      bullets: [
        "On the loss: 'Our guys fought to the end there, but really if you look at the penalties, the turnovers, including a defensive score for them, it's just hard to win on the road when you do those things'",
        "On the nine penalties: 'We've got to look at our technique and look at if there's ways to be better'",
        "On the flags in detail: distinguished technique lapses from plays where the Falcons 'got beat quickly and then resorted to holding,' vowing to 'look at ways to be better'",
        "Context: Atlanta committed nine penalties for 96 yards, missed two field goals and lost the turnover battle by one, including T.J. Watt's pick-six",
      ],
      topics: ["week-1", "postgame", "penalties", "turnovers"],
    },
    {
      id: "stefanski-2026-09-11",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-09-11",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Steelers Week · Friday Final Injury Report Availability",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-game-report-qb-tua-tagovailoa-ruled-out-of-sunday-s-game",
      transcriptUrl: "https://www.espn.com/nfl/story/_/id/49905536/tagovailoa-rush-start-qb-falcons-vs-steelers",
      verified: true,
      summary: "Stefanski closed the week by ruling Tua Tagovailoa out of Sunday's opener with an oblique and handing the start to Cooper Rush, a call forced by a Thursday practice injury just days after naming Tua the Week 1 starter. He called Tagovailoa week to week, expressed confidence Rush could get up to speed quickly, named undrafted rookie Jack Strand the backup, and made clear Michael Penix Jr. is not an option Sunday as he keeps building back from ACL surgery.",
      pullQuote: "Disappointed for him, obviously. He's going to rally behind Coop and do everything he can to help Coop.",
      bullets: [
        "On Tua: ruled him out for Sunday with an oblique and called him week to week, saying he was 'disappointed for him, obviously'",
        "On Rush getting up to speed quickly: asked if the veteran could, answered simply, 'That's a short answer, I did,' before adding, 'That's the life of a backup quarterback'",
        "On the backup: named undrafted rookie Jack Strand the No. 2 behind Rush for the opener",
        "On Penix: 'No. Mike will be ready when Mike's ready,' ruling him out as a Week 1 option as he returns from November's ACL surgery",
        "Context: Rush spent five years under Mike McCarthy in Dallas and now faces him in McCarthy's Steelers debut; Cameron Williams (ankle) and Billy Bowman Jr. (Achilles) were also ruled out, Za'Darius Smith (shoulder) questionable",
      ],
      topics: ["qb-injury", "steelers-week", "week-1", "cooper-rush", "penix-acl"],
    },
  ],
};
