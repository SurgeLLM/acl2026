---
layout: default
title: "Program"
workshop_id: acl2026
permalink: /program/
image: /assets/Banner_ACL26.png
description: "SURGeLLM @ ACL 2026 program overview, format, and schedule."
---

{% include workshop.html %}
{% assign invited_speakers = workshop.speakers.invited | default: empty %}
{% assign panelists = workshop.speakers.panelists | default: empty %}

## Program

<section class="program-intro">
  <div class="program-intro__body">
    <p>
      SURGeLLM is a <strong>full-day</strong> workshop featuring invited talks, contributed oral sessions, posters, networking, an industry panel, and awards.
      The schedule below is the current program.
    </p>
    <div class="program-links" aria-label="Program links">
      <a class="link-chip" href="{{ '/speakers/' | relative_url }}">Speakers</a>
      <a class="link-chip" href="{{ '/papers/' | relative_url }}">Accepted Papers</a>
      <a class="link-chip" href="{{ '/venue/' | relative_url }}">Venue</a>
      <a class="link-chip" href="{{ '/faq/' | relative_url }}">FAQ</a>
    </div>
  </div>
</section>

<div class="callout">
  Want to attend or present remotely? We aim to support hybrid participation (subject to ACL policies). See <a href="{{ '/venue/' | relative_url }}">Venue</a> and <a href="{{ '/faq/' | relative_url }}">FAQ</a>.
</div>

**What to expect**
- Invited talks from leaders across NLP, IR, data management, and visualization
- Contributed oral sessions selected from accepted papers
- Poster sessions paired with coffee breaks and networking
- Industry panel discussion and community Q&A
- Closing remarks and awards

**Awards (planned)** We are exploring sponsorships to support community awards (e.g., best paper/best student paper), subject to ACL policies and available funding.

{% if workshop.program.notes %}
<div class="callout">
  {% for n in workshop.program.notes %}
    <div>{{ n }}</div>
  {% endfor %}
</div>
{% endif %}

{% if workshop.program.sections %}
<section class="program-agenda" id="schedule">
  <div class="agenda-shell">
    <div class="agenda-heading">
      <div>
        <p class="agenda-kicker">Confirmed program</p>
        <h3>Workshop Agenda</h3>
      </div>
      <div class="agenda-meta" aria-label="Workshop schedule summary">
        <span>08:30–17:30</span>
        <span>San Diego</span>
        <span>Full-day workshop</span>
      </div>
    </div>
    <div class="schedule" aria-label="SURGeLLM workshop schedule">
      {% for section in workshop.program.sections %}
        {% if section.title %}
          <div class="schedule-section">{{ section.title }}</div>
        {% endif %}
        {% for b in section.blocks %}
          {% assign session_type = b.type | default: 'session' %}
          <div class="schedule-item schedule-item--{{ session_type }}">
            <span class="schedule-time">{{ b.time }}</span>
            <span class="schedule-marker" aria-hidden="true"></span>
            <div class="schedule-session{% unless b.speakers or b.description %} schedule-session--single{% endunless %}">
              <div class="schedule-session__main">
                <h3>{{ b.title }}</h3>
                {% if b.description %}
                  <p>{{ b.description }}</p>
                {% endif %}
              </div>
              {% if b.speakers %}
                <div class="schedule-people{% if b.speakers.size > 1 %} schedule-people--panel{% endif %}">
                  {% for speaker_name in b.speakers %}
                    {% assign speaker_url = '' %}
                    {% assign speaker_photo = '' %}
                    {% assign speaker_affiliation = '' %}
                    {% for sp in invited_speakers %}
                      {% if sp.name == speaker_name %}
                        {% assign speaker_url = sp.url | default: sp.scholar %}
                        {% if speaker_url == nil or speaker_url == '' %}
                          {% assign speaker_url = sp.linkedin | default: '' %}
                        {% endif %}
                        {% assign speaker_photo = sp.photo | default: '' %}
                        {% assign speaker_affiliation = sp.affiliation | default: '' %}
                      {% endif %}
                    {% endfor %}
                    {% for sp in panelists %}
                      {% if sp.name == speaker_name %}
                        {% assign speaker_url = sp.url | default: sp.scholar %}
                        {% if speaker_url == nil or speaker_url == '' %}
                          {% assign speaker_url = sp.linkedin | default: '' %}
                        {% endif %}
                        {% assign speaker_photo = sp.photo | default: '' %}
                        {% assign speaker_affiliation = sp.affiliation | default: '' %}
                      {% endif %}
                    {% endfor %}
                    <div class="schedule-person">
                      {% if speaker_photo != '' %}
                        <img class="schedule-person__photo" src="{{ speaker_photo | relative_url }}" alt="Photo of {{ speaker_name }}">
                      {% else %}
                        <span class="schedule-person__avatar" aria-hidden="true">{{ speaker_name | slice: 0 }}</span>
                      {% endif %}
                      <span class="schedule-person__copy">
                        {% if speaker_url != '' %}
                          <a class="schedule-person__name" href="{{ speaker_url }}" target="_blank" rel="noopener noreferrer">{{ speaker_name }}</a>
                        {% else %}
                          <strong class="schedule-person__name">{{ speaker_name }}</strong>
                        {% endif %}
                        {% if speaker_affiliation != '' %}
                          <span>{{ speaker_affiliation }}</span>
                        {% endif %}
                      </span>
                    </div>
                  {% endfor %}
                </div>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      {% endfor %}
    </div>
  </div>
</section>
{% elsif workshop.program.blocks %}
<h3>Schedule</h3>
<div class="card">
  <table class="table schedule-table">
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Session</th>
      </tr>
    </thead>
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
