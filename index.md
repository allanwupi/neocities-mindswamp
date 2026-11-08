---
layout: home.liquid
pageTitle: Welcome to the Mind Swamp
quoteOfTheDay: A drunk man will find his way home, but a drunk bird may get lost forever.
quoteSource: Shizuo Kakutani
---
## All Posts
{% for post in collections.posts %}
    <h3><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h3>
    <em>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}
