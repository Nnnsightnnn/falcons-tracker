---
name: falcons-tracker-update
description: Pulls fresh Atlanta Falcons news, refreshes the phase-aware tracker dashboard (draft board, depth chart, cap state, news digest), and publishes the changes to the live GitHub Pages site.
---

You are updating the Atlanta Falcons year-round tracker app. It is a phase-aware
dashboard: the hero surface auto-rotates based on today's date against the NFL
calendar defined in `src/phases.js`. As of Apr 2026 the live hero is Draft
Central, but the same file set drives rookie class, OTAs, camp, preseason,
regular season, and postseason surfaces throughout the year.

## Project location and key files

The project lives at `~/falcons-tracker`. Source-of-truth data files:

1. `src/playerData.js` — PLAYERS (53-man roster w/ depthRank, status, stats, contract),
   TEAM_LOGOS, RSS_FEEDS, NEXT_GAME (null during offseason), SEASON_RECAP_2025,
   RESULTS_2025, NFC_SOUTH_STANDINGS_2025, NEWS_DIGEST, INTERVIEWS.
2. `src/draftData.js` — DRAFT_DATA (5 picks + top prospect cards).
3. `src/capState.js` — CAP_STATE (cap space, dead money, top hits, pending
   extensions, restructure candidates, recent moves).
4. `src/offseasonCalendar.js` — OFFSEASON_CALENDAR (milestones from draft →
   Week 1 kickoff).
5. `src/phases.js` — PHASES, getCurrentPhase(). **Usually do NOT edit this
   unless an NFL calendar date shifts.**

## IMPORTANT: THIS APP IS LIVE ON GITHUB PAGES

The site auto-deploys to **https://nnnsightnnn.github.io/falcons-tracker/** on
every push to `main` (see `.github/workflows/pages.yml`). That means:
- Every commit is PUBLIC — news must be sourced, no speculation as fact.
- A broken build breaks the live site. Always `npm run build` before pushing.
- Local commits alone are not enough — you MUST `git push origin main`.
- RSS feeds hit `rss2json.com` in production; don't remove feeds unless gone.
- `dist/` and `node_modules/` are gitignored — never stage them.

## STEP 1: FRESH WEB SEARCHES

Run AT LEAST 5 varied searches. Tailor queries to the current phase:

**During Draft Week (Apr 20-25):**
- "Atlanta Falcons draft rumors"
- "Falcons pick 48 mock draft"
- "Falcons trade down 2026 draft"
- "Ian Cunningham draft plan"
- "NFL Draft live updates Round 2 3"

**During Rookie Class / OTAs / Minicamp:**
- "Falcons rookie minicamp news"
- "Falcons OTAs injury update"
- "Michael Penix ACL rehab update"
- "Kevin Stefanski Falcons offseason"
- "Drake London extension talks"

**During Training Camp / Preseason:**
- "Falcons training camp battles"
- "Falcons depth chart 2026"
- "Falcons preseason injury report"
- "Falcons 53-man roster cuts"

**During Regular Season:**
- "Falcons next game preview"
- "Falcons injury report this week"
- "Falcons NFC South standings"
- Recent result recap

Follow leads. Capture what a Falcons fan checking news RIGHT NOW would read.

## STEP 2: UPDATE NEWS_DIGEST (src/playerData.js)

RECENCY BIAS is everything. The digest must feel CURRENT — like a morning briefing.

### topics array (currently 12 items):
- ORDER BY RECENCY: freshest stories first. Top 3-4 should be <48 hours old.
- Each topic: `title` (short punch), `detail` (1-2 sentences w/ WHEN the story
  broke), `category` (draft | free-agency | injuries | contracts | coaching |
  games | general).
- Aim for 10-14 topics total. Mix phases: include 1-2 contract items, 1-2
  injury/health items, 1-2 roster/depth items, plus phase-specific leaders.
- Drop stale items (weeks old) unless still developing.

### generatedAt:
- Set to current ISO timestamp.

