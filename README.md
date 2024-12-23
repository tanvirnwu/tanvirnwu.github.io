<header style="background-color: white; padding: 0; margin-bottom: 0; position: relative; height: 36px; border-radius: 4px; display: flex; align-items: center;">
  <nav style="margin: 0; padding: 0; width: 100%;">
    <ul style="list-style-type: none; padding: 0; margin: 0; display: flex; align-items: center; height: 100%;">
      <li style="margin: 0 20px 0 0; padding: 0; display: flex; align-items: center;"> <!-- Set margin-right to 20px -->
        <a href="https://tanvirnwu.github.io/pages/publications" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>Publications</strong>
        </a>
      </li>
      <li style="margin: 0 20px 0 0; padding: 0; display: flex; align-items: center;">
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

<hr style="margin-top: 55px;">
<p style="margin-top: 0px;"><strong>Md Tanvir Islam</strong><br>
MS Candidate | Research Fellow | Teaching Assistant<br>
VIS2KNOW Lab, Department of Computer Science and Engineering<br>
Sungkyunkwan University, Suwon, Republic of Korea<br>
<hr>



<h3>About Tanvir</h3>
  <hr>
  <p>
    Md Tanvir Islam is currently pursuing his Master's degree in Computer Science and Engineering at Sungkyunkwan University (SKKU) in South Korea, where he is also a Graduate Research Assistant at the VIS2KNOW Lab under the supervision of <a href="https://scholar.google.co.kr/citations?user=k5oUZyQAAAAJ&hl=en" target="_blank">Professor Khan Muhammad</a>. With a strong foundation from completing his Bachelor's degree in the same field in 2019, he has been recognized for his exceptional potential and awarded the prestigious Global Korea Scholarship (GKS) in 2021, a fully funded scholarship offered by the Korean government. Based on his excellent academic and research performance, he was awarded the <i>``Academic Excellence Award Winner''</i> among the GKS scholars in 2024 by the NIIED, Government of South Korea. Currently, as a master's research student, he is an esteemed member of the Visual Analytics for Knowledge Laboratory (VIS2KNOW Lab), focusing his research on multiple emerging topics such as computational bioinformatics, image dehazing, image enhancement, invisible watermarking, marked by several research outcomes published in high impactful conferences and journals such as <i>``ACM Multimedia (ACM MM), Asian Conference on Computer Vision (ACCV), Alexandria Engineering Journal and Engineering Application of Artificial Intelligence''</i>. Md Tanvir Islam's passion for innovative applications of computer science and artificial intelligence is evident through his published research papers at reputable venues.
    <br><br>
    In addition, he has also gained experience as a Teaching Assistant at SKKU, where I helped design and deliver course materials and mentored undergraduate students. I am passionate about knowledge-sharing and collaborative learning, which has allowed me to grow as a researcher and a mentor.
    <br><br>
    Thank you for visiting my website! Please explore my <a href="https://tanvirnwu.github.io/pages/publications" target="_blank">research works and publications</a>, and do not hesitate to contact me if you would like to collaborate or discuss potential research opportunities.
  </p>
  <hr>


<!-- Add the LinkedIn and Google Scholar icons and links -->
<p>
  <span style="vertical-align: middle;">
    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" width="20" height="20" style="vertical-align: middle;">
    <strong> tanvirnwu[@]g.skku.edu</strong>
  </span>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/tanvirnwu/" target="_blank" style="text-decoration: none; color: black;">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="20" height="20" style="vertical-align: middle;">
    <strong> LinkedIn</strong>
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://scholar.google.com/citations?user=UvINe-sAAAAJ&hl=en" target="_blank" style="text-decoration: none; color: black;">
    <img src="https://static-00.iconduck.com/assets.00/google-scholar-icon-2048x2048-sjbhklt7.png" alt="Google Scholar" width="20" height="20" style="vertical-align: middle;">
    <strong> Google Scholar</strong>
  </a>
</p>
