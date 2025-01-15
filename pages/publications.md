<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .accordion {
      background-color: #6A5ACD;
      color: white;
      cursor: pointer;
      padding: 15px;
      border: none;
      text-align: left;
      outline: none;
      font-size: 16px;
      transition: background-color 0.3s ease;
      margin-bottom: 5px;
      width: 100%;
      box-sizing: border-box; /* Ensures padding does not affect width */
    }
    .accordion:hover {
      background-color: #E9E8F9;
      color: black;
    }
    .accordion.active {
      background-color: #E9E8F9;
      color: black;
    }
    .panel {
      padding: 0 15px;
      display: none;
      overflow: hidden;
      background-color: #FFFFFF;
      border-left: 0px solid #FFFFFF;
      border-right: 0px solid #FFFFFF;
      border-bottom: 0px solid #FFFFFF;
      margin-bottom: 10px;
      margin-top: 5px;
    }
    .panel.default-open {
      display: block;
    }
    .publication {
      margin-bottom: 9px;
    }
    .publication + .publication {
      margin-top: 10px;
    }
    .pdf-icon {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-left: 5px;
    }
  </style>
</head>
<body>


<header style="background-color: white; padding: 0; margin-bottom: 0; position: relative; height: 36px; border-radius: 4px; display: flex; align-items: center;">
  <nav style="margin: 0; padding: 0; width: 100%;">
    <ul style="list-style-type: none; padding: 0; margin: 0; display: flex; align-items: center; height: 100%;">
      <li style="margin: 0 20px 0 0; padding: 0; display: flex; align-items: center;"> <!-- Set margin-right to 20px -->
        <a href="https://tanvirnwu.github.io/" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>About</strong>
        </a>
      </li>
      <li style="margin: 0; padding: 0 20px 0 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/pages/projects" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>Projects</strong>
        </a></li>
      <li style="margin: 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>Resume</strong>
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  /* CSS styles for hover effect */
  a:hover {
    background-color: #267CB9; /* Blue background on hover */
    color: white; /* White text on hover */
  }

  a:hover strong {
    color: white; /* Ensure bold text inside links also turns white */
  }

  li {
    margin: 0; /* Remove any unnecessary margin */
    padding: 0; /* Remove padding from list items */
  }

  a {
    display: inline-block; /* Make the anchor display as a block to fill its parent */
    height: 100%; /* Ensure the link fills the parent's height */
  }
</style>



<!-- Add the button here -->
<button id="scrollButton" onclick="scrollToPosition()" style="position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">&#8593;</button>

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





<!-- Add the button here -->
<button id="scrollButton" onclick="scrollToPosition()" style="position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">&#8593;</button>


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



<h4 style="margin-top: 60px;"><strong>Disclaimer</strong><br></h4>
All papers are for personal use only. Reproduction or distribution without permission from the copyright holders is prohibited.
<hr>
<strong>AR:</strong> Acceptance Rate  | <strong>BK:</strong> Brain Korea | <strong>IF:</strong> Impact Factor | <strong>*</strong>Corresponding <br>
<hr><br>

<!-- Accordion sections -->
<button class="accordion active">Under Review/Ongoing (2025)</button>
<div class="panel default-open">
  <div class="publication">