### sources:
- List only sources you actually used from your searches.

## STEP 2B: REFRESH INTERVIEWS (src/playerData.js → INTERVIEWS)

The Wire page renders a **Press Room** section of structured interview
dispatches. Each session is a short, sourced summary of a real press
availability — speaker, role, date, venue, pull quote, 3–5 bullets of
substantive content, and a `sourceUrl` back to the primary outlet.

Refresh this on EVERY scheduled run if a new presser has happened since
`INTERVIEWS.generatedAt`. Goal state: 3–6 reverse-chronological sessions on file.

### Where to find transcripts / quotes

Primary sources (in order of preference):
1. **atlantafalcons.com** — official video pages have transcripts embedded
   below the player. URL pattern: `/video/...press-conference` or
   `/news/...press-conference-quotes`.
2. **NFL.com** — written write-ups of league-relevant pressers with verbatim
   quotes.
3. **NBC Sports / ProFootballTalk** — fast on quote isolation.
4. **AJC** — full local presser coverage with extended quote blocks.
5. **The Falcoholic / SI Falcons / Yardbarker** — secondary aggregators.
6. **Atlanta Falcons YouTube channel** — open the video, click "Show
   transcript," and pull the verbatim text if the team-site page doesn't
   carry a written version.

### Whose sessions to track (phase-dependent)

- **Always**: HC Stefanski, GM Cunningham, both QBs (Tua + Penix).
- **OTAs / minicamp**: add coordinators (OC Tommy Rees, DC Jay Bellamy),
  Drake London, Bijan Robinson, Jessie Bates III, A.J. Terrell.
- **Training camp**: add position battle starters + any rookie making noise.
- **Regular season**: weekly Stefanski + Tua/Penix gameday pressers; ad-hoc
  player podiums after big games.

### Schema (must match exactly)

```js
{
  id: "stefanski-2026-05-19",          // kebab: <lastname>-<YYYY-MM-DD>
  speaker: "Kevin Stefanski",
  role: "Head Coach",                  // "Quarterback", "Wide Receiver", "General Manager"…
  date: "2026-05-19",                  // ISO date only
  venue: "IBM Performance Field · Flowery Branch",
  session: "OTA Day 2 · Media Availability",
  sourceUrl: "https://www.atlantafalcons.com/video/...",
  summary: "2–3 sentence editorial summary of the session theme.",
  pullQuote: "The single most quotable verbatim sentence from the session.",
  bullets: [
    "3–5 substantive bullets — each a specific thing the speaker said or confirmed",
  ],
  topics: ["qb-competition", "penix-acl"], // free-form tags
}
```

### Rules

- **Verbatim quotes only.** `pullQuote` must be a real sentence the speaker
  said. Bullets may paraphrase but must stay faithful to the source.
