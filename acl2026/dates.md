---
layout: default
title: "Important Dates"
workshop_id: acl2026
permalink: /dates/
image: /assets/Banner_ACL26.png
description: "SURGeLLM @ ACL 2026 important dates and deadlines (AoE)."
---

{% include workshop.html %}

## Important Dates

{% assign dates = workshop.dates.items | default: empty | where_exp: "d", "d.internal != true" %}

{% if workshop.dates.timezone %}
All deadlines are end-of-day in {{ workshop.dates.timezone }}.
{% endif %}

<div class="callout">
  Add these dates to your calendar: <a href="{{ '/calendar.ics' | relative_url }}">calendar.ics</a>.
</div>

{% include countdown.html dates=dates kicker="Next key deadline" %}

<div class="card">
  <table class="table">
    <tbody>
      {% for d in dates %}
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
