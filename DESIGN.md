# Industry Lab: connected learning for Industrial Economics at UNNC

The course website should behave like an explorable atlas: begin with a familiar industry, choose an economic lens, and encounter a student’s argument. Make discovery inviting for students while exposing enough provenance, assumptions and evidence for scholars to assess the content.

The current clickable concept demonstrates this structure. It uses the supplied lectures and the selected industry classification. The model notes are paraphrases; industry exercises are suggestions, and eight student videos are available in the local learning resource.

## 1. Three entrances into one dataset

- **Industries:** sector → section → division → applied models → student explanations.
- **Models:** industry → model → video, with explanations opening directly from the nodes.
- **Student stories:** video → exactly one model + exactly one subcategory → sources → related explanations.

The central unit is an **application**, the argument connecting a model with a particular industry setting. Store this argument as a record; do not infer it merely because two items share a tag. A video presents an application. One model may explain multiple industries, and one industry may admit several models.

Example: H Accommodation & food services → 62 Food services → Coffee shops → Tourist-and-native model (Lecture 8) → a future student presentation. The exercise specifies informed regular customers, uninformed visitors and comparable products. A neighbouring application uses Bertrand competition as a full-information benchmark.

## 2. Navigation that encourages learning

Put search and browse controls near the top, with real questions rather than abstract definitions as entry points. Provide suggested terms and filters for industry, model, economic mechanism, region, year, content type, video language, transcript availability and review status. Start with the keyword, sector, section, lecture and model filters in the prototype; reveal advanced filters as the collection grows.

Every topic offers **“Change the lens”**. Every model offers **“Explore it across industries”**. Every video offers **“Same model, different industry”** and **“Same industry, different model”**. Recommendations can be deterministic relations from the dataset; an AI recommender is not needed for 30–40 videos.

Use a small, focused connection diagram for the selected record. Show labelled relationships and keep the same links available as ordinary buttons. A full force-directed graph may be an optional overview later; it is a poor default for finding a known topic on a phone.

Add a coverage matrix with subcategories as rows and models as columns. Distinguish a proposed application, a published video and a reviewed video by icons and text, not colour alone. This is useful for scholars comparing coverage and students selecting a presentation topic.

## 3. Chinese industry classification

