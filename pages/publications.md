---
layout: default
title: Publications
---

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





<header style="background-color: #f8f9f9; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); padding: 0; margin-bottom: 0; position: relative; height: 36px; border-radius: 4px; display: flex; align-items: center;">
  <nav style="margin: 0; padding: 0; width: 100%;">
    <ul style="list-style-type: none; padding: 0; margin: 0; display: flex; align-items: center; height: 100%;">
      <li style="margin: 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>Home</strong>
        </a>
      </li>
      <li style="margin: 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>View Resume</strong>
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  /* CSS styles for hover effect */
  a:hover {
    background-color: #0066ff; /* Blue background on hover */
    color: white; /* White text on hover */
  }

  a:hover strong {
    color: white; /* Ensure bold text inside links also turns white */
  }

  li {
    margin: 0; /* Remove margin from list items */
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




<h3 style="margin-top: 80px;"><strong>Disclaimer</strong><br></h3>
Please note that all the papers are archived for personal use only. You are legally forbidden to reproduce or distribute them without explicit permission of the copyright holders.

-------------
### Accepted Papers (2024)
-------------
1. <strong>Md Tanvir Islam</strong> and Nasir Rahim, Khan Muhammad* "HazeSpace2M: A Dataset for Haze Aware Single Image Dehazing" In Proceedings of the 32nd <a href="https://2024.acmmm.org/" target="_blank">ACM International Conference on Multimedia</a>, October 28-November 1, 2024, Melbourne, Australia. ACM, New York, NY, USA, 10 pages. https://doi.org/10.1145/3664647.3681382
   <a href="/assets/papers/HazeSpace2M.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a> <strong>(Acceptance rate: 26% | BK IF: 4.0 | h-index: 101)</strong>


2. Mejbah Ahammad, AL Sani, Khalilur, <strong>Md Tanvir Islam</strong> and Muztafizur "RoBERTa-GCN: A Novel Approach for Combating Fake News in Bangla Using Advanced Language Processing and Graph Convolutional Networks" <a href="https://ieeeaccess.ieee.org/" target="_blank">IEEE Access</a> <strong>(IF: 3.4, Q1)</strong>

3. <strong>Md Tanvir Islam*</strong> and Samiul Bari "A Novel Feature Selection Pipeline for Accurate Thyroid Cancer Recurrence Prediction" <a href="https://confmiet.org/index.php" target="_blank">MIET 2024</a> <strong>(Scopus Indexed double peer blind review conference)</strong>

<ol style="text-align: justify;">
  <li>
    <strong>Md Tanvir Islam</strong> and Nasir Rahim, Khan Muhammad* "HazeSpace2M: A Dataset for Haze Aware Single Image Dehazing" In Proceedings of the 32nd <a href="https://2024.acmmm.org/" target="_blank">ACM International Conference on Multimedia</a>, October 28-November 1, 2024, Melbourne, Australia. ACM, New York, NY, USA, 10 pages. <a href="https://doi.org/10.1145/3664647.3681382" target="_blank">https://doi.org/10.1145/3664647.3681382</a>
    <a href="/assets/papers/HazeSpace2M.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a> <strong>(Acceptance rate: 26% | BK IF: 4.0 | h-index: 101)</strong>
  </li>

  <li>
    Mejbah Ahammad, AL Sani, Khalilur, <strong>Md Tanvir Islam</strong> and Muztafizur "RoBERTa-GCN: A Novel Approach for Combating Fake News in Bangla Using Advanced Language Processing and Graph Convolutional Networks" <a href="https://ieeeaccess.ieee.org/" target="_blank">IEEE Access</a> <strong>(IF: 3.4, Q1)</strong>
  </li>

  <li>
    <strong>Md Tanvir Islam*</strong> and Samiul Bari "A Novel Feature Selection Pipeline for Accurate Thyroid Cancer Recurrence Prediction" <a href="https://confmiet.org/index.php" target="_blank">MIET 2024</a> <strong>(Scopus Indexed double peer blind review conference)</strong>
  </li>
</ol>

-------------
### Papers Under Review
-------------
2. Shehzad Ali and <strong>Md Tanvir Islam</strong>, Khan Muhammad* "CHILD: Child Hazardous Indoor Labeled Dataset for Activity Recognition" <a href="https://aaai.org/conference/aaai/aaai-25/" target="_blank">AAAI Conference on Artificial Intelligence</a> <strong>(Acceptance rate: 23% | BK IF: 4.0 | h-index: 220)</strong>

3. <strong>Md Tanvir Islam</strong> and Inzamamul Alam, Simon S. Woo, Saeed Anwar, Khan Muhammad* "LoLI-Street: Benchmarking Low-Light Image Enhancement and Beyond" <a href="https://accv2024.org/" target="_blank">Asian Conference on Computer Vision (ACCV 2024)</a> <strong>(Acceptance rate: 28% | BK IF: 1.0 | Rebuttal is completed)</strong>

4. <strong>Md Tanvir Islam</strong> Ik Hyun Leeb, Ahmed Ibrahim Alzahranic, Khan Muhammad* "MEXFIC: A Meta Ensemble eXplainable Approach for AI-Synthesized Fake Image Classification" <a href="https://www.sciencedirect.com/journal/alexandria-engineering-journal" target="_blank">Alexandria Engineering Journal.</a> <strong>(IF: 6.2, Q1 | Revision submitted)</strong>

5. <strong>Md Tanvir Islam</strong> and Safkat Shahrier Swapnil, Asif Karim* "LightCDC: A Lightweight Crop Damage Classification model using ShuffleNetV2" <a href="https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence" target="_blank">Engineering Applications of Artificial Intelligence.</a> <strong>(IF: 7.5, Q1)</strong>

-------------
### Papers Published
-------------
7. <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://link.springer.com/chapter/10.1007/978-981-15-5148-2_48" target="_blank">"An empirical study on diabetes mellitus prediction using apriori algorithm"</a> International Conference on Innovative Computing and Communications: Proceedings of ICICC 2020, Volume 2. <strong>Springer Singapore</strong>, 2021.
   <a href="https://link.springer.com/chapter/10.1007/978-981-15-5148-2_48" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
   
8. <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/9225430" target="_blank">"Typical and non-typical diabetes disease prediction using random forest algorithm."</a> 2020 11th International conference on computing, communication and networking technologies (ICCCNT). <strong>IEEE</strong>, 2020.
   <a href="/assets/papers/Typical_and_Non_Typical_Diabetes_Disease.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" alt="PDF" class="pdf-icon"></a>
   
9. <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/9225551" target="_blank">"Diabetes mellitus prediction using different ensemble machine learning approaches."</a> 2020 11th international conference on computing, communication and networking technologies (ICCCNT). <strong>IEEE</strong>, 2020.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/373328971_Diabetes_Mellitus_Prediction_using_Different_Ensemble_Machine_Learning_Approaches/links/64e622d240289f7a0faeefe9/Diabetes-Mellitus-Prediction-using-Different-Ensemble-Machine-Learning-Approaches.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>

10. <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://dl.acm.org/doi/abs/10.1145/3377049.3377130?casa_token=EDZhblNvSMMAAAAA:gcpQ1EBAnzkRNX14-VRuKP_xP48677tdg3ROTyMd27V4BMuxPXBsvHQ0owKvg--4bqdrEI2-J8zFLw" target="_blank">"A machine learning approach to identify the correlation and association among the students' educational behavior"</a> Proceedings of the International Conference on Computing Advancements. 2020.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/340081186_A_Machine_Learning_Approach_to_Identify_the_Correlation_and_Association_among_the_Students'_Educational_Behavior/links/64e61f9b40289f7a0faeef7a/A-Machine-Learning-Approach-to-Identify-the-Correlation-and-Association-among-the-Students-Educational-Behavior.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>

11. M Raihan, Nasif Alvi, and <strong>Md Tanvir Islam</strong> <a href="https://link.springer.com/chapter/10.1007/978-981-15-3607-6_7" target="_blank">"Diabetes mellitus risk prediction using artificial neural network"</a> Proceedings of International Joint Conference on Computational Intelligence: IJCCI 2019. Singapore: <strong>Springer Singapore</strong>, 2020.
   <a href="https://link.springer.com/chapter/10.1007/978-981-15-3607-6_7" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
12. M. Raihan and <strong>Md Tanvir Islam</strong> <a href="https://ieeexplore.ieee.org/abstract/document/9225662" target="_blank">"Human behavior analysis using association rule mining techniques"</a> 11th International conference on computing, communication and networking technologies (ICCCNT). IEEE, 2020.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/344695418_Human_Behavior_Analysis_using_Association_Rule_Mining_Techniques/links/64e61e8a0acf2e2b520d7a6c/Human-Behavior-Analysis-using-Association-Rule-Mining-Techniques.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>

13. <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/8944528" target="_blank">"An empirical study on diabetes mellitus prediction for typical and non-typical cases using machine learning approaches"</a> 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT). IEEE, 2019.
   <a href="https://d1wqtxts1xzle7.cloudfront.net/61823414/120200118-98333-w040ke-libre.pdf?1579372384=&response-content-disposition=inline%3B+filename%3DAn_Empirical_Study_on_Diabetes_Mellitus.pdf&Expires=1720577247&Signature=RV8HoluhW73rk1RyMz4mLJmuI~VhNI4VJAn92EaxayUnec6LEYPEoC8FoSynOeDeAMaFei0QhypxoYfX-hLQnz2bKWHzYZp5tJhBiwJXOEQif--i-nNlK2T-c3ak6S5OdjRpkJqvAUS4ivsQMrmnfmjG7jOY4S8-FGdQdr1OCQwlIXtjavDg955a8Ib2sA0n7I~epfwNpfkT6xG-8r1g4VpMAZJ955h38eig1onpX7IzPj5PbC7LAslkDIJFpIMzdXBteO5HeS5dV4hvmFYqhQLzn5Ic4ycecmyEnd7VhVdZSXF5yZAdthbFO0tjyUAF3swxBCNMPGCLfi7~s945Uw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>

14. <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://link.springer.com/chapter/10.1007/978-981-15-3666-3_37" target="_blank">"Diabetes Mellitus Prediction Using Ensemble Machine Learning Techniques"</a> International Conference on Computational Intelligence, Security and Internet of Things. Singapore: Springer Singapore, 2019.
   <a href="https://link.springer.com/chapter/10.1007/978-981-15-3666-3_37" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>

15. Promila Ghosh, M Raihan, and <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/8944883" target="_blank">"Safeguard: A prototype of an application programming interface to save the disaster affected people"</a> 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT). IEEE, 2019.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/338361572_Safeguard_A_Prototype_of_An_Application_Programming_Interface_to_Save_the_Disaster_Affected_People/links/64e6202d0453074fbda94f96/Safeguard-A-Prototype-of-An-Application-Programming-Interface-to-Save-the-Disaster-Affected-People.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>

16. M. Raihan and <strong>Md Tanvir Islam</strong> <a href="https://ieeexplore.ieee.org/abstract/document/8944552" target="_blank">"An empirical study to predict diabetes mellitus using K-means and hierarchical clustering techniques"</a> 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT). IEEE, 2019.
   <a href="https://www.researchgate.net/profile/Md-Tanvir-Islam-6/publication/338369241_An_Empirical_Study_to_Predict_Diabetes_Mellitus_using_K-Means_and_Hierarchical_Clustering_Techniques/links/64e6200f434d3f628c432fd5/An-Empirical-Study-to-Predict-Diabetes-Mellitus-using-K-Means-and-Hierarchical-Clustering-Techniques.pdf" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>
    
