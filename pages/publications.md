---
layout: default
title: Publications
permalink: /pages/publications
description: >-
  Publications, patents, and papers under review by Md Tanvir Islam —
  ICCV, WACV, ACM MM, WWW, CIKM, ACCV, and SCIE journals.
---

<h1 class="section-heading">📄 Publications</h1>

<p class="pub-meta-notes"><strong>Disclaimer:</strong> All papers are for personal use only. Reproduction or distribution without permission from the copyright holders is prohibited.</p>
<p class="pub-meta-notes"><strong><sup>1</sup></strong>Equal Contributions | <strong><sup>*</sup></strong>Corresponding Author | <strong>BK:</strong> Brain Korea | <strong>AR:</strong> Acceptance Rate</p>

{% assign pubs = site.data.publications %}
{% assign conference_count = pubs | where: "type", "conference" | size %}
{% assign journal_count = pubs | where: "type", "journal" | size %}
{% assign patent_count = pubs | where: "type", "patent" | size %}
{% assign review_count = pubs | where: "type", "review" | size %}

<!-- Stats -->
{% assign gs = site.data.scholar %}
<div class="pub-stats reveal">
  <div class="pub-stat"><span class="pub-stat__num">{{ conference_count }}</span><span class="pub-stat__label">Conference Papers</span></div>
  <div class="pub-stat"><span class="pub-stat__num">{{ journal_count }}</span><span class="pub-stat__label">Journal Articles</span></div>
  <div class="pub-stat"><span class="pub-stat__num">{{ patent_count }}</span><span class="pub-stat__label">Patents</span></div>
  <div class="pub-stat"><span class="pub-stat__num">{{ review_count }}</span><span class="pub-stat__label">Under Review</span></div>
  {% if gs.citations %}
  <div class="pub-stat" title="Google Scholar, updated {{ gs.updated }}"><span class="pub-stat__num">{{ gs.citations }}</span><span class="pub-stat__label">Citations</span></div>
  <div class="pub-stat" title="Google Scholar, updated {{ gs.updated }}"><span class="pub-stat__num">{{ gs.h_index }}</span><span class="pub-stat__label">h-index</span></div>
  {% endif %}
</div>

<!-- Filters + search -->
<div class="pub-controls">
  <div class="filter-group" role="group" aria-label="Filter by type">
    <button class="filter-chip is-active" type="button" data-filter-type="all">All</button>
    <button class="filter-chip" type="button" data-filter-type="conference">Conferences</button>
    <button class="filter-chip" type="button" data-filter-type="journal">Journals</button>
    <button class="filter-chip" type="button" data-filter-type="patent">Patents</button>
    <button class="filter-chip" type="button" data-filter-type="review">Under Review</button>
  </div>
  <input class="pub-search" id="pub-search" type="search" placeholder="Search title, author, venue…" aria-label="Search publications">
</div>

{% assign years = "" | split: "" %}
{% for pub in pubs %}
  {% assign year_str = pub.year | append: "" %}
  {% unless years contains year_str %}{% assign years = years | push: year_str %}{% endunless %}
{% endfor %}
{% assign years = years | sort | reverse %}

<div class="pub-controls" role="group" aria-label="Filter by year">
  <div class="filter-group">
    <button class="filter-chip is-active" type="button" data-filter-year="all">All Years</button>
    {% for year in years %}
    <button class="filter-chip" type="button" data-filter-year="{{ year }}">{{ year }}</button>
    {% endfor %}
  </div>
</div>

<!-- Publication list grouped by year -->
{% for year in years %}
<section class="pub-year-group">
  <h2 class="pub-year-heading">{{ year }}</h2>
  <div class="pub-list">
    {% for pub in pubs %}
      {% assign pub_year = pub.year | append: "" %}
      {% if pub_year == year %}{% include pub-card.html pub=pub %}{% endif %}
    {% endfor %}
  </div>
</section>
{% endfor %}

<p class="pub-empty">No publications match your filters.</p>