The user selected [中国产业分类](https://zh.wikipedia.org/wiki/中国产业分类) as the taxonomy. The site now contains the complete three-sector allocation at the section and division levels: **3 sectors, 20 sections (A–T), 97 divisions (01–97)**. Chinese names and two-digit codes are retained; English labels are course translations.

Hierarchy: **sector (三次产业) → section (门类) → division (大类) → model application → student video**. The standard also contains three-digit groups and four-digit classes; these deeper levels are not claimed to be included in this prototype.

| Sector | Scope in this site | Divisions |
| --- | --- | --- |
| 第一产业 / Primary | Section A, excluding 05 | 4 |
| 第二产业 / Secondary | Sections B–E, excluding 11 and 43 | 43 |
| 第三产业 / Tertiary | Sections F–T, plus A05, B11 and C43 | 50 |

Sections A, B and C span more than one sector. Sector membership is therefore stored on each division, not inferred solely from the section letter. Every division appears once in the data. Sector filters show only the appropriate part of a section.

Official Chinese labels and codes are checked against [GB/T 4754—2017](https://www.stats.gov.cn/sj/tjbz/gmjjhyfl/202501/P020250116506795831658.pdf), and the exceptions against the [NBS explanation of the 2018 three-sector allocation](https://www.stats.gov.cn/zs/tjws/tjbz/202301/t20230101_1903768.html). The official label for 13 is 农副食品加工业, correcting the shortened label in the supplied Wikipedia table.

The 27 teaching exercises are narrower applications within the divisions. Examples: electric vehicles → C36 汽车制造业; coffee shops → H62 餐饮业; hospitals → Q84 卫生. Model connections on a division are derived from those explicit course examples and do not imply the same model explains every activity in that division. Divisions without a model application remain visible and are labelled honestly.

Activity boundaries matter: the ride-hailing and food-delivery examples concern internet platform intermediation (I64), not passenger transport operators, restaurants or physical delivery operations. Grain trading belongs to wholesale trade (F51), not grain cultivation (A01). Payment services and telemedicine carry explicit activity-scope notes; their precise entity classifications require a defined case.

A fully classified video has one `modelId` and one `subcategoryId` referencing a division, with a specified example if needed. An intentionally unspecified industry uses `null`, never a fabricated code. Other videos may use the same division or model. Six of the eight actual video records have a specified division and one primary model. Two retain an unspecified division by user instruction, and show only their model connection.

## 4. A model library with intellectual substance

The local library now contains **28 models and concepts from seven supplied lectures**, attributed to Zhixian Yu, *Industrial Economics IV: Games and Strategies*, University of Nottingham Ningbo China. All entrances use industry → model → video order. Course-topic filters focus the visual; selecting a model opens its explanation directly.

- Lecture 1: Nash equilibrium and subgame-perfect equilibrium.
- Lecture 2: Nash bargaining, Shapley value, the lecture’s nucleolus example and mechanism design.
- Lecture 3: alternating offers, bargaining options, renegotiable and non-renegotiable protocols.
- Lecture 4: monopoly pricing, multiproduct monopoly, durable goods and the dominant firm.
- Lecture 5: Cournot, fixed costs and entry, Bertrand, capacity constraints and Stackelberg.
- Lecture 7: first-degree pricing, second-degree pricing/two-part tariffs, third-degree pricing/screening.
- Lecture 8: lemons, tourist-trap and tourist-and-native models, incomplete-information games, signalling and Bayesian persuasion.

No Lecture 6 was supplied. The earlier generic models unsupported by this set have been removed from the active library. Course orientation notes distinguish formal models from equilibrium concepts and introductory frameworks through their titles and explanations; the mature dataset may add a separate `kind` field.

Each note includes an intuition, assumptions, reasoning, a lecture example, limitations and source references retained internally. Selected equations preserve the lecture’s notation with explicit interpretation. Source references remain in the data; the learning interface does not display page numbers or require opening a PDF. Industry exercises have separate explanations for every model connection and are labelled as suggested applications, not findings in the lecture. British English is used for editorial text; originals remain unchanged. See [SOURCE_NOTES.md](SOURCE_NOTES.md) for scope and editorial qualifications.

## 5. The video is an argument, not just an embed

Each presentation page should show:

1. A question-led title and short claim.
2. Student-chosen public attribution, cohort and date.
3. Exactly one model and exactly one industry subcategory. Each video explains this specific application.
4. Accessible player, duration, captions, language and a searchable transcript.
5. Chapters such as context → model → application → evidence → limitations; each chapter links to a timestamp.
6. Sources, geography, observation period, slide download if supplied, and review status.
7. A short pre-watch prediction, followed by a reflection or transfer question.
8. Related presentations selected from explicit model/subcategory connections.

Use actual presentation frames for thumbnails once videos arrive. Keep each thumbnail’s visual label consistent: topic, model and a question. Do not make anonymous decorative avatars look like real authors.

Track draft → submitted → needs revision → reviewed → published. Public availability is separate from review status. Teacher decisions remain explicit. Store revision history so a corrected explanation does not silently replace the scholarly record. The earlier project context described teacher final review; that is a design input from prior planning, not a newly confirmed workflow requirement.

Collect public-display preference and permission to publish a student’s name, image, recording and slides when collecting submissions. Offer an approved display name. Keep private submission/review records outside the public Git repository. For mainland-China access, test the actual institutional or video host from the intended student environment before selecting it; include a working host link and transcript fallback.

## 6. Data model

Use stable IDs independent of labels and URLs.

| Record | Key fields and relations |
| --- | --- |
| Sector / section | sector ID; section code, Chinese and English labels; sector membership derived from divisions |
| Subcategory / division | two-digit ID, section code, sector ID, Chinese and English labels, examples, model IDs, classification source |
| Model | id, label, aliases, kind, family, formal variant, assumptions, predictions, limitations, prerequisites, reference IDs |
| Application | id, subcategory ID, model ID, research question, mechanism, market definition, geography, period, evidence, limitations, reference IDs, review state |
| Video | id, application ID, model ID (single value), subcategory ID (single value), public author ID, title, abstract, host URL, poster, duration, language, captions, timestamped transcript, chapters, cohort, publication state |
| Reference | id, citation, DOI/URL, source type, access date where relevant |
| Public author | id, chosen display name, optional public profile, contribution IDs |
| Revision | record ID, version, changed date, correction note, public review statement |

An application can have multiple videos over time. Each video has exactly one model ID and one subcategory ID, both matching its application. The same model or subcategory can appear in other videos, but each video represents one pair.

Minimum ingestion validation: unique IDs; valid foreign keys; no published video without a playable URL, exactly one valid model-subcategory pair and completed publication checks; valid chapter timing; explicit classification revision; no draft-only personal/reviewer information in exported public JSON. Export CSV for flat catalogues and JSON for the relationships. Version the dataset and state licensing separately for code, teaching text and student media.

## 7. Visual direction: playful, recognisably Nottingham

The user selected a bright, playful learning lab and then requested Nottingham colours. Keep approachable spacing, tactile buttons, question-led connections and small responsive transitions, with Nottingham Blue dominating the interface.

Use **Nottingham Blue #10263B** for headings, body text, primary navigation and the main feature band. Use the official **5% blue tint #F3F4F5** for the page background. Two supporting accents are **Rebel’s Gold #DEB406** and **Mandarin Orange #F98109**, with their published tints on model and video surfaces. Industry nodes use blue tints, model nodes use gold tints, and video nodes use orange tints. Labels always accompany colours.

This follows the [university colour guidance](https://www.nottingham.ac.uk/brand/visual/colour.aspx): blue is dominant, with at most two supporting colours. UNNC also publishes its [brand book](https://www.nottingham.edu.cn/en/brand/documents/nottingham-brand-book-en-240313.pdf). The prototype demonstrates the palette; it is not a claim of full institutional brand approval. Use a supplied official logo asset rather than reconstructing the university crest. The current “industrylab” text is a working course title.

Keep 44px touch controls, visible keyboard focus, reduced-motion support, readable contrast and a stacked mobile layout. Avoid autoplay. Prioritise readable application diagrams and genuine presentation images over decorative stock imagery.

## 8. Student and scholar needs on the same page

Students need questions, intuition, prerequisite cues, short explanations, comparison and clear next steps. Scholars need stable links, explicit classifications, market definitions, citations, transcripts, versions, dates and downloadable metadata. Use progressive disclosure: make the central explanation easy to read, with formal setup and source details one step away. Do not maintain two divergent datasets.

Useful engagement features are a private saved reading list, a “predict before watching” prompt, and a comparison task that transfers one model to another industry. Avoid popularity rankings that equate views with academic quality. Defer public comments until there is a clear moderation process.

## 9. Implementation sequence

**Now: design validation.** The selected Chinese classification is implemented. Review course title/module scope and the model applications. Current prototype: sector and section filters, bilingual search, hierarchical animated map, division/model detail views, stable query/hash URLs, responsive list view and JSON export. No actual video playback, transcript search or editorial system is implemented yet.

**Next: scholarly core.** Move prototype records into the normalised schema above. Build stable individual routes for models, subcategories, applications and videos; add model/application citations and classification mappings; generate a search index, sitemap and public CSV/JSON export. A static generator such as Astro is a reasonable fit, but the first concept intentionally has no framework dependency. No graph database is needed for this collection size.

**Then: student collection.** Pilot 3–5 real presentations to test hosts, metadata, caption quality, review decisions and mobile playback. Use a structured submission sheet or form. Import validated records; keep editorial records private and publish only approved public fields. Expand to all 30–40 after the pilot.

**Later: learning features.** Add a coverage matrix, saved lists and model simulations where pedagogically useful. Add accounts or a database only when private workflows need them. An initial static public resource can be hosted from this repository; deployment is a separate next step.

Judge success through findability and learning tasks: can a student locate an appropriate model, state its assumptions, find a presentation, and apply it to another industry? Test scholars’ ability to recover sources and cite a stable version. If collecting research data, define the study and data handling separately from ordinary site usage.

## Current learning-resource implementation

The user requested a course resource that learners can use on its own. The main interface therefore contains explanations, examples and actual video playback; it does not present design-preview messaging, a lecture-first diagram, visible page references or a design-proposal link. The eight-record video catalogue, with six industry matches and two deliberately unspecified industries, is described in `VIDEO_CATALOGUE.md`. Student names and transcripts are not fabricated.
