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

      <li style="margin: 0 20px 0 0; padding: 0; display: flex; align-items: center;"> <!-- Set margin-right to 20px -->
        <a href="https://tanvirnwu.github.io/pages/datasets" class="active-menu">
  <strong>Datasets</strong></a> </li>
        
      <li style="margin: 0; padding: 0; display: flex; align-items: center;">
  <a href="https://tanvirnwu.github.io/assets/TanvirResume.pdf" 
     target="_blank" 
     rel="noopener noreferrer"
     style="font-size: 12px; color: #343434; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
    <strong>Resume</strong>
  </a>
</li>

    </ul>
  </nav>
</header>

<style>

.active-menu {
  font-size: 12px;
  color: white !important;  /* ✅ Forces text color to stay white */
  background-color: #6A5ACD;
  text-decoration: none;
  padding: 9px 15px;
  border-radius: 4px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
  display: block;
}

.active-menu strong {
  color: white !important; /* ✅ Forces text inside <strong> to be white */
}

.active-menu:hover {
  background-color: #5548c8; /* ✅ Slightly darker shade on hover */
}

  
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
      background-color: #6A5ACD;
      color: white;
      font-weight:normal;
    }

  .bibtex-container {
    margin-top: -30px;
    margin-bottom: 3px;
  background-color: #E2E3F4;
  font-size: 10px;
  color:#343434;
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

.toggle-button {
  cursor: pointer;
  color: #6A5ACD;  /* ✅ Default color */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  border-radius: 2px;  /* Optional: Adds rounded corners */
}

.toggle-button:hover {
  color: #6A5ACD !important;  /* ✅ Turns white on hover */
  background-color: white;  /* ✅ Adds a background on hover for visibility */
  text-decoration: none;  /* ✅ Prevents underline on hover */
}

/* ✅ Ensures the color stays unchanged after clicking */
.toggle-button:focus, .toggle-button:active {
  color: #6A5ACD !important;
  outline: none;
}


</style>




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

    // ✅ Ensure the link color does not change after clicking
    link.style.color = "#6A5ACD";
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

        
      <p style="text-align: justify; margin-top: -15px; margin-bottom: -12px; font-size:14px; color:#343434;">
      HazeSpace2M is a collection of over 2 million images designed to enhance dehazing through haze type classification. HazeSpace2M includes diverse scenes with 10 haze intensity levels, featuring Fog, Cloud, and Environmental Haze.
      </p>
        
      </div>     
      <!-- Read Full Paper Button -->
        <h5>[<a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">Dataset</a>] [<a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank">Paper</a>] [<a href="javascript:void(0);" class="toggle-button" onclick="toggleBibtex('bibtex-entry', this)">BibTeX</a>]
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




<!-- Parent Container with Top Margin -->
<div style="margin-top: 0px; display: flex; justify-content: flex-start;">
    <!-- Right Column: Project Summary and Button -->
    <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
      <!-- Project Summary Box -->
      <div style="border: 0px solid white; padding: 5px; width: 100%;">
        
      <h4><a href="https://github.com/tanvirnwu/TriFuse" target="_blank">LoLI-Street:</a> Low-light Image Enhancement Dataset</h4>

        
      <p style="text-align: justify; margin-top:-15px; margin-bottom: -12px; font-size:14px; color:#343434;">
      The training consists of 30k, while validation has 3k paired low and high-light images. Moreover, we collected high-resolution videos (4K/8K at 60fps) from various cities under low-light conditions, extracting and manually reviewing frames to create the Real Low-light Testset (RLLT) of our LoLI-Street dataset. We used Photoshop v25.0 to generate the synthetic images of our dataset.</p>
        
      </div>     
      <!-- Read Full Paper Button -->
        <h5>[<a href="https://www.kaggle.com/datasets/tanvirnwu/loli-street-low-light-image-enhancement-of-street" target="_blank">Dataset</a>] [<a href="https://openaccess.thecvf.com/content/ACCV2024/papers/Islam_LoLI-Street_Benchmarking_Low-light_Image_Enhancement_and_Beyond_ACCV_2024_paper.pdf" target="_blank">Paper</a>] [<a href="javascript:void(0);" class="toggle-button" onclick="toggleBibtex('bibtex-entry2', this)">BibTeX</a>]
</h5>

        <!-- BibTeX Entry (Initially Hidden) -->
<div id="bibtex-entry2" class="bibtex-container">
@InProceedings{Islam_2024_ACCV,
    author    = {Islam, Md Tanvir and Alam, Inzamamul and Woo, Simon S. and Anwar, Saeed and Lee, IK Hyun and Muhammad, Khan},
    title     = {LoLI-Street: Benchmarking Low-light Image Enhancement and Beyond},
    booktitle = {Proceedings of the Asian Conference on Computer Vision (ACCV)},
    month     = {December},
    year      = {2024},
    pages     = {1250-1267}
}
</div>
    </div>
</div>



<!-- Parent Container with Top Margin -->
<div style="margin-top: 0px; display: flex; justify-content: flex-start;">
    <!-- Right Column: Project Summary and Button -->
    <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
      <!-- Project Summary Box -->
      <div style="border: 0px solid white; padding: 5px; width: 100%;">
        
      <h4><a href="https://github.com/tanvirnwu/TriFuse" target="_blank">CDC:</a> Crop Damage Classification</h4>

        
      <p style="text-align: justify; margin-top:-15px; margin-bottom: -12px; font-size:14px; color:#343434;">
      CDC features train set contains 21k images of damaged and non-damaged classes of crops and a testset that contains 2k images each class having 1k images. In total it features 23k images suitable for training and testing models for identifying damaged crops effectively.</p>
        
      </div>     
      <!-- Read Full Paper Button -->
        <h5>[<a href="https://www.kaggle.com/datasets/tanvirnwu/crop-damage-classification-dataset-cdc-dataset" target="_blank">Dataset</a>] [<a href="https://www.sciencedirect.com/science/article/pii/S0952197625001174" target="_blank">Paper</a>] [<a href="javascript:void(0);" class="toggle-button" onclick="toggleBibtex('bibtex-entry3', this)">BibTeX</a>]
</h5>

        <!-- BibTeX Entry (Initially Hidden) -->
<div id="bibtex-entry3" class="bibtex-container">
@article{islam2025resource,
  title={Resource constraint crop damage classification using depth channel shuffling},
  author={Islam, Md Tanvir and Swapnil, Safkat Shahrier and Billal, Md Masum and Karim, Asif and Shafiabady, Niusha and Hassan, Md Mehedi},
  journal={Engineering Applications of Artificial Intelligence},
  volume={144},
  pages={110117},
  year={2025},
  publisher={Elsevier}
}
</div>
    </div>
</div>




