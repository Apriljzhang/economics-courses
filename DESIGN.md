# Industry Lab: connected learning for Industrial Economics at UNNC

The course website should behave like an explorable atlas: begin with a familiar industry, choose an economic lens, and encounter a student’s argument. Make discovery inviting for students while exposing enough provenance, assumptions and evidence for scholars to assess the content.

The current clickable concept demonstrates this structure. It does not represent the final syllabus, official classification, empirical findings or a published student collection.

## 1. Three entrances into one dataset

- **Industries:** teaching theme → subcategory → applied models → student explanations.
- **Models:** model family → model → assumptions and predictions → applications across industries → student explanations.
- **Student stories:** video → primary model + primary subcategory → sources → related explanations.

The central unit is an **application**, the argument connecting a model with a particular industry setting. Store this argument as a record; do not infer it merely because two items share a tag. A video presents an application. One model may explain multiple industries, and one industry may admit several models.

Example: Retail & hospitality → Coffee shops → Hotelling model → student presentation. The application identifies a market, relevant location or preference assumptions, a prediction and evidence. A neighbouring application uses Bertrand competition to ask a different question about the same subcategory.

## 2. Navigation that encourages learning

Put search and browse controls near the top, with real questions rather than abstract definitions as entry points. Provide suggested terms and filters for industry, model, economic mechanism, region, year, content type, video language, transcript availability and review status. Start with the three high-value filters in the prototype; reveal advanced filters as the collection grows.

Every topic offers **“Change the lens”**. Every model offers **“Explore it across industries”**. Every video offers **“Same model, different industry”** and **“Same industry, different model”**. Recommendations can be deterministic relations from the dataset; an AI recommender is not needed for 30–40 videos.

Use a small, focused connection diagram for the selected record. Show labelled relationships and keep the same links available as ordinary buttons. A full force-directed graph may be an optional overview later; it is a poor default for finding a known topic on a phone.

Add a coverage matrix with subcategories as rows and models as columns. Distinguish a proposed application, a published video and a reviewed video by icons and text, not colour alone. This is useful for scholars comparing coverage and students selecting a presentation topic.

## 3. A workable starting taxonomy

The following are **course-facing themes**, intentionally simpler than a full statistical classification. They are not mutually exclusive official industry sections. Keep these teaching groups separate from a versioned classification mapping.

| Teaching theme | Initial subcategories | Candidate lenses to assess |
| --- | --- | --- |
| Digital & media | Ride-hailing; video streaming; online marketplaces | Two-sided markets; switching costs; price discrimination |
| Manufacturing | Electric vehicles; semiconductors; cement | Differentiation; innovation; sunk costs; Cournot |
| Transport & logistics | Passenger airlines; container shipping; parcel delivery | Price discrimination; quantity competition; entry |
| Retail & hospitality | Coffee shops; supermarkets; hotels | Hotelling; vertical relationships; pricing |
| Energy & utilities | Electricity networks; water distribution; renewable generation | Natural monopoly; regulation; investment |
| Finance & insurance | Retail banking; payment networks; health insurance | Switching costs; platforms; asymmetric information |
| Health & care | Pharmaceuticals; hospitals; telemedicine | Innovation; entry; differentiation; information |
| Food & agriculture | Grain trading; dairy processing; food delivery | Vertical relationships; market power; platforms |

The links are teaching hypotheses to scrutinise, not claims that a whole industry “is” a model. Market structure varies by product, geography and time. A statistical industry code is not an antitrust market definition. For example, classify an intermediation platform by its activity rather than assuming it belongs to the industry of every service sold through it.

