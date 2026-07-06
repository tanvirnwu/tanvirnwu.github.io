---
layout: default
title: Datasets
permalink: /pages/datasets
description: >-
  Public research datasets by Md Tanvir Islam — HazeSpace2M, LoLI-Street,
  and CDC (Crop Damage Classification).
---

<h1 class="section-heading">🗂️ Datasets</h1>

<div class="datasets-grid">
  {% for ds in site.data.datasets %}
  <article class="dataset-card reveal">
    <p class="dataset-card__tagline">{{ ds.tagline }}</p>
    <h2 class="dataset-card__name"><a href="{{ ds.url }}" target="_blank" rel="noreferrer noopener">{{ ds.name }}</a></h2>
    <p class="dataset-card__description">{{ ds.description }}</p>
    <div class="dataset-card__actions">
      {% if ds.links.dataset %}<a class="btn btn--small" href="{{ ds.links.dataset }}" target="_blank" rel="noreferrer noopener">Dataset</a>{% endif %}
      {% if ds.links.paper %}<a class="btn btn--small btn--outline" href="{{ ds.links.paper }}" target="_blank" rel="noreferrer noopener">Paper</a>{% endif %}
      {% if ds.bibtex %}
      <button class="btn btn--small btn--ghost bibtex-copy" type="button" data-bibtex-target="bibtex-ds-{{ forloop.index }}">Copy BibTeX</button>
      {% endif %}
    </div>
    {% if ds.bibtex %}
    <pre class="dataset-card__bibtex" id="bibtex-ds-{{ forloop.index }}" hidden>{{ ds.bibtex | escape }}</pre>
    {% endif %}
  </article>
  {% endfor %}
</div>
