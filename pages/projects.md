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





<hr>
<!-- Parent Container with Top Margin -->
<div style="margin-top: 60px; display: flex; justify-content: flex-start;">

  <!-- Project Summary Container -->
  <div style="display: flex; gap: 20px; width: 100%;">

    <!-- Left Column: Image and GitHub Information -->
    <div style="flex: 0.35; display: flex; flex-direction: column; gap: 20px;">
      
      <!-- Image Box -->
      <div style="width: 100%; height: 150px;">
        <img src="https://tanvirnwu.github.io/assets/icons/PDF_Icon.png" alt="Project Image" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      
      <!-- GitHub and ACCV Info Box -->
      <div style="border: 0px solid green; padding: 0px; width: 100%; height: 70px; display: flex; flex-direction: column; justify-content: left;">
        <p style="margin: 2px;"><img src="https://cdn-icons-png.flaticon.com/512/4220/4220391.png" alt="Presentation Icon" width="15" height="15">ACCV 2024</p>
       <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Icon" width="15" height="15">
      <a href="https://github.com/tanvirnwu/HazeSpace2M" target="_blank" style="text-decoration: none; color: black;">Code & Dataset</a>
      </div>
    </div>

    <!-- Right Column: Project Summary and Button -->
    <div style="flex: 0.65; display: flex; flex-direction: column; gap: 20px;">
      
      <!-- Project Summary Box -->
      <div style="border: 0px solid white; padding: 5px; width: 100%;">
      <h3>HazeSpace2M: A Dataset for Haze Aware Single Image Dehazing</h3>
      <p style="margin-top: 5px;">
      The HazeSpace2M paper introduces a large-scale dataset with over 2 million images, aimed at improving single-image dehazing through haze type classification. The dataset includes 10 levels of haze intensity across multiple scenes, such as outdoor, street, farmland, and satellite, featuring three types of haze: Fog, Cloud, and Environmental Haze. By classifying haze types first, the proposed method applies specialized dehazing algorithms, enhancing image clarity. Benchmarking results show that haze-specific dehazing significantly improves the performance of dehazing models compared to general methods, setting new standards in haze-aware image restoration​
      </p>
      </div>
      
      <!-- Read Full Paper Button -->
      <div style="margin-top: -30px; width: 70%; height:20px; text-align: center;">
        <a href="#" class="custom-button"><strong>Read Full Paper →</strong></a>
      </div>      
    </div>

  </div>
  
</div>



