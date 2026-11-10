---
layout: home.liquid
pageTitle: Welcome to the Mind Swamp
subtitle: I'm Allan, a sleep-deprived computer science and electrical engineering student at the University of Western Australia (UWA). Here you will find my scattered notes and thoughts.

quoteOfTheDay: A drunk man will find his way home, but a drunk bird may get lost forever.
quoteSource: Shizuo Kakutani

currentlyReading: Nothing much...
currentlyPlaying: "Root: A Game of Woodland Might and Right"
currentlyWatching: "Avatar: Seven Havens, Ranma 1/2"
---

## Uni & Work
<ul>
{%- for post in collections['uni & work'] -%}
    <li>
        <em><b>
                <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        </b></em>
    </li>
{%- endfor -%}
</ul>

## Personal Projects
<ul>
{%- for post in collections['projects'] -%}
    <li>
        <em><b>
                <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        </b></em>
    </li>
{%- endfor -%}
</ul>

## Fun & Games
<ul>
{%- for post in collections['fun & games'] -%}
    <li>
        <em><b>
                <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        </b></em>
    </li>
{%- endfor -%}
</ul>
