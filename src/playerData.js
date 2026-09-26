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
    injuryNote: "Sat out the first two games while completing his return from November 2025 ACL surgery; named the Week 3 starter on Monday, Sept 21, his first game action since the injury, for Thursday night at Green Bay. Listed as a full participant (knee) on the Week 3 estimated report. Roughly ten months from surgery and building toward full strength",
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
    injuryNote: "Benched in the Sept 20 home opener after a fumble and two interceptions: went 10 of 17 for 86 yards before Stefanski pulled him for undrafted rookie Jack Strand in the 34-3 loss. Started the first two games with Tua Tagovailoa and Michael Penix Jr. hurt, both losses (his Week 1 line at Pittsburgh: 12 of 22, 143 yards, a TD to Bijan Robinson and two picks, one a T.J. Watt pick-six). With Penix reportedly poised to return Thursday, his hold on the job is in doubt. Signed Jul 29 after the team released Trevor Siemian",
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
    injuryNote: "Signed March 12 on a one-year, $2.765M deal for veteran edge depth. Entering his ninth active NFL season across the Rams, 49ers and Colts; missed the 2024 season with a torn Achilles before returning in Indianapolis. Slides up to the LEDGE starter role after Atlanta's surprise cutdown-day release of Azeez Ojulari, working opposite Za'Darius Smith with Pearce serving an eight-game ban from Aug 30. Missed the Week 3 win at Green Bay (hamstring); day-to-day for the Week 4 Monday-nighter at New Orleans as the thin edge room waits on his return.",
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
    status: "ir",
    injuryNote: "Placed on injured reserve Monday (Sep 22) with the groin injury that knocked him out of the Sept 20 Carolina loss in the first quarter, sidelining the CB1 for at least four games; the team signed DL Zach Harrison off the practice squad in the corresponding move. Leaves Mike Hughes and rookie Avieon Terrell, A.J.'s younger brother, to cover the top corner spots at Green Bay · CB1 · paid like one (4yr/$81M extension in 2024)",
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
    injuryNote: "Doubtful (Achilles) for the Week 3 win at Green Bay and did not factor in, still working back roughly ten months after the late-Nov 2025 rupture; had also been ruled out for the Week 2 home opener vs. Carolina. Activated off Reserve/PUP onto the initial 53 on cutdown day (Aug 30); in the nickel/slot mix behind Avieon Terrell.",
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
  week: 4,
  opp: "New Orleans Saints",
  oppAbbr: "NO",
  home: false,
  venue: "Caesars Superdome · New Orleans, La.",
  date: "2026-10-05",
  kickoff: "8:15 PM ET",
  tv: "ESPN",
  note: "Monday Night Football, and the Falcons arrive on a high. Michael Penix Jr. announced his return from a torn ACL with a 35-14 rout of the Packers at Lambeau, the first win of the Kevin Stefanski era, and now Atlanta (1-2) heads into the Superdome for its first NFC South road test. Bijan Robinson piled up 213 scrimmage yards and two touchdowns at Green Bay and Drake London went for 154 receiving; the challenge is stringing a second straight complete game together against a division rival. New Orleans sits near the top of the NFC South early, so a win would pull the Falcons even in the loss column with the leaders. Atlanta gets ten days between primetime trips before a Sunday-night home date with Baltimore in Week 5.",
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
    note: "Thursday Night Football · Falcons 35-14. Michael Penix Jr. (18-of-25, 239, TD) won his first start back from a torn ACL; Bijan Robinson ran for two scores and 213 scrimmage yards and Drake London caught eight for 154 as Atlanta got its first win of the year.",
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
  { date: "2026-09-20", opp: "CAR", home: true, atlScore: 3, oppScore: 34, result: "L" },
  { date: "2026-09-24", opp: "GB", home: false, atlScore: 35, oppScore: 14, result: "W" },
];

