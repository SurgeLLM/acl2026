---
layout: default
title: "Organizers & Committee"
workshop_id: acl2026
permalink: /organizers/
image: /assets/Banner_ACL26.png
description: "Organizing committee, roles, and program committee for SURGeLLM @ ACL 2026."
---

{% include workshop.html %}

<div class="callout">
  General questions and accessibility requests: <a href="mailto:{{ workshop.site.contact_email }}">{{ workshop.site.contact_email }}</a>.
</div>

## Organizing Committee

{% if workshop.organizers.items %}
  <div class="grid grid--2">
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
          {% if o.email %}
            <div class="person__bio"><a href="mailto:{{ o.email }}">{{ o.email }}</a></div>
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endif %}

{% if workshop.organizers.roles %}
  <div class="section">
    <h2>Roles</h2>
    <div class="card">
      <table class="table">
        <tbody>
          {% for r in workshop.organizers.roles %}
            <tr>
              <th scope="row">{{ r.label }}</th>
              <td>{{ r.names | join: ", " }}</td>
            </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </div>
{% endif %}

{% if workshop.committee.program_committee %}
  <div class="section">
    <h2>Program Committee</h2>
    <div class="card">
      <div class="name-grid">
        {% for pc in workshop.committee.program_committee %}
          <div class="name-grid__item">
            <div class="name-grid__name">{{ pc.name }}</div>
            {% if pc.affiliation %}
              <div class="name-grid__meta">{{ pc.affiliation }}</div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
{% endif %}

{% if workshop.committee.additional_reviewers %}
  <div class="section">
    <h2>Additional Reviewers</h2>
    <div class="card">
      <div class="name-grid name-grid--compact">
        {% for r in workshop.committee.additional_reviewers %}
          <div class="name-grid__item">
            <div class="name-grid__name">{{ r.name }}</div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
{% endif %}
