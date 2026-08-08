---
layout: default
description: >-
  Md Tanvir Islam — doctoral research fellow at Kyungpook National University
  (Brain AI Lab, KNU). Computer Vision, Image Enhancement, Multimedia Security,
  and Health Informatics.
---

<!-- ============ Hero ============ -->
<section class="about-hero">
  <div class="hero-left reveal">
    <p class="hero-kicker">{{ site.data.profiles.role }} · {{ site.data.profiles.affiliation }}</p>
    <h1 class="hero-title">Md Tanvir Islam</h1>
    <p class="hero-lede">
      Researching <strong>robot manipulation</strong>, <strong>computer vision</strong>, and <strong>multimedia security</strong> with publications at BMVC, IROS, ICCV, WACV, ACM&nbsp;MM, ACCV, and IEEE&nbsp;TII.
      <a class="hero-read-more" id="hero-read-more" href="#" role="button" aria-haspopup="dialog">Full bio ↬</a>
    </p>
    <p class="hero-interests">
      <span class="interest-chip">Robot Manipulation</span>
      <span class="interest-chip">Computer Vision</span>
      <span class="interest-chip">Image Enhancement</span>
      <span class="interest-chip">Multimedia Security</span>
    </p>
    <div class="hero-social" aria-label="Profiles and contact">
      {% for link in site.data.profiles.links %}
      <a class="icon-link" href="{{ link.url }}" target="_blank" rel="noreferrer noopener" aria-label="{{ link.label }}" title="{{ link.label }}">
        {% case link.id %}
        {% when "scholar" %}<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
        {% when "github" %}<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        {% when "linkedin" %}<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
        {% else %}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
        {% endcase %}
      </a>
      {% endfor %}
      <button class="icon-link contact-trigger" type="button" aria-label="Contact" title="Contact">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
      </button>
      <button class="icon-link resume-trigger" type="button" data-resume-src="{{ site.data.profiles.resume | relative_url }}" aria-label="Resume" title="Resume">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
      </button>
    </div>
  </div>
  <div class="hero-right reveal">
    {% assign portraits = site.static_files | where_exp: "f", "f.path contains '/assets/portraits/'" | sort: "path" %}
    <div class="portrait-blob">
      {% if portraits.size > 1 %}
      <div class="portrait-stack">
        {% for photo in portraits %}
        <img src="{{ photo.path | relative_url }}" alt="Portrait of Md Tanvir Islam" class="portrait-image portrait-stack__img{% if forloop.first %} is-active{% endif %}" width="320" height="320"{% if forloop.first %} fetchpriority="high"{% else %} loading="lazy"{% endif %} />
        {% endfor %}
      </div>
      {% elsif portraits.size == 1 %}
      <img src="{{ portraits.first.path | relative_url }}" alt="Portrait of Md Tanvir Islam" class="portrait-image" width="320" height="320" fetchpriority="high" />
      {% else %}
      <img src="{{ site.logo | relative_url }}" alt="Portrait of Md Tanvir Islam" class="portrait-image" width="320" height="320" fetchpriority="high" />
      {% endif %}
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
      <p class="modal__text">Tanvir is a doctoral research fellow at Kyungpook National University (KNU), South Korea, doing research in Robot Manipulation under the supervision of <a class="urls" href="https://knu-brainai.github.io/professor/" target="_blank" rel="noreferrer noopener">Prof. Sangtae Ahn</a> in his <a class="urls" href="https://knu-brainai.github.io/" target="_blank" rel="noreferrer noopener">BrainAI Lab</a>. Tanvir completed his MS in Computer Science and Engineering at Sungkyunkwan University (SKKU) in South Korea, where he served as a Graduate Research Assistant at the VIS2KNOW Lab under the supervision of <a class="urls" href="https://scholar.google.co.kr/citations?user=k5oUZyQAAAAJ&hl=en" target="_blank" rel="noreferrer noopener">Prof. Khan Muhammad</a>. He has been recognized for his exceptional potential and awarded the prestigious Global Korea Scholarship (GKS). Based on his excellent academic and research performance, he was awarded the ``Academic Excellence Award Winner'' in 2024 by the NIIED, Government of South Korea. Currently, research assistant at VIS2KNOW Lab he is focusing on multiple emerging topics such as image dehazing, image enhancement, invisible watermarking, marked by several research outcomes published in high impactful conferences and journals such as <i><strong>BMVC'26, WACV'26, ICCV'25, CIKM'25, WWW'25, ACM MM'24, ACCV'24, Alexandria Engineering Journal and Engineering Application of Artificial Intelligence</strong></i>. Md Tanvir Islam's passion for innovative applications of computer science and artificial intelligence is evident through his <a class="urls" href="https://tanvirnwu.github.io/pages/publications" target="_blank">research outcomes</a> published at reputable venues.</p>
    </div>
  </div>
</div>

<!-- ============ Research updates ============ -->
<section class="news-section section-block reveal">
  <h2 class="section-heading">📢 Research Updates</h2>
  <div class="news-tabs" aria-label="Filter updates by year">
    {% for group in site.data.news %}
    <button class="filter-chip news-tab{% if forloop.first %} is-active{% endif %}" type="button" data-news-year="{{ group.year }}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}">{{ group.year }}</button>
    {% endfor %}
  </div>
  <div class="news-flow">
    {% for group in site.data.news %}
    <div class="news-flow__group" data-year="{{ group.year }}"{% unless forloop.first %} hidden{% endunless %}>
      <ul class="news-flow__list">
        {% for item in group.items %}
        <li class="news-flow__item{% if item.highlight %} news-flow__item--highlight{% endif %}">
          <span class="news-flow__date">{{ item.date }}</span>
          <span class="news-flow__text">{{ item.text }}</span>
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>

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

<!-- ============ Awards ============ -->
{% if site.data.awards.size > 0 %}
<section class="section-block reveal">
  <h2 class="section-heading">🏆 Awards &amp; Honors</h2>
  <div class="awards-carousel">
    <div class="awards-track" id="awards-track" tabindex="0" aria-label="Awards carousel">
    {% for award in site.data.awards %}
    <div class="award-card{% if award.highlight %} award-card--highlight{% endif %}">
      <div class="award-card__col">
        <span class="award-card__year">{{ award.year }}</span>
        <svg class="award-card__trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
      </div>
      <div class="award-card__body">
        <p class="award-card__title">{{ award.title }}</p>
        <p class="award-card__by">{{ award.by }}</p>
      </div>
    </div>
    {% endfor %}
    </div>
    <button class="awards-nav awards-nav--prev" type="button" aria-label="Previous award" hidden>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
    </button>
    <button class="awards-nav awards-nav--next" type="button" aria-label="Next award">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
    </button>
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
