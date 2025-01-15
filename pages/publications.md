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
      padding: 12px;
      border: none;
      text-align: left;
      outline: none;
      font-size: 12px;
      font-weight: bold;
      transition: background-color 0.3s ease;
      margin-bottom: 5px;
      width: 100%;
      box-sizing: border-box; /* Ensures padding does not affect width */
    }
    .accordion:hover {
      background-color: #E9E8F9;
      color: #6A5ACD;
    }
    .accordion.active {
      background-color: #E9E8F9;
      color: #6A5ACD;
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
  font-size: 12px;
  margin-bottom: 5px;
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
    background-color: #6A5ACD; /* Blue background on hover */
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



<h4 style="margin-top: 65px;margin-bottom: -5px"><strong>Disclaimer</strong></h4>
All papers are for personal use only. Reproduction or distribution without permission from the copyright holders is prohibited.
<hr>
<strong>AR:</strong> Acceptance Rate  | <strong>BK:</strong> Brain Korea | <strong>IF:</strong> Impact Factor | <strong>*</strong>Corresponding<br>
<hr><br>

<!-- Accordion sections -->
<button class="accordion">Under Review/Ongoing (2025)</button>
<div class="panel default-open">
  <div class="publication">
<strong>Md Tanvir Islam</strong>, Safkat Shahrier Swapnil, Md Masum Billal, and Asif Karim* "Resource Constraint Crop Damage Classification Using Depth Channel Shuffling" <a href="https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence" target="_blank">Engineering Applications of Artificial Intelligence (SCIE | IF: 7.5, Q1 | Revision submitted).</a> 
<hr>
<strong>Md Tanvir Islam*</strong>, Faiyaz Fahim, and Abdullah Al Ghalib "Noise-Resilient Knee Osteoarthritis Severity Detection in X-rays Using YOLO" <a href="https://cis.ieee.org/publications/ieee-transactions-on-artificial-intelligence" target="_blank">
IEEE Transactions on Medical Imaging (SCIE | IF: 8.9, Q1).</a>
<hr>
Shehzad Ali, <strong>Md Tanvir Islam</strong>, Ik Hyun Leec, Mohammad Hijjid, Khan Muhammad* "CABAD: A Video Dataset for Benchmarking Child Aggression Recognition" <a href="https://www.sciencedirect.com/journal/alexandria-engineering-journal" target="_blank">Alexandria Engineering Journal (SCIE | IF: 6.2, Q1).</a>
<hr>
Safkat Shahrier Swapnil, <strong>Md Tanvir Islam</strong> Sandip Kumar Sarkarb, Md Tanvir Islamc and Khan Muhammad* "MsIFRN: A Multi-Sensor Information Fusion Framework for High-Speed Robot
Navigation" <a href="https://www.sciencedirect.com/journal/information-fusion" target="_blank">Preparing for Information Fusion (SCIE | IF: 14, Q1 | Top 2%)</a> 
<hr>
Farhan Ahmeda, <strong>Md Tanvir Islam</strong> Yi June-hoa and Khan Muhammad* "Deep Learning for Intelligent Fire Scene Analysis: Where We Stand and What is Next?" <a href="https://www.sciencedirect.com/journal/information-fusion" target="_blank">Preparing for Information Fusion (SCIE | IF: 14, Q1 | Top 2%)</a> 
<hr>
Shehzad Ali, <strong>Md Tanvir Islam</strong> and Khan Muhammad* "CHILD: Child Hazardous Indoor Labeled Dataset for Activity Recognition" <a href="https://www.ijcai.org/" target="_blank">Preparing for IJCAI 2025 (BK: 4 | Rank: A)</a> 
<hr>
Shehzad Ali, <strong>Md Tanvir Islam</strong> and Khan Muhammad* "IARD: Intruder Activity Recognition Dataset for Home Security and Surveillance" <a href="https://www.ijcai.org/" target="_blank">Preparing for IJCAI 2025 (BK: 4 | Rank: A)</a> 
<hr>
<strong>Md Tanvir Islam*</strong>, Faiyaz Fahim, and Abdullah Al Ghalib "Noise-Resilient Knee Osteoarthritis Severity Detection in X-rays Using YOLO" <a href="https://cis.ieee.org/publications/ieee-transactions-on-artificial-intelligence" target="_blank">IEEE Transactions on Medical Imaging (IF: 8.9, Q1).</a>
    <hr>
  </div>
  <div class="publication">
    
  </div>
</div>
<br>





<button class="accordion">Papers Published (2024)</button>
<div class="panel">
  <div class="publication">
    <strong>Md Tanvir Islam</strong> Ik Hyun Lee, Ahmed Ibrahim Alzahranic, Khan Muhammad* "MEXFIC: A Meta Ensemble eXplainable Approach for AI-Synthesized Fake Image Classification" <a href="https://www.sciencedirect.com/journal/alexandria-engineering-journal" target="_blank">Alexandria Engineering Journal (SCIE | AR: 13% | Rank: 4.7% | IF: 6.2, Q1).</a> <a href="https://www.sciencedirect.com/science/article/pii/S111001682401617X?via%3Dihub" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a> 
    <hr>
    <strong>Md Tanvir Islam</strong> and Nasir Rahim, Khan Muhammad* "HazeSpace2M: A Dataset for Haze Aware Single Image Dehazing" In Proceedings of the 32nd <a href="https://2024.acmmm.org/" target="_blank">ACM Multimedia</a>, October 28-November 1, 2024, Melbourne, Australia. ACM, New York, NY, USA, 10 pages. <a href="https://dl.acm.org/doi/abs/10.1145/3664647.3681382" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a> <strong>(AR: 26% | BK IF: 4.0 | Rank: A+)</strong>
    <hr>
    <strong>Md Tanvir Islam</strong> and Inzamamul Alam, Simon S. Woo, Saeed Anwar, IK Hyun Lee, Khan Muhammad* "LoLI-Street: Benchmarking Low-Light Image Enhancement and Beyond" <a href="https://accv2024.org/" target="_blank">Asian Conference on Computer Vision (ACCV 2024)</a> <strong>(AR: 32% | BK IF: 1.0 | Rank: B)</strong><a href="https://openaccess.thecvf.com/content/ACCV2024/html/Islam_LoLI-Street_Benchmarking_Low-light_Image_Enhancement_and_Beyond_ACCV_2024_paper.html" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
    <hr>
    Mejbah Ahammad, AL Sani, Khalilur, <strong>Md Tanvir Islam</strong> and Muztafizur "RoBERTa-GCN: A Novel Approach for Combating Fake News in Bangla Using Advanced Language Processing and Graph Convolutional Networks" <a href="https://ieeeaccess.ieee.org/" target="_blank">IEEE Access</a> <strong>(SCIE | IF: 3.4, Q1)</strong> <a href="https://ieeexplore.ieee.org/abstract/document/10677406/" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
    <hr>
    <strong>Md Tanvir Islam*</strong> and Samiul Bari "A Novel Feature Selection Pipeline for Accurate Thyroid Cancer Recurrence Prediction" <a href="https://confmiet.org/index.php" target="_blank">MIET 2024 (Scopus Indexed double peer blind review conference).</a>
<hr>
  </div>
</div>
<br>



<button class="accordion">Papers Published (2019 - 2020)</button>
<div class="panel">
  <div class="publication">
  <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://link.springer.com/chapter/10.1007/978-981-15-5148-2_48" target="_blank">"An empirical study on diabetes mellitus prediction using apriori algorithm"</a> International Conference on Innovative Computing and Communications: Proceedings of ICICC 2020, Volume 2. <strong>Springer Singapore</strong>, 2021.
   <a href="https://link.springer.com/chapter/10.1007/978-981-15-5148-2_48" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
<hr>
<strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/9225430" target="_blank">"Typical and non-typical diabetes disease prediction using random forest algorithm."</a> 2020 11th International conference on computing, communication and networking technologies (ICCCNT). <strong>IEEE</strong>, 2020.
   <a href="/assets/papers/Typical_and_Non_Typical_Diabetes_Disease.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" alt="PDF" class="pdf-icon"></a>
<hr>
<strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/9225551" target="_blank">"Diabetes mellitus prediction using different ensemble machine learning approaches."</a> 2020 11th international conference on computing, communication and networking technologies (ICCCNT). <strong>IEEE</strong>, 2020.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/373328971_Diabetes_Mellitus_Prediction_using_Different_Ensemble_Machine_Learning_Approaches/links/64e622d240289f7a0faeefe9/Diabetes-Mellitus-Prediction-using-Different-Ensemble-Machine-Learning-Approaches.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
<hr>
 <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://dl.acm.org/doi/abs/10.1145/3377049.3377130?casa_token=EDZhblNvSMMAAAAA:gcpQ1EBAnzkRNX14-VRuKP_xP48677tdg3ROTyMd27V4BMuxPXBsvHQ0owKvg--4bqdrEI2-J8zFLw" target="_blank">"A machine learning approach to identify the correlation and association among the students' educational behavior"</a> Proceedings of the International Conference on Computing Advancements. 2020.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/340081186_A_Machine_Learning_Approach_to_Identify_the_Correlation_and_Association_among_the_Students'_Educational_Behavior/links/64e61f9b40289f7a0faeef7a/A-Machine-Learning-Approach-to-Identify-the-Correlation-and-Association-among-the-Students-Educational-Behavior.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
<hr>
 M Raihan, Nasif Alvi, and <strong>Md Tanvir Islam</strong> <a href="https://link.springer.com/chapter/10.1007/978-981-15-3607-6_7" target="_blank">"Diabetes mellitus risk prediction using artificial neural network"</a> Proceedings of International Joint Conference on Computational Intelligence: IJCCI 2019. Singapore: <strong>Springer Singapore</strong>, 2020.
   <a href="https://link.springer.com/chapter/10.1007/978-981-15-3607-6_7" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
<hr>
 M. Raihan and <strong>Md Tanvir Islam</strong> <a href="https://ieeexplore.ieee.org/abstract/document/9225662" target="_blank">"Human behavior analysis using association rule mining techniques"</a> 11th International conference on computing, communication and networking technologies (ICCCNT). IEEE, 2020.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/344695418_Human_Behavior_Analysis_using_Association_Rule_Mining_Techniques/links/64e61e8a0acf2e2b520d7a6c/Human-Behavior-Analysis-using-Association-Rule-Mining-Techniques.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
<hr>
    <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/8944528" target="_blank">"An empirical study on diabetes mellitus prediction for typical and non-typical cases using machine learning approaches"</a> 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT). IEEE, 2019.
   <a href="https://d1wqtxts1xzle7.cloudfront.net/61823414/120200118-98333-w040ke-libre.pdf?1579372384=&response-content-disposition=inline%3B+filename%3DAn_Empirical_Study_on_Diabetes_Mellitus.pdf&Expires=1720577247&Signature=RV8HoluhW73rk1RyMz4mLJmuI~VhNI4VJAn92EaxayUnec6LEYPEoC8FoSynOeDeAMaFei0QhypxoYfX-hLQnz2bKWHzYZp5tJhBiwJXOEQif--i-nNlK2T-c3ak6S5OdjRpkJqvAUS4ivsQMrmnfmjG7jOY4S8-FGdQdr1OCQwlIXtjavDg955a8Ib2sA0n7I~epfwNpfkT6xG-8r1g4VpMAZJ955h38eig1onpX7IzPj5PbC7LAslkDIJFpIMzdXBteO5HeS5dV4hvmFYqhQLzn5Ic4ycecmyEnd7VhVdZSXF5yZAdthbFO0tjyUAF3swxBCNMPGCLfi7~s945Uw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
<hr>
 <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://link.springer.com/chapter/10.1007/978-981-15-3666-3_37" target="_blank">"Diabetes Mellitus Prediction Using Ensemble Machine Learning Techniques"</a> International Conference on Computational Intelligence, Security and Internet of Things. Singapore: Springer Singapore, 2019.
   <a href="https://link.springer.com/chapter/10.1007/978-981-15-3666-3_37" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
<hr>
Promila Ghosh, M Raihan, and <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/8944883" target="_blank">"Safeguard: A prototype of an application programming interface to save the disaster affected people"</a> 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT). IEEE, 2019.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/338361572_Safeguard_A_Prototype_of_An_Application_Programming_Interface_to_Save_the_Disaster_Affected_People/links/64e6202d0453074fbda94f96/Safeguard-A-Prototype-of-An-Application-Programming-Interface-to-Save-the-Disaster-Affected-People.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
<hr>
 M. Raihan and <strong>Md Tanvir Islam</strong> <a href="https://ieeexplore.ieee.org/abstract/document/8944552" target="_blank">"An empirical study to predict diabetes mellitus using K-means and hierarchical clustering techniques"</a> 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT). IEEE, 2019.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/338369241_An_Empirical_Study_to_Predict_Diabetes_Mellitus_using_K-Means_and_Hierarchical_Clustering_Techniques/links/64e6200f434d3f628c432fd5/An-Empirical-Study-to-Predict-Diabetes-Mellitus-using-K-Means-and-Hierarchical-Clustering-Techniques.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
    <hr>
