---
layout: home.liquid
pageTitle: Welcome to the Mind Swamp
subtitle: The scattered notes and thoughts of a computer science and electrical engineering student.
quoteOfTheDay: A drunk man will find his way home, but a drunk bird may get lost forever.
quoteSource: Shizuo Kakutani
---

## Uni & Work
{% for post in collections['uni and work'] %}
    <em>
        <h3>
            <span class="htab"></span>
            <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        </h3>
    </em>
    <em>
        <span class="htab"></span>
        {{ post.date | date: "%Y-%m-%d" }}
    </em>
{% endfor %}

## Personal Projects
{% for post in collections['personal projects'] %}
    <em>
        <h3>
            <span class="htab"></span>
            <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        </h3>
    </em>
    <em>
        <span class="htab"></span>
        {{ post.date | date: "%Y-%m-%d" }}
    </em>
{% endfor %}

## Fun & Games
{% for post in collections['fun and games'] %}
    <em>
        <h3>
            <span class="htab"></span>
            <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        </h3>
    </em>
    <em>
        <span class="htab"></span>
        {{ post.date | date: "%Y-%m-%d" }}
    </em>
{% endfor %}
