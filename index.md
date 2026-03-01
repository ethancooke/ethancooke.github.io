---
layout: default
title: Home
---

## Welcome

In these latter days of code, when many hands labor by the pale light of many
screens, there has arisen a new companion to the craft: not a hammer of iron,
nor a pen of feather, but a strange counsel wrought of language and pattern.
Some name it a herald of speed, some a shadow of error; and both speak a part
of the truth. For it may raise a scaffold in a moment, yet it cannot bear the
weight of judgment, nor choose what ought to be built.

So the wise developer keeps both daring and discipline. Let the machine gather
the first stones, trace the rough road, and recall forgotten lore; but let the
human mind set the boundary, test the bridge, and answer for the realm it ships.
In this, perhaps, lies the present age of software: not the passing of craft,
but its proving.

## Posts

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h3>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h3>
  </li>
  {% endfor %}
</ul>
{% else %}
No posts yet. This section will populate automatically when new posts are added.
{% endif %}
