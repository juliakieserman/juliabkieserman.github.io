const contentData = {
  Home: `
    <h2> Hi, I'm Julia! <img src="images/goober.png" /> </h2>
    <span> I'm a third-year graduate student at New York University, advised by <a href="https://damonmccoy.com/">Damon McCoy</a>. </span>

    I'm broadly interested in usable security and privacy. More specifically, I'm curious about how the digital world redefines intimacy, privacy and autonomy and the techniques people use to enhance or resist those definitions. 

    <div> 
    <h4>Recent Publications:</h4>

    <div class="publication-entry">
        <a href="https://petsymposium.org/popets/2025/popets-2025-0151.php1" class="paper-title">
            Tracker Installations Are Not Created Equal: Understanding Tracker Configuration of Form Data Collection
        </a> 
        <br>
        <span class="bold-name">Julia B. Kieserman</span>, Athanasios Andreou, Chris Geeng, Tobias Lauinger, Damon McCoy
        <br>
        PETS 2025 (to appear)
    </div>
    
    <br>
    <br>

    <div class="publication-entry">
        <a href="https://petsymposium.org/popets/2025/popets-2025-0169.php" class="paper-title">
            More and Scammier Ads: The Perils of YouTube's Ad Privacy Settings
        </a>
        <br>
        Cat Mai, Lexie Barthelemess, Bruno Coelho, <span class="bold-name">Julia B. Kieserman</span>, Kyle Spinelli, Eric Yang, Athanasios Andreou, Rachel Greenstadt, Tobias Lauinger, Damon McCoy
        <br>
        PETS 2025 (to appear)
      </div>
  `
};

function updateContent(section, event) {
  const box = document.getElementById('details-block');
  box.innerHTML = contentData[section] || "Content not found.";

  // Update active button style
  document.querySelectorAll('.navigation button').forEach(btn => btn.classList.remove('active'));
  if (event) event.target.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  updateContent('Home');
  
  const defaultBtn = document.querySelector('.navigation button[onclick*="Home"]');
  if (defaultBtn) defaultBtn.classList.add('active');
});