// =========================================
// NFC SOUTH 2026 STANDINGS — live (Falcons through Week 3; rest through Week 2)
// Atlanta opened Week 3 on Thursday and beat Green Bay 35-14 to reach 1-2, moving
// out of the division cellar ahead of Tampa Bay (0-2). Carolina, New Orleans and
// Tampa Bay play their Week 3 games Sunday; their records here are through Week 2.
// =========================================
export const NFC_SOUTH_STANDINGS_2026 = [
  { team: "Carolina Panthers", code: "CAR", wins: 1, losses: 1, pct: 0.5, divisionFinish: 1 },
  { team: "New Orleans Saints", code: "NO", wins: 1, losses: 1, pct: 0.5, divisionFinish: 2 },
  { team: "Atlanta Falcons", code: "ATL", wins: 1, losses: 2, pct: 0.333, divisionFinish: 3, isFalcons: true },
  { team: "Tampa Bay Buccaneers", code: "TB", wins: 0, losses: 2, pct: 0.0, divisionFinish: 4 },
];

// =========================================
// NEWS DIGEST — refreshed daily by scheduled task
// =========================================
export const NEWS_DIGEST = {
  generatedAt: "2026-09-26T08:24:05Z",
  cover: {
    kicker: "1-2 · Penix's return powers a 35-14 rout at Lambeau",
    headLine1: "Penix delivers,",
    headEm: "35-14.",
    headLine3: "His return from the ACL ends the winless start at Green Bay.",
    deck:
      "The wait is over on two fronts. Ten months after a torn left ACL ended his 2025 season, Michael Penix Jr. returned Thursday night at Lambeau Field and led the Falcons to a 35-14 rout of the Packers, the first win of the Kevin Stefanski era and Atlanta's first of 2026. Penix shook off an early interception to finish 18 of 25 for 239 yards and a touchdown, and the ground game did the rest: Bijan Robinson piled up 213 scrimmage yards and two scores, while Drake London caught eight balls for 154 yards. The defense, thinned by injuries all week, blocked a field goal and held Jordan Love's offense to 14 points. 'I'm just so thankful, so blessed to be back in this position,' Penix said afterward. At 1-2, the Falcons turn to a Monday-night trip to New Orleans.",
    byline: "The Tracker Desk",
    filedFrom: "Flowery Branch",
    photoId: "penix-jr",
    stampLabel: "Week 3 · Falcons 35, Packers 14 at Green Bay",
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
    "Pro Football Network", "StatMuse", "packers.com",
  ],
  topics: [
    {
      title: "Statement at Lambeau: Michael Penix Jr. returns from a torn ACL and the Falcons rout the Packers 35-14 for their first win of 2026",
      detail: "atlantafalcons.com, ESPN and CBS Sports (Sep 24-25): ten months after a torn left ACL ended his 2025 season, Penix made his return in prime time and led Atlanta to a 35-14 win at Green Bay, the first of the Kevin Stefanski era. He shook off an early interception to finish 18 of 25 for 239 yards and a touchdown, the Falcons led 17-7 at halftime and pulled away, and a defense thinned by injuries all week held Jordan Love's offense to 14 points. The result moved Atlanta to 1-2 and out of the NFC South cellar heading into a Monday-night trip to New Orleans.",
      category: "games",
      sourceUrl: "https://www.espn.com/nfl/story/_/id/50023295/nfl-green-bay-packers-atlanta-falcons-jordan-love-michael-penix",
      sourceLabel: "ESPN / atlantafalcons.com / CBS Sports",
    },
    {
      title: "Bijan Robinson and Drake London go supernova: 213 scrimmage yards and two touchdowns for Robinson, 154 receiving for London, an NFL first",
      detail: "atlantafalcons.com game breakdown (Sep 24): Robinson carried the offense with 213 yards from scrimmage and two scores, ripping runs of 55 and 31 yards, and became the 10th player in NFL history to reach 6,000 career scrimmage yards before turning 25. London added eight catches for 154 yards, and the pair set an NFL record by producing a 150-yard rusher and a 150-yard receiver in the same game for the third time, the most of any teammate duo. Austin Hooper and Brian Robinson Jr. also reached the end zone.",
      category: "games",
      sourceUrl: "https://www.atlantafalcons.com/news/game-breakdown-what-happened-in-falcons-vs-packers",
      sourceLabel: "atlantafalcons.com",
    },
    {
      title: "'The definition of resiliency': teammates rally around Penix's return, and his own reaction was two words, 'But God'",
      detail: "atlantafalcons.com and ClutchPoints (Sep 24-25): after an interception on an early drive, Penix settled and completed 17 of his next 20 throws. 'I've been fighting and scratching for a long time to get to where I'm at today,' he said, thanking the trainers, his family and his teammates. Drake London called him 'the definition of resiliency,' and Jessie Bates III recalled Penix in tears in the locker room before the final preseason game because he wanted to be ready. Penix summed up the night in two words: 'But God.'",
      category: "general",
      sourceUrl: "https://www.atlantafalcons.com/news/michael-penix-jr-resiliency-falcons-win-thursday-night-football-packers",
      sourceLabel: "atlantafalcons.com / ClutchPoints",
    },
    {
      title: "The thin defense holds up: Zach Harrison blocks a field goal, Cameron Thomas gets home, and C.J. Henderson locks down for the injured A.J. Terrell",
      detail: "atlantafalcons.com (Sep 24): down its top corner (A.J. Terrell, IR) and edge rusher Samson Ebukam (hamstring), Atlanta's defense still limited Green Bay to 14 points. Zach Harrison, signed off the practice squad only two days earlier, blocked a 44-yard field goal; Cameron Thomas recorded a sack; and C.J. Henderson, starting for Terrell, broke up multiple passes. It was the kind of complementary defensive effort the unit could not muster in the 34-3 Carolina loss a week earlier.",
      category: "games",
      sourceUrl: "https://www.atlantafalcons.com/news/game-breakdown-what-happened-in-falcons-vs-packers",
      sourceLabel: "atlantafalcons.com",
    },
    {
      title: "Stefanski gets his first Falcons win and a moment with Penix: 'I feel great for him. I'm proud of him'",
      detail: "Yahoo Sports and Yardbarker (Sep 24-25): the head coach earned his first victory in Atlanta and made clear what the night meant beyond the standings. Asked about Penix's return from the ACL, Stefanski said, 'I feel great for him. I'm proud of him,' and praised 'the overall effort.' The staff has ten days before the Week 4 Monday-nighter at New Orleans to build on the first complete performance of the Stefanski era.",
      category: "coaching",
      sourceUrl: "https://sports.yahoo.com/articles/kevin-stefanski-comments-falcons-week-034131494.html",
      sourceLabel: "Yahoo Sports / Yardbarker",
    },
    {
      title: "Next up, a division road test: the Falcons visit the Saints on Monday Night Football in Week 4, their first NFC South game of 2026",
      detail: "NFL.com and the 2026 schedule (Sep 25): Atlanta plays at New Orleans on Monday, Oct 5 at 8:15 p.m. ET on ESPN, the middle leg of a three-game primetime run that ends with a Sunday-night home date against Baltimore's Lamar Jackson in Week 5. A win in the Superdome would even the Falcons in the loss column with the top of the division and give the Penix-led offense a second straight test on the road.",
      category: "games",
      sourceUrl: "https://www.nfl.com/schedules/2026/by-team/atlanta-falcons",
      sourceLabel: "NFL.com",
    },
    {
      title: "Off the schneid: Atlanta's Thursday win lifts it to 1-2 and out of the NFC South cellar, with Carolina and New Orleans still atop the division before Sunday",
      detail: "atlantafalcons.com and StatMuse (Sep 24): the 35-14 win moved the Falcons to 1-2 and past Tampa Bay (0-2) in the division. Carolina and New Orleans, both 1-1, lead the NFC South entering their Week 3 games Sunday, so Atlanta can pull within a game of the top with a Week 4 win in New Orleans. It is the Falcons' first road win and first victory of any kind under Stefanski.",
      category: "general",
      sourceUrl: "https://www.statmuse.com/nfl/ask/nfc-south-standings",
      sourceLabel: "atlantafalcons.com / StatMuse",
    },
    {
      title: "A.J. Terrell watches from IR: the $81M CB1 missed the Green Bay win with a groin injury and remains out at least four games",
      detail: "atlantafalcons.com and NBC Sports (Sep 22, ongoing): Terrell went on injured reserve Monday with the groin injury that knocked him out of the Carolina loss, sidelining the top cornerback for a minimum of four games. C.J. Henderson and rookie Avieon Terrell, A.J.'s younger brother, covered the top roles in his absence at Lambeau, and the corresponding move that brought Zach Harrison up off the practice squad paid off with his blocked field goal Thursday.",
      category: "injuries",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-place-aj-terrell-jr-on-injured-reserve",
      sourceLabel: "atlantafalcons.com / NBC Sports",
    },
    {
      title: "Injury watch: edge Samson Ebukam (hamstring) and nickel Billy Bowman Jr. (Achilles) missed the win and are day-to-day for New Orleans",
      detail: "atlantafalcons.com injury reports (Sep 23-24): Ebukam was ruled out and Bowman doubtful for the short-week trip and neither factored in at Green Bay, leaving the pass rush and secondary shorthanded even in a 35-14 win. Both are day-to-day across the ten-day runway before the Week 4 Monday-nighter at New Orleans, where their return would relieve a defense already without A.J. Terrell (IR), Jalon Walker (ACL) and the suspended James Pearce Jr.",
      category: "injuries",
      sourceUrl: "https://sports.yahoo.com/articles/falcons-final-week-3-injury-201745521.html",
      sourceLabel: "atlantafalcons.com / Yahoo Sports",
    },
    {
      title: "The quarterback room settles, for now: Penix's win locks him in as QB1, with Tua Tagovailoa healthy behind him and Cooper Rush third",
      detail: "ESPN and CBS Sports (Sep 24): the carousel that churned through Cooper Rush and undrafted rookie Jack Strand during an 0-2 start has stopped. Penix's return performance gives Atlanta a clear QB1, and Tua Tagovailoa, active for the first time all season Thursday after an oblique injury, backs him up. Rush, benched in the Carolina loss, drops to third on the depth chart.",
      category: "general",
      sourceUrl: "https://www.cbssports.com/nfl/news/michael-penix-jr-returns-as-falcons-visit-packers/",
      sourceLabel: "ESPN / CBS Sports",
    },
    {
      title: "No quarterback among the captains: Atlanta's five voted leaders (Nick Folk, Jessie Bates III, Bijan Robinson, Chris Lindstrom and Divine Deablo) set the tone through the turnaround",
      detail: "AJC and atlantafalcons.com (Sep 4, ongoing): for the first time in years the Falcons named no quarterback among their captains, and that group carried the message from the home-opener boos to Thursday's breakthrough. Bates and Robinson fronted the accountability at 0-2, and Robinson's 213-yard night at Green Bay backed the talk up.",
      category: "general",
      sourceUrl: "https://www.ajc.com/sports/2026/09/bijan-robinson-among-falcons-5-captains-for-2026/",
      sourceLabel: "AJC / atlantafalcons.com",
    },
    {
      title: "Still shorthanded up front: with Jalon Walker (ACL) out for the year and James Pearce Jr. suspended, the edge rush leaned on Za'Darius Smith and a blocked kick to get by",
      detail: "ESPN and CBS Sports (background Aug 30, updated Sep 24): the retooled front is missing first-rounder Jalon Walker for the season and rookie James Pearce Jr. to an eight-game ban, and it lost Ebukam for the Green Bay game too. Even so, Cameron Thomas's sack and Zach Harrison's special-teams block helped hold the Packers to 14. Getting Ebukam back and, eventually, Pearce off suspension is the path to a steadier pass rush.",
      category: "general",
      sourceUrl: "https://www.espn.com/nfl/story/_/id/49771892/sources-falcons-add-gervon-dexter-sr-trade-bears",
      sourceLabel: "ESPN / CBS Sports",
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
  generatedAt: "2026-09-26T08:24:05Z",
  windowLabel: "Green Bay Postgame → Saints Week · Sept 24 → Oct 5",
  sessions: [
    {
      id: "penix-2026-09-24",
      speaker: "Michael Penix Jr.",
      role: "Quarterback",
      date: "2026-09-24",
      venue: "Lambeau Field · Green Bay, Wis.",
      session: "Week 3 at Green Bay · Postgame Press Conference",
      sourceUrl: "https://www.atlantafalcons.com/news/michael-penix-jr-resiliency-falcons-win-thursday-night-football-packers",
      transcriptUrl: "https://clutchpoints.com/nfl/atlanta-falcons/falcons-news-michael-penix-reaction-packers-return-acl-injury",
      verified: true,
      summary: "In his first game action since a torn left ACL ended his 2025 season, Penix led the Falcons to a 35-14 win at Lambeau and spoke afterward through obvious emotion. He leaned on his faith, thanked the people who carried him through rehab, and brushed off the early interception that briefly threatened to derail the night.",
      pullQuote: "I've been fighting and scratching for a long time to get to where I'm at today.",
      bullets: [
        "On the return: 'I'm just so thankful, so blessed to be back in this position,' after finishing 18 of 25 for 239 yards and a touchdown roughly ten months from surgery",
        "On his faith: reduced the night to two words, 'But God,' when asked what it meant to be back on the field",
        "On his support system: thanked the trainers, his family and his wife, and his teammates for 'being there for me each and every day'",
        "On Bijan Robinson: called it 'such a blessing to have somebody like that on your team' after Robinson's 213-yard, two-touchdown game",
      ],
      topics: ["postgame", "penix-acl", "packers-week", "week-3"],
    },
    {
      id: "stefanski-2026-09-24",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-09-24",
      venue: "Lambeau Field · Green Bay, Wis.",
      session: "Week 3 at Green Bay · Postgame Press Conference",
      sourceUrl: "https://sports.yahoo.com/articles/kevin-stefanski-comments-falcons-week-034131494.html",
      transcriptUrl: "https://www.yardbarker.com/nfl/articles/kevin_stefanski_has_four_word_reaction_to_michael_penix_jrs_triumphant_return_from_acl_injury/s1_13132_44346445",
      verified: true,
      summary: "His first win as Falcons head coach came with Penix's comeback attached, and Stefanski made the personal note the headline. He praised the overall effort in the 35-14 result, singled out the quarterback's resilience, and turned quickly toward the ten-day runway to the Week 4 Monday-nighter at New Orleans.",
      pullQuote: "I feel great for him. I'm proud of him.",
      bullets: [
        "On Penix's return: 'I feel great for him. I'm proud of him,' saying he was grateful to 'witness it' after the long ACL rehab",
        "On the win: praised the 'overall effort,' the first complete performance of his Atlanta tenure, and noted plainly that 'it counts as one'",
        "On the offense: watched Bijan Robinson run for 213 scrimmage yards and two scores and Drake London go for 154 receiving behind a line that finally held",
        "On what's next: turned the page to the Monday-night division trip to New Orleans in Week 4",
      ],
      topics: ["postgame", "week-3", "penix-acl", "packers-week"],
    },
    {
      id: "london-2026-09-24",
      speaker: "Drake London",
      role: "Wide Receiver",
      date: "2026-09-24",
      venue: "Lambeau Field · Green Bay, Wis.",
      session: "Week 3 at Green Bay · Postgame Locker Room",
      sourceUrl: "https://www.atlantafalcons.com/news/michael-penix-jr-resiliency-falcons-win-thursday-night-football-packers",
      transcriptUrl: "https://www.atlantafalcons.com/news/game-breakdown-what-happened-in-falcons-vs-packers",
      verified: true,
      summary: "Coming off an eight-catch, 154-yard night, London spent his time at the podium talking about his quarterback. He framed Penix's bounce-back from an early interception as pure competitiveness and called the return the defining trait of the Falcons' first win.",
      pullQuote: "He's the definition of resiliency.",
      bullets: [
        "On Penix: 'He's the definition of resiliency,' pointing to the comeback from a torn ACL and a rocky opening drive",
        "On the interception: said that after the pick, 'He's a gamer, so when that happened he was like, Well, it can't get no worse than this'",
        "On his own night: caught eight passes for 154 yards, pairing with Bijan Robinson's 150-plus rushing game for an NFL record third time",
        "On the offense: the receiving corps and ground game clicked together for the first time in 2026 in the 35-14 win",
      ],
      topics: ["postgame", "week-3", "penix-acl", "offense"],
    },
    {
      id: "stefanski-2026-09-21",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-09-21",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Week 3 vs. Green Bay · Monday Media Availability",
      sourceUrl: "https://www.atlantafalcons.com/news/michael-penix-jr-starting-qb-thursday-night-football-vs-packers",
      transcriptUrl: "https://www.atlantafalcons.com/news/estimated-injury-report-released-week-3-green-bay-packers",
      verified: true,
      summary: "Opening a short week with the Falcons 0-2, Stefanski was cautious at the podium about his quarterback plan, saying he would update the choice once he had spoken with the players, then the team confirmed hours later that Michael Penix Jr. would start Thursday at Green Bay. He said Tua Tagovailoa is 'getting better,' the day the veteran was listed as a limited participant for the first time since his Week 1 oblique injury.",
      pullQuote: "I'll give you an update when I've been able to talk to the players and work through it.",
      bullets: [
        "On the quarterback: noncommittal at the podium, saying he would update the plan after talking with the players, before the team named Penix the Week 3 starter later Monday",
        "On Michael Penix Jr.: pointed to his day-to-day conversations with the quarterback and medical staff, saying he is confident in where the process stands roughly ten months from ACL surgery",
        "On Tua Tagovailoa: said the veteran (oblique) is 'getting better,' the day Tua was a limited participant for the first time since the Week 1 injury",
        "On the short week: Atlanta held a walk-through Monday and travels to Green Bay on Wednesday ahead of Thursday's primetime opener",
      ],
      topics: ["packers-week", "qb-decision", "penix-acl", "injury-report"],
    },
    {
      id: "stefanski-2026-09-20",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-09-20",
      venue: "Mercedes-Benz Stadium · Atlanta, Ga.",
      session: "Week 2 vs. Carolina · Postgame Press Conference",
      sourceUrl: "https://www.atlantafalcons.com/news/you-have-to-earn-it-falcons-know-they-have-work-to-do-in-atlanta",
      transcriptUrl: "https://www.espn.com/nfl/recap?gameId=401872933",
      verified: true,
      summary: "After a 34-3 home loss that dropped Atlanta to 0-2 and drew boos from its own crowd, Stefanski was blunt about the turnovers that decided it and contrite toward the fans. He confirmed he benched Cooper Rush for rookie Jack Strand, said the giveaways made the game unwinnable, and declined to name a starter for Thursday's short-week trip to Green Bay.",
      pullQuote: "There's no way to win in the NFL playing like that.",
      bullets: [
        "On the loss: pinned it on giveaways, 'Turning the ball over,' and said 'you have to maintain your drives,' calling the day short of the Falcons' standard",
        "On the fans: 'I am disappointed that we couldn't be better for our fans. I think we have the best fans in the world... we have to give them reasons to support us. We have to play better'",
        "On the quarterback: benched Cooper Rush for undrafted rookie Jack Strand and would not name a Week 3 starter, saying it was too soon to know",
        "On Michael Penix Jr.: said 'now's not the time to know' whether Penix would be available Thursday, even as reports pointed to a possible Week 3 debut",
      ],
      topics: ["postgame", "week-2", "qb-decision", "turnovers", "packers-week"],
    },
    {
      id: "robinson-2026-09-20",
      speaker: "Bijan Robinson",
      role: "Running Back",
      date: "2026-09-20",
      venue: "Mercedes-Benz Stadium · Atlanta, Ga.",
      session: "Week 2 vs. Carolina · Postgame Press Conference",
      sourceUrl: "https://www.atlantafalcons.com/news/you-have-to-earn-it-falcons-know-they-have-work-to-do-in-atlanta",
      transcriptUrl: "https://www.atlantafalcons.com/news/game-breakdown-what-happened-in-falcons-vs-panthers",
      verified: true,
      summary: "Held to 72 rushing yards in the blowout, the first-year captain met the moment head-on afterward, accepting the fans' frustration and putting the fix on the players. He acknowledged the boos as part of the job and framed the response as execution, not excuses, as Atlanta turns to a short week.",
      pullQuote: "It's our job for them to not boo, again.",
      bullets: [
        "On the boos: 'I know that is what comes with this game. For us, it's our job for them to not boo, again'",
        "On the emotion: said the fans' frustration is understandable, 'the emotions are high right now,' and that it is on the team to change it",
        "On the fix: 'It's our job to go out there and execute so we don't have to hear that again'",
        "Context: bottled up to 72 rushing yards behind a line that struggled, a week after a 173-yard opener",
      ],
      topics: ["postgame", "week-2", "fans", "accountability"],
    },
  ],
};
