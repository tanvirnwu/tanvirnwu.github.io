---
layout: default
---

<style>
  .active-menu {
  font-size: 12px;
  color: white !important;  /* ✅ Forces text color to stay white */
  background-color: #3680E8;
  text-decoration: none;
  padding: 9px 15px;
  border-radius: 4px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
  display: block;
}

.active-menu strong {
  color: white !important; /* ✅ Forces text inside <strong> to be white */
}

.active-menu:hover {
  background-color: #2f6ac6; /* ✅ Slightly darker shade on hover */
}

  a{color:#3680E8;}
  /* CSS styles for hover effect */
  a:hover {
    background-color: #3680E8; /* Blue background on hover */
    color: white; /* White text on hover */
  }

  a:hover strong {
    color: white; /* Ensure bold text inside links also turns white */
  }

  /* Hide the GitHub profile button rendered by the theme header */
  a.btn[href*="github.com"] {
    display: none !important;
  }

  li {
    margin: 0; /* Remove any unnecessary margin */
    padding: 0; /* Remove padding from list items */
  }

  a {
    display: inline-block; /* Make the anchor display as a block to fill its parent */
    height: 100%; /* Ensure the link fills the parent's height */
  }
    .urls {
      color: #3680E8;
    }
    .urls:hover {
      background-color: #ffffff;
      color: #3680E8;
      font-weight:normal;
    }

  .news-year {
    border: 1px solid #d9e6fb;
    border-radius: 6px;
    margin-bottom: 12px;
    background-color: #f4f8ff;
  }

  .news-year summary {
    cursor: pointer;
    list-style: none;
    padding: 10px 14px;
    font-size: 13px;
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
    font-size: 13px;
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
  <div class="hero-left">
    <p class="hero-greeting">Hello!</p>
    <h1 class="hero-title">This is Tanvir Islam</h1>
    <button class="role-badge" type="button">Data Analyst</button>
    <p class="hero-description">
      Doctoral research fellow focused on data-driven problem solving and impactful storytelling. I blend analytics,
      dashboards, and databases to uncover insights, influence decisions, and build practical solutions for teams and clients.
    </p>
    <div class="skill-pills">
      <span class="skill-pill">Power BI</span>
      <span class="skill-pill">Excel</span>
      <span class="skill-pill">MySQL</span>
      <span class="skill-pill">Tableau</span>
    </div>
  </div>
  <div class="hero-right">
    <div class="portrait-wrapper">
      <div class="portrait-blob" aria-hidden="true"></div>
      <img src="{{ site.logo | relative_url }}" alt="Portrait of Md Tanvir Islam" class="portrait-image" />
    </div>
  </div>
</section>
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
<section class="contact-section">
  <hr>
  <h3 class="contact-heading">☏ Contact</h3>
  <ul class="contact-list">
    <li class="contact-item">
      <span class="contact-icon" aria-hidden="true">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" width="18" height="18">
      </span>
      <span class="contact-text">tanvirnwu[@]knu.ac.kr</span>
    </li>
    <li class="contact-item">
      <span class="contact-icon" aria-hidden="true">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" width="18" height="18">
      </span>
      <a class="contact-link" href="https://www.linkedin.com/in/tanvirnwu/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
    </li>
    <li class="contact-item">
      <span class="contact-icon" aria-hidden="true">
        <img src="https://images.icon-icons.com/2108/PNG/512/google_scholar_icon_130918.png" alt="" width="18" height="18">
      </span>
      <a class="contact-link" href="https://scholar.google.com/citations?user=UvINe-sAAAAJ&hl=en" target="_blank" rel="noreferrer noopener">Google Scholar</a>
    </li>
  </ul>
</section>
