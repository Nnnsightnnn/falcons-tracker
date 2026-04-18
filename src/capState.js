// 2026 cap snapshot. Numbers are approximate live-field reports, refreshed daily.

export const CAP_STATE = {
  year: 2026,
  capSpaceOTC: 24_022_655,      // Over The Cap
  capSpaceSpotrac: 16_020_000,  // Spotrac (post-signings)
  leagueRank: 21,
  totalLiabilities: 295_650_548,
  totalAllocations: 268_323_031,
  deadMoney: {
    total: 14_200_000,
    breakdown: [
      { name: "Kirk Cousins", amount: 8_700_000, note: "Released; Raiders' new deal structured to keep cap hit in Atlanta" },
      { name: "Various pre-2026 cuts", amount: 5_500_000, note: "Aggregated" },
    ],
  },
  topCapHits2026: [
    { playerId: "lindstrom", amount: 19500000 },
    { playerId: "terrell", amount: 19200000 },
    { playerId: "bates", amount: 16800000 },
    { playerId: "drake-london", amount: 16800000 },
    { playerId: "matthews", amount: 15500000 },
    { playerId: "mooney", amount: 14000000 },
    { playerId: "pitts", amount: 14124000 },
    { playerId: "onyemata", amount: 13770000 },
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
    {
      playerId: "elliss",
      status: "contract-year",
      priority: 4,
      rationale: "Final year of deal. Likely walks in 2027 given London / Bijan / Pitts extensions ahead of him.",
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
    { date: "2026-03-08", description: "Restructured Jake Matthews — cleared $10.5M" },
    { date: "2026-03-11", description: "Released Kirk Cousins (league year start)" },
    { date: "2026-03-14", description: "Placed franchise tag on Kyle Pitts ($14.1M)" },
    { date: "2026-03-20", description: "Traded picks 114 + 197 to PHI for S Sydney Brown + picks 122 + 215" },
  ],
};
