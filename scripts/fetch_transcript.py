#!/usr/bin/env python3
"""
fetch_transcript.py — pull a clean YouTube transcript for an interview/presser.

Used by the falcons-tracker-update skill (STEP 2B) to ground INTERVIEWS
pullQuotes/bullets in the actual press-conference transcript instead of
secondary coverage.

Why this exists: atlantafalcons.com video pages and the team YouTube channel
are JavaScript-rendered, so a plain web fetch returns an empty shell. The
youtube-transcript-api hits YouTube's caption endpoint directly — no API key,
no headless browser.

Usage:
    pip install youtube-transcript-api --break-system-packages
    python3 scripts/fetch_transcript.py <video_id_or_url> [--lang en] [--json]

Notes / caveats:
  * Prefers a MANUALLY-created caption track (clean punctuation, accurate) and
    falls back to AUTO-generated captions. Auto-captions carry ASR errors and
    no punctuation, so verbatim pullQuotes lifted from an auto track must be
    sanity-checked against the team-site written transcript before publishing.
  * Exits non-zero with a one-line reason on any failure so a scheduled run can
    skip the session gracefully rather than crashing the whole update.
  * Relies on undocumented YouTube internals and can break if YouTube changes
    things; treat a failure as "skip this session," not "abort the run."
"""

import argparse
import json
import re
import sys


def extract_video_id(s: str) -> str:
    """Accept a bare 11-char ID or any common YouTube URL form."""
    s = s.strip()
    if re.fullmatch(r"[A-Za-z0-9_-]{11}", s):
        return s
    m = re.search(r"(?:v=|/live/|youtu\.be/|/watch\?.*v=)([A-Za-z0-9_-]{11})", s)
    if m:
        return m.group(1)
    m = re.search(r"([A-Za-z0-9_-]{11})", s)
    if m:
        return m.group(1)
    raise ValueError(f"Could not parse a video ID from: {s!r}")


def fetch(video_id: str, lang: str):
    from youtube_transcript_api import YouTubeTranscriptApi

    api = YouTubeTranscriptApi()
    transcript_list = api.list(video_id)

    # Prefer a manually-created track in the requested language; fall back to
    # any generated track, then to whatever exists.
    track = None
    source = None
    try:
        track = transcript_list.find_manually_created_transcript([lang])
        source = "manual"
    except Exception:
        try:
            track = transcript_list.find_generated_transcript([lang])
            source = "auto-generated"
        except Exception:
            for t in transcript_list:
                track = t
                source = "manual" if not t.is_generated else "auto-generated"
                break

    if track is None:
        raise RuntimeError("no caption tracks available")

    fetched = track.fetch()
    snippets = [{"text": s.text, "start": s.start, "duration": s.duration} for s in fetched]
    return source, track.language_code, snippets


def clean_text(snippets) -> str:
    text = " ".join(s["text"].replace("\n", " ") for s in snippets)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def main():
    p = argparse.ArgumentParser(description="Fetch a clean YouTube transcript.")
    p.add_argument("video", help="YouTube video ID or URL")
    p.add_argument("--lang", default="en", help="language code (default: en)")
    p.add_argument("--json", action="store_true", help="emit JSON with timestamps + metadata")
    args = p.parse_args()

    try:
        vid = extract_video_id(args.video)
        source, lang_code, snippets = fetch(vid, args.lang)
    except Exception as e:
        print(f"ERROR ({type(e).__name__}): {e}", file=sys.stderr)
        sys.exit(1)

    if args.json:
        print(json.dumps({
            "video_id": vid,
            "source": source,
            "language": lang_code,
            "line_count": len(snippets),
            "text": clean_text(snippets),
            "snippets": snippets,
        }, ensure_ascii=False, indent=2))
    else:
        print(f"# video={vid} source={source} lang={lang_code} lines={len(snippets)}", file=sys.stderr)
        print(clean_text(snippets))


if __name__ == "__main__":
    main()
