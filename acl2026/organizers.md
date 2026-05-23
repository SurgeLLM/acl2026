---
layout: default
title: "Organizers"
workshop_id: acl2026
permalink: /organizers/
image: /assets/Banner_ACL26.png
description: "Organizing committee for SURGeLLM @ ACL 2026."
wide: true
---

{% include workshop.html %}

<div class="callout">
  General questions and accessibility requests: <a href="mailto:{{ workshop.site.contact_email }}">{{ workshop.site.contact_email }}</a>.
</div>

## Organizing Committee

{% if workshop.organizers.items %}
  <div class="grid grid--organizers">
    {% for o in workshop.organizers.items %}
      <div class="person">
        {% if o.photo %}
          <img class="person__photo" src="{{ o.photo | relative_url }}" alt="Photo of {{ o.name }}">
        {% else %}
          <div class="person__avatar" aria-hidden="true">{{ o.name | slice: 0 }}</div>
        {% endif %}
        <div class="person__body">
          <div class="person__name">
            {% if o.url %}
              <a href="{{ o.url }}" target="_blank" rel="noopener noreferrer">{{ o.name }}</a>
            {% else %}
              {{ o.name }}
            {% endif %}
          </div>
          {% if o.affiliation %}
            <div class="person__meta">{{ o.affiliation }}</div>
          {% endif %}
          {% if o.title %}
            <div class="person__title">{{ o.title }}</div>
          {% endif %}
          {% if o.bio %}
            <div class="person__bio">{{ o.bio }}</div>
          {% endif %}
          {% if o.url or o.scholar or o.linkedin %}
            <div class="person__links" aria-label="Links for {{ o.name }}">
              {% if o.url %}
                <a class="link-chip" href="{{ o.url }}" target="_blank" rel="noopener noreferrer">Website</a>
              {% endif %}
              {% if o.scholar %}
                <a class="link-chip" href="{{ o.scholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              {% endif %}
              {% if o.linkedin %}
                <a class="link-chip" href="{{ o.linkedin }}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {% endif %}
            </div>
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endif %}

{% if workshop.committee.publish and workshop.committee.program_committee %}
  <div class="section">
    <h2>Program Committee</h2>
    <div class="card">
      <div class="name-grid name-grid--three">
        {% for pc in workshop.committee.program_committee %}
          <div class="name-grid__item{% if pc.photo %} name-grid__item--profile{% endif %}">
            {% if pc.photo %}
              <img class="name-grid__photo" src="{{ pc.photo | relative_url }}" alt="Photo of {{ pc.name }}">
            {% endif %}
            <div>
              <div class="name-grid__name">
                {% if pc.url %}
                  <a href="{{ pc.url }}" target="_blank" rel="noopener noreferrer">{{ pc.name }}</a>
                {% else %}
                  {{ pc.name }}
                {% endif %}
              </div>
              {% if pc.affiliation %}
                <div class="name-grid__meta">{{ pc.affiliation }}</div>
              {% endif %}
              {% if pc.focus %}
                <div class="name-grid__meta">{{ pc.focus }}</div>
              {% endif %}
              {% if pc.bio %}
                <div class="name-grid__bio">{{ pc.bio }}</div>
              {% endif %}
              {% if pc.scholar or pc.linkedin %}
                <div class="name-grid__links" aria-label="Links for {{ pc.name }}">
                  {% if pc.scholar %}
                    <a class="link-chip" href="{{ pc.scholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                  {% endif %}
                  {% if pc.linkedin %}
                    <a class="link-chip" href="{{ pc.linkedin }}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  {% endif %}
                </div>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
{% else %}
  <div class="section">
    <h2>Program Committee</h2>
    <div class="callout">Program committee will be announced soon.</div>
  </div>
{% endif %}
