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
  <strong>Quick links</strong>:
  <a href="{{ workshop.submission.tracks[0].links[0].url }}" target="_blank" rel="noopener noreferrer">Direct submission</a> ·
  <a href="{{ workshop.submission.tracks[0].links[1].url }}" target="_blank" rel="noopener noreferrer">ARR commitment</a> ·
  <a href="{{ workshop.submission.tracks[1].links[0].url }}" target="_blank" rel="noopener noreferrer">Non-archival form</a> ·
  Contact: <a href="mailto:{{ workshop.site.contact_email }}">{{ workshop.site.contact_email }}</a>
</div>

We welcome submissions in two categories: **Proceedings (Archival)** and **Non-Proceedings (Non-Archival)**.

### Proceedings (Archival)

Papers accepted in this category will be published in the ACL Anthology.

- Submissions may be under review elsewhere at the time of submission.
- Upon acceptance, authors must make a binding commitment to publish the paper in exactly one venue.
- Archival submissions must present substantially new and original work and comply with ACL policy on overlap/self-plagiarism.
- If you plan to submit your work to a future venue, choose the non-archival track instead.

Submit:

- [Direct submission (OpenReview)]({{ workshop.submission.tracks[0].links[0].url }})
- [ARR commitment (OpenReview)]({{ workshop.submission.tracks[0].links[1].url }})

### Non-Proceedings (Non-Archival)

This category is intended for presentation and discussion only; papers will not appear in the ACL Anthology.

This track includes (for example) previously published papers in relevant venues and ACL Findings/main-conference papers requesting cross-presentation (subject to capacity).

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

- Pick a track: **archival** (proceedings) vs **non-archival** (presentation only).
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

- At submission time, authors must clearly indicate whether their submission is intended for **archival (proceedings)** or **non-archival** presentation.
- **Only papers not committed to any other venue are eligible for archival publication** in the ACL Anthology.
- Papers previously accepted elsewhere are eligible **only** for non-archival presentation.
- Authors intending to submit their work to future conferences/journals should select the **non-archival** track.
- ACL Findings / main-conference papers may request cross-presentation via the non-archival track (subject to capacity).
