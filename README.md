# Industry Lab — Industrial Economics at UNNC

A course learning resource connecting **industry → model → student video**. Learners can read the explanations and watch presentations within the website. Editorial text uses British English.

## Run locally

From this directory, run `python3 preview.py` and open `http://localhost:4173`. The site uses standard HTML, CSS, JavaScript modules and native video playback. No build step or framework is required. The preview server supports byte-range requests so the video timeline and slide links can seek correctly. All asset paths are relative for a GitHub Pages project site.

## Learning features

- A floating line-connection map, with industry sections and divisions kept distinct.
- Click an industry or model to open its explanation directly; click an orange video node to watch.
- Three Chinese industry sectors, 20 sections and 97 divisions, with bilingual classification labels.
- 28 model/concept explanations based on seven supplied lecture PDFs, including assumptions, reasoning, examples and limitations.
- 27 suggested exercises, distinct from the student presentations and their claims.
- Eight playable student recordings, authentic frame previews and links to sampled slides within the videos.
- Each video has one primary model. Six have a specified industry division; the two remaining presentations intentionally retain `subcategoryId: null`, as confirmed by the user.
- Keyword, sector, industry, course-topic and model filters; an alternative reading-list layout.
- Shareable model, industry and video links; keyboard navigation, motion pause and reduced-motion support.

The site does not display lecture page numbers or require learners to consult the PDFs. Attribution remains visible. Original source references and SHA-256 hashes are retained in the underlying records for maintenance.

## Files

- `classification.js`: Chinese industry classification and sources.
- `course.js`: lecture metadata and model explanations.
- `data.js`: exercises, classification relationships and the combined dataset.
- `videos.js`: eight recordings, their model/industry matches, summaries and slide cues.
- `media/videos/`: browser-ready MP4s, remuxed without re-encoding picture or sound.
- `media/posters/`: frames extracted from the corresponding recordings.
- `lectures/`: unchanged copies of the supplied lecture PDFs.
- `app.js`, `graph.js`, `styles.css`, `graph.css`, `index.html`: learning interface.
- `SOURCE_NOTES.md`, `VIDEO_CATALOGUE.md`: source records and editorial qualifications.

## Status

The complete website, teaching materials and recordings are included in this repository for GitHub Pages publication. These videos have been catalogued from visible presentation slides, not independently assessed for academic correctness. Transcripts and separate caption tracks have not been supplied. The native player includes the original audio. The current collection is eight recordings, ready for later additions.
