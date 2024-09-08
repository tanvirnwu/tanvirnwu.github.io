<header style="background-color: white; padding: 0; margin-bottom: 0; position: relative; height: 36px; border-radius: 4px; display: flex; align-items: center;">
  <nav style="margin: 0; padding: 0; width: 100%;">
    <ul style="list-style-type: none; padding: 0; margin: 0; display: flex; align-items: center; height: 100%;">
      <li style="margin: 0 20px 0 0; padding: 0; display: flex; align-items: center;"> <!-- Set margin-right to 20px -->
        <a href="https://tanvirnwu.github.io/pages/publications" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>Publications</strong>
        </a>
      </li>
      <li style="margin: 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>My Resume</strong>
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


<hr style="margin-top: 85px;">
<p style="margin-top: 0px;"><strong>Md Tanvir Islam</strong><br>
MS Candidate | Research Fellow | Teaching Assistant<br>
VIS2KNOW Lab, Department of Computer Science and Engineering<br>
Sungkyunkwan University, Republic of Korea<br>
<strong>Email:</strong> tanvirnwu[@]g.skku.edu</p>

<hr>
### Bio
<hr>
<p style="text-align: justify;">I am Md Tanvir Islam, an AI researcher with a strong focus on computer vision, deep learning, and machine learning. I am pursuing my Master's degree in Computer Science and Engineering at Sungkyunkwan University (SKKU), South Korea, where I am also a Research Assistant at the VIS2KNOW Lab under the supervision of <a href="https://scholar.google.co.kr/citations?user=k5oUZyQAAAAJ&hl=en" target="_blank">Professor Khan Muhammad.</a>

<br><br>
My research interests lie at the intersection of AI and real-world applications, particularly image and video processing. My work involves developing advanced algorithms for image dehazing, low-light image enhancement, and AI-synthesized image detection. These efforts have resulted in multiple publications in top-tier conferences such as ACM Multimedia and ACCV and several patents under review by the US Patent Office.
<br><br>
In addition to my research, I have gained experience as a Teaching Assistant at SKKU, where I helped design and deliver course materials and mentored undergraduate students. I am passionate about knowledge-sharing and collaborative learning, which has allowed me to grow as a researcher and a mentor.
<br><br>
Before joining SKKU, I completed my Bachelor's in Computer Science and Engineering from North Western University, Bangladesh, where I developed a strong foundation in machine learning and data analysis. Throughout my academic journey, I have been fortunate to receive prestigious awards, including the Global Korea Scholarship (GKS). I have actively contributed to the AI community through research projects and collaborations.
<br><br>
I am constantly exploring new challenges and opportunities to expand my expertise in AI. Looking ahead, I aspire to pursue a Ph.D. and advance the frontiers of AI research, focusing on creating impactful solutions for real-world problems, particularly in healthcare, autonomous systems, and smart environments.
<br><br>
Thank you for visiting my website! Please explore my research work, publications, and projects, and do not hesitate to contact me if you would like to collaborate or discuss potential research opportunities.</p>
<hr>
