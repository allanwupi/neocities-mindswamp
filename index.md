---
layout: home.liquid
date: git Last Modified
pageTitle: Welcome to the Mind Swamp
subtitle: I'm Allan, a sleep-deprived computer science and electrical engineering student at the University of Western Australia (UWA). Here you will find my scattered notes and thoughts.

quoteText: Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.
quoteSource: Stan Kelly-Bootle

currentlyReading: "Introduction to Biomedical Engineering (3rd Edition)"
currentlyPlaying: "Root, The Old King's Crown"
currentlyWatching: "Ranma 1/2, Avatar: Seven Havens"
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
