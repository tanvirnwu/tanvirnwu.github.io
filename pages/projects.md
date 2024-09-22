<!-- Header Section -->
<header style="background-color: white; padding: 0; margin-bottom: 0; position: relative; height: 36px; border-radius: 4px; display: flex; align-items: center;">
  <nav style="margin: 0; padding: 0; width: 100%;">
    <ul style="list-style-type: none; padding: 0; margin: 0; display: flex; align-items: center; height: 100%;">
      <li style="margin: 0 20px 0 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>About</strong>
        </a>
      </li>
      <li style="margin: 0 20px 0 0; padding: 0; display: flex; align-items: center;">
        <a href="https://tanvirnwu.github.io/pages/publications" style="color: black; text-decoration: none; padding: 9px 15px; border-radius: 4px; box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, color 0.3s; display: block;">
          <strong>Publications</strong>
        </a>
      </li>
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

  /* Common button styling for the header and Read Full Paper */
  .custom-button {
    color: black;
    text-decoration: none;
    padding: 9px 15px;
    border-radius: 4px;
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, color 0.3s;
    display: block;
    text-align: center;
  }

  .custom-button:hover {
    background-color: #0066ff; /* Blue background on hover */
    color: white; /* White text on hover */
  }
</style>


<h3 style="margin-top: 60px;">Image Enhancement</h3>
<hr>


<!-- Parent Container with Top Margin -->
<div style="margin-top: 70px; display: flex; justify-content: flex-start;">
    <!-- Right Column: Project Summary and Button -->
    <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
      <!-- Project Summary Box -->
      <div style="border: 0px solid white; padding: 5px; width: 100%;">
      <h3>HazeSpace2M: A Dataset for Haze Aware Single Image Dehazing</h3>
      <p style="margin-top:-9px;"><img src="https://cdn-icons-png.flaticon.com/512/4220/4220391.png" alt="Presentation Icon" width="15" height="15"><I> Accepted by ACM Multimedia 2024, Australia</i></p>
      <p style="text-align: justify; margin-top: 3px;">
      The HazeSpace2M paper introduces a large-scale dataset with over 2 million images aimed at improving single-image dehazing through haze-type classification. The dataset includes 10 levels of haze intensity across multiple scenes, such as outdoor, street, farmland, and satellite, featuring three types of haze: Fog, Cloud, and Environmental Haze. By classifying haze types first, the proposed method applies specialized dehazing algorithms, enhancing image clarity. Benchmarking results show that haze-specific dehazing significantly improves the performance of dehazing models compared to general methods, setting new standards in haze-aware image restoration.
      </p>
      </div>     
      <!-- Read Full Paper Button -->
      <div style="margin-top: -28px; width: 50%; height:20px; text-align: center;">
        <a href="https://tanvirnwu.github.io/assets/papers/HazeSpace2M.pdf" class="custom-button" target="_blank"><strong>Read Full Paper →</strong></a>
      </div>      
    </div>
</div>


<hr style="margin-top: 55px;">
<h4 style="margin-top: 0px;"><strong>Image Enhancement</strong><br></h4>
<hr>



<!-- Parent Container with Top Margin -->
<div style="margin-top: 30px; display: flex; justify-content: flex-start;">
    <!-- Right Column: Project Summary and Button -->
    <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
      <!-- Project Summary Box -->
      <div style="border: 0px solid white; padding: 5px; width: 100%;">
      <h3>LoLI-Street: Benchmarking Low-Light Image Enhancement and Beyond</h3>
      <p style="margin-top:-9px;"><img src="https://cdn-icons-png.flaticon.com/512/4220/4220391.png" alt="Presentation Icon" width="15" height="15"><I> Accepted by Asian Conference on Computer Vision (ACCV 2024), Vietnam</i></p>
      <p style="text-align: justify; margin-top: 3px;">
      This paper introduces a new dataset, LoLI-Street, comprising 33k paired low-light and well-exposed street images, crucial for training low-light image enhancement (LLIE) models in real-world conditions, particularly for autonomous vehicles. It also proposes a new LLIE model, "TriFuse," which integrates transformers and diffusion techniques for more effective noise reduction and image enhancement. The dataset and model are benchmarked against state-of-the-art methods, demonstrating superior performance in enhancing low-light images and improving object detection in autonomous driving and surveillance systems.
      </p>
      </div>     
      <!-- Read Full Paper Button -->
      <div style="margin-top: -28px; width: 50%; height:20px; text-align: center;">
        <a href="https://tanvirnwu.github.io/assets/papers/LoLI-Street_ACCV_2024.pdf" class="custom-button" target="_blank"><strong>Read Full Paper →</strong></a>
      </div>      
    </div>
</div>

<hr style="margin-top: 60px;">


### Synthetic Image Classification
----------------------------------
