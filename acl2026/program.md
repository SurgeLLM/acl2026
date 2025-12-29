---
layout: default
title: "Program"
workshop_id: acl2026
permalink: /program/
image: /assets/Banner_ACL26.png
description: "SURGeLLM @ ACL 2026 program overview, format, and tentative schedule."
---

{% include workshop.html %}

## Program

SURGeLLM is planned as a **full-day** workshop featuring invited talks, contributed presentations, posters, and a panel. The detailed schedule will be announced closer to ACL 2026.

<div class="callout">
  Want to attend or present remotely? We aim to support hybrid participation (subject to ACL policies). See <a href="{{ '/venue/' | relative_url }}">Venue</a> and <a href="{{ '/faq/' | relative_url }}">FAQ</a>.
</div>

**What to expect**
- Invited talks from leaders across NLP/IR/DB/vis
- Contributed oral talks selected from accepted papers
- Poster session for accepted papers and discussion
- Panel discussion and community Q&A
- Student mentoring lunch session (planned)

**Awards (planned)** We are exploring sponsorships to support community awards (e.g., best paper/best student paper), subject to ACL policies and available funding.

{% if workshop.program.notes %}
<div class="callout">
  {% for n in workshop.program.notes %}
    <div>{{ n }}</div>
  {% endfor %}
</div>
{% endif %}

{% if workshop.program.blocks %}
<h3>Tentative timeline (TBD)</h3>
<div class="card">
  <table class="table">
    <tbody>
      {% for b in workshop.program.blocks %}
        <tr>
          <th scope="row">{{ b.time }}</th>
          <td>{{ b.title }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
{% endif %}
