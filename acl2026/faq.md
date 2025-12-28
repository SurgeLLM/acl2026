---
layout: default
title: "FAQ"
workshop_id: acl2026
permalink: /acl2026/faq/
image: /assets/Banner_ACL26.png
description: "Frequently asked questions about SURGeLLM @ ACL 2026 submissions and attendance."
---

{% include workshop.html %}

## FAQ

{% if workshop.faq.items %}
  <div class="faq">
    {% for item in workshop.faq.items %}
      <details class="faq__item">
        <summary class="faq__q">{{ item.q }}</summary>
        <div class="faq__a">
          {{ item.a }}
        </div>
      </details>
    {% endfor %}
  </div>
{% endif %}

<div class="callout">
  Still have questions? Email <a href="mailto:{{ workshop.site.contact_email }}">{{ workshop.site.contact_email }}</a>.
</div>
