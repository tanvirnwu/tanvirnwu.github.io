<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Publications</title>
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
    }
    .publication {
      margin-bottom: 10px;
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

<h2>Publications</h2>

<!-- Accordion sections -->
<button class="accordion">Under Review/Ongoing (2025)</button>
<div class="panel">
  <div class="publication">
    <strong>Md Tanvir Islam</strong>, Safkat Shahrier Swapnil, Md Masum Billal, and Asif Karim* "Resource Constraint Crop Damage Classification Using Depth Channel Shuffling" <a href="https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence" target="_blank">Engineering Applications of Artificial Intelligence.</a> <strong>(SCIE | IF: 7.5, Q1 | Revision submitted)</strong>
  </div>
  <div class="publication">
    <strong>Md Tanvir Islam*</strong>, Faiyaz Fahim, and Abdullah Al Ghalib "Noise-Resilient Knee Osteoarthritis Severity Detection in X-rays Using YOLO" <a href="https://cis.ieee.org/publications/ieee-transactions-on-artificial-intelligence" target="_blank">IEEE Transactions on Medical Imaging.</a> <strong>(SCIE | IF: 8.9, Q1)</strong>
  </div>
</div>

<button class="accordion">Papers Published (2024)</button>
<div class="panel">
  <div class="publication">
    <strong>Md Tanvir Islam</strong>, Ik Hyun Lee, Ahmed Ibrahim Alzahranic, Khan Muhammad* "MEXFIC: A Meta Ensemble eXplainable Approach for AI-Synthesized Fake Image Classification" <a href="https://www.sciencedirect.com/journal/alexandria-engineering-journal" target="_blank">Alexandria Engineering Journal.</a> <strong>(SCIE | AR: 13% | Rank: 4.7% | IF: 6.2, Q1)</strong>
  </div>
  <div class="publication">
    <strong>Md Tanvir Islam</strong> and Nasir Rahim, Khan Muhammad* "HazeSpace2M: A Dataset for Haze Aware Single Image Dehazing" In Proceedings of the 32nd <a href="https://2024.acmmm.org/" target="_blank">ACM Multimedia</a> <strong>(AR: 26% | BK IF: 4.0 | Rank: A+)</strong>
  </div>
</div>

<button class="accordion">Papers Published (2019 - 2020)</button>
<div class="panel">
  <div class="publication">
    <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://link.springer.com/chapter/10.1007/978-981-15-5148-2_48" target="_blank">"An empirical study on diabetes mellitus prediction using apriori algorithm"</a> International Conference on Innovative Computing and Communications: Proceedings of ICICC 2020, Volume 2. <strong>Springer Singapore</strong>, 2021.
  </div>
  <div class="publication">
    <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/9225430" target="_blank">"Typical and non-typical diabetes disease prediction using random forest algorithm."</a> 2020 11th International conference on computing, communication and networking technologies (ICCCNT). <strong>IEEE</strong>, 2020.
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
