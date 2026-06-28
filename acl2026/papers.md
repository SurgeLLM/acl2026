---
layout: default
title: "Papers"
workshop_id: acl2026
permalink: /papers/
image: /assets/Banner_ACL26.png
description: "Accepted papers for SURGeLLM @ ACL 2026."
---

{% include workshop.html %}
{% assign accepted_papers = workshop.papers.items | default: empty %}
{% assign archival_papers = accepted_papers | where: "category", "proceedings" %}
{% assign non_archival_papers = accepted_papers | where: "category", "non_archival" %}

## Papers

Acceptance notifications have been sent. Accepted papers are listed below in two categories: **Proceedings/Archival** and **Non-Archival**. Presentation format is shown on each paper as a pill.

<div class="callout">
  Authors can see decision details in <a href="{{ workshop.submission.tracks[0].links[0].url }}" target="_blank" rel="noopener noreferrer">OpenReview</a>.
</div>

{% if workshop.papers.notice %}
<div class="callout">{{ workshop.papers.notice }}</div>
{% endif %}

{% if workshop.papers.publish and accepted_papers.size > 0 %}
<div class="paper-summary" aria-label="Accepted paper summary">
  <div class="paper-summary__item">
    <span>{{ accepted_papers.size }}</span>
    <strong>Accepted Papers</strong>
  </div>
  <div class="paper-summary__item">
    <span>{{ archival_papers.size }}</span>
    <strong>Proceedings/Archival</strong>
  </div>
  <div class="paper-summary__item">
    <span>{{ non_archival_papers.size }}</span>
    <strong>Non-Archival</strong>
  </div>
</div>

{% for category in workshop.papers.categories %}
{% assign category_papers = accepted_papers | where: "category", category.id %}
{% if category_papers.size > 0 %}
<section class="paper-section">
  <div class="section__header section__header--split">
    <div>
      <h2 class="section__title">{{ category.title }}</h2>
      {% if category.description %}
      <p class="paper-section__description">{{ category.description }}</p>
      {% endif %}
    </div>
    <span class="paper-count">{{ category_papers.size }} papers</span>
  </div>
  <div class="paper-list">
    {% for paper in category_papers %}
    <article class="paper-card">
      <div class="paper-card__top">
        <h3 class="paper-card__title">{{ paper.title | escape }}</h3>
        {% if paper.mode %}
        <div class="paper-card__badges">
          <span class="paper-pill{% if paper.mode == 'Oral' %} paper-pill--oral{% endif %}">{{ paper.mode }}</span>
        </div>
        {% endif %}
      </div>
      {% if paper.presenter %}
      <p class="paper-card__presenter">Presented by <strong>{{ paper.presenter | escape }}</strong></p>
      {% endif %}
      {% if paper.abstract %}
      <details class="paper-card__abstract">
        <summary>Abstract</summary>
        <p>{{ paper.abstract | escape }}</p>
      </details>
      {% endif %}
      {% if paper.forum %}
      <div class="paper-card__links">
        <a class="link-chip" href="{{ paper.forum }}" target="_blank" rel="noopener noreferrer">OpenReview</a>
      </div>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</section>
{% endif %}
{% endfor %}
{% else %}
<div class="callout">
  Accepted papers will be listed here once final author confirmations and publication details are available.
</div>
{% endif %}
