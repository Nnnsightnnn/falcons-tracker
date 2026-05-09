// 2026 cap snapshot. Numbers are approximate live-field reports, refreshed daily.

export const CAP_STATE = {
  year: 2026,
  capSpaceOTC: 24_022_655,      // Over The Cap
  capSpaceSpotrac: 16_020_000,  // Spotrac (post-signings)
  leagueRank: 21,
  totalLiabilities: 295_650_548,
  totalAllocations: 268_323_031,
  deadMoney: {
    total: 25_200_000,
    breakdown: [
      { name: "Kirk Cousins", amount: 8_700_000, note: "Released; Raiders' new deal structured to keep cap hit in Atlanta" },
      { name: "Darnell Mooney", amount: 11_000_000, note: "Released Mar 9 (pre-June 1); $7.42M cap savings" },
      { name: "Various pre-2026 cuts", amount: 5_500_000, note: "Aggregated" },
    ],
  },
  topCapHits2026: [
    { playerId: "lindstrom", amount: 19500000 },
    { playerId: "terrell", amount: 19200000 },
    { playerId: "bates", amount: 16800000 },
    { playerId: "drake-london", amount: 16800000 },
    { playerId: "matthews", amount: 15500000 },
    { playerId: "pitts", amount: 14124000 },
  ],
  pendingExtensions: [
    {
      playerId: "drake-london",
      status: "extension-candidate",
      priority: 1,
      rationale: "5th-year option. Projected ~4yr/$128M / $32M APY / $82-90M gtd. Cunningham wants done before draft weekend.",
    },
    {
      playerId: "bijan",
      status: "extension-eligible",
      priority: 2,
      rationale: "Eligible after 3 accrued seasons. Market-setting RB deal incoming.",
    },
    {
      playerId: "pitts",
      status: "tagged",
      priority: 3,
      rationale: "Franchise tag applied for 2026 ($14.1M). Long-term deal deferred.",
    },
  ],
  restructureCandidates: [
    {
      playerId: "lindstrom",
      maxSavings: 9_000_000,
      note: "Already did 1 restructure; room for another simple convert",
    },
    {
      playerId: "bates",
      maxSavings: 7_500_000,
      note: "Standard conversion if more room needed",
    },
  ],
  recentMoves: [
    { date: "2026-05-07", description: "Signed 14 UDFAs (QB Strand, C Brockermeyer, DT Allen, OT Mahlman, G Dewberry, WRs Marion / Rutherford / V. Anthony / A. Anthony / Brockington, RB Cash Jones, TE Velling, DL Nunnally IV, CB Dewalt IV)" },
    { date: "2026-04-17", description: "Traded DT Ruke Orhorhoro to JAX for DT Maason Smith (player-for-player)" },
    { date: "2026-04-12", description: "Exercised Bijan Robinson's 5th-year option ($11.32M in 2027)" },
    { date: "2026-04-09", description: "Signed OT Jawaan Taylor (1yr/$5M + $1M incentives) as McGary replacement" },
    { date: "2026-04-08", description: "RT Kaleb McGary retires — frees ~$14M across 2026–2027" },
    { date: "2026-03-20", description: "Traded picks 114 + 197 to PHI for S Sydney Brown + picks 122 + 215" },
    { date: "2026-03-14", description: "Placed franchise tag on Kyle Pitts ($14.1M)" },
    { date: "2026-03-13", description: "EDGE Arnold Ebiketie signs 1yr / $7.3M max with Philadelphia Eagles" },
    { date: "2026-03-12", description: "Slot CB Dee Alford signs 3yr / $21M max with Buffalo Bills" },
    { date: "2026-03-11", description: "LB Kaden Elliss signs 3yr/$33M ($23M gtd) with New Orleans Saints" },
    { date: "2026-03-11", description: "Released Kirk Cousins (league year start)" },
    { date: "2026-03-10", description: "Signed DT Da'Shawn Hand (1yr / $3M) — partial Onyemata replacement" },
    { date: "2026-03-10", description: "DT David Onyemata signs with New York Jets in free agency" },
    { date: "2026-03-10", description: "RB Tyler Allgeier signs with Arizona Cardinals in free agency" },
    { date: "2026-03-09", description: "Released WR Darnell Mooney ($7.42M cap savings, ~$11M dead money)" },
    { date: "2026-03-09", description: "Released WR KhaDarel Hodge ($3.3M cap savings)" },
    { date: "2026-03-08", description: "Restructured Jake Matthews — cleared $10.5M" },
  ],
};
