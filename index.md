---
layout: default
---

<style>
  a {
    color: #3680E8;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #2D6CC5;
    text-decoration: underline;
    background: transparent;
  }

  /* Hide the GitHub profile button rendered by the theme header */
  a.btn[href*="github.com"] {
    display: none !important;
  }

  .urls {
    color: #3680E8;
  }

  .urls:hover,
  .urls:focus {
    background-color: transparent;
    color: #3680E8;
    font-weight: normal;
    text-decoration: underline;
  }

  .news-year {
    border: 1px solid rgba(54, 128, 232, 0.15);
    border-radius: 6px;
    margin-bottom: 12px;
    background-color: rgba(54, 128, 232, 0.06);
  }

  .news-year summary {
    cursor: pointer;
    list-style: none;
    padding: 10px 14px;
    font-size: 15px;
    font-weight: 600;
    color: #343434;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .news-year[open] summary {
    background-color: #3680E8;
    color: #ffffff;
    border-radius: 6px 6px 0 0;
  }

  .news-year[open] summary strong {
    color: #ffffff;
  }

  .news-items {
    list-style: disc;
    padding: 10px 24px 14px;
    margin: 0;
    font-size: 15px;
    color: #343434;
    line-height: 1.6;
  }

  .news-items li {
    margin-bottom: 4px;
  }
</style>







<!-- Add the button here -->
  <button id="scrollButton" onclick="scrollToPosition()" style="position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; background-color: #3680E8; color: white; border: none; border-radius: 5px; cursor: pointer;">&#8593;</button>


<script>
function scrollToPosition() {
  if (window.pageYOffset === 0) {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  } else {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

window.onscroll = function() {
  const scrollButton = document.getElementById('scrollButton');
  if (window.pageYOffset === 0) {
    scrollButton.innerHTML = '&#8595;'; // Down arrow
  } else {
    scrollButton.innerHTML = '&#8593;'; // Up arrow
  }
};
</script>




<section class="about-hero">
  <div class="hero-right">
    <div class="portrait-wrapper">
      <img src="{{ site.logo | relative_url }}" alt="Portrait of Md Tanvir Islam" class="portrait-image" />
    </div>
  </div>
  <div class="hero-left">
    <p class="hero-greeting">Hello!</p>
    <h1 class="hero-title">This is Tanvir!</h1>
    <button class="role-badge" type="button">Research Fellow</button>
    <div class="hero-description-block">
      <p class="hero-description" id="hero-description">
        <span class="hero-description__text" id="hero-description-short">
          Tanvir is a doctoral research fellow at Kyungpook National University (KNU), South Korea, doing research in Robot Manipulation under the supervision of <a class="urls" href="https://knu-brainai.github.io/professor/" target="_blank">Prof. Sangtae Ahn</a> in his <a class="urls" href="https://knu-brainai.github.io/" target="_blank">BrainAI Lab</a>. Tanvir completed his MS in Computer Science and Engineering at Sungkyunkwan University (SKKU) in South Korea, where he served as a Graduate Research Assistant at the VIS2KNOW Lab under the supervision of <a class="urls" href="https://scholar.google.co.kr/citations?user=k5oUZyQAAAAJ&hl=en" target="_blank">Prof. Khan Muhammad</a>. He has been recognized for his exceptional potential and awarded the prestigious Global Korea Scholarship (GKS).
        </span>
        <a class="hero-read-more" id="hero-read-more" href="#" role="button" aria-haspopup="dialog">…Read more</a>
      </p>
    </div>
    <p class="hero-interests">
      <span class="hero-interests__label">Research Interests →</span>
      <span class="hero-interests__list">Computer Vision, Image Enhancement, Multimedia Security, Health Informatics</span>
    </p>
  </div>
</section>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const description = document.getElementById('hero-description');
    const descriptionText = document.getElementById('hero-description-short');
    const readMoreButton = document.getElementById('hero-read-more');
    const modal = document.getElementById('hero-description-modal');
    const modalDialog = modal?.querySelector('.hero-description-modal__dialog');
    const modalClose = modal?.querySelector('.hero-description-modal__close');
    const modalBody = document.getElementById('hero-description-full');
    let lastFocused;

    if (!description || !descriptionText || !readMoreButton || !modal || !modalDialog || !modalClose || !modalBody) return;

    const fullHTML = `Tanvir is a doctoral research fellow at Kyungpook National University (KNU), South Korea, doing research in Robot Manipulation under the supervision of <a class="urls" href="https://knu-brainai.github.io/professor/" target="_blank">Prof. Sangtae Ahn</a> in his <a class="urls" href="https://knu-brainai.github.io/" target="_blank">BrainAI Lab</a>. Tanvir completed his MS in Computer Science and Engineering at Sungkyunkwan University (SKKU) in South Korea, where he served as a Graduate Research Assistant at the VIS2KNOW Lab under the supervision of <a class="urls" href="https://scholar.google.co.kr/citations?user=k5oUZyQAAAAJ&hl=en" target="_blank">Prof. Khan Muhammad</a>. He has been recognized for his exceptional potential and awarded the prestigious Global Korea Scholarship (GKS). Based on his excellent academic and research performance, he was awarded the \`\`Academic Excellence Award Winner'' in 2024 by the NIIED, Government of South Korea. Currently, research assistant at VIS2KNOW Lab he is focusing on multiple emerging topics such as image dehazing, image enhancement, invisible watermarking, marked by several research outcomes published in high impactful conferences and journals such as <i><strong>WACV'26, ICCV'25, CIKM'25, WWW'25, ACM MM'24, ACCV'24, Alexandria Engineering Journal and Engineering Application of Artificial Intelligence</strong></i>. Md Tanvir Islam's passion for innovative applications of computer science and artificial intelligence is evident through his <a class="urls" href="https://tanvirnwu.github.io/pages/publications" target="_blank">research outcomes</a> published at reputable venues.`;
    modalBody.innerHTML = fullHTML;

    function handleKeydown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }
    }

    function openModal() {
      lastFocused = document.activeElement;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      modalClose.focus({ preventScroll: true });
      document.addEventListener('keydown', handleKeydown);
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeydown);
      if (lastFocused instanceof HTMLElement) {
        lastFocused.focus({ preventScroll: true });
      }
    }

    readMoreButton.addEventListener('click', (event) => {
      event.preventDefault();
      openModal();
    });
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
    modalDialog.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });
</script>
<div class="hero-description-modal" id="hero-description-modal" aria-hidden="true">
  <div class="hero-description-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="hero-description-modal-title">
    <div class="hero-description-modal__header">
      <h2 class="hero-description-modal__title" id="hero-description-modal-title">Tanvir's Biography</h2>
      <button type="button" class="hero-description-modal__close modal-close" aria-label="Close full description">&times;</button>
    </div>
    <div class="hero-description-modal__body">
      <p class="hero-description-modal__text" id="hero-description-full"></p>
    </div>
  </div>
</div>
<section class="news-section">
  <hr>
  <h3 class="news-heading">📢 News</h3>
  <details class="news-year" open>
    <summary><strong>2025</strong></summary>
    <ul class="news-items">
      <li>[Dec 2025] Registered one <strong>US Patent</strong>.</li>
      <li>[Nov 2025] One paper is accepted at <strong>WACV'26 (Rank A)</strong>.</li>
      <li>[Sept 2025] Registered one <strong>Korean Patent</strong>.</li>
      <li>[Aug 2025] One paper is accepted at <strong>CIKM'25 (Rank A)</strong>.</li>
      <li>[Aug 2025] Paper published in <strong>Alexandria Engineering Journal (SCIE | IF: 6.8 | Top 5%)</strong>.</li>
      <li>[July 2025] Two of our papers are accepted at <strong>ACM MM'25 (Rank A*)</strong>.</li>
      <li>[June 2025] One paper got accepted at <strong>ICCV'25 (Rank A*)</strong>.</li>
      <li>[Apr 2025] Our 3<sup>rd</sup> <strong>U.S. Patent</strong> is registered.</li>
      <li>[Apr 2025] One paper is accepted at <strong>ICMR'25  (Rank B)</strong>.</li>
      <li>[Apr 2025] Joined as Research Intern at Brain AI Lab, KNU, South Korea.</li>
      <li>[Feb 2025] Our 2<sup>nd</sup> <strong>U.S. Patent</strong> is registered.</li>
      <li>[Mar 2025] Published in <strong>Engineering Applications of Artificial Intelligence (SCIE | IF: 8.0 | Top 10%)</strong>.</li>
      <li>[Feb 2025] 1<sup>st</sup> <strong>U.S. Patent</strong> is registered.</li>
      <li>[Jan 2025] One paper is accepted at <strong>The Web Conference, WWW'25 (Rank A*)</strong>.</li>
      <li>[Jan 2025] Paper published in <strong>Alexandria Engineering Journal (SCIE | IF: 6.8 | Top 5%)</strong>.</li>
    </ul>
  </details>
  <details class="news-year">
    <summary><strong>2024</strong></summary>
    <ul class="news-items">
      <li>[Dec 2024] Received the prestigious <strong>Academic Excellence Award</strong> from NIIED, South Korea.</li>
      <li>[Dec 2024] One paper got acceptance from <strong>ACCV'24  (Rank B)</strong>.</li>
      <li>[Oct 2024] One paper got acceptance from <strong>ACM MM'24  (Rank A*)</strong>.</li>
    </ul>
  </details>
  <details class="news-year">
    <summary><strong>2023</strong></summary>
    <ul class="news-items">
      <li>[Feb 2023] Received scholarship from Pai Chai University, South Korea.</li>
    </ul>
  </details>
  <details class="news-year">
    <summary><strong>2022</strong></summary>
    <ul class="news-items">
      <li>[Mar 2022] Received the prestigious <strong>Global Korea Scholarship (GKS)</strong>.</li>
    </ul>
  </details>
  <details class="news-year">
    <summary><strong>2018</strong></summary>
    <ul class="news-items">
      <li>[Dec 2018] Completed graduation with <strong>1<sup>st</sup> Merit Position</strong> from NWU, Bangladesh.</li>
    </ul>
  </details>
</section>
