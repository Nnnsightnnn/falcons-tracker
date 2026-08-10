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
    depthRank: 1,
    height: 75, weight: 216, age: 25, experience: 2,
    college: "Washington",
    acquired: "draft-2024-R1-P8",
    stats: { completions: 166, attempts: 276, passYds: 1982, passTDs: 9, ints: 3, qbRating: 88.5 },
    form: 0,
    status: "pup",
    injuryNote: "ACL rehab · torn Week 11 2025 · still capped at individual and 7-on-7 work through the first padded practice (Day 5, Aug 3), not yet cleared for 11-on-11. Sharp on Day 5 anyway: a long ball to Chris Blair and a go-route touchdown to Zachariah Branch. Told at camp open (Jul 29) he was 'another four weeks, possibly going into that next stage,' which points clearance toward late August rather than the opener. Prioritizing health: 'I can't afford to have someone trip and fall on me right now'",
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
    depthRank: 2,
    height: 73, weight: 227, age: 28, experience: 7,
    college: "Alabama",
    acquired: "fa-2026-1yr",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Back tightness that held him out of the Day 1 opener (Jul 29) has resolved. He returned lightly late in week one and, on the first padded practice (Day 5, Aug 3), took the main reps of the first team period in a live 11-on-11 look. Waved off the earlier absence: 'just a precaution thing early on in camp ... I feel great right now.' Banking the first-team reps as the de facto QB1 while Penix rehabs",
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
    injuryNote: "Signed Jul 29, the morning of the first camp practice, after the team released Trevor Siemian with a non-football injury. Took first-team reps in his opening practice with both Tua (back) and Penix (ACL) sidelined",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/2972515.png",
    contract: { years: 1, total: 1500000, guaranteed: 0, apy: 1500000, throughYear: 2026, cap2026: 1210000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2025", team: "Baltimore Ravens", type: "NFL" },
      { years: "2017–2024", team: "Dallas Cowboys", type: "NFL · 9–5 as a starter" },
    ],
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
  {
    id: "goodson",
    name: "Tyler Goodson",
    number: 25,
    position: "RB",
    positionGroup: "offense",
    depthRank: 3,
    height: 70, weight: 200, age: 25, experience: 4,
    college: "Iowa",
    acquired: "fa-2026",
    stats: {},
    form: 6.4,
    status: "active",
    injuryNote: "Change-of-pace + 3rd-down back · ex-Colts",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4429676.png",
    contract: { years: 1, total: 1300000, guaranteed: 200000, apy: 1300000, throughYear: 2026, cap2026: 1300000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2022–2025", team: "Indianapolis Colts", type: "NFL" },
    ],
  },
  {
    id: "nathan-carter",
    name: "Nathan Carter",
    number: 38,
    position: "RB",
        stRoles: ["KR"],
    stRank: {"KR":3},
    positionGroup: "offense",
    depthRank: 4,
    height: 71, weight: 200, age: 23, experience: 2,
    college: "Michigan State",
    acquired: "fa-2025-UDFA",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Camp / PS bubble",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4605841.png",
    contract: { years: 1, total: 960000, guaranteed: 0, apy: 960000, throughYear: 2026, cap2026: 960000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
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
    depthRank: 2,
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
    depthRank: 2,
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
    id: "drummond",
    name: "Dylan Drummond",
    number: 80,
    position: "WR",
    posSlot: "SLOT",
        stRoles: ["KR","GUNNER"],
    stRank: {"KR":2,"GUNNER":3},
    positionGroup: "offense",
    depthRank: 4,
    height: 71, weight: 188, age: 25, experience: 2,
    college: "Eastern Michigan",
    acquired: "fa-2025-UDFA",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4363551.png",
    contract: { years: 1, total: 960000, guaranteed: 0, apy: 960000, throughYear: 2026, cap2026: 960000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
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
  {
    id: "joshua-simon",
    name: "Joshua Simon",
    number: 47,
    position: "TE",
    positionGroup: "offense",
    depthRank: 4,
    height: 76, weight: 240, age: 24, experience: 2,
    college: "South Carolina",
    acquired: "fa-2025-UDFA",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Camp / 4th TE · move-piece",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4430482.png",
    contract: { years: 1, total: 960000, guaranteed: 0, apy: 960000, throughYear: 2026, cap2026: 960000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
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
    injuryNote: "RG · 2x All-Pro · restructure candidate",
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
    injuryNote: "RT · ex-Chiefs · signed 4/9 after McGary retirement",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4034961.png",
    contract: { years: 1, total: 5000000, guaranteed: 3000000, apy: 5000000, throughYear: 2026, cap2026: 5000000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL · 1yr/$5M + $1M incentives" },
      { years: "2023–2025", team: "Kansas City Chiefs", type: "NFL · Super Bowl LVIII" },
    ],
  },
  {
    id: "nelson",
    name: "Jack Nelson",
    number: 73,
    position: "OT",
    posSlot: "LT",
    positionGroup: "offense",
    depthRank: 2,
    height: 79, weight: 315, age: 24, experience: 2,
    college: "Wisconsin",
    acquired: "draft-2025-R7",
    stats: {},
    form: 6.5,
    status: "active",
    injuryNote: "Backup LT",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4693369.png",
    contract: { years: 4, total: 4200000, guaranteed: 100000, apy: 1050000, throughYear: 2028, cap2026: 920000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
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
    id: "stueber",
    name: "Andrew Stueber",
    number: 78,
    position: "OG",
    posSlot: "RG",
    positionGroup: "offense",
    depthRank: 2,
    height: 79, weight: 325, age: 25, experience: 3,
    college: "Michigan",
    acquired: "fa-2024",
    stats: {},
    form: 6.0,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4258207.png",
    contract: { years: 1, total: 1200000, guaranteed: 50000, apy: 1200000, throughYear: 2026, cap2026: 1200000 },
    career: [{ years: "2024–", team: "Atlanta Falcons", type: "NFL" }],
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
  {
    id: "wanya-morris",
    name: "Wanya Morris",
    number: 79,
    position: "OT",
    posSlot: "LT",
    positionGroup: "offense",
    depthRank: 2,
    height: 77, weight: 320, age: 25, experience: 4,
    college: "Oklahoma",
    acquired: "trade-2026-kc",
    stats: {},
    form: 6.6,
    status: "active",
    injuryNote: "Swing tackle · acquired from KC Jun 11 for a late-round pick swap · 16 career starts (11 at LT in 2024)",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4570577.png",
    contract: { years: 1, total: 1482048, guaranteed: 0, apy: 1482048, throughYear: 2026, cap2026: 1708113 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL · trade from KC" },
      { years: "2023–2025", team: "Kansas City Chiefs", type: "NFL · Super Bowl LVIII" },
    ],
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
    id: "harrison",
    name: "Zach Harrison",
    number: 96,
    position: "DE",
    posSlot: "LDE",
    positionGroup: "defense",
    depthRank: 1,
    height: 78, weight: 272, age: 24, experience: 4,
    college: "Ohio State",
    acquired: "draft-2023-R3",
    stats: { tackles: 41, tfl: 5, sacks: 3.5 },
    form: 7.2,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4426412.png",
    contract: { years: 4, total: 5400000, guaranteed: 2100000, apy: 1350000, throughYear: 2026, cap2026: 1440000 },
    career: [{ years: "2023–", team: "Atlanta Falcons", type: "NFL" }],
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
    id: "chris-williams-dl",
    name: "Chris Williams",
    number: 98,
    position: "DT",
    posSlot: "3T",
    positionGroup: "defense",
    depthRank: 2,
    height: 76, weight: 295, age: 26, experience: 4,
    college: "Wagner",
    acquired: "fa-2026",
    stats: { tackles: 29, sacks: 3.5 },
    form: 6.8,
    status: "active",
    injuryNote: "Ex-Bears · 1-yr deal",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4034530.png",
    contract: { years: 1, total: 2800000, guaranteed: 1500000, apy: 2800000, throughYear: 2026, cap2026: 2800000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2022–2025", team: "Chicago Bears", type: "NFL" },
    ],
  },
  {
    id: "cam-thomas",
    name: "Cameron Thomas",
    number: 99,
    position: "DE",
    posSlot: "RDE",
    positionGroup: "defense",
    depthRank: 2,
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
    status: "active",
    injuryNote: "Partial replacement for Onyemata · 1-yr / $3M",
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
    depthRank: 3,
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
    depthRank: 1,
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
    depthRank: 2,
    height: 77, weight: 245, age: 22, experience: 2,
    college: "Tennessee",
    acquired: "draft-2025-R1-P26",
    stats: { tackles: 31, sacks: 4.5 },
    form: 7.6,
    status: "active",
    injuryNote: "Reported to mandatory minicamp Jun 16, first time with team since Feb arrest · limited to weight room and individual drills, no team periods · still in Miami-Dade pretrial program; league yet to rule on discipline",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/5081394.png",
    contract: { years: 4, total: 14500000, guaranteed: 14500000, apy: 3625000, throughYear: 2028, cap2026: 3350000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "ojulari",
    name: "Azeez Ojulari",
    number: 51,
    position: "EDGE",
    posSlot: "LEDGE",
    positionGroup: "defense",
    depthRank: 2,
    height: 74, weight: 240, age: 26, experience: 6,
    college: "Georgia",
    acquired: "fa-2026-1yr",
    stats: { tackles: 28, sacks: 6, ff: 1 },
    form: 7.3,
    status: "active",
    injuryNote: "Ex-Giants · homecoming (UGA)",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4379409.png",
    contract: { years: 1, total: 4000000, guaranteed: 2500000, apy: 4000000, throughYear: 2026, cap2026: 4000000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2021–2025", team: "New York Giants", type: "NFL" },
    ],
  },
  {
    id: "trice",
    name: "Bralen Trice",
    number: 48,
    position: "EDGE",
    posSlot: "REDGE",
    positionGroup: "defense",
    depthRank: 3,
    height: 76, weight: 245, age: 24, experience: 2,
    college: "Washington",
    acquired: "draft-2024-R3",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Returning from 2024 ACL, re-aggravated the same knee in summer 2025 and opened last season on IR. First clean stretch of his career this spring: team reporter Tori McElhaney confirms he took a regular rotation in 11-on-11 team drills through OTAs and minicamp, and Pro Football Rumors (Jul 6) has him trending toward full training-camp participation. Padded work is still the real test. Has yet to play a regular-season snap.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4428713.png",
    contract: { years: 4, total: 5800000, guaranteed: 1300000, apy: 1450000, throughYear: 2027, cap2026: 1180000 },
    career: [{ years: "2024–", team: "Atlanta Falcons", type: "NFL" }],
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
    status: "active",
    injuryNote: "Rotational rusher · ex-Titans",
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
    depthRank: 1,
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
    id: "andersen",
    name: "Troy Andersen",
    number: 44,
    position: "LB",
    posSlot: "MIKE",
        stRoles: ["PP"],
    stRank: {"PP":3},
    positionGroup: "defense",
    depthRank: 2,
    height: 75, weight: 243, age: 26, experience: 5,
    college: "Montana State",
    acquired: "draft-2022-R2",
    stats: { tackles: 31 },
    form: 6.6,
    status: "questionable",
    injuryNote: "Shoulder recovery from 2025 IR stint · the Jul 10 ILB camp preview lists him as an option next to Deablo only 'if he gets healthy'",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4247807.png",
    contract: { years: 1, total: 3420000, guaranteed: 3420000, apy: 3420000, throughYear: 2026, cap2026: 3420000 },
    career: [{ years: "2022–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "tindall",
    name: "Channing Tindall",
    number: 55,
    position: "LB",
    posSlot: "WILL",
    positionGroup: "defense",
    depthRank: 2,
    height: 74, weight: 230, age: 26, experience: 5,
    college: "Georgia",
    acquired: "fa-2026",
    stats: { tackles: 42 },
    form: 6.6,
    status: "active",
    injuryNote: "Ex-Cardinals · another UGA addition",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4379414.png",
    contract: { years: 1, total: 1800000, guaranteed: 500000, apy: 1800000, throughYear: 2026, cap2026: 1800000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2022–2025", team: "Miami / Arizona", type: "NFL" },
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
    status: "active",
    injuryNote: "Special teams ace",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4428872.png",
    contract: { years: 4, total: 4400000, guaranteed: 200000, apy: 1100000, throughYear: 2027, cap2026: 970000 },
    career: [{ years: "2024–", team: "Atlanta Falcons", type: "NFL" }],
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
    status: "active",
    injuryNote: "Hybrid LB/S · sub-package",
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
    injuryNote: "CB1 · paid like one (4yr/$81M extension in 2024)",
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
    id: "brooks-cb",
    name: "Natrone Brooks",
    number: 35,
    position: "CB",
    posSlot: "NICKEL",
        stRoles: ["GUNNER"],
    stRank: {"GUNNER":2},
    positionGroup: "defense",
    depthRank: 2,
    height: 71, weight: 190, age: 27, experience: 4,
    college: "Mississippi Valley State",
    acquired: "extension-2026",
    stats: { tackles: 32, pass_def: 4 },
    form: 6.8,
    status: "active",
    injuryNote: "Extended March 2026",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4689989.png",
    contract: { years: 2, total: 4500000, guaranteed: 2000000, apy: 2250000, throughYear: 2027, cap2026: 2250000 },
    career: [{ years: "2024–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "phillips-cb",
    name: "Clark Phillips III",
    number: 22,
    position: "CB",
    posSlot: "NICKEL",
    positionGroup: "defense",
    depthRank: 3,
    height: 70, weight: 184, age: 24, experience: 4,
    college: "Utah",
    acquired: "draft-2023-R4",
    stats: { tackles: 28, int_def: 2, pass_def: 4 },
    form: 6.7,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4429067.png",
    contract: { years: 4, total: 4800000, guaranteed: 1600000, apy: 1200000, throughYear: 2026, cap2026: 1250000 },
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
    id: "holmes-cb",
    name: "Darnay Holmes",
    number: 30,
    position: "CB",
    posSlot: "NICKEL",
    positionGroup: "defense",
    depthRank: 3,
    height: 70, weight: 195, age: 28, experience: 7,
    college: "UCLA",
    acquired: "fa-2026",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: "Slot specialist · ex-Giants",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4242973.png",
    contract: { years: 1, total: 1300000, guaranteed: 100000, apy: 1300000, throughYear: 2026, cap2026: 1300000 },
    career: [
      { years: "2026–", team: "Atlanta Falcons", type: "NFL" },
      { years: "2020–2025", team: "New York Giants", type: "NFL" },
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
    id: "bowman",
    name: "Billy Bowman Jr.",
    number: 33,
    position: "CB",
    posSlot: "NICKEL",
    positionGroup: "defense",
    depthRank: 4,
    height: 69, weight: 192, age: 22, experience: 1,
    college: "Oklahoma",
    acquired: "draft-2025-R4",
    stats: {},
    form: 0,
    status: "pup",
    injuryNote: "Achilles rehab · torn late Nov 2025 · progressing but not practicing; cleared for walkthroughs only as of Jun 8. SI's Jul 8 pre-camp survey lists him as a doubt to start Week 1, which would push rookie Avieon Terrell into the nickel. The Jul 17 safeties preview confirms he is still sidelined entering camp, with contract-year Sydney Brown covering both the nickel and the third-safety role until he clears.",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4431194.png",
    contract: { years: 4, total: 5200000, guaranteed: 950000, apy: 1300000, throughYear: 2028, cap2026: 1100000 },
    career: [{ years: "2025–", team: "Atlanta Falcons", type: "NFL" }],
  },
  {
    id: "bryant-cb",
    name: "Cobee Bryant",
    number: 37,
    position: "CB",
    posSlot: "RCB",
        stRoles: ["GUNNER"],
    stRank: {"GUNNER":4},
    positionGroup: "defense",
    depthRank: 4,
    height: 72, weight: 175, age: 23, experience: 1,
    college: "Kansas",
    acquired: "fa-2025-UDFA",
    stats: {},
    form: 0,
    status: "active",
    injuryNote: null,
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4429324.png",
    contract: { years: 1, total: 960000, guaranteed: 0, apy: 960000, throughYear: 2026, cap2026: 960000 },
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
    status: "questionable",
    injuryNote: "Back ailment, missed 4 straight camp practices (Aug 9); All-Pro FS",
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
    id: "jammie-robinson",
    name: "Jammie Robinson",
    number: 34,
    position: "S",
    posSlot: "FS",
        stRoles: ["PP","GUNNER"],
    stRank: {"PP":4,"GUNNER":5},
    positionGroup: "defense",
    depthRank: 3,
    height: 71, weight: 207, age: 25, experience: 3,
    college: "Florida State",
    acquired: "draft-2023-R5",
    stats: {},
    form: 6.4,
    status: "active",
    injuryNote: "Box safety / sub-package",
    image: "https://a.espncdn.com/i/headshots/nfl/players/full/4430411.png",
    contract: { years: 4, total: 4350000, guaranteed: 220000, apy: 1087500, throughYear: 2026, cap2026: 1050000 },
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
    status: "active",
    injuryNote: null,
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
    depthRank: 3,
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
    bio: "New hire. Runs the Jalon Walker / James Pearce / Bralen Trice edge room — the position group most central to Ulbrich's 2026 jump.",
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
export const NEXT_GAME = null;

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
    status: "confirmed",
    opponent: "PIT",
    opponentName: "Pittsburgh Steelers",
    side: "away",
    date: "2026-09-13",
    kickoffET: "1:00 PM ET",
    tv: "FOX",
    venue: "Acrisure Stadium, Pittsburgh",
    note: "Season opener · Stefanski's first game as Falcons HC vs. Tomlin.",
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
// NEWS DIGEST — refreshed daily by scheduled task
// =========================================
export const NEWS_DIGEST = {
  generatedAt: "2026-08-10T09:00:00Z",
  cover: {
    kicker: "TRAINING CAMP CLOSES · UNDER THE LIGHTS · Sugar Hill: In the Last Public Session of the Summer, a Full-Go Tua Tagovailoa Turned in His Best Day of Camp, Going 6-of-8 in Eleven-on-Eleven With a 30-Yard Touch Throw to Jahan Dotson and a Play-Action Lob to Drake London Before Lightning Cut the Packed Lanier High Practice Short, Michael Penix Jr. Answered in Seven-on-Seven With a 50-Yard Touchdown to Rookie Zachariah Branch, and the Phase Now Flips to Preseason With Denver Four Days Out",
    headLine1: "Camp closed with the starter finally at full speed.",
    headEm: "In the last public practice of the summer, under the lights at Lanier High School, a full-go Tua Tagovailoa turned in his best day of camp, going 6-of-8 in eleven-on-eleven with a 30-yard touch throw to Jahan Dotson and a play-action rollout lob to Drake London before lightning cut the night short.",
    headLine3: "Michael Penix Jr., still capped at seven-on-seven as he rehabs his ACL, answered with a 50-yard touchdown to rookie Zachariah Branch, rookie tackle Ethan Onianwa held his own against James Pearce Jr., and the phase now flips to preseason on Tuesday with the Denver opener four days out on Aug 14.",
    deck:
      "The Falcons packed up Flowery Branch for a night and took camp on the road to close out the summer, and the last public session belonged to the quarterback everyone came to see. Under the lights at Longhorn Stadium at Lanier High School in Sugar Hill, in front of a packed house, a now full-go Tua Tagovailoa turned in his best practice of camp, running with the first team at every interval and going 6-of-8 in eleven-on-eleven, including his two sharpest throws of the summer: a 30-yard touch ball to Jahan Dotson and a play-action rollout lob to Drake London. The night ended early when lightning was spotted around 8:10 p.m., halting the practice with more than thirty minutes still on the field. Michael Penix Jr., held to individual and seven-on-seven work as he rehabs his ACL, was again efficient and closed his night with a 50-yard touchdown to Zachariah Branch, the third-round returner who has graded as one of the best receivers on the grass all camp. Rookie offensive tackle Ethan Onianwa kept getting run with the first and second units and stonewalled James Pearce Jr. off the edge, a bright spot at an unsettled right tackle. On the injury front, defensive lineman Zach Harrison was activated and cleared to return, while safety Jessie Bates III missed a fourth straight day with a back ailment. The runway now shortens fast: the phase flips to preseason on Tuesday and the opener against Denver at Mercedes-Benz Stadium is set for Friday, Aug 14, at 7 p.m., the first live look at Kevin Stefanski's starters after he promised they would play.",
    byline: "The Tracker Desk",
    filedFrom: "Sugar Hill",
    photoId: "tua",
    stampLabel: "CAMP CLOSES · TUA'S BEST DAY, LIGHTNING-SHORTENED · DENVER IN 4 DAYS",
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
    coverImageUrl: "/falcons-tracker/assets/cover/2026-08-09-under-the-lights.jpg",
  },
  sources: [
    "Atlanta Falcons Official", "ESPN", "NFL.com", "NFL Network",
    "AP (Washington Times)", "NBC Sports / Pro Football Talk", "Pro Football Rumors", "The Falcoholic",
    "SI Falcons", "AJC", "Bleacher Report", "ClutchPoints", "Heavy.com",
    "Yahoo Sports", "CBS Sports", "Washington Post", "BloggingDirty",
    "Audacy 92.9 The Game", "Yardbarker", "Over The Cap", "Spotrac",
    "Bengals.com", "FantasyPros", "Atlanta News First", "The Athletic", "Roundtable",
    "Falcons Wire", "CBS News Atlanta", "Sharp Football Analysis",
    "Sportsnaut", "The Big Lead", "The Athletic",
  ],
  topics: [
    {
      title: "CAMP CLOSES UNDER THE LIGHTS: A FULL-GO TUA TURNS IN HIS BEST DAY BEFORE LIGHTNING CUTS IT SHORT: in the last public practice of the summer at Lanier High School, Tua Tagovailoa ran with the first team at every interval and went 6-of-8 in eleven-on-eleven with a 30-yard touch throw to Jahan Dotson and a play-action lob to Drake London, Michael Penix Jr. answered in seven-on-seven with a 50-yard touchdown to rookie Zachariah Branch, and a lightning strike ended the packed session early",
      detail: "AJC, ClutchPoints, The Falcoholic and the team site (Saturday Night Lights, Aug 8, into the Day 9 reports): Atlanta closed its public camp with a night session at Longhorn Stadium at Lanier High in Sugar Hill, and it belonged to the starter. A now full-go Tua Tagovailoa, past the tight back that cost him the opening days, turned in his best practice of camp, going 6-of-8 in eleven-on-eleven that included his two sharpest throws of the summer, a 30-yard touch ball to Jahan Dotson and a play-action rollout lob to Drake London. The night ended early when lightning was spotted around 8:10 p.m., halting a packed stadium with more than thirty minutes still on the field. Penix, held to individual and seven-on-seven work as he rehabs his ACL, was again efficient and closed with a 50-yard touchdown to Branch, the third-round returner who has graded as one of the best receivers on the grass all camp. Rookie tackle Ethan Onianwa kept getting first- and second-team run and stonewalled James Pearce Jr. off the edge, a bright spot at an unsettled right tackle. It closes a camp that stacked live tackling, record contracts and a full quarterback room's worth of intrigue.",
      category: "general",
      sourceUrl: "https://www.ajc.com/sports/2026/08/tagovailoa-rookie-onianwa-star-at-falcons-training-camp-practice-at-lanier-high/",
      sourceLabel: "AJC / ClutchPoints / The Falcoholic / atlantafalcons.com",
    },
    {
      title: "THE PHASE FLIPS TO PRESEASON TUESDAY, AND DENVER IS FOUR DAYS OUT: with the public camp closed, Atlanta turns to its exhibition slate, opening at home against the Broncos on Friday, Aug 14, at 7 p.m., the first live look at Kevin Stefanski's first-team offense after he committed to giving his front-liners runway in the opener and the Miami finale",
      detail: "Atlantafalcons.com game page and the schedule (confirmed Aug 8): the Falcons' preseason opens Friday, Aug 14, against Denver at Mercedes-Benz Stadium, a 7 p.m. ET kickoff, the first of three exhibitions before the regular season, with joint practices at Indianapolis on Aug 19 and 20 leading into the middle game on Aug 22. It is the payoff to the plan Stefanski laid out earlier in camp, that his starters will play in the opener and the finale against Miami while the Colts game is treated differently because of those joint sessions. His logic was blunt: for players to get ready to play football, they have to play football. The open question the game will start to answer is the quarterback picture. Tua Tagovailoa has banked the first-team reps and is the de facto starter now that his back has cleared, while Penix, capped at seven-on-seven, has attached a roughly four-week timeline to full clearance, pushing any real competition toward late August.",
      category: "games",
      sourceUrl: "https://www.atlantafalcons.com/game-day/2026/pre/falcons-vs-broncos/",
      sourceLabel: "atlantafalcons.com",
    },
    {
      title: "THE CAMP INJURY LEDGER: HARRISON BACK, BATES STILL DOWN: defensive lineman Zach Harrison was activated and cleared to return to practice, a welcome piece of depth for an injury-thinned front, while All-Pro safety Jessie Bates III missed a fourth straight day with a back ailment as the public portion of camp wrapped",
      detail: "The Falcoholic, Yardbarker and BloggingDirty (Day 9 reports, Aug 9): the news on the injury front cut both ways as camp closed. Zach Harrison, the fourth-year edge out of Ohio State, was activated and cleared to return to practice, a needed body for an edge and defensive-line room already down Jalon Walker for the year and bracing for a possible James Pearce Jr. suspension. On the other side, Jessie Bates III, the first-team free safety and one of the league's best, sat out a fourth consecutive practice with a back issue. The Falcons have given no timeline, and while there is no indication it is serious, it is the kind of veteran maintenance absence that bears watching with the Denver opener four days out.",
      category: "injuries",
      sourceUrl: "https://www.yardbarker.com/nfl/articles/falcons_injury_updates_on_jessie_bates_iii_zach_harrison/s1_16493_44148670",
      sourceLabel: "The Falcoholic / Yardbarker / BloggingDirty",
    },
    {
      title: "BIJAN'S FIRST FULL 11-ON-11 REPS END IN A WHEEL-ROUTE TOUCHDOWN: five days after the record extension that made him the highest-paid running back in NFL history, Robinson took full-team snaps for the first time Friday and immediately delivered the highlight of Day 8, running a wheel down the left sideline the defense could not track for what would have been a touchdown from a now full-go Tua Tagovailoa",
      detail: "The team site (Day 8 camp report, Aug 7): on a foggy Friday morning, the eighth session of camp, Robinson logged action in full-team periods for the first time after a brief acclimation earlier in the week, the most he has been involved in a practice since ending his hold-in with a three-year deal worth up to $75 million. Fittingly, he produced the play of the day. On his first 11-on-11 series, Robinson ran a wheel route down the left sideline that the defense simply could not keep up with, a couple of steps on the nearest defender, and Tua Tagovailoa dropped the ball into his arms for what would have been a touchdown in live action. Tua looked more or less full go after a week of managing a tight back, later hitting Olamide Zaccheaus on a delayed dig for a red-zone touchdown and winning Jahan Dotson free against Cobee Bryant. The staff got creative in short yardage, at one point lining both Bijan and Brian Robinson Jr. in the backfield together. It puts the face of the offense at full speed heading into the free Under the Lights session at Lanier High School on Saturday, Aug 8, at 7 p.m.",
      category: "general",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-training-camp-report-bijan-robinson-harold-perkins-jalon-walker",
      sourceLabel: "atlantafalcons.com",
    },
    {
      title: "PERKINS GETS MORE ON HIS PLATE AS THE DEFENSE REDRAWS AROUND WALKER: with Jalon Walker out for the year, rookie linebacker Harold Perkins Jr. took Friday's snaps with the starting unit, lined up off the left edge and ran an A-gap blitz, versatility Kevin Stefanski said before practice the staff is leaning into as the youngster keeps earning reps",
      detail: "The team site (Day 8 camp report, Aug 7): Stefanski spoke before Friday's practice about the rookie's development, saying Perkins is earning more reps on the field. It shows. Perkins closed his first week by earning his first snaps alongside starting inside linebacker Divine Deablo, and in the wake of Walker's injury he has begun moving around the formation more. On Friday he took snaps with the starting unit, lined up off the left edge at times, and was sent on an A-gap blitz as the mug defender during an 11-on-11 period with the offense backed up against its own end zone. The staff seems comfortable putting more on his plate, and the flexibility matters now that the edge room is thin behind Samson Ebukam and Cameron Thomas with a possible James Pearce Jr. suspension still hanging over it.",
      category: "general",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-training-camp-report-bijan-robinson-harold-perkins-jalon-walker",
      sourceLabel: "atlantafalcons.com",
    },
    {
      title: "THE DEFENSE TURNS THE PAGE: Atlanta placed Jalon Walker on injured reserve, ending his 2026 season, and moved forward with an edge rotation of Samson Ebukam, Azeez Ojulari, Cameron Thomas and the never-played Bralen Trice, a group ESPN's Jeremy Fowler notes the Falcons were already trying to add to before the injury",
      detail: "The team site, ESPN, CBS Sports and the AJC (Aug 5 to 6): a day after confirming the torn ACL, the Falcons made it official and placed Walker on injured reserve, adding defensive back Keidron Smith to the roster in a corresponding move. The AJC's question, where does Atlanta turn now, is the whole story of the fall on defense. The room leans on Ebukam and Thomas as the next men up, with Ojulari flashing in the rotation and Trice, who has yet to play an NFL snap after two lost seasons to knee injuries, suddenly counted on. The math is thin: the group has combined for 63.5 career sacks across 26 player-seasons, more than half of them Ebukam's, and James Pearce Jr.'s possible suspension still hangs over it. Fowler reported Atlanta was hunting extra pass rushers even before Walker went down, so a veteran edge add would surprise no one, and the staff has cross-trained bodies at multiple spots to buy flexibility while the picture settles.",
      category: "injuries",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-camp-report-atlanta-defense-jalon-walker-michael-penix-jr",
      sourceLabel: "atlantafalcons.com / ESPN / CBS Sports / AJC",
    },
    {
      title: "AVIEON TERRELL PICKS OFF TUA AS THE PADS GET LOUDER: on the second padded day and the first with live tackling, the rookie fourth-round corner opened the team period with a diving interception of Tua Tagovailoa, rotating between outside and the slot as his physicality keeps standing out in a deep cornerback room",
      detail: "The Falcoholic and SI Falcons (Day 7 camp report, Aug 6): with league rules finally allowing live tackling in 11-on-11, the energy climbed and the defense kept its edge from the opening whistle. Avieon Terrell, the Clemson product and younger brother of A.J. Terrell, opened the first team period by picking off Tua on a diving play on a ball intended for Jahan Dotson that Sydney Brown got a hand to, his first interception of camp. Terrell has spent the summer rotating between outside corner and the nickel and has been one of the more physical players in the secondary. Tua worked in team drills for a second straight day but was not a full go as he manages a tight back, and Cooper Rush again held veteran reps, connecting with Kyle Pitts Sr. for a red-zone touchdown as he settles into an offense he joined barely a week ago.",
      category: "general",
      sourceUrl: "https://www.thefalcoholic.com/atlanta-falcons-training-camp/94869/falcons-training-camp-day-7-news-standouts-interviews-injuries-michael-penix-tua-tagovailoa-bijan-robinson-avieon-terrell-nfl-2026",
      sourceLabel: "The Falcoholic / SI Falcons",
    },
    {
      title: "IT IS CONFIRMED: JALON WALKER TORE HIS ACL AND WILL MISS THE 2026 SEASON, AND ATLANTA'S DEFENSE LOSES ITS YOUNG CENTERPIECE BEFORE THE PADS COME OFF: tests came back Wednesday and the Falcons announced their second-year edge rusher is out for the year after going down without contact in Tuesday's two-minute drill, an injury that guts an edge room already bracing for a possible James Pearce Jr. suspension",
      detail: "ESPN, NFL.com, NBC Sports and the team site (Aug 5): the MRI confirmed the worst. A day after Jalon Walker was carted off without contact late in a Day 6 two-minute drill, tests confirmed a torn ACL and the Falcons announced he will miss the entire 2026 season. Outside linebackers coach John Timu called it a huge loss Wednesday, and Michael Penix Jr. said of his teammate, 'I know that he's a strong individual, he's going to get through it.' The No. 15 overall pick of the 2025 draft out of Georgia, Walker started as a rookie and posted 62 tackles, 10 tackles for loss and 5.5 sacks, and Jeff Ulbrich had spent the offseason talking about unlocking his versatility in Year 2. The timing is brutal for an edge room already planning to open the season without Pearce, who faces a possible suspension, which pushes Samson Ebukam, Azeez Ojulari, Cameron Thomas and the returning Bralen Trice into far larger roles. The AJC framed the fallout bluntly, asking where Atlanta turns now that its most dynamic young rusher is gone for the year.",
      category: "injuries",
      sourceUrl: "https://www.atlantafalcons.com/news/jalon-walker-to-miss-2026-season",
      sourceLabel: "atlantafalcons.com / ESPN / NFL.com / NBC Sports",
    },
    {
      title: "BIJAN GETS PAID, AND HE IS THE HIGHEST-PAID RUNNING BACK IN NFL HISTORY: the Falcons ended a five-day hold-in Tuesday morning by agreeing with Robinson on a three-year extension worth up to $75 million, with $51 million guaranteed and $37 million at signing, the most money ever guaranteed to a running back, resetting the market and locking up the fourth core Cunningham-era piece after London, Pitts and Bergeron",
      detail: "ESPN (Adam Schefter), NFL.com, The Washington Post and SI Falcons (Aug 4): Robinson and the Falcons agreed to a three-year extension worth up to $75 million, roughly $22.25M in new base average with a max of about $25M per year, that makes him the highest-paid running back in NFL history, surpassing Saquon Barkley's $20.6M. The deal carries $51 million guaranteed and $37 million at signing, the most ever guaranteed to a back on a non-rookie deal, and runs through 2030 after his 2027 fifth-year option. Negotiated by Nicole Lynn of Klutch Sports, it ended a hold-in that had reached five days. Robinson led the NFL with 2,298 scrimmage yards in 2025, a first-team All-Pro season and the 12th-highest single-season total in league history, and across three years he has 3,910 rushing yards and 25 rushing touchdowns plus 1,738 receiving yards and nine scores on an NFL-leading 1,003 touches. He is the third offensive weapon Atlanta has extended this summer after Drake London (4yr/$141M) and Kyle Pitts Sr. (3yr/$54M), with Matthew Bergeron (4yr/$96M) added Aug 1, and the four now account for roughly a quarter of the projected salary cap.",
      category: "contracts",
      sourceUrl: "https://www.espn.com/nfl/story/_/id/49527923/falcons-rb-robinson-reach-3-year-deal-worth-75m",
      sourceLabel: "ESPN / NFL.com / Washington Post / SI Falcons",
    },
    {
      title: "THE PADS COME ON AND ATLANTA HAS ITS BEST DAY OF CAMP: on the first padded practice of the summer Tua Tagovailoa returned to live 11-on-11 work for the first time, Michael Penix Jr. answered with his sharpest session yet including a go-route touchdown to Zachariah Branch, and the defensive line spent the afternoon in dirty pockets while Bijan Robinson held in for a sixth straight practice",
      detail: "The Falcoholic, SI Falcons and the team site (Day 5 camp reports, Aug 3): after four no-pads days and a Sunday off, the pads went on Monday and the intensity climbed with them. Tua Tagovailoa, limited to walk-through speed last week as he eased a tight back, took the main reps of the first team period in a live 11-on-11 look that moved at a quicker pace, screens and handoffs to open but real progress after sitting out Day 1. Penix, still held out of team drills while he rehabs his ACL, competed in every other period and was sharp: a long completion to Chris Blair, a go-route touchdown to rookie Zachariah Branch that drew the loudest cheer of the day, and a closing deep ball that Antwane Wells Jr. brought in for a score. Branch, the third-round returner, again graded out as one of the best players on the field. On defense, Samson Ebukam looked long and powerful off the edge and the front kept the pockets dirty for Cooper Rush and undrafted rookie Jack Strand. Bijan Robinson was a non-participant for a sixth straight practice, hyping teammates from the sideline (he was first on Chris Lindstrom's heels to celebrate a Nathan Carter blitz pickup) while he holds in for a new deal. Rookie nickel Avieon Terrell drew a handful of first-team reps at the slot once the pads came on, a small sign the staff is widening the evaluation now that contact is legal.",
      category: "general",
      sourceUrl: "https://www.thefalcoholic.com/atlanta-falcons-training-camp/94763/falcons-training-camp-day-5-news-standouts-interviews-injuries-tua-tagovailoa-michael-penix-zachariah-branch-nfl-2026",
      sourceLabel: "The Falcoholic / SI Falcons / atlantafalcons.com",
    },
    {
      title: "BERGERON GETS PAID, AND IT IS THE THIRD CORE DEAL IN TWO MONTHS: Atlanta signed left guard Matthew Bergeron to a four-year, $96M extension Saturday with $60M guaranteed, locking up a 49-game starter through 2030 and stacking a third foundational contract on top of Drake London and Kyle Pitts Sr.",
      detail: "ESPN, AJC, Pro Football Rumors and the team site (Aug 1): the Falcons extended Bergeron, their 2023 second-round pick, on a four-year deal worth $96M with $60M guaranteed and roughly a $24M average, running through 2030. He would have been a free agent after this season. Bergeron has started all 49 of his appearances across three years and has quietly become one of the league's better young guards. GM Ian Cunningham called him 'the type of player you build around' and 'a cornerstone of our offensive line and the culture we're building in Atlanta.' Bergeron's own reaction looked ahead to the fall: 'Let's get the Benz rocking. The city deserves to be back on that stage.' It is the third core Cunningham-era extension in two months after London in June and Pitts at the end of that month, and it hardens the read that Bijan Robinson is the next domino.",
      category: "contracts",
      sourceUrl: "https://www.espn.com/nfl/story/_/id/49505699/falcons-sign-matthew-bergeron-four-year-96m-extension",
      sourceLabel: "ESPN / AJC / Pro Football Rumors / atlantafalcons.com",
    },
    {
      title: "PENIX PUTS A NUMBER ON IT, AND IT IS NOT WEEK 1: on Day 1 the quarterback said he was told 'another four weeks, possibly going into that next stage' before full clearance, an admission that pushes any real competition with Tua Tagovailoa toward late August and hands the presumptive starter's job to Tua by health alone",
      detail: "AJC, NBC Sports Pro Football Talk, NFL.com and the team site's own camp report (all Jul 29): Penix met the media Wednesday and, for the first time, attached a timeline to the rehab of his third career ACL surgery. 'I was told another four weeks, possibly going into that next stage,' he said, 'but at the same time, it could be earlier. It just depends on how my body is doing throughout this whole camp process.' He was blunt that health, not the depth chart, is driving his caution: 'I can't afford to have someone trip and fall on me right now.' Four weeks from the opener lands the real evaluation in late August, well past the point Atlanta hoped to settle QB1, and it means Tua Tagovailoa is the de facto starter whenever his back clears, having banked every first-team rep since OTAs. The wrinkle is that on Day 1 even Tua could not take those reps, which is why the front office moved so fast to add a veteran arm. The staff's posture is unchanged, no true competition until both men can be judged on the same physical terms, but the practical read hardened Wednesday: this is Tua's job to run until Penix is whole.",
      category: "injuries",
      sourceUrl: "https://www.ajc.com/sports/2026/07/falcons-qb-michael-penix-jr-could-still-be-4-weeks-from-full-return/",
      sourceLabel: "AJC / NBC Sports PFT / NFL.com / atlantafalcons.com",
    },
    {
      title: "THE PROBLEM NOBODY IS TALKING ABOUT SITS ON THE RIGHT EDGE: Atlanta starts camp with no settled right tackle after Kaleb McGary retired without warning in April, and because both quarterbacks on this roster are left-handed, the job Atlanta cannot fill is the one protecting whichever blind side ends up mattering",
      detail: "ESPN (Marc Raimondi, five lingering questions, filed Jul 13) with the depth-chart detail corroborated by the team-site offensive-line camp preview: this is the most consequential Atlanta story that has not been getting front-page treatment, and the reason it matters is a quirk of the roster. Penix and Tagovailoa are both left-handed, which inverts the usual math and makes right tackle the blindside job. It is also the least settled position on the offense. McGary had held it since he was drafted in 2019, was coming back from a season-ending knee injury, and then retired abruptly in April. Atlanta signed Jawaan Taylor out of Kansas City on April 9 to fill the hole, but Taylor is still rehabbing arm injuries carried over from last season, did not practice at all this spring, and brings a well-documented false-start problem with him. The contingency plans have their own problems. Swing tackle Storm Norton went down with a lingering ankle issue for a second consecutive season and sits on Reserve/PUP as of Jun 11. The front office traded for Wanya Morris, Taylor's former Chiefs teammate, as insurance. And the player who actually took most of the first-team right tackle reps through the spring was Michael Jerrell, a 2024 seventh-round pick out of Division II Findlay with two career seasons and a development-project label. Raimondi frames it as a genuine three-way battle unless Taylor arrives at full health, which is the single cleanest thing to watch when pads come on Jul 29.",
      category: "general",
      sourceUrl: "https://www.espn.com/nfl/story/_/id/49308165/key-questions-falcons-camp-including-qb1-status-tua-tagovailoa-michael-penix-jr",
      sourceLabel: "ESPN / atlantafalcons.com",
    },
    {
      title: "THE PEARCE CASE MOVES, BUT NOT THE WAY ATLANTA WANTED: the pretrial diversion program has been extended from six months to a full year, which pushes the legal resolution deep into the season, while the suspension estimates have quietly narrowed toward a four-to-eight game band and a return to the field at some point in 2026",
      detail: "Heavy.com, Pro Football Rumors, The Big Lead, Sportsnaut and Audacy (reporting carried through the weekend), with still no statement from the league office: two things changed since the last update, and they cut in opposite directions. The first is procedural and unhelpful. The length of the pretrial diversion program covering Pearce's Miami-Dade charges, two counts of aggravated battery with a deadly weapon and one count of aggravated stalking, with WNBA player Rickea Jackson identified as the alleged victim, has been extended from six months to one year. Charges are still cleared on completion and no conviction is involved, but a twelve-month program means the underlying case will not be formally closed until well inside the 2026 season, which is exactly the scenario Audacy flagged when it reported the league may not rule before 2027. The second is a softening of the projected penalty. The Athletic's Josh Kendall still reads a suspension as likely, and the Falcons are reportedly planning internally for eight games or more on the Cameron Sutton precedent, but the aggregate read has drifted toward four to eight games on the logic that the case is headed toward dismissal and no one was physically harmed. The practical translation for camp is unchanged: Atlanta prepares as though it will be without the player who led the team with 10.5 sacks as a rookie, and the edge room it stacked this spring in Azeez Ojulari, Samson Ebukam and Cameron Thomas is the contingency plan whether or not it is ever needed.",
      category: "general",
      sourceUrl: "https://heavy.com/sports/nfl/atlanta-falcons/james-pearce-jr-could-be-slapped-with-suspension-per-latest-report/",
      sourceLabel: "Heavy.com / Pro Football Rumors / Audacy / Sportsnaut",
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
  generatedAt: "2026-08-10T09:00:00Z",
  windowLabel: "Camp Closes (Aug 8, Under the Lights) → Preseason opener vs. Denver Fri Aug 14, 7 p.m.",
  sessions: [
    {
      id: "robinson-2026-08-05",
      speaker: "Bijan Robinson",
      role: "Running Back",
      date: "2026-08-05",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Record Extension · Press Conference",
      sourceUrl: "https://fieldlevelmedia.com/news/falcons-rb-bijan-robinson-a-dream-to-stay-with-one-team/",
      transcriptUrl: "https://www.atlantafalcons.com/news/bijan-robinson-contract-extension",
      verified: true,
      summary: "A day after the deal became official, Robinson took the podium flanked by family and his Klutch Sports representatives and steered the conversation away from the numbers and toward legacy. He framed staying in one place as a childhood dream, leaned on his faith, and welcomed the running-back debate with Detroit's Jahmyr Gibbs as fuel rather than friction.",
      pullQuote: "This is one of my dreams, to stay with one team. I think that is such a cool thing just because guys like Kobe Bryant and Michael Jordan, they all stayed on their one team, so I think that is a cool legacy thing for yourself.",
      bullets: [
        "On the milestone: kept it plain and grateful, 'God is so good,' and had posted 'God this is for you! Blessings. Love this team and this city!' when the deal broke Tuesday",
        "On staying in Atlanta: called a one-team career 'one of my dreams,' invoking Kobe Bryant and Michael Jordan as the legacy model",
        "On the Gibbs comparison: 'The Bijan-Gibbs debate is actually cool to see. It actually helps us both out because every single Sunday, or whatever day we play, we're always trying to compete against each other'",
        "The three-year extension is worth up to $75 million with $51 million guaranteed and $37 million at signing, the most ever guaranteed to a running back, and runs through 2030",
        "Robinson is the fourth core Cunningham-era piece extended this offseason after Drake London, Kyle Pitts Sr. and Matthew Bergeron",
      ],
      topics: ["bijan-extension", "contracts", "training-camp"],
    },
    {
      id: "stefanski-2026-08-04",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-08-04",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Bijan Robinson Extension · Post-Practice Media Availability",
      sourceUrl: "https://www.si.com/nfl/falcons/onsi/kevin-stefanski-reacts-bijan-robinson-record-breaking-contract-extension-falcons",
      transcriptUrl: "https://www.atlantafalcons.com/news/falcons-camp-report-bijan-robinson-strikes-a-deal-kevin-stefanski-details-his-ramp-up",
      verified: true,
      summary: "Meeting the media Tuesday afternoon after the Falcons and Bijan Robinson agreed on a record extension, Stefanski framed the resolution as expected and turned quickly to the person. He called the talks amicable, promised a measured ramp-up rather than a full-speed return for his star back, and spent most of the session on Robinson's character, recalling that he knew Robinson was special within the first few plays of studying Atlanta's film during his interview.",
      pullQuote: "He's wired the right way. He was raised the right way. He's a team guy all the way, and that can be rare sometimes in this day and age.",
      bullets: [
        "On the deal: 'Very excited for him, excited for us. Knew throughout this whole process that it would be a process, and felt good about where we were,' and confirmed the negotiation was 'very amicable'",
        "On the return: there will be a 'ramp-up period' rather than an immediate full-speed return, and 'it allows us to get Bijan ready, and he's eager, beyond eager, to be out there'",
        "On when he knew Robinson was special: recalled watching Atlanta's film during his interview and seeing Robinson take a screen '50 yards for a touchdown' on the third play of the season, 'So not long'",
        "On the reputation that preceded the player: 'I was with somebody that was just extolling Bijan's virtue, his person,' being told he would not believe Robinson when he first met him",
        "Robinson is the fourth core piece extended this offseason after London, Pitts and Bergeron, a run that dropped Atlanta's pending-free-agent count from 44 to 42 of 90 players",
      ],
      topics: ["bijan-extension", "contracts", "training-camp"],
    },
    {
      id: "tagovailoa-2026-08-03",
      speaker: "Tua Tagovailoa",
      role: "Quarterback",
      date: "2026-08-03",
      venue: "IBM Performance Field · Flowery Branch",
      session: "First Padded Practice · Media Availability",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-training-camp-quotes-zachariah-branch-tua-tagovailoa-jack-strand",
      transcriptUrl: "https://www.atlantafalcons.com/news/falcons-camp-report-intensity-goes-up-as-pads-go-on",
      verified: true,
      summary: "On the day the pads came on, Tua Tagovailoa returned to live 11-on-11 work for the first time in camp and spoke afterward with the ease of a player glad to be back in the mix. He waved off the earlier back tightness as a precaution, leaned into the details of Kevin Stefanski's install-heavy routine, and cast his own value as much in the locker room as on the field.",
      pullQuote: "It feels good to be out there with the guys, be able to throw, continue to hear the plays, get in the huddle with the guys. All of that.",
      bullets: [
        "On his back: called the earlier absence 'just a precaution thing early on in camp,' adding 'I feel great right now'",
        "On Stefanski's method: praised installing the night before and skipping a morning walk-through, 'you can see who's studying, who's been in their playbook, who understands where to go, and where they need to be at'",
        "On the mindset amid the quarterback questions: 'all you can control is what you can control,' and 'if the cards fall where they fall, then that's what you're dealt with'",
        "On what he brings beyond the position: 'I think I bring some good vibes for the guys in the locker room,' and checking on teammates 'if guys are not smiling'",
        "Took the main reps of the first team period in a live 11-on-11 look, his first game-speed team work of camp after sitting out Day 1",
      ],
      topics: ["qb-competition", "tua", "training-camp", "pads-on"],
    },
    {
      id: "bergeron-2026-08-01",
      speaker: "Matthew Bergeron",
      role: "Guard",
      date: "2026-08-01",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Contract Extension · Media Availability",
      sourceUrl: "https://www.atlantafalcons.com/news/atlanta-falcons-matthew-bergeron-contract-extension",
      transcriptUrl: "https://www.espn.com/nfl/story/_/id/49505699/falcons-sign-matthew-bergeron-four-year-96m-extension",
      verified: true,
      summary: "A day after agreeing to a four-year, $96M extension, Bergeron met the media and pointed the conversation at the season rather than the payday. He framed the deal as a commitment to a rebuild he wants to see through, name-checked the front-office and coaching group he is signing on to play with, and set the bar at meaningful football in front of a full Mercedes-Benz Stadium.",
      pullQuote: "Let's get the Benz rocking. The city deserves to be back on that stage.",
      bullets: [
        "On the year ahead: 'Hopefully we can give back to (the fans) some meaningful football,' tying the extension to results rather than the contract itself",
        "On who he is committing to: cited Matt Ryan, Ian Cunningham and Kevin Stefanski 'and all those guys' as the group he is excited to build with",
        "The deal is worth $96M over four years with $60M guaranteed and runs through 2030, after he started all 49 of his games across three seasons",
        "GM Ian Cunningham called him 'the type of player you build around' and 'a cornerstone of our offensive line and the culture we're building in Atlanta'",
        "Becomes the third core Cunningham-era extension in two months after Drake London and Kyle Pitts Sr.",
      ],
      topics: ["bergeron-extension", "contracts", "offensive-line"],
    },
    {
      id: "stefanski-2026-07-31",
      speaker: "Kevin Stefanski",
      role: "Head Coach",
      date: "2026-07-31",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Training Camp · Post-Practice Media Availability",
      sourceUrl: "https://www.atlantafalcons.com/news/falcons-camp-report-will-starters-play-in-the-preseason",
      transcriptUrl: "https://www.si.com/nfl/falcons/onsi/will-atlanta-falcons-starters-play-in-preseason-under-kevin-stefanski",
      verified: true,
      summary: "Meeting the media after the third practice, Stefanski settled one of camp's open procedural questions: his starters will play in the preseason. He laid out a plan to give front-line players runway in the opener against Denver and the finale against Miami while treating the middle game against Indianapolis differently because of the joint practices scheduled that week. His reasoning was simple, players need game reps to be ready for games.",
      pullQuote: "In general, I think for guys to get ready to play football they have to play football.",
      bullets: [
        "On the preseason plan: starters will see time in the opener against Denver and the finale against Miami, with the exact snap counts varying by player and coaching need",
        "On the middle game: the Falcons will treat the Indianapolis game differently because of the joint practices scheduled with the Colts that week",
        "On the philosophy behind it: framed live preseason reps as the only real way to get players game-ready, a contrast to coaches who sit starters all August",
        "Spoke on the eve of Back Together Saturday, the first practice open to all fans on Aug 1",
        "Kept the quarterback timeline unchanged: Tua Tagovailoa easing back from a tight back, Michael Penix Jr. still limited as he rehabs his ACL",
      ],
      topics: ["preseason", "training-camp", "qb-competition"],
    },
    {
      id: "penix-2026-07-29",
      speaker: "Michael Penix Jr.",
      role: "Quarterback",
      date: "2026-07-29",
      venue: "IBM Performance Field · Flowery Branch",
      session: "Training Camp Day 1 · Player Availability",
      sourceUrl: "https://www.ajc.com/sports/2026/07/falcons-qb-michael-penix-jr-could-still-be-4-weeks-from-full-return/",
      transcriptUrl: "https://www.atlantafalcons.com/news/falcons-training-camp-report-michael-penix-jr-limited-practice",
      verified: true,
      summary: "Meeting the media on the first day of camp, Penix put a number on his ACL rehab for the first time and it landed past the opener. He said he was told he is roughly four weeks from the next stage of clearance, stayed limited to individual and 7-on-7 work, and made clear he is prioritizing health over urgency as he works back from the third ACL surgery of his career. The admission effectively hands the first-team reps to Tua Tagovailoa, who himself sat out Day 1 with back tightness.",
      pullQuote: "I was told another four weeks, possibly going into that next stage. But at the same time, it could be earlier. It just depends on how my body is doing throughout this whole camp process.",
      bullets: [
        "On the timeline: told he is about four weeks from the next stage of clearance, which pushes full participation toward late August rather than the season opener",
        "On protecting the knee: 'I can't afford to have someone trip and fall on me right now,' explaining why he stays out of 11-on-11 for now",
        "Remained limited to individual and 7-on-7 work on Day 1, the same plan he has run since OTAs, with no team-period reps yet",
        "Framed the caution as a health decision he controls with the medical staff, not a setback in the recovery itself",
        "With Tua also held out Day 1 (back), Penix's limited status left the first-team huddle to Jack Strand and newly signed Cooper Rush",
      ],
      topics: ["penix-acl", "qb-competition", "training-camp", "injuries"],
    },
  ],
};
