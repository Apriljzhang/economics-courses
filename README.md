# Industry Lab — Industrial Economics at UNNC

A bilingual course resource connecting **industry → student video → course topic / model**. English is the default; **中文** switches to Simplified Chinese.

## Run locally

Run `python3 preview.py` and open `http://localhost:4173/?v=20261029c`. The site uses HTML, CSS and JavaScript modules with no build step. Paths are relative for GitHub Pages.

## Explore

- The left column shows the 20 official industry sections and **Others**. Select a section to reveal its divisions; select it again or choose “Collapse divisions” to return.
- The right column shows **Topics 1–8**, each in a numbered circle. Select a topic to reveal its models. “Collapse topics” returns to the topic overview.
- Student videos occupy the centre. Lines connect each video with its industry (or Others) and its course topic; expanding a topic reveals its specific model connection. No direct industry–model application edge is drawn.
- Search, section, course-topic and model filters, a reading list, stable query/hash links, keyboard controls and responsive map scrolling remain available.
- The library contains 97 official industry divisions, 31 model/concept explanations, 27 suggested exercises and 19 linked student presentations. Others is a website navigation category, not a statistical classification.

## Video hosting

All **19 individual links** were extracted from the supplied UNNC Panopto folder and checked against their visible chapter contents on 29 October 2026. The eight previously supplied recordings were matched by presentation contents and duration. Video detail pages use institutional Panopto embeds, with an “Open in Panopto” link and timestamp navigation. The website does not download or rehost the additional recordings. Existing local MP4s remain in the repository as retained originals but are not requested by the updated player when a Panopto link is present.

`panopto-catalogue.json` records every link and its course/model/industry relationship. Seven presentations currently use Others: two intentionally unspecified applications and five whose precise economic activity could not be assigned from the available presentation contents. This does not treat an uncertain classification as an official code.

The videos remain subject to the host’s copyright notice, access controls and availability. Cataloguing a presentation does not independently validate its academic claims. Original audio and slides retain their language; the website’s navigation, model notes, case descriptions and slide-navigation labels have Simplified Chinese translations.

## Topic 6

**Product differentiation** was confirmed by the course owner and four videos in the institutional folder. Those videos use Hotelling, Salop and Lancaster approaches. The original Lecture 6 PDF was not supplied. The three added background explanations therefore cite separate reading sources and are distinguished from notes based on the supplied lecture PDFs. The seven existing PDFs and their source metadata are preserved.

## Files

- `classification.js`: official industry labels, divisions and classification sources.
- `course.js`: eight course-topic headings and 31 model/concept explanations, including separately sourced Topic 6 notes.
- `data.js`: suggested exercises, activity mappings and the combined dataset.
- `videos.js`, `panopto-catalogue.json`: all 19 verified institutional links and catalogue relationships.
- `video-source.js`: validates individual institutional URLs and constructs embed URLs.
- `app.js`, `graph.js`, `styles.css`, `graph.css`, `index.html`: interface, circular nodes and hierarchical connection map.
- `i18n.js`, `content-zh.js`: English/Simplified Chinese navigation and editorial content.
- `SOURCE_NOTES.md`, `VIDEO_CATALOGUE.md`: source provenance, mapping boundaries and catalogue history.
