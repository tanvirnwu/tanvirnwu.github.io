---
layout: default
---

<style>
  .active-menu {
  font-size: 12px;
  color: white !important;  /* ✅ Forces text color to stay white */
  background-color: #6A5ACD;
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
  background-color: #5548c8; /* ✅ Slightly darker shade on hover */
}
  
  a{color:#6A5ACD;}
  /* CSS styles for hover effect */
  a:hover {
    background-color: #6A5ACD; /* Blue background on hover */
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
      color: #6A5ACD;
    }
    .urls:hover {
      background-color: #ffffff;
      color: #6A5ACD;
      font-weight:normal;
    }

  .news-year {
    border: 1px solid #e4e3f7;
    border-radius: 6px;
    margin-bottom: 12px;
    background-color: #f8f8ff;
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
    background-color: #6A5ACD;
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
<button id="scrollButton" onclick="scrollToPosition()" style="position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; background-color: #6A5ACD; color: white; border: none; border-radius: 5px; cursor: pointer;">&#8593;</button>


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



<div class="profile-hero">
  <div class="profile-photo">
    <img src="{{ site.logo | relative_url }}" alt="Portrait of Md Tanvir Islam" class="profile-image" />
  </div>
  <div class="profile-body">
    <h2 style=" font-size:18px; margin-top: 0; color:#343434;"><strong>Md Tanvir Islam</strong><br>
    </h2>
      <p style= "font-size:14px; color:#343434;">
        Tanvir is a doctoral research fellow at Kyungpook National University (KNU), South Korea, doing research in Robot Manipulation under the supervision of <a class= "urls" href="https://knu-brainai.github.io/professor/" target="_blank">Prof. Sangtae Ahn</a> in his <a class= "urls" href="https://knu-brainai.github.io/" target="_blank">BrainAI Lab</a>. Tanvir completed his MS in Computer Science and Engineering at Sungkyunkwan University (SKKU) in South Korea, where he served as a Graduate Research Assistant at the VIS2KNOW Lab under the supervision of <a class= "urls" href="https://scholar.google.co.kr/citations?user=k5oUZyQAAAAJ&hl=en" target="_blank">Prof. Khan Muhammad</a>. He has been recognized for his exceptional potential and awarded the prestigious Global Korea Scholarship (GKS). Based on his excellent academic and research performance, he was awarded the <i>``Academic Excellence Award Winner''</i> in 2024 by the NIIED, Government of South Korea. Currently, research assistant at VIS2KNOW Lab he is focusing on multiple emerging topics such as image dehazing, image enhancement, invisible watermarking, marked by several research outcomes published in high impactful conferences and journals such as <i><strong>WACV'26, ICCV'25, CIKM'25, WWW'25, ACM MM'24, ACCV'24, Alexandria Engineering Journal and Engineering Application of Artificial Intelligence</strong></i>. Md Tanvir Islam's passion for innovative applications of computer science and artificial intelligence is evident through his <a class= "urls" href="https://tanvirnwu.github.io/pages/publications" target="_blank">research outcomes</a> published at reputable venues.
        <br>
      </p>
  </div>
</div>
  <hr>



<h3 style="font-size: 14px; color: #343434; margin-top: 40px;">📢 News</h3>
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
<hr>


<!-- Add the LinkedIn and Google Scholar icons and links -->
<h3 style="font-size: 14px; color: #343434; margin-top: 40px;">☏ Concat</h3>
<p style="font-size:13px; color:#343434;">
  <span style="vertical-align: middle;">
    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" width="18" height="18" style="vertical-align: middle;">
     tanvirnwu[@]knu.ac.kr
  </span>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a  class="urls" href="https://www.linkedin.com/in/tanvirnwu/" target="_blank" style="text-decoration: none; color: black;">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="18" height="18" style="vertical-align: middle;">
    LinkedIn
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a class="urls" href="https://scholar.google.com/citations?user=UvINe-sAAAAJ&hl=en" target="_blank" style="text-decoration: none; color: black;">
    <img src="https://images.icon-icons.com/2108/PNG/512/google_scholar_icon_130918.png" alt="Google Scholar" width="18" height="18" style="vertical-align: middle;">
    Google Scholar
  </a>
</p>
