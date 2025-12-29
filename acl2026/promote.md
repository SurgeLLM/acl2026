---
layout: default
title: "Promote"
workshop_id: acl2026
permalink: /promote/
image: /assets/Banner_ACL26.png
description: "Shareable copy/paste text and links to promote SURGeLLM @ ACL 2026."
---

{% include workshop.html %}

## Promote SURGeLLM

Use the snippets below to share the CFP with students and colleagues.

### Key links

- Website: `{{ '/' | absolute_url }}`
- CFP: `{{ '/cfp/' | absolute_url }}`
- Dates: `{{ '/dates/' | absolute_url }}`
- Submit (OpenReview): `{{ workshop.submission.tracks[0].links[0].url }}`
- Contact: `{{ workshop.site.contact_email }}`

### Sample post (social)

```
SURGeLLM @ ACL 2026 (San Diego) — Structured Understanding, Retrieval, and Generation in the LLM era.

Two tracks: archival (ACL Anthology) + non-archival (presentation only).
Direct submissions due 2026-03-05 (AoE).

Details: {{ '/' | absolute_url }}
Submit: {{ workshop.submission.tracks[0].links[0].url }}
```

### Sample email

Subject: [CFP] SURGeLLM @ ACL 2026 — Structured Understanding, Retrieval, and Generation in the LLM era

```
Hi all,

SURGeLLM is a workshop at ACL 2026 focused on treating structured artifacts (tables, charts, maps, flowcharts, diagrams) as first-class citizens in modern LLM systems.

We welcome both:
  • Proceedings (archival; published in the ACL Anthology)
  • Non-proceedings (non-archival; presentation/discussion only)

Key dates: {{ '/dates/' | absolute_url }} (deadlines are AoE)
Submission link: {{ workshop.submission.tracks[0].links[0].url }}
Workshop website: {{ '/' | absolute_url }}

Questions: {{ workshop.site.contact_email }}

Best,
```
