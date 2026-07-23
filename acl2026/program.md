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
      {% if workshop.program.video_playlist_url %}
        <a class="link-chip link-chip--video" href="{{ workshop.program.video_playlist_url }}" target="_blank" rel="noopener noreferrer" title="Open the SURGeLLM video playlist">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l10 7-10 7V5z"></path></svg>
          <span>Video playlist</span>
        </a>
      {% endif %}
    </div>
  </div>
</section>

<div class="callout">
  Want to attend or present remotely? We aim to support hybrid participation (subject to ACL policies). See <a href="{{ '/venue/' | relative_url }}">Venue</a> and <a href="{{ '/faq/' | relative_url }}">FAQ</a>.
</div>

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
        <span>Room: Harbor D</span>
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
            {% assign session_layout_class = ' schedule-session--single' %}
            {% if b.speakers or b.description %}
              {% assign session_layout_class = '' %}
            {% endif %}
            {% if b.talk_title %}
              {% assign session_layout_class = ' schedule-session--with-talk' %}
            {% endif %}
            <div class="schedule-session{{ session_layout_class }}">
              <div class="schedule-session__main">
                <h3>{{ b.title }}</h3>
                {% if b.description %}
                  <p>{{ b.description }}</p>
                {% endif %}
                {% if b.topic %}
                  <p class="schedule-session__topic"><strong>Panel Topic:</strong> {{ b.topic }}</p>
                {% endif %}
                {% unless b.talk_title %}
                  {% if b.video_url %}
                    <a class="link-chip link-chip--video schedule-session__video-link" href="{{ b.video_url }}" target="_blank" rel="noopener noreferrer" title="{{ b.video_label | default: 'Watch video' }}">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l10 7-10 7V5z"></path></svg>
                      <span>{{ b.video_label | default: "Watch video" }}</span>
                    </a>
                  {% endif %}
                {% endunless %}
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
              {% if b.talk_title %}
                <div class="schedule-session__talk">
                  <span class="schedule-session__talk-label">Talk title</span>
                  <strong class="schedule-session__talk-title">{{ b.talk_title }}</strong>
                  {% if b.video_url %}
                    <a class="link-chip link-chip--video schedule-session__video-link" href="{{ b.video_url }}" target="_blank" rel="noopener noreferrer" title="{{ b.video_label | default: 'Watch video' }}">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l10 7-10 7V5z"></path></svg>
                      <span>{{ b.video_label | default: "Watch video" }}</span>
                    </a>
                  {% endif %}
                  {% if b.slides_url %}
                    <a class="link-chip link-chip--resource schedule-session__video-link" href="{{ b.slides_url | relative_url }}" target="_blank" rel="noopener noreferrer" title="{{ b.slides_label | default: 'Talk slides' }}">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h8l4 4V20.5H6z"></path><path d="M14 3.5v4h4M9 12h6M9 16h6"></path></svg>
                      <span>{{ b.slides_label | default: "Talk slides" }}</span>
                    </a>
                  {% endif %}
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

**What to expect**
- Invited talks from leaders across NLP, IR, data management, and visualization
- Contributed oral sessions selected from accepted papers
- Poster sessions paired with coffee breaks and networking
- Industry panel discussion and community Q&A
- A Best Paper Award and two Best Student Paper Awards
