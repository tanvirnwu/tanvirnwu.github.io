<header style="background-color: white; padding: 0; margin-bottom: 0; position: relative; height: 36px; border-radius: 4px; display: flex; align-items: center;">
  <nav style="margin: 0; padding: 0; width: 100%;">
    <ul style="list-style-type: none; padding: 0; margin: 0; display: flex; align-items: center; height: 100%;">

      <li style="margin: 0 20px 0 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/" style="font-size: 12px; color: #343434; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>About</strong>
        </a></li>
        
      <li style="margin: 0 20px 0 0; padding: 0; display: flex; align-items: center;"> <!-- Set margin-right to 20px -->
        <a href="https://tanvirnwu.github.io/pages/publications" style="font-size: 12px; color: #343434; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>Publications</strong>
        </a>
      </li>
        
      <li style="margin: 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf" style="font-size: 12px; color: #343434; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>Resume</strong>
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  a{color:#6A5ACD;}
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
    .urls {
      color: #6A5ACD;
    }
    .urls:hover {
      background-color: #ffffff;
      color: #6A5ACD;
      font-weight:normal;
    }

  .bibtex-container {
  background-color: #E2E3F4;
  font-size: 8px;
  border-left: 4px solid #6A5ACD;
  font-family: monospace;
  padding: 10px;
  white-space: pre-wrap;
  overflow-x: auto;
  max-height: 0;
  transition: max-height 0.4s ease-in-out, visibility 0.4s;
  display: block;
  visibility: hidden;
}

.bibtex-container.show {
  max-height: 200px;
  visibility: visible;
}
</style>




<script>
  function toggleBibtex() {
    var bibtex = document.getElementById("bibtex-entry");
    bibtex.classList.toggle("show");
  }
</script>



<!--
<h3 style="margin-top: 70px; color: #267CB9;">Image Enhancement</h3>
<hr> -->


<!-- Parent Container with Top Margin -->
<div style="margin-top: 70px; display: flex; justify-content: flex-start;">
    <!-- Right Column: Project Summary and Button -->
    <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
      <!-- Project Summary Box -->
      <div style="border: 0px solid white; padding: 5px; width: 100%;">
      <h4><a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">HazeSpace2M:</a> Large-scale Single Image Dehazing Dataset</h4>
      <!--<p style="margin-top:-9px;"><img src="https://cdn-icons-png.flaticon.com/512/4220/4220391.png" alt="Presentation Icon" width="15" height="15"><I> Accepted by ACM Multimedia 2024, Australia</i></p>-->
      <p style="text-align: justify; margin-top: 2px; margin-bottom: -8px; font-size:14px; color:#343434;">
      HazeSpace2M is a collection of over 2 million images designed to enhance dehazing through haze type classification. HazeSpace2M includes diverse scenes with 10 haze intensity levels, featuring Fog, Cloud, and Environmental Haze.
      </p>
        
      </div>     
      <!-- Read Full Paper Button -->
        <h5>[<a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">Dataset↓</a>] [<a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">Paper</a>] [<a href="javascript:void(0);" class="toggle-button" onclick="toggleBibtex()">BibTeX</a>] </h5>

        <!-- BibTeX Entry (Initially Hidden) -->
<div id="bibtex-entry" class="bibtex-container">
  @inproceedings{Tanvir2024hazespace2m,<br>
  &nbsp;&nbsp;title={HazeSpace2M: A Dataset for Haze Aware Single Image Dehazing},<br>
  &nbsp;&nbsp;author={Islam, Md Tanvir and Rahim, Nasir and Anwar, Saeed and Saqib Muhammad},<br>
  &nbsp;&nbsp;booktitle={Proceedings of the 32nd ACM International Conference on Multimedia},<br>
  &nbsp;&nbsp;year={2024},<br>
  &nbsp;&nbsp;doi={10.1145/3664647.3681382}<br>
  }
</div>
    </div>
</div>


<hr style="margin-top: 60px;">


