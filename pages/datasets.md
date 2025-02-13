<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Research Website</title>
  <style>
    /* Header Styling */
    header {
      background-color: white;
      padding: 0;
      margin-bottom: 0;
      position: relative;
      height: 40px;
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
      font-size: 12px;
      color: #6A5ACD;
      text-decoration: none;
      padding: 9px 15px;
      border-radius: 4px;
      box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s, color 0.3s;
      display: block;
    }

    a:hover {
      background-color: #6A5ACD;
      color: white;
    }

    /* BibTeX Toggle Styles */
    .bibtex-container {
      background-color: #fdfde5;
      border-left: 4px solid #6A5ACD;
      font-family: monospace;
      padding: 10px;
      white-space: pre-wrap;
      overflow-x: auto;
      max-height: 0;
      transition: max-height 0.4s ease-in-out;
      display: block;
      visibility: hidden;
    }

    .bibtex-container.show {
      max-height: 300px;
      visibility: visible;
    }

    .toggle-button {
      cursor: pointer;
      color: #6A5ACD;
      text-decoration: none;
      font-weight: bold;
    }

    .toggle-button:hover {
      text-decoration: underline;
    }

    /* Responsive Navigation */
    @media (max-width: 768px) {
      header {
        height: auto;
        flex-direction: column;
      }

      ul {
        flex-direction: column;
        align-items: center;
      }

      li {
        margin-bottom: 10px;
      }
    }

  </style>
</head>
<body>

  <!-- Header Section -->
  <header>
    <nav>
      <ul>
        <li><a href="https://tanvirnwu.github.io/"><strong>About</strong></a></li>
        <li><a href="https://tanvirnwu.github.io/pages/publications"><strong>Publications</strong></a></li>
        <li><a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf"><strong>Resume</strong></a></li>
      </ul>
    </nav>
  </header>

  <!-- Parent Container with Top Margin -->
  <div style="margin-top: 70px; display: flex; justify-content: flex-start;">
    <!-- Right Column: Project Summary and Button -->
    <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
      <!-- Project Summary Box -->
      <div style="border: 0px solid white; padding: 5px; width: 100%;">
        <h4><a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">HazeSpace2M:</a> Large-scale Single Image Dehazing Dataset</h4>
        <p style="margin-top:-9px;">
          <img src="https://cdn-icons-png.flaticon.com/512/4220/4220391.png" alt="Presentation Icon" width="15" height="15">
          <i>Accepted by ACM Multimedia 2024, Australia</i>
        </p>
        <p style="text-align: justify; margin-top: 3px;">
          HazeSpace2M is a collection of over 2 million images designed to enhance dehazing through haze type classification. HazeSpace2M includes diverse scenes with 10 haze intensity levels, featuring Fog, Cloud, and Environmental Haze.
        </p>
      </div>

      <!-- Read Full Paper & BibTeX Button -->
      <h5>
        [<a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">Dataset↓</a>] 
        [<a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">Paper</a>] 
        [<a href="javascript:void(0);" class="toggle-button" onclick="toggleBibtex()">BibTeX</a>]
      </h5>

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

  <!-- JavaScript for BibTeX Toggle -->
  <script>
    function toggleBibtex() {
      var bibtex = document.getElementById("bibtex-entry");
      bibtex.classList.toggle("show");
    }
  </script>

</body>
</html>