- **Reverse-chronological.** Newest session first in `sessions`.
- **Cap at 6 sessions.** Drop the oldest when adding a new one.
- **Update `generatedAt`** to current ISO timestamp.
- **Update `windowLabel`** to the current media window
  (e.g., "OTA Media Window · May 19 → Jun 18", "Training Camp · Jul 22 →
  Aug 24", "Game Week vs. Pittsburgh · Sep 7 → Sep 13").
- **Never fabricate.** If you cannot find a real quote for a session, do not
  invent one — skip the session and use what you have.
- The Press Room renders the first 4 sessions on the Wire page. Order matters.

## STEP 3: UPDATE DRAFT DATA (src/draftData.js)

**During Draft Week itself** (Apr 23-25 2026):
- As picks come in, update `falconsPicks[i].status` ("scheduled" → "on-clock" →
  "made") and `.selection` with the actual player name.
- If Falcons trade picks, set status to "traded" and add `tradeNote`.
- Refresh `topTargets` to remove already-drafted players from other teams.

**Off-window** (pre-draft buildup, post-draft):
- Update `topTargets` prospect cards as mocks shift.
- After the draft, migrate picks into the PLAYERS array with
  `acquired: "draft-2026-R{round}-P{overall}"` and set depthRank ≥ 2.

## STEP 4: UPDATE CAP STATE (src/capState.js)

Update when transactions happen:
- New signing → add to `recentMoves` (date, description).
- Restructure → update `recentMoves` + recalc `capSpaceSpotrac`.
- Extension signed → move from `pendingExtensions` to the player's `contract`
  field in `playerData.js`, update `topCapHits2026` if the new cap hit lands in
  the top group.
- Release → add to `recentMoves`, update `deadMoney` if dead money hits.

Prefer Spotrac / Over The Cap as sources for cap figures.

## STEP 5: UPDATE PLAYER DATA (src/playerData.js)

Only update PLAYERS if searches reveal:
- Injury news → change `status` (active | ir | pup | nfi | questionable | suspended | holdout) and `injuryNote`.
- Player returning → flip status back to `active`, clear `injuryNote`.
- Confirmed stats from a played game (regular season only).
- New signing / release → add or remove from PLAYERS; mirror in CAP_STATE.recentMoves.

Do NOT change stats speculatively. Do NOT invent headshot URLs; leave `image: null` if you don't have a real one.

## STEP 5B: FILL MISSING HEADSHOTS

After the news/roster pass, scan PLAYERS for `image: null` and try to fill them
in. This runs on EVERY scheduled execution — the target state is zero nulls.

### How to find missing headshots

1. List all players with `image: null`:
   ```bash
   node -e "const {PLAYERS} = await import('./src/playerData.js'); console.log(PLAYERS.filter(p => p.image === null).map(p => p.id + ' (' + p.name + ')').join('\n'))"
   ```
2. For each missing player, do TWO steps in order:
   - **(a) Construct the canonical ESPN CDN URL** if you can find the ESPN
     player ID. Format: `https://a.espncdn.com/i/headshots/nfl/players/full/<espnId>.png`.
     Search the web for `"<Player Name>" site:espn.com` — the player page URL
     contains the ID (e.g., `/nfl/player/_/id/4040655/darnell-mooney` → ID `4040655`).
   - **(b) Verify with a real HTTP HEAD request** before writing:
     ```bash
     curl -o /dev/null -s -w "%{http_code}\n" "https://a.espncdn.com/i/headshots/nfl/players/full/<id>.png"
     ```
     A `200` = use it. A `404` or anything else = **DO NOT WRITE IT**. Leave
     `image: null` and report the failure.

### Hard rules

- NEVER write a URL you haven't verified returns 200. A broken URL breaks the
  player card render in production.
- Prefer ESPN CDN (most stable). Fall back to the team site headshot URL
  (`https://www.atlantafalcons.com/...`) only if ESPN fails and the URL is a
  direct image (not an HTML page).
- If neither source confirms, leave `image: null` and list the player in the
  Step 9 report under "headshots still missing".
- Don't try to guess an ESPN ID numerically. Always ground it in a real
  espn.com URL from the web search.

### Reporting

Add a `headshotsFilled` / `headshotsStillMissing` section to the Step 9 report
with counts and player IDs. If zero missing, a one-liner is fine:
`Headshots: all PLAYERS have valid images.`

## STEP 6: UPDATE RESULTS_2025 / NEXT_GAME (if in-season)

Offseason: these stay frozen. NEXT_GAME stays null until schedule release.

Regular season:
- Completed game → add to RESULTS_2025 (or rename to RESULTS_2026 when the
  season starts, and update App.jsx import) with `atlScore`, `oppScore`,
  `result`, `home`, `opp`.
- NEXT_GAME → update with date, opponent, home/away, kickoff time, tv.

## STEP 6.5: QUEUE A COVER IMAGE REQUEST (when the cover is stale OR today's lead is visual)

After the data passes are done, but BEFORE the build, decide whether to queue a fresh cover image. If yes, invoke the **`limn-editor-enhance`** skill (`~/.claude/skills/limn-editor-enhance/SKILL.md`) — it does the Limn-style prompt enhancement and appends a fully-spec'd entry to `~/Vault/Notes/image-requests.md`. A downstream Antigravity-side scheduled task will generate the image, save it, and push it to `~/falcons-tracker/public/assets/cover/` later. You do NOT generate or commit the image here.

### The decision rule (check BOTH triggers)

Queue a new cover if **EITHER** is true:

1. **A visual story landed** — today's lead (or any top-3 digest item) is a picturable scene (see the loosened "What qualifies" list below).
2. **STALENESS BACKSTOP** — the current cover is more than **4 days old**. Compute its age from the date prefix on `NEWS_DIGEST.cover.coverImageUrl` (filename pattern `YYYY-MM-DD-slug.jpg`) against today's date. If it's >4 days old, queue the most visual scene available in the current digest — even a routine OTA/camp practice rep with a named player qualifies. **The cover must never sit unchanged for more than ~4 days during an active phase.**

If both fire, queue the bigger story. If neither fires (cover is fresh AND nothing visual today), skip — and say so in the report.

When you queue, also update `NEWS_DIGEST.cover.coverImageUrl` to the new date-prefixed path you're requesting (e.g. `/falcons-tracker/assets/cover/<today>-<slug>.jpg`). This resets the staleness clock immediately and wires in the new image the moment the downstream task fills it. The CoverImage component falls back to the `photoId` headshot until the file exists, so pointing at a not-yet-generated path is safe — never a broken cover.

### What qualifies (loosened — practice scenes count)

- ANY OTA / minicamp / training-camp / preseason / regular-season practice scene with a named player — **including routine reps** when nothing bigger is happening (e.g., "Penix throwing live", "Bijan splitting linemen in pads", "Branch catching punts at the JUGS", "Stefanski on the practice tower", "Matt Ryan spinning passes in warmups").
- A draft-day pick the moment it's made (player at the podium / on the team-room phone).
- A just-played game with a clear hero or villain moment (game-winning throw, pick-six, walk-off field goal).
- A marquee transaction with a human scene attached — a signed extension is picturable as the player at the podium or a celebration, even though the news itself is a contract item.

### Deprioritized (fall back to a practice scene instead — but DON'T let these freeze the cover)

- Pure cap mechanics, restructures, dead-money math with no human scene.
- Mock-draft buildup, trade-down speculation, scouting takes.
- Schedule/standings/division-race tables.
- Anything you genuinely couldn't picture as a single still photograph.

These are deprioritized, not banned. If the cover is past the 4-day backstop and one of these is the only "news," do NOT skip — fall back to the most recent picturable practice scene (or the cover kicker's subject) so the cover refreshes anyway.

### How to invoke

Call the skill with this minimum payload:

| Field | Value |
|---|---|
| `roughPrompt` | One-sentence rough idea — concrete subject + setting. |
| `tracker` | `falcons` |
| `leadStory` | The single-sentence lead pulled from `NEWS_DIGEST.topics[0]` or `summary`. |
| `subject` | Player name + venue (e.g., "Michael Penix Jr. dropping back at Flowery Branch, OTA practice setting"). |
| `aspectRatio` | `portrait` (default 1200×1600). Use `landscape` only if the moment is obviously wider than tall (sideline scene, team-photo moment). |
| `slug` | Optional 2-3-word kebab — `penix-throwing`, `bijan-pads-on`. |

**Cap at ONE queued request per run.** If two moments compete, queue the bigger one and drop the other.

### Report

Add to STEP 9 report:

- `Image request: queued ({slug}.jpg) — {one-line reason}` **or** `Image request: skipped — {one-line reason}`.

## STEP 7: VERIFY THE BUILD

```bash
cd ~/falcons-tracker
node --check src/playerData.js
node --check src/draftData.js
node --check src/capState.js
npm run build
```

If `npm run build` fails, fix before pushing. A broken build kills the live deploy.

## STEP 8: COMMIT AND PUSH (via scripts/git-publish.sh — do NOT use plain git push)

Do NOT run plain `git add` / `git commit` / `git push` here. On the Cowork sandbox
mount deletes are blocked (EPERM), so plain git can't remove `.git/index.lock` or
prune temp objects — that's the root cause of the stale lock and the daily "local
out of sync" breakage. Publish with the helper, which stages into a throwaway `/tmp`
index, builds the commit with `git commit-tree`, and pushes by SHA — it never
deletes or moves a local file:

```bash
cd ~/falcons-tracker && bash scripts/git-publish.sh \
  --repo ~/falcons-tracker \
  --branch master \
  --message "<descriptive one-liner summarizing the lead story>" \
  src/playerData.js src/draftData.js src/capState.js src/offseasonCalendar.js   # only the files you edited
```

- Name only the data files you changed as trailing args. Never publish `dist/` or `node_modules/`.
- Commit message should summarize the lead story.
- Publishing to `master` triggers `pages.yml` — live site updates in ~2 minutes.
- The helper REFUSES to push if the remote moved ahead of local HEAD and never force-pushes, so it cannot clobber Kenny's local work; on non-fast-forward it stops — note it. `warning: unable to unlink ... tmp_obj` lines are EXPECTED and harmless. It pushes by SHA, so the LOCAL ref stays put — Kenny reconciles his clone separately (sync-tracker).
- Auth: the remote URL in `.git/config` embeds a fine-grained PAT (see `.claude/skills/falcons-tracker-update/AUTH.md` for rotation notes). If `git push` fails with 401/403, the token may have expired — surface that in the report so the user can rotate.

### Check PAT expiry before reporting

Read the `Expires:` line from `.claude/skills/falcons-tracker-update/AUTH.md`,
compute `days_until_expiry = expiry_date - today`, and classify:

- `days_until_expiry > 30` → no mention in the report (it's fine).
- `7 < days_until_expiry ≤ 30` → add a **yellow warning** line to the report:
  `⚠️ GitHub PAT expires in N days (YYYY-MM-DD). Rotate soon at
  https://github.com/settings/personal-access-tokens.`
- `0 < days_until_expiry ≤ 7` → add a **red warning** line to the report:
  `🚨 GitHub PAT expires in N days (YYYY-MM-DD). ROTATE NOW to avoid broken
  pushes. See AUTH.md for the rotation command.`
- `days_until_expiry ≤ 0` → report token is expired; push likely already failed.
  Tell the user to rotate immediately.

## STEP 9: REPORT

At the end, report:
- Current phase (e.g., "draft-week", "training-camp")
- Lead story / digest theme
- Files changed with one-line diff summaries
- Build result
- Commit SHA and push result
- PAT expiry warning (only if within 30 days — see Step 8)
- Live site URL: https://nnnsightnnn.github.io/falcons-tracker/

## IMPORTANT REMINDERS

- **STYLE — AVOID EM DASHES:** In all prose you write this run (NEWS_DIGEST topics title/detail and summary, INTERVIEWS summary/pullQuote/bullets, draft/cap notes, injuryNotes, commit messages, the Step 9 report), avoid em dashes (—) wherever possible. Prefer commas, colons, periods, or parentheses, or restructure the sentence. Keep an em dash only where no clean alternative reads naturally. Do not substitute en dashes (–) except in genuine ranges/scores. Note: pullQuotes are verbatim, so never alter punctuation inside a real quote.
- The #1 priority is FRESH news matched to the CURRENT PHASE. During draft
  week, lead with draft. During camp, lead with battles. Don't write
  rookie-minicamp news in October.
- Never fabricate headlines. Everything must come from real searches. Content
  is public.
- Preserve the `contract`, `career`, and `acquired` fields on players — don't
  strip them when editing stats.
- Preserve existing player image URLs. If filling a null image, ALWAYS verify the URL returns HTTP 200 before committing (see STEP 5B). Never commit an unverified URL.
- Phase transitions: if today is close to a phase boundary (check `phases.js`),
  the hero about to rotate may deserve a preview item in the digest.
