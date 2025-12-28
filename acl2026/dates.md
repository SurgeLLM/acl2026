---
layout: default
title: "Important Dates"
workshop_id: acl2026
permalink: /acl2026/dates/
image: /assets/Banner_ACL26.png
description: "SURGeLLM @ ACL 2026 important dates and deadlines (AoE)."
---

{% include workshop.html %}

## Important Dates

{% if workshop.dates.timezone %}
All deadlines are end-of-day in {{ workshop.dates.timezone }}.
{% endif %}

<div class="callout">
  Add these dates to your calendar: <a href="{{ '/acl2026/calendar.ics' | relative_url }}">calendar.ics</a>.
</div>

{% include countdown.html kicker="Next key deadline" %}

<div class="card">
  <table class="table">
    <tbody>
      {% for d in workshop.dates.items %}
        <tr>
          <th scope="row">{{ d.label }}</th>
          <td>
            {% if d.date_end %}
              <time datetime="{{ d.date }}">{{ d.date }}</time> – <time datetime="{{ d.date_end }}">{{ d.date_end }}</time>
            {% else %}
              <time datetime="{{ d.date }}">{{ d.date }}</time>
            {% endif %}
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
