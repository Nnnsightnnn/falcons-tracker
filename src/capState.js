// 2026 cap snapshot. Numbers are approximate live-field reports, refreshed daily.

export const CAP_STATE = {
  year: 2026,
  capSpaceOTC: 19_300_000,      // Over The Cap (post-June-1 Cousins designation, Jun 1 2026)
  capSpaceSpotrac: 19_700_000,  // Spotrac top-51 (post-London extension, per BR/Spotrac Jun 3 2026)
  leagueRank: 21,
  totalLiabilities: 295_650_548,
  totalAllocations: 268_323_031,
  deadMoney: {
    total: 39_000_000,
    breakdown: [
      { name: "Kirk Cousins", amount: 22_500_000, note: "Released w/ post-June-1 designation; $12.5M more dead in 2027" },
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
      playerId: "bijan",
      status: "extension-eligible",
      priority: 1,
      rationale: "Eligible after 3 accrued seasons; $11.32M 5th-yr option exercised for 2027. Now the front office's top priority after the London deal. Projected to clear Derrick Henry ($15M AAV) and chase Saquon's $20.6M ceiling. Schefter expects a deal 'this offseason.'",
    },
    {
      playerId: "pitts",
      status: "tagged",
      priority: 2,
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
    { date: "2026-06-09", description: "WR Drake London officially signs the 4yr/$141M extension (agreed Jun 2) at a Flowery Branch press conference; 'I know it's a lot of money, and I've got to prove it still'" },
    { date: "2026-06-02", description: "Signed WR Drake London to a 4yr/$141M extension (up to $150M w/ incentives, $100M gtd, $35.25M APY — 3rd-highest WR); runs through 2030, 2026 still on $16.82M 5th-yr option. First major deal of the Cunningham/Ryan front office" },
    { date: "2026-06-01", description: "Kirk Cousins post-June-1 designation officially clears +$2.1M in 2026 and +$45M in 2027 cap space (OTC); dead money tail is $22.5M in 2026, $12.5M in 2027" },
    { date: "2026-05-14", description: "Signed CB Darren Hall (2021 R4 reunion, vet stops IND/ARI); released S Tysheem Johnson in corresponding move" },
    { date: "2026-05-12", description: "Signed DT Ross Blacklock, OL Brandon Walton, G Layden Robinson, LB Daveren Rayner off rookie-minicamp tryouts; released DL Ben Stille, RB Carlos Washington Jr., WR Deven Thompkins, TE Brandon Frazier" },
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
