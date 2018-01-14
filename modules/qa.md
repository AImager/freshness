---
layout: qa
title: qa
permalink: /qa.html
---


<ul class="listing">

{% assign categories = site.qa | group_by: "category" | sort: "name" %}


{% for category in categories %}
  <li class="listing-seperator" id="{{ category.name }}"><h2>{{ category.name }}</h2></li>
{% for qa in site.qa %}
{% if qa.category == category.name %}
  <li class="listing-item">
  <!--<time datetime="{{ wiki.category }}">{{ wiki.date | date:"%Y-%m-%d" }}</time>-->
  <a href="{{ qa.url }}" title="{{ qa.title }}">{{ qa.title }}</a>
  <!-- <span class="wiki_tags">{% for tag in qa.tags %}
  <span>{{ tag }}</span>
  {% endfor %}
  </span> -->

  </li>



{% endif %}
{% endfor %}
{% endfor %}
</ul>
