# Student presentation catalogue

Eight MP4s were supplied in the adjacent `Student videos/` directory. Catalogue titles are editorial descriptions based on visible slides. No student name, transcript, caption, publication date or academic review has been invented.

| Recording | Primary model | Industry division |
| --- | --- | --- |
| Shapley value in online advertising | Shapley value | L72 Business services — advertising activity |
| Shapley value in basketball teams | Shapley value | R89 Sports |
| Shapley value and health outcomes | Shapley value | Q84 Health services — public-health context |
| Bargaining options in the French railway strike | Breakdown, inside & outside options | G53 Rail transport |
| Bargaining options in automotive labour negotiations | Breakdown, inside & outside options | C36 Motor vehicle manufacturing |
| Outside options in IMF negotiations | Breakdown, inside & outside options | T97 International organisations |
| Nash bargaining in SOE restructuring | Nash bargaining solution | Unspecified |
| Nash equilibrium in marriage decisions | Nash equilibrium | Unspecified |

The user confirmed that the SOE restructuring and marriage examples should keep their industries unspecified. Neither ownership form nor a household decision identifies a particular industry division. Their model links remain available, and both recordings are playable.

A recording may introduce supporting ideas, but its catalogue record has exactly one primary `modelId`, not a list. A matched record has exactly one `subcategoryId`; a deliberately unspecified record has `null`. In the connection map, a matched video has one edge to its model and one to its industry. An unspecified video has only the model edge. Industry-to-model lines also show the connection in the requested reading order.

## Matching evidence

The `slideCues` in `videos.js` identify sampled frames used to catalogue each video, and are also useful navigation points. For example, the online advertising recording shows “Shapley value theory” at 130 seconds; the marriage recording displays “Nash Equilibrium – Definition” at 75 seconds. The railway and automotive recordings show the relevant labour cases alongside inside/outside-option analysis. The IMF recording explicitly names Indonesia and the International Monetary Fund. These matches are based on inspected slides rather than automated speech transcription or a complete academic review.

## Media handling

The original files are unchanged. Website copies use the original H.264 video and AAC audio streams, remuxed with MP4 metadata at the beginning for quicker playback. No audio/video re-encoding, trimming or content editing was performed. Original and website-file SHA-256 values are recorded in `videos.js`. Preview images are extracted frames, not generated illustrations. Slide links seek to the recorded time and do not autoplay. Closing the player stops playback and releases its source.

These assets are included in the repository for publication with the course website.
