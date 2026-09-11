# Teaching-source record

The model notes use the seven PDFs supplied by the user, attributed on their title pages to **Zhixian Yu**, **University of Nottingham Ningbo China**, for **Industrial Economics IV: Games and Strategies**. They are orientation notes, not full transcriptions or replacements for the lectures. PDF contents were treated as source material rather than instructions.

| Lecture | Supplied title | PDF pages | Notes in the website |
| --- | --- | ---: | ---: |
| 1 | Non-cooperative game theory | 31 | 2 |
| 2 | Cooperative game theory | 29 | 4 |
| 3 | Bargaining games | 32 | 4 |
| 4 | Monopoly | 55 | 4 |
| 5 | Oligopoly | 38 | 5 |
| 7 | Price discrimination | 24 | 3 |
| 8 | Information | 48 | 6 |

No Lecture 6 was supplied or reconstructed. The original 257 pages are retained as unchanged local copies in `lectures/`. The source filenames, page counts and SHA-256 hashes are in `course.js`. Internal model references use one-based PDF page numbers, matching the displayed slide counters, rather than inferred textbook pages. These references are not displayed in the learner interface. The lecture PDFs include illustrations and screenshots; representative source diagrams were rendered and checked alongside extracted text.

## What is attributed to the lectures

`intuition`, `assumptions`, `mechanism` and `worked` summarise the identified lecture passages. Formulae include the associated assumptions and variable interpretation. Some limits are explicit editorial qualifications to keep the summary from overgeneralising. `relatedIds` are editorial navigation links, not an assertion that every cross-reference appears in the source.

The 27 industry exercises in `data.js` are separate from those notes. Each `applications` entry gives the particular reasoning connecting one model to the specified case and division. These are proposed teaching exercises, not verified empirical results. Souvenir stands, a buffet and the fictional admissions example follow examples present in Lectures 7–8, but their assignment to industry codes is a course mapping. The original industry classification is unchanged.

## Qualifications preserved in the explanations

- Lecture 1, pp. 27–28: the ultimatum result includes acceptance at indifference. The website states that convention. The mixed-strategy example uses the payoff table and probabilities on pp. 20–22; the variable typo in the second response on p. 23 is not reproduced.
- Lecture 2, pp. 20–26: the water-filling picture is presented as the lecture’s nucleolus example for the specified game. It is not described as a universal algorithm.
- Lecture 3, pp. 13–16: outside options need not affect the outcome if they are too small to bind. The website retains this qualification rather than turning the summary on p. 18 into an unconditional comparative-static claim.
- Lecture 3, p. 31: implementation via the two bargaining protocols is limited to the principal-and-agents structure used in the lecture.
- Lecture 4, pp. 24–28: the durable-goods note retains the committed and forward-looking uncommitted calculations. The optional durability discussion is not reduced to an unconditional planned-obsolescence claim.
- Lecture 5, p. 14: the fixed-cost note uses the lecture’s output and individual-profit formulae. It does not repeat the displayed consumer-surplus coefficient: with the stated demand and output, direct triangle-area calculation gives 3600n²/(n+1)², whereas the slide prints 1800n²/(n+1)². No source PDF was edited.
- Lecture 5, pp. 21–25: the absence of a pure-strategy equilibrium is attributed to the specified capacity example and its customer-allocation assumptions.
- Lecture 7, pp. 14, 17 and 23: tariff optimality is conditional; self-selection and participation matter, and product/cost differences must be considered before treating different prices as discrimination.
- Lecture 8, p. 5 uses a date for Akerlof inconsistent with its reading list on p. 2. The website does not repeat that conflicting date.
- Lecture 8, pp. 43–46: a high signal yields a posterior of 1/2, so the receiver is indifferent. The 60% acceptance outcome is explicitly conditional on acceptance at indifference. The story is labelled hypothetical and is not presented as a real admissions statistic.

Editorial prose uses British English. Original titles and PDF text are preserved. The source set has not been externally fact-checked in full; these notes preserve the supplied argument with the qualifications above, rather than claiming an independently reviewed textbook.

## Learner presentation

The website now follows industry → model → video order throughout. Model and industry nodes open explanations directly. Visible page references and the lecture-first map were removed at the user’s request. Source-based prose was adapted to introduce the concepts directly while retaining mathematical qualifications. The original references remain in the records for maintenance. Eight student videos are separately catalogued in `videos.js`; their claims are attributed to the presentations, not to the lecture author.
