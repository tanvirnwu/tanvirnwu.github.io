---
layout: default
description: >-
  Md Tanvir Islam — doctoral research fellow at Kyungpook National University
  (Brain AI Lab, KNU). Computer Vision, Image Enhancement, Multimedia Security,
  and Health Informatics.
---

<!-- ============ Hero ============ -->
<section class="about-hero">
  <div class="hero-right reveal">
    <div class="portrait-wrapper">
      <img src="{{ site.logo | relative_url }}" alt="Portrait of Md Tanvir Islam" class="portrait-image" width="300" height="300" />
    </div>
  </div>
  <div class="hero-left reveal">
    <p class="hero-greeting">Hello!</p>
    <h1 class="hero-title">This is Tanvir!</h1>
    <span class="role-badge">{{ site.data.profiles.role }}</span>
    <div class="hero-description-block">
      <p class="hero-description">
        <span id="hero-description-short">
          Tanvir is a doctoral research fellow at Kyungpook National University (KNU), South Korea, doing research in Robot Manipulation under the supervision of <a class="urls" href="https://knu-brainai.github.io/professor/" target="_blank" rel="noreferrer noopener">Prof. Sangtae Ahn</a> in his <a class="urls" href="https://knu-brainai.github.io/" target="_blank" rel="noreferrer noopener">BrainAI Lab</a>. Tanvir completed his MS in Computer Science and Engineering at Sungkyunkwan University (SKKU) in South Korea, where he served as a Graduate Research Assistant at the VIS2KNOW Lab under the supervision of <a class="urls" href="https://scholar.google.co.kr/citations?user=k5oUZyQAAAAJ&hl=en" target="_blank" rel="noreferrer noopener">Prof. Khan Muhammad</a>. He has been recognized for his exceptional potential and awarded the prestigious Global Korea Scholarship (GKS)
        </span>
        <a class="hero-read-more" id="hero-read-more" href="#" role="button" aria-haspopup="dialog">...Read more ↬</a>
      </p>
    </div>
    <p class="hero-interests">
      <span class="hero-interests__label">Research Interests →</span>
      <span class="interest-chip">Computer Vision</span>
      <span class="interest-chip">Image Enhancement</span>
      <span class="interest-chip">Multimedia Security</span>
      <span class="interest-chip">Health Informatics</span>
    </p>
    <div class="hero-actions">
      {% assign scholar = site.data.profiles.links | where: "id", "scholar" | first %}
      {% if scholar %}<a class="btn" href="{{ scholar.url }}" target="_blank" rel="noreferrer noopener">Google Scholar</a>{% endif %}
      <button class="btn btn--outline resume-trigger" type="button" data-resume-src="{{ site.data.profiles.resume | relative_url }}">Resume</button>
      <button class="btn btn--outline contact-trigger" type="button">Contact</button>
    </div>
  </div>
</section>

<!-- Biography modal -->
<div class="modal" id="hero-description-modal" aria-hidden="true">
  <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="hero-description-modal-title">
    <div class="modal__header">
      <h2 class="modal__title" id="hero-description-modal-title">Tanvir's Biography</h2>
      <button type="button" class="modal__close" data-modal-close aria-label="Close full description">&times;</button>
    </div>
    <div class="modal__body">
      <p class="modal__text">Tanvir is a doctoral research fellow at Kyungpook National University (KNU), South Korea, doing research in Robot Manipulation under the supervision of <a class="urls" href="https://knu-brainai.github.io/professor/" target="_blank" rel="noreferrer noopener">Prof. Sangtae Ahn</a> in his <a class="urls" href="https://knu-brainai.github.io/" target="_blank" rel="noreferrer noopener">BrainAI Lab</a>. Tanvir completed his MS in Computer Science and Engineering at Sungkyunkwan University (SKKU) in South Korea, where he served as a Graduate Research Assistant at the VIS2KNOW Lab under the supervision of <a class="urls" href="https://scholar.google.co.kr/citations?user=k5oUZyQAAAAJ&hl=en" target="_blank" rel="noreferrer noopener">Prof. Khan Muhammad</a>. He has been recognized for his exceptional potential and awarded the prestigious Global Korea Scholarship (GKS). Based on his excellent academic and research performance, he was awarded the ``Academic Excellence Award Winner'' in 2024 by the NIIED, Government of South Korea. Currently, research assistant at VIS2KNOW Lab he is focusing on multiple emerging topics such as image dehazing, image enhancement, invisible watermarking, marked by several research outcomes published in high impactful conferences and journals such as <i><strong>WACV'26, ICCV'25, CIKM'25, WWW'25, ACM MM'24, ACCV'24, Alexandria Engineering Journal and Engineering Application of Artificial Intelligence</strong></i>. Md Tanvir Islam's passion for innovative applications of computer science and artificial intelligence is evident through his <a class="urls" href="https://tanvirnwu.github.io/pages/publications" target="_blank">research outcomes</a> published at reputable venues.</p>
    </div>
  </div>
</div>

