<header style="background-color: white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 0; margin-bottom: 0; position: relative; height: 40px; border-radius: 4px; display: flex; align-items: center;">
  <nav style="margin: 0; padding: 0; width: 100%;">
    <ul style="list-style-type: none; padding: 0; margin: 0; display: flex; align-items: center; height: 100%;">
      <li style="margin: 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/pages/publications" style="color: black; text-decoration: none; padding: 10px 15px; border-radius: 4px; transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>Publications</strong>
        </a>
      </li>
      <li style="margin: 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf" style="color: black; text-decoration: none; padding: 10px 15px; border-radius: 4px; transition: background-color 0.3s, color 0.3s; display: block;">
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




<p style="margin-top: 65px;"><strong>Md Tanvir Islam</strong><br>
MS Candidate | Research Fellow | Teaching Assistant<br>
VIS2KNOW Lab, Department of Computer Science and Engineering<br>
Sungkyunkwan University, Republic of Korea</p>

-----------------------------
<div style="text-align: justify;">
  Md Tanvir Islam is a dedicated scholar pursuing his Master's degree in Computer Science and Engineering at Sungkyunkwan University (SKKU) in the Republic of Korea. With a strong foundation from completing his Bachelor's degree in the same field in 2019, he has been recognized for his exceptional potential and awarded the prestigious Global Korea Scholarship (GKS) in 2021, a fully funded scholarship offered by the Korean government. Currently, as a master's research student, he is an esteemed member of the Visual Analytics for Knowledge Laboratory (VIS2KNOW Lab), focusing his research on Computational Bioinformatics and Computer Vision. Md Tanvir Islam's passion for innovative applications of computer science is evident through his published research papers at reputable conferences.
  <h2 style="margin-top: 20px;"></h2>
</div>
-----------------------------
<div style="text-align: center;">
  tanvirnwu[@]g.skku.edu | <a href="https://www.linkedin.com/in/tanvirislamnwu/" target="_blank">LinkedIn</a> | <a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf" target="_blank">Latest Resume</a> | <a href="https://tanvirnwu.github.io/pages/publications" target="_blank">Publications</a>
  <h2 style="margin-top: 20px;"></h2>
</div>
-----------------------------
