---
layout: home.liquid
date: git Last Modified
pageTitle: Welcome to the Mind Swamp
subtitle: I'm Allan, a sleep-deprived computer science and electrical engineering student at the University of Western Australia (UWA). Here you will find my scattered notes and thoughts.

quoteText: Ludwig Boltzmann, who spent much of his life studying statistical mechanics, died in 1906, by his own hand. Paul Ehrenfest, carrying on the work, died similarly in 1933. Now it is our turn to study statistical mechanics.
quoteSource: David L. Goodstein, States of Matter

currentlyReading: "Think Complexity, Introduction to Biomedical Engineering"
currentlyPlaying: "Slay the Spire 2, The Old King's Crown, Root"
currentlyWatching: "Ranma 1/2, Avatar: Seven Havens"
---

## Uni & Work
<ul>
{%- assign posts = collections['uni & work'] | sort: "date" | reverse -%}
{%- for post in posts -%}
    <li>
        <em><b>
                <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        </b></em>
    </li>
{%- endfor -%}
</ul>

## Personal Projects
<ul>
{%- assign posts = collections['projects'] | sort: "date" | reverse -%}
{%- for post in posts -%}
    <li>
        <em><b>
                <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        </b></em>
    </li>
{%- endfor -%}
</ul>

## Fun & Games
<ul>
{%- assign posts = collections['fun & games'] | sort: "date" | reverse -%}
{%- for post in posts -%}
    <li>
        <em><b>
                <a href="{{ post.url }}">{{ post.data.pageTitle }}</a>
        </b></em>
    </li>
{%- endfor -%}
</ul>
