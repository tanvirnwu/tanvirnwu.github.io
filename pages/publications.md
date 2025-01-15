<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .accordion {
      background-color: #f9f9f9;
      color: #333;
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
      background-color: #ddd;
    }
    .accordion.active {
      background-color: #267CB9;
      color: white;
    }
    .panel {
      padding: 0 15px;
      display: none;
      overflow: hidden;
      background-color: #f1f1f1;
      border-left: 2px solid #267CB9;
      border-right: 2px solid #267CB9;
      border-bottom: 2px solid #267CB9;
      margin-bottom: 10px;
    }
    .panel.default-open {
      display: block;
    }
    .publication {
      margin-bottom: 10px;
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

    /* Navigation Menu Styling */
    header {
      background-color: white;
      padding: 0;
      margin-bottom: 0;
      position: relative;
      height: 36px;
      border-radius: 4px;
      display: flex;
      align-items: center;
    }
    nav {
      margin: 0;
      padding: 0;
      width: 100%;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      height: 100%;
    }
    li {
      margin: 0 20px 0 0;
      padding: 0;
      display: flex;
      align-items: center;
    }
    a {
      color: black;
      text-decoration: none;
      padding: 9px 15px;
      border-radius: 4px;
      box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s, color 0.3s;
      display: block;
    }
    a:hover {
      background-color: #267CB9; /* Blue background on hover */
      color: white; /* White text on hover */
    }
    a:hover strong {
      color: white; /* Ensure bold text inside links also turns white */
    }
  </style>
</head>
<body>

<header>
  <nav>
    <ul>
      <li>
        <a href="https://tanvirnwu.github.io/">
          <strong>About</strong>
        </a>
      </li>
      <li>
        <a href="https://tanvirnwu.github.io/pages/projects">
          <strong>Projects</strong>
        </a>
      </li>
      <li>
        <a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf">
          <strong>Resume</strong>
        </a>
      </li>
    </ul>
  </nav>
</header>


<h4 style="margin-top: 60px;"><strong>Disclaimer</strong><br></h4>
All papers are for personal use only. Reproduction or distribution without permission from the copyright holders is prohibited.
<hr>
<strong>AR:</strong> Acceptance Rate  | <strong>BK:</strong> Brain Korea | <strong>IF:</strong> Impact Factor | <strong>*</strong>Corresponding <br>
<hr><br>

<!-- Accordion sections -->
<button class="accordion active">Under Review/Ongoing (2025)</button>
<div class="panel default-open">
  <div class="publication">
    <strong>Md Tanvir Islam</strong>, Safkat Shahrier Swapnil, Md Masum Billal, and Asif Karim* "Resource Constraint Crop Damage Classification Using Depth Channel Shuffling" <a href="https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence" target="_blank">Engineering Applications of Artificial Intelligence.</a> <strong>(Science Citation Index Expanded | Impact Factor: 7.5, Q1 | Revision submitted)</strong>
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
