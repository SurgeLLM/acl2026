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
              {% if d.old_date %}
                <span class="date-change">
                  <time class="date-change__old" datetime="{{ d.old_date }}">{{ d.old_date }}</time>
                  <span class="date-change__arrow" aria-hidden="true">→</span>
                  <time class="date-change__new" datetime="{{ d.date }}">{{ d.date }}</time>
                  <span class="date-change__badge">extended</span>
                </span>
              {% else %}
                <time datetime="{{ d.date }}">{{ d.date }}</time>
              {% endif %}
            {% endif %}
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
