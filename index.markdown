---
layout: default
title: "Stafford Brunk's Blog"
description: "Personal blog of Stafford Brunk, featuring adventures in Ruby, Rails, programming, and other fun things."
author: Stafford Brunk
---
{% for page in site.posts limit:5 %}
  {% assign body = page.content %}
  {% include article.html %}
{% endfor %}