Use the [UN Statistics Division’s ISIC reference](https://unstats.un.org/unsd/classifications/Econ/isic) as the classification backbone. Store scheme, revision, code, official label, mapping scope and mapping source. Confirm the revision suitable for the course’s datasets before populating codes. Chinese and other classification schemes can later be mapped without changing internal topic IDs.

## 4. A model library with intellectual substance

Organise the initial library into competition (Cournot, Bertrand), differentiation (Hotelling), market entry (sunk costs), pricing (discrimination), strategic interaction (repeated games), platforms, switching costs, vertical relationships, natural monopoly, information and innovation.

Distinguish formal models, broader theories, frameworks and empirical measures through a `kind` field in the mature data. “Innovation & R&D” is a field/framework heading that should eventually lead to specified models; it is not one canonical equation. Measures such as HHI belong in a tools section and should not be presented as explanatory models.

Each model page should contain: plain-language intuition; formal setup and model variant; assumptions; mechanism; predicted outcome; a diagram or worked numerical example; limitations; prerequisites; foundational references; applications and videos. Separate introductory explanation from expandable mathematics.

[MIT’s Industrial Organization I readings](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/pages/readings/) provide a useful orientation to the field, including pricing, competition, differentiation, entry, vertical relationships and innovation. The production library needs references at the individual model/application level, aligned with the actual UNNC syllabus. A general reading list is not evidence for every application.

## 5. The video is an argument, not just an embed

Each presentation page should show:

1. A question-led title and short claim.
2. Student-chosen public attribution, cohort and date.
3. One primary model and one primary industry subcategory; optional secondary links.
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
| Industry theme | id, label, description, order |
| Subcategory | id, label, aliases, theme IDs, definition, classification mappings |
| Model | id, label, aliases, kind, family, formal variant, assumptions, predictions, limitations, prerequisites, reference IDs |
| Application | id, subcategory ID, model ID, research question, mechanism, market definition, geography, period, evidence, limitations, reference IDs, review state |
| Video | id, application ID, primary model ID, primary subcategory ID, optional secondary IDs, public author ID, title, abstract, host URL, poster, duration, language, captions, timestamped transcript, chapters, cohort, publication state |
| Reference | id, citation, DOI/URL, source type, access date where relevant |
| Public author | id, chosen display name, optional public profile, contribution IDs |
| Revision | record ID, version, changed date, correction note, public review statement |

An application can have multiple videos over time. A video’s primary model and subcategory must match its application. Secondary mentions are not equivalent to a fully argued application.

Minimum ingestion validation: unique IDs; valid foreign keys; no published video without a playable URL, primary links and completed publication checks; valid chapter timing; explicit classification revision; no draft-only personal/reviewer information in exported public JSON. Export CSV for flat catalogues and JSON for the relationships. Version the dataset and state licensing separately for code, teaching text and student media.

## 7. Visual direction: playful, recognisably Nottingham

The user selected a bright, playful learning lab and then requested Nottingham colours. Keep approachable spacing, tactile buttons, question-led cards and small responsive transitions, with Nottingham Blue dominating the interface.

Use **Nottingham Blue #10263B** for headings, body text, primary navigation and the main feature band. Use the official **5% blue tint #F3F4F5** for the page background. Two supporting accents are **Rebel’s Gold #DEB406** and **Mandarin Orange #F98109**, with their published tints on model and video surfaces. Industry nodes use blue tints, model nodes use gold tints, and video nodes use orange tints. Labels always accompany colours.

This follows the [university colour guidance](https://www.nottingham.ac.uk/brand/visual/colour.aspx): blue is dominant, with at most two supporting colours. UNNC also publishes its [brand book](https://www.nottingham.edu.cn/en/brand/documents/nottingham-brand-book-en-240313.pdf). The prototype demonstrates the palette; it is not a claim of full institutional brand approval. Use a supplied official logo asset rather than reconstructing the university crest. The current “industrylab” text is a working course title.

Keep 44px touch controls, visible keyboard focus, reduced-motion support, readable contrast and a stacked mobile layout. Avoid autoplay. Prioritise readable application diagrams and genuine presentation images over decorative stock imagery.

## 8. Student and scholar needs on the same page

Students need questions, intuition, prerequisite cues, short explanations, comparison and clear next steps. Scholars need stable links, explicit classifications, market definitions, citations, transcripts, versions, dates and downloadable metadata. Use progressive disclosure: make the central explanation easy to read, with formal setup and source details one step away. Do not maintain two divergent datasets.

Useful engagement features are a private saved reading list, a “predict before watching” prompt, and a comparison task that transfers one model to another industry. Avoid popularity rankings that equate views with academic quality. Defer public comments until there is a clear moderation process.

## 9. Implementation sequence

**Now: design validation.** Review this clickable concept, confirm course title/module scope, final taxonomy and models. Current prototype: search, combined filters, linked detail views, stable query/hash URLs, responsive layout and JSON export. No actual video playback, transcript search or editorial system is implemented yet.

**Next: scholarly core.** Move prototype records into the normalised schema above. Build stable individual routes for models, subcategories, applications and videos; add model/application citations and classification mappings; generate a search index, sitemap and public CSV/JSON export. A static generator such as Astro is a reasonable fit, but the first concept intentionally has no framework dependency. No graph database is needed for this collection size.

**Then: student collection.** Pilot 3–5 real presentations to test hosts, metadata, caption quality, review decisions and mobile playback. Use a structured submission sheet or form. Import validated records; keep editorial records private and publish only approved public fields. Expand to all 30–40 after the pilot.

**Later: learning features.** Add a coverage matrix, saved lists and model simulations where pedagogically useful. Add accounts or a database only when private workflows need them. An initial static public resource can be hosted from this repository; deployment is a separate next step.

Judge success through findability and learning tasks: can a student locate an appropriate model, state its assumptions, find a presentation, and apply it to another industry? Test scholars’ ability to recover sources and cite a stable version. If collecting research data, define the study and data handling separately from ordinary site usage.
