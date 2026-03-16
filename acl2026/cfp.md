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

We welcome two submission routes: **Main Track** and **Presentation-only track**.

{% include sections/submission.html %}

### Main Track

This track is for new research, including early-stage work. Authors may choose whether or not the accepted papers are published in the ACL Anthology as part of the workshop proceedings.

- Direct submissions may include early-stage or in-progress work intended for discussion, feedback, or showcase; prior peer review is not required.
- Submissions may be under review elsewhere at the time of submission.
- If authors choose the archival option and the paper is accepted, they must make a binding commitment to publish the paper in exactly one venue.
- Archival submissions must present substantially new and original work and comply with ACL policy on overlap/self-plagiarism.
- If authors choose the non-archival option, the paper can be presented at the workshop without appearing in the ACL Anthology.

Submit:

- [Direct submission (OpenReview)]({{ workshop.submission.tracks[0].links[0].url }})
- [ARR commitment (OpenReview)]({{ workshop.submission.tracks[0].links[1].url }})

### Presentation-only track

This track enables authors to present recently accepted or published work, including ACL Findings, at the workshop.

Submit:

- [Non-archival submission form]({{ workshop.submission.tracks[1].links[0].url }})

## What we’re looking for

We welcome a broad spectrum of contributions, including:

- New tasks, benchmarks, and evaluation frameworks for structured reasoning/retrieval/generation.
- Models and training recipes (prompting, fine-tuning, structure-specialized embeddings, agentic pipelines).
- Systems and deployment lessons (DataOps, governance, reliability, throughput/latency, human factors).
- Careful ablations, negative results, and reproducibility studies that illuminate failure modes and trade-offs.

## Mentoring and accessibility

- We plan a student mentoring lunch session and community Q&A (details TBD).
- If you have accessibility needs or questions about hybrid participation, email <a href="mailto:{{ workshop.site.contact_email }}">{{ workshop.site.contact_email }}</a>.
