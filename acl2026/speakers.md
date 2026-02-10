---
layout: default
title: "Speakers"
workshop_id: acl2026
permalink: /speakers/
image: /assets/Banner_ACL26.png
description: "Invited and tentative speakers for SURGeLLM @ ACL 2026."
---

{% include workshop.html %}

## Invited Speakers


{% if workshop.speakers.invited %}
  <div class="grid grid--2">
    {% for sp in workshop.speakers.invited %}
      <div class="person">
        {% if sp.photo %}
          <img class="person__photo" src="{{ sp.photo | relative_url }}" alt="Photo of {{ sp.name }}">
        {% else %}
          <div class="person__avatar" aria-hidden="true">{{ sp.name | slice: 0 }}</div>
        {% endif %}
        <div class="person__body">
          <div class="person__name">
            {% if sp.url %}
              <a href="{{ sp.url }}" target="_blank" rel="noopener noreferrer">{{ sp.name }}</a>
            {% else %}
              {{ sp.name }}
            {% endif %}
            {% if sp.status %}
              <span class="badge badge--{{ sp.status }}">{{ sp.status }}</span>
            {% endif %}
          </div>
          {% if sp.affiliation %}
            <div class="person__meta">{{ sp.affiliation }}</div>
          {% endif %}
          {% if sp.scholar or sp.linkedin %}
            <div class="person__links" aria-label="Links for {{ sp.name }}">
              {% if sp.scholar %}
                <a class="link-chip" href="{{ sp.scholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              {% endif %}
              {% if sp.linkedin %}
                <a class="link-chip" href="{{ sp.linkedin }}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {% endif %}
            </div>
          {% endif %}
          {% if sp.bio %}
            <div class="person__bio">{{ sp.bio }}</div>
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% else %}
  <div class="callout">Invited speakers will be announced soon.</div>
{% endif %}

{% if workshop.speakers.publish and workshop.speakers.tentative %}
  <div class="section">
    <h2>Tentative Speakers (TBC)</h2>
    <p class="callout">This list is subject to confirmation and may change.</p>
    <div class="grid grid--2">
      {% for sp in workshop.speakers.tentative %}
        <div class="person">
          {% if sp.photo %}
            <img class="person__photo" src="{{ sp.photo | relative_url }}" alt="Photo of {{ sp.name }}">
          {% else %}
            <div class="person__avatar" aria-hidden="true">{{ sp.name | slice: 0 }}</div>
          {% endif %}
          <div class="person__body">
            <div class="person__name">
              {% if sp.url %}
                <a href="{{ sp.url }}" target="_blank" rel="noopener noreferrer">{{ sp.name }}</a>
              {% else %}
                {{ sp.name }}
              {% endif %}
              {% if sp.status %}
                <span class="badge badge--{{ sp.status }}">{{ sp.status }}</span>
              {% endif %}
            </div>
            {% if sp.affiliation %}
              <div class="person__meta">{{ sp.affiliation }}</div>
            {% endif %}
            {% if sp.scholar or sp.linkedin %}
              <div class="person__links" aria-label="Links for {{ sp.name }}">
                {% if sp.scholar %}
                  <a class="link-chip" href="{{ sp.scholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                {% endif %}
                {% if sp.linkedin %}
                  <a class="link-chip" href="{{ sp.linkedin }}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {% endif %}
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
{% endif %}
