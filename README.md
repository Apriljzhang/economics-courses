# Industry Lab — UNNC course concept

A bright, playful prototype for an Industrial Economics course resource. Prepared for April’s economics-courses repository; not an official university publication.

## Preview

From this folder run `python3 -m http.server 4173`, then open http://localhost:4173.

This is a dependency-free static site. Serve over HTTP because `app.js` imports `data.js` as an ES module. Relative paths also work under a GitHub Pages project path.

## What works

- Three discovery entrances: industries, models, student stories.
- 8 curated themes, 24 subcategories, 12 model orientation notes.
- Combined keyword/industry/model filters and informative empty states.
- Bidirectional topic/model navigation, assumptions, limitations and linked examples.
- Shareable query strings and topic/model URL fragments; keyboard-accessible dialogs.
- Downloadable JSON dataset.
- Honest video empty state: no student names, videos or review decisions have been invented.

## Status

This is a design concept, not a complete course or production dataset. The repository contains the static-site source; hosting is configured separately. All industry/model connections are illustrative. Industry themes are curated teaching groups, not official classification labels. The model list needs alignment with the actual syllabus. Detailed model references, reviewed empirical cases, video playback/transcript search, author pages and editorial workflows are next-stage work.

Read [DESIGN.md](DESIGN.md) for the proposed architecture and delivery sequence. `data.js` contains the prototype data; the mature schema is described in the proposal.