17. Md Bellal Hossain, Etu Podder, Abdullah Al-Mamun Bulbul, Himadri Shekhar Mondal, M Raihan, and <strong>Md Tanvir Islam</strong> and M. Raihan <a href="https://ieeexplore.ieee.org/abstract/document/8944499" target="_blank">"Identification of cyanide within hollow core photonics crystal fiber"</a> 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT). IEEE, 2019.
   <a href="https://d1wqtxts1xzle7.cloudfront.net/111790955/Identification_of_Cyanide.pdf?1708805527=&response-content-disposition=inline%3B+filename%3DIdentification_of_Cyanide_within_Hollow.pdf&Expires=1720577156&Signature=G1pLdjmPGqxttAhHKdjdUcJDrQDy4B1VVZbEbKeS1Fn3VDdQ85wEp5Vgh40XeEWpQJoc5X9pDdW-oPjaxws5pJxpJwYvmXOtKH6M~eGaH5PbsZa9RoUeKtX7t~SzFuxa27aPdXyo-4TAwlAvXWE8K~EWXc7UBfv-X4qY18SSnDc~rHJxYqJ1-zJRO-Gs-fJJBmG5ehhtv6nAFnvX0la-XteoJWVmwsF-k2nBExf7TE7GNebvYeICCkYGoKh6~gY2FJmrMR7~mAmnmSyasZevaaQN5UkVTYLQIiKceUGOcwm6fh78eFtWaOWA~nMZrBOCMfo6l3PByAD7~FleVAV4pw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" target="_blank"><img src="https://raw.githubusercontent.com/tanvirnwu/tanvirnwu.github.io/main/assets/icons/PDF_Icon.png" class="pdf-icon"></a>







<!-- Add more publications as needed -->

<style>
  .pdf-icon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-left: 5px;
  }
</style>
