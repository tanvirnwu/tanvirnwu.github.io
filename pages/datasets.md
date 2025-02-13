<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page</title>
  
  <style>
    /* ✅ Navigation menu styling */
    nav a {
      font-size: 12px;
      color: #343434 !important; /* Default color for navbar links */
      text-decoration: none;
      padding: 9px 15px;
      border-radius: 4px;
      box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s, color 0.3s;
      display: block;
    }

    /* ✅ Ensure navbar links do not change on hover */
    nav a:hover {
      background-color: #6A5ACD;
      color: white;
    }

    /* ✅ Apply hover effect to all other links (outside the navbar) */
    a:not(nav a):hover {
      background-color: white !important;
      color: #6A5ACD !important;
      text-decoration: none;
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    /* ✅ Ensure strong text inside links also changes color */
    a:not(nav a) strong {
      color: inherit; /* ✅ Inherit color from parent link */
    }

    a:not(nav a):hover strong {
      color: #6A5ACD !important; /* ✅ Ensure text inside <strong> also changes */
    }

    /* ✅ Special styling for "BibTeX" buttons */
    .toggle-button:hover {
      background-color: white !important;
      color: #6A5ACD !important;
      text-decoration: none;
    }

    /* ✅ Ensure active menu (Datasets) remains highlighted */
    .active-menu {
      font-size: 12px;
      color: white !important;
      background-color: #6A5ACD;
      text-decoration: none;
      padding: 9px 15px;
      border-radius: 4px;
      box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s, color 0.3s;
      display: block;
    }

    .active-menu strong {
      color: white !important;
    }

    .active-menu:hover {
      background-color: #5548c8;
    }

    .bibtex-container {
      margin-top: -30px;
      margin-bottom: 3px;
      background-color: #E2E3F4;
      font-size: 10px;
      color: #343434;
      border-left: 4px solid #6A5ACD;
      font-family: monospace;
      padding: 6px;
      white-space: pre-wrap;
      overflow-x: auto;
      max-height: 0;
      transition: max-height 0.4s ease-in-out, visibility 0.4s;
      display: block;
      visibility: hidden;
      line-height: 1.0; 
    }

    .bibtex-container.show {
      max-height: 120px;
      visibility: visible;
    }

  </style>
</head>

<body>

  <!-- Header Section -->
  <header style="background-color: white; padding: 0; margin-bottom: 0; position: relative; height: 36px; border-radius: 4px; display: flex; align-items: center;">
    <nav style="margin: 0; padding: 0; width: 100%;">
      <ul style="list-style-type: none; padding: 0; margin: 0; display: flex; align-items: center; height: 100%;">
        <li><a href="https://tanvirnwu.github.io/" class="nav-link"><strong>About</strong></a></li>
        <li><a href="https://tanvirnwu.github.io/pages/publications" class="nav-link"><strong>Publications</strong></a></li>
        <li><a href="https://tanvirnwu.github.io/pages/datasets" class="active-menu"><strong>Datasets</strong></a></li>
        <li><a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf" class="nav-link"><strong>Resume</strong></a></li>
      </ul>
    </nav>
  </header>

  <!-- Script for BibTeX Toggle -->
  <script>
    function toggleBibtex(entryId, link) {
      var bibtex = document.getElementById(entryId);
      if (bibtex.classList.contains("show")) {
        bibtex.style.maxHeight = "0";
        setTimeout(() => bibtex.classList.remove("show"), 400);
      } else {
        bibtex.classList.add("show");
        bibtex.style.maxHeight = bibtex.scrollHeight + "px";
      }
      link.style.color = "#6A5ACD";
    }
  </script>

  <!-- Dataset Section -->
  <div style="margin-top: 70px;">
    <h4><a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">HazeSpace2M:</a> Large-scale Single Image Dehazing Dataset</h4>
    <p>HazeSpace2M is a collection of over 2 million images designed to enhance dehazing through haze type classification.</p>
    <h5>
      [<a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">Dataset</a>] 
      [<a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">Paper</a>] 
      [<a href="javascript:void(0);" class="toggle-button" onclick="toggleBibtex('bibtex-entry', this)">BibTeX</a>]
    </h5>
    <div id="bibtex-entry" class="bibtex-container">
      @inproceedings{Tanvir2024hazespace2m,<br>
      &nbsp;&nbsp;title={HazeSpace2M: A Dataset for Haze Aware Single Image Dehazing},<br>
      &nbsp;&nbsp;author={Islam, Md Tanvir and Rahim, Nasir and Anwar, Saeed and Saqib Muhammad},<br>
      &nbsp;&nbsp;booktitle={Proceedings of ACM Multimedia},<br>
      &nbsp;&nbsp;year={2024},<br>
      &nbsp;&nbsp;doi={10.1145/3664647.3681382}<br>
      }
    </div>
  </div>

</body>
</html>