<!-- ============ Research highlights ============ -->
{% assign featured = site.data.publications | where: "featured", true | sort: "featured_order" %}
{% if featured.size > 0 %}
<section class="section-block reveal">
  <h2 class="section-heading">🔬 Research Highlights</h2>
  <div class="highlights-grid">
    {% for pub in featured %}
    <article class="highlight-card">
      <div class="highlight-card__badges">
        <span class="pub-badge pub-badge--{{ pub.type }}">{{ pub.badge }}</span>
        {% if pub.rank %}<span class="pub-badge pub-badge--rank">{{ pub.rank | replace: "A*", "A<sup>*</sup>" }}</span>{% endif %}
        {% assign yy = pub.year | append: "" | slice: 2, 2 %}{% unless pub.badge contains yy %}<span class="pub-year">{{ pub.year }}</span>{% endunless %}
      </div>
      <h3 class="highlight-card__title">{{ pub.title }}</h3>
      <p class="highlight-card__venue">{{ pub.venue }}</p>
      <div class="highlight-card__links">
        {% if pub.links.paper %}<a class="btn btn--small" href="{{ pub.links.paper }}" target="_blank" rel="noreferrer noopener">Paper</a>{% endif %}
        {% if pub.links.code %}<a class="btn btn--small btn--ghost" href="{{ pub.links.code }}" target="_blank" rel="noreferrer noopener">Code</a>{% endif %}
        {% if pub.links.dataset %}<a class="btn btn--small btn--ghost" href="{{ pub.links.dataset }}" target="_blank" rel="noreferrer noopener">Dataset</a>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>
{% endif %}

<!-- ============ News timeline ============ -->
<section class="news-section section-block reveal">
  <h2 class="section-heading">📢 News</h2>
  {% for group in site.data.news %}
  <details class="news-year"{% if forloop.first %} open{% endif %}>
    <summary><strong>{{ group.year }}</strong></summary>
    <ul class="news-timeline">
      {% for item in group.items %}
      <li class="news-item{% if item.highlight %} news-item--highlight{% endif %}">
        <span class="news-date">{{ item.date }}</span>
        {{ item.text }}
      </li>
      {% endfor %}
    </ul>
  </details>
  {% endfor %}
</section>

<!-- ============ Awards ============ -->
{% if site.data.awards.size > 0 %}
<section class="section-block reveal">
  <h2 class="section-heading">🏆 Awards &amp; Honors</h2>
  <div class="awards-grid">
    {% for award in site.data.awards %}
    <div class="award-card{% if award.highlight %} award-card--highlight{% endif %}">
      <span class="award-card__year">{{ award.year }}</span>
      <div>
        <p class="award-card__title">{{ award.title }}</p>
        <p class="award-card__by">{{ award.by }}</p>
      </div>
    </div>
    {% endfor %}
  </div>
</section>
{% endif %}

<!-- ============ Experience & Education ============ -->
<section class="section-block reveal">
  <div class="two-col">
    <div>
      <h2 class="section-heading">💼 Experience</h2>
      <ul class="exp-timeline">
        {% for exp in site.data.experience %}
        <li class="exp-item">
          <span class="exp-item__period">{{ exp.period }}</span>
          <h3 class="exp-item__role">{{ exp.role }}</h3>
          <p class="exp-item__org">{% if exp.org_url %}<a class="urls" href="{{ exp.org_url }}" target="_blank" rel="noreferrer noopener">{{ exp.org }}</a>{% else %}{{ exp.org }}{% endif %}</p>
          {% if exp.detail %}<p class="exp-item__detail">{{ exp.detail }}</p>{% endif %}
        </li>
        {% endfor %}
      </ul>
    </div>
    <div>
      <h2 class="section-heading">🎓 Education</h2>
      <ul class="exp-timeline">
        {% for edu in site.data.education %}
        <li class="exp-item">
          {% if edu.period != "" %}<span class="exp-item__period">{{ edu.period }}</span>{% endif %}
          <h3 class="exp-item__role">{{ edu.degree }}</h3>
          <p class="exp-item__org">{{ edu.org }}</p>
          {% if edu.detail %}<p class="exp-item__detail">{{ edu.detail }}</p>{% endif %}
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>

<!-- ============ Academic service ============ -->
{% assign svc = site.data.service %}
{% if svc.conferences.size > 0 or svc.journals.size > 0 %}
<section class="section-block reveal">
  <h2 class="section-heading">🧑‍⚖️ Academic Service</h2>
  <div class="two-col">
    {% if svc.conferences.size > 0 %}
    <div class="service-group">
      <h3 class="service-group__title">Conference Reviewer</h3>
      <ul class="service-list">
        {% for c in svc.conferences %}
        <li><strong>{{ c.name }}</strong>{% if c.full %} — {{ c.full }}{% endif %}</li>
        {% endfor %}
      </ul>
    </div>
    {% endif %}
    {% if svc.journals.size > 0 %}
    <div class="service-group">
      <h3 class="service-group__title">Journal Reviewer</h3>
      <ul class="service-chips">
        {% for j in svc.journals %}
        <li class="interest-chip">{{ j.name }}</li>
        {% endfor %}
      </ul>
    </div>
    {% endif %}
  </div>
</section>
{% endif %}