1. <strong>Md Tanvir Islam</strong>, Safkat Shahrier Swapnil, Md Masum Billal, and Asif Karim* "Resource Constraint Crop Damage Classification Using Depth Channel Shuffling" <a href="https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence" target="_blank">Engineering Applications of Artificial Intelligence.</a> <strong>(SCIE | IF: 7.5, Q1 | Revision submitted)</strong>
<hr>
2. <strong>Md Tanvir Islam*</strong>, Faiyaz Fahim, and Abdullah Al Ghalib "Noise-Resilient Knee Osteoarthritis Severity Detection in X-rays Using YOLO" <a href="https://cis.ieee.org/publications/ieee-transactions-on-artificial-intelligence" target="_blank">
IEEE Transactions on Medical Imaging.</a> <strong>(SCIE | IF: 8.9, Q1)</strong>
<hr>
3. Shehzad Ali, <strong>Md Tanvir Islam</strong>, Ik Hyun Leec, Mohammad Hijjid, Khan Muhammade* "CABAD: A Video Dataset for Benchmarking Child Aggression Recognition" <a href="https://www.sciencedirect.com/journal/alexandria-engineering-journal" target="_blank">Alexandria Engineering Journal.</a> <strong>(SCIE | IF: 6.2, Q1)</strong>
<hr>
4. Safkat Shahrier Swapnil, <strong>Md Tanvir Islam</strong> Sandip Kumar Sarkarb, Md Tanvir Islamc and Khan Muhammadd* "MsIFRN: A Multi-Sensor Information Fusion Framework for High-Speed Robot
Navigation" <a href="https://www.sciencedirect.com/journal/information-fusion" target="_blank">Preparing for Information Fusion (SCIE | IF: 14, Q1 | Top 2%)</a> 
<hr>
5. Farhan Ahmeda, <strong>Md Tanvir Islam</strong> Yi June-hoa and Khan Muhammad* "Deep Learning for Intelligent Fire Scene Analysis: Where We Stand and What is Next?" <a href="https://www.sciencedirect.com/journal/information-fusion" target="_blank">Preparing for Information Fusion (SCIE | IF: 14, Q1 | Top 2%)</a> 
<hr>
6. Shehzad Ali, <strong>Md Tanvir Islam</strong> and Khan Muhammad* "CHILD: Child Hazardous Indoor Labeled Dataset for Activity Recognition" <a href="https://www.ijcai.org/" target="_blank">Preparing for IJCAI 2025 (BK: 4 | Rank: A)</a> 
<hr>
7. Shehzad Ali, <strong>Md Tanvir Islam</strong> and Khan Muhammad* "IARD: Intruder Activity Recognition Dataset for Home Security and Surveillance" <a href="https://www.ijcai.org/" target="_blank">Preparing for IJCAI 2025 (BK: 4 | Rank: A)</a> 
<hr>
  </div>
  <div class="publication">
    <strong>Md Tanvir Islam*</strong>, Faiyaz Fahim, and Abdullah Al Ghalib "Noise-Resilient Knee Osteoarthritis Severity Detection in X-rays Using YOLO" <a href="https://cis.ieee.org/publications/ieee-transactions-on-artificial-intelligence" target="_blank">IEEE Transactions on Medical Imaging.</a> <strong>(Science Citation Index Expanded | Impact Factor: 8.9, Q1)</strong>
  </div>
</div>
<br>



<button class="accordion">Papers Published (2024)</button>
<div class="panel">
  <div class="publication">
    <strong>Md Tanvir Islam</strong>, Ik Hyun Lee, Ahmed Ibrahim Alzahranic, Khan Muhammad* "MEXFIC: A Meta Ensemble eXplainable Approach for AI-Synthesized Fake Image Classification" <a href="https://www.sciencedirect.com/journal/alexandria-engineering-journal" target="_blank">Alexandria Engineering Journal.</a> <strong>(Science Citation Index Expanded | Acceptance Rate: 13% | Rank: 4.7% | Impact Factor: 6.2, Q1)</strong>
  </div>
  <div class="publication">
    <strong>Md Tanvir Islam</strong> and Nasir Rahim, Khan Muhammad* "HazeSpace2M: A Dataset for Haze Aware Single Image Dehazing" In Proceedings of the 32nd <a href="https://2024.acmmm.org/" target="_blank">ACM Multimedia</a> <strong>(Acceptance Rate: 26% | Brain Korea Impact Factor: 4.0 | Rank: A+)</strong>
  </div>
</div>
<br>
<button class="accordion">Papers Published (2019 - 2020)</button>
<div class="panel">
  <div class="publication">
    <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://link.springer.com/chapter/10.1007/978-981-15-5148-2_48" target="_blank">"An empirical study on diabetes mellitus prediction using apriori algorithm"</a> International Conference on Innovative Computing and Communications: Proceedings of ICICC 2020, Volume 2. <strong>Springer Singapore</strong>, 2021.
  </div>
  <div class="publication">
    <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/9225430" target="_blank">"Typical and non-typical diabetes disease prediction using random forest algorithm."</a> 2020 11th International conference on computing, communication and networking technologies (ICCCNT). <strong>Institute of Electrical and Electronics Engineers</strong>, 2020.
  </div>
</div>

<script>
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', function () {
      // Close all other panels
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== this) {
          otherAccordion.classList.remove('active');
          otherAccordion.nextElementSibling.style.display = 'none';
        }
      });

      // Toggle the current panel
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
  });
</script>

</body>
</html>
