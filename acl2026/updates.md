---
layout: default
title: "Updates"
workshop_id: acl2026
permalink: /acl2026/updates/
image: /assets/Banner_ACL26.png
description: "Announcements and reminders for SURGeLLM @ ACL 2026."
---

{% include workshop.html %}

## Updates

<div class="callout">
  Add deadlines to your calendar: <a href="{{ '/acl2026/calendar.ics' | relative_url }}">calendar.ics</a>. Help share the CFP: <a href="{{ '/acl2026/promote/' | relative_url }}">promotion kit</a>.
</div>

{% if workshop.updates.items %}
  <div class="stack">
    {% for u in workshop.updates.items %}
      <div class="update">
        <div class="update__meta"><time datetime="{{ u.date }}">{{ u.date }}</time></div>
        <div class="update__title">{{ u.title }}</div>
        {% if u.body %}
          <div class="update__body">{{ u.body }}</div>
        {% endif %}
      </div>
    {% endfor %}
  </div>
{% else %}
  <div class="callout">No updates yet.</div>
{% endif %}
