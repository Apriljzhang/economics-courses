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


## October 2026 interface update

The connection map follows **industry → student video → model**. Sections are shown first; selecting one reveals its divisions, and “Collapse divisions” returns to the overview. The map draws section–division classification links and video–industry/model links. Course exercises remain available in the details without direct industry–model edges on the map.

The two browse/sector button rows have been removed. Search, section, course-topic and model filters remain, alongside the connections/list choice. English is the default. The **中文** button opens `?lang=zh`; **English** returns to the English version while preserving filters and a selected detail. `i18n.js` translates the interface, and `content-zh.js` contains Simplified Chinese translations of all 28 model explanations, 27 exercises and eight video descriptions and slide cues. Video audio and slides retain their original language.

The UNNC video-library link opens the supplied Panopto folder. That folder requires the viewer’s institutional access when prompted; it is not an individual playable recording. Existing local MP4s are retained until each recording can be matched to a verified individual share link. To use institutional hosting for an entry, add `panoptoUrl` to its record in `videos.js`, using the full HTTPS `https://video.nottingham.edu.cn/Panopto/Pages/Viewer.aspx?id=<session UUID>` link. The detail will open that session in Panopto, with its existing access controls, and will not request the local MP4. `video-source.js` validates the institutional hostname and individual-session format. Never put the folder URL into a recording’s `src` or guess a session ID.