Md Bellal Hossain, Etu Podder, Abdullah Al-Mamun Bulbul, Himadri Shekhar Mondal, M Raihan, and <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/8944499" target="_blank">"Identification of cyanide within hollow core photonics crystal fiber"</a> 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT). IEEE, 2019.
   <a href="https://d1wqtxts1xzle7.cloudfront.net/111790955/Identification_of_Cyanide.pdf?1708805527=&response-content-disposition=inline%3B+filename%3DIdentification_of_Cyanide_within_Hollow.pdf&Expires=1720577156&Signature=G1pLdjmPGqxttAhHKdjdUcJDrQDy4B1VVZbEbKeS1Fn3VDdQ85wEp5Vgh40XeEWpQJoc5X9pDdW-oPjaxws5pJxpJwYvmXOtKH6M~eGaH5PbsZa9RoUeKtX7t~SzFuxa27aPdXyo-4TAwlAvXWE8K~EWXc7UBfv-X4qY18SSnDc~rHJxYqJ1-zJRO-Gs-fJJBmG5ehhtv6nAFnvX0la-XteoJWVmwsF-k2nBExf7TE7GNebvYeICCkYGoKh6~gY2FJmrMR7~mAmnmSyasZevaaQN5UkVTYLQIiKceUGOcwm6fh78eFtWaOWA~nMZrBOCMfo6l3PByAD7~FleVAV4pw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>

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
