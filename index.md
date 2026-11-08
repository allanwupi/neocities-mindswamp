---
layout: home.liquid
pageTitle: Welcome to the Mind Swamp
subtitle: A personal website for my scattered notes and thoughts. Like a digital garden, but messier.
quoteOfTheDay: A drunk man will find his way home, but a drunk bird may get lost forever.
quoteSource: Shizuo Kakutani
---
## Fun & Games
{% for post in collections['fun and games'] %}
    <h3><span class="htab"></span><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h3>
    <em><span class="htab"></span>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}

## Uni & Work
{% for post in collections['uni and work'] %}
    <h3><span class="htab"></span><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h3>
    <em><span class="htab"></span>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}

## Personal Projects
{% for post in collections['personal projects'] %}
    <h3><span class="htab"></span><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h3>
    <em><span class="htab"></span>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}