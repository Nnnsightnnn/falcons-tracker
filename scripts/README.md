# scripts/

Helper scripts for the falcons-tracker update workflow.

## fetch_transcript.py — pull a verbatim press-conference transcript

The team-site video pages (`atlantafalcons.com/video/...`) and the team YouTube
channel are JavaScript-rendered, so a plain web fetch returns an empty shell.
This script hits YouTube's caption endpoint directly to return the actual
transcript text — no API key, no headless browser.

### Setup

```bash
pip install youtube-transcript-api --break-system-packages   # once per sandbox
```

### Usage

```bash
# 1) find the YouTube video id (web search: "<presser title> youtube")
# 2) fetch the transcript:
python3 scripts/fetch_transcript.py <video_id_or_url>           # plain text
python3 scripts/fetch_transcript.py <video_id_or_url> --json    # text + timestamps + source track
```

Verify a quote you're about to carry into `INTERVIEWS` is actually present:

```bash
python3 scripts/fetch_transcript.py <id> | grep -oiE ".{80}<keyword>.{120}"
```

### How it fits the update (STEP 2B of the skill)

For each new presser the scheduled run wants to add to `INTERVIEWS` in
`src/playerData.js`:

1. Resolve the YouTube video id.
2. Pull the transcript with this script.
3. Build `pullQuote` (word-for-word) and `bullets` (faithful paraphrase OK)
   from the transcript.
4. If the quote is confirmed verbatim, set `verified: true` and add
   `transcriptUrl` (the YouTube watch URL) on the session. The Press Room
   (`src/MagazineWire.jsx`) renders a "✓ Transcript-verified" badge and a
   "Full transcript" link for those sessions.

### Critical caveats (learned in practice)

- **Auto-captions only, usually.** Most Falcons pressers have only an
  auto-generated track: ASR errors, no punctuation, mangled proper nouns
  ("OTAA", "Stfansky", "Pennix", "Vampelt", "Kurt Cousins"). Fix proper nouns
  and punctuation by hand; keep the words verbatim. The script prefers a manual
  track when one exists and reports which it used (`source=manual|auto-generated`).
- **Confirm the video is the session you think it is.** YouTube titles mislead.
  A video titled "...growing team chemistry in OTAs" turned out to be an old
  Kirk-Cousins-era clip — adding it off the title alone would have published a
  stale quote as current. Read enough of the transcript to confirm date/context
  before quoting. If the transcript contradicts the title, do NOT use it.
- **Fail soft.** A fetch can fail (YouTube changes its internals, rate limits).
  The script exits non-zero with a one-line reason; on failure fall back to
  written sources (NFL.com, NBC PFT, AJC) and skip — never block the run.
