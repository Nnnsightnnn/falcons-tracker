// Phase engine — the Falcons tracker rotates its dashboard "hero" based on
// where we are in the NFL calendar. One function, one source of truth.
//
// Each phase has:
//   id:           stable string key
//   name:         display label
//   hero:         key that App.jsx maps to a component
//   accentColor:  used for the phase pill + hero header bar
//   description:  small descriptor shown under the phase pill
//   start / end:  ISO date strings (inclusive) for the window
//
// Phases are evaluated top-to-bottom; first match wins.

export const PHASES = [
  {
    id: "draft-week",
    name: "Draft Week",
    hero: "DraftCentral",
    accentColor: "#A71930",
    description: "2026 NFL Draft · Apr 23–25 · Pittsburgh",
    start: "2026-04-20",
    end: "2026-04-25",
  },
  {
    id: "rookie-class",
    name: "Rookie Class",
    hero: "RookieClass",
    accentColor: "#C9A227",
    description: "Meet the 2026 draft class",
    start: "2026-04-26",
    end: "2026-05-04",
  },
  {
    id: "offseason-lull",
    name: "Offseason Lull",
    hero: "ScheduleReleaseCountdown",
    accentColor: "#6B7B8E",
    description: "Waiting on the 2026 schedule release",
    start: "2026-05-05",
    end: "2026-05-18",
  },
  {
    id: "otas-minicamp",
    name: "OTAs & Minicamp",
    hero: "OTAStorylines",
    accentColor: "#3498db",
    description: "Stefanski's first offseason program",
    start: "2026-05-19",
    end: "2026-06-20",
  },
  {
    id: "dead-period",
    name: "Dead Period",
    hero: "CampCountdown",
    accentColor: "#6B7B8E",
    description: "Camp is coming",
    start: "2026-06-21",
    end: "2026-07-21",
  },
  {
    id: "training-camp",
    name: "Training Camp",
    hero: "CampBattles",
    accentColor: "#e67e22",
    description: "Camp is open · Position battles on",
    start: "2026-07-22",
    end: "2026-08-10",
  },
  {
    id: "preseason",
    name: "Preseason",
    hero: "PreseasonResults",
    accentColor: "#9b59b6",
    description: "Preseason · Roster cuts coming",
    start: "2026-08-11",
    end: "2026-09-03",
  },
  {
    id: "regular-season",
    name: "Regular Season",
    hero: "NextGameBanner",
    accentColor: "#2ecc71",
    description: "Game week",
    start: "2026-09-04",
    end: "2027-01-04",
  },
  {
    id: "postseason",
    name: "Postseason / Offseason",
    hero: "SeasonWrap",
    accentColor: "#888888",
    description: "Season wrap",
    start: "2027-01-05",
    end: "2027-03-09",
  },
];

// Pre-phase default (before the first defined phase starts).
// In the wild this shouldn't fire, but it's a safe fallback.
const PRE_PHASE = {
  id: "pre-season-build",
  name: "Preparing for 2026",
  hero: "PreSeasonBuild",
  accentColor: "#6B7B8E",
  description: "Early offseason",
  start: "2026-01-01",
  end: "2026-04-19",
};

export function getCurrentPhase(today = new Date()) {
  const dateStr =
    typeof today === "string"
      ? today
      : today.toISOString().slice(0, 10);

  for (const phase of PHASES) {
    if (dateStr >= phase.start && dateStr <= phase.end) {
      return phase;
    }
  }
  // Fallbacks
  if (dateStr < PHASES[0].start) return PRE_PHASE;
  return PHASES[PHASES.length - 1]; // trailing fallback
}

// Secondary surfaces stay visible regardless of phase, but their order
// can shift based on the current phase. Lightweight phase-aware rank:
export function getSecondarySurfaceOrder(phaseId) {
  switch (phaseId) {
    case "draft-week":
      return ["StarCards", "ContractWatch", "OffseasonCalendarMini", "SeasonRecap2025", "NewsDigest", "LiveNewsFeed"];
    case "rookie-class":
      return ["StarCards", "ContractWatch", "OffseasonCalendarMini", "NewsDigest", "LiveNewsFeed", "SeasonRecap2025"];
    case "offseason-lull":
    case "dead-period":
      return ["StarCards", "SeasonRecap2025", "ContractWatch", "OffseasonCalendarMini", "NewsDigest", "LiveNewsFeed"];
    case "otas-minicamp":
    case "training-camp":
      return ["StarCards", "ContractWatch", "OffseasonCalendarMini", "NewsDigest", "LiveNewsFeed", "SeasonRecap2025"];
    default:
      return ["StarCards", "ContractWatch", "OffseasonCalendarMini", "NewsDigest", "LiveNewsFeed", "SeasonRecap2025"];
  }
}

// Helper: how many days until a given phase starts (for countdown widgets)
export function daysUntil(isoDate, today = new Date()) {
  const target = new Date(isoDate);
  const now = typeof today === "string" ? new Date(today) : today;
  const ms = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}
