---
layout: wiki
title: wiki
permalink: /wiki.html
---

<ul class="listing">
{% assign categories = site.wiki | group_by_exp: "item", "item.path | split: '/' | pop | join: '/'" | sort: "name" %}

{% for category in categories %}
  <li class="listing-seperator" id="{{ category.name }}"><h2>{{ category.name | remove: "_wiki/" }}</h2></li>
  {% for wiki in site.wiki %}
  {% assign wikipath = wiki.path  | split: '/' | pop | join: '/' %}
  {% if wikipath == category.name %}
    <li class="listing-item">
      <a href="{{ wiki.url }}" title="{{ wiki.title }}">{{ wiki.title }}</a>
      <span class="wiki_tags">
        {% for tag in wiki.tags %}
        <span>{{ tag }}</span>
        {% endfor %}
      </span>
    </li>
  {% endif %}
  {% endfor %}
{% endfor %}
</ul>