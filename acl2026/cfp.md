---
layout: default
title: "Call for Papers"
workshop_id: acl2026
permalink: /cfp/
image: /assets/Banner_ACL26.png
description: "Call for Papers for SURGeLLM @ ACL 2026: submission tracks, links, policies, and formatting guidance."
---

{% include workshop.html %}

## Call for Papers

SURGeLLM invites submissions on structured understanding, retrieval, generation, and evaluation in the era of LLMs — with structured artifacts (tables, charts, maps, flowcharts, diagrams) treated as first-class citizens.

<div class="callout">
  Contact: <a href="mailto:{{ workshop.site.contact_email }}">{{ workshop.site.contact_email }}</a>. See <a href="{{ '/dates/' | relative_url }}">Important Dates</a>.
</div>

We welcome two submission routes: **Main Submission** and **Non-Proceedings (presentation-only cross-presentation)**.

{% include sections/submission.html %}

### Main Submission (Archival or Non-Archival)

This is the primary route for new submissions to the workshop. Authors may choose either **archival** publication in the ACL Anthology or **non-archival** presentation without proceedings publication.

- Direct submissions may include early-stage or in-progress work intended for discussion, feedback, or showcase; prior peer review is not required.
- Submissions may be under review elsewhere at the time of submission.
- If authors choose the archival option and the paper is accepted, they must make a binding commitment to publish the paper in exactly one venue.
- Archival submissions must present substantially new and original work and comply with ACL policy on overlap/self-plagiarism.
- If authors choose the non-archival option, the paper can be presented at the workshop without appearing in the ACL Anthology.

Submit:

- [Direct submission (OpenReview)]({{ workshop.submission.tracks[0].links[0].url }})
- [ARR commitment (OpenReview)]({{ workshop.submission.tracks[0].links[1].url }})

### Non-Proceedings (Non-Archival)

This category is intended for presentation and discussion only; papers will not appear in the workshop proceedings.

We welcome cross-presentation of **ACL 2026 Findings** papers (and other recently accepted work), subject to capacity. This route is for already accepted or already reviewed work that is being presented only, rather than newly submitted main-submission papers.

Submit:

- [Non-archival submission form]({{ workshop.submission.tracks[1].links[0].url }})

## What we’re looking for

We welcome a broad spectrum of contributions, including:

- New tasks, benchmarks, and evaluation frameworks for structured reasoning/retrieval/generation.
- Models and training recipes (prompting, fine-tuning, structure-specialized embeddings, agentic pipelines).
- Systems and deployment lessons (DataOps, governance, reliability, throughput/latency, human factors).
- Careful ablations, negative results, and reproducibility studies that illuminate failure modes and trade-offs.

## Formatting and length

- We welcome both long (up to 8 pages) and short (up to 4 pages) papers in ACL format (excluding references and appendices).
- Submissions should be consistent with ARR submission requirements: https://aclrollingreview.org/cfp#paper-submission-information
- If anonymization is required for your track, do not include author names/affiliations in the submitted PDF.

## Submission checklist

- For a main submission, indicate whether you want **archival** publication or **non-archival** presentation.
- Use ACL format; stay within page limits (excluding references/appendix).
- Follow ARR/ACL anonymization rules when applicable.
- Include enough experimental detail to support reproducibility (and clearly state any non-public resources).

## Topics

See the topics list on the home page: {{ '/#topics' | relative_url }}.

## Important dates

See `{{ '/dates/' | relative_url }}`.

## Mentoring and accessibility

- We plan a student mentoring lunch session and community Q&A (details TBD).
- If you have accessibility needs or questions about hybrid participation, email <a href="mailto:{{ workshop.site.contact_email }}">{{ workshop.site.contact_email }}</a>.

## Multiple submission & cross-presentation

- At submission time, main-submission authors must clearly indicate whether their submission is intended for **archival (proceedings)** or **non-archival** presentation.
- **Only papers not committed to any other venue are eligible for archival publication** in the ACL Anthology.
- Main submissions that are presented non-archivally are welcome, including work in progress intended for community feedback.
- Papers previously accepted elsewhere are eligible **only** for the separate presentation-only non-proceedings track.
- ACL Findings / main-conference papers may request cross-presentation via the non-archival track (subject to capacity).
