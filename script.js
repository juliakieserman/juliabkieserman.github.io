const contentData = {
  //Home: './content/home.html',
  About: './content/about.html',
  Writing: './content/writing.html',
  Research: './content/research.html',
  
};

async function updateContent(section, event) {
  const box = document.getElementById('details-block');
  
  try {
    // Show loading state
    box.innerHTML = '<p>Loading...</p>';
    
    // Fetch the HTML file
    const response = await fetch(contentData[section]);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const htmlContent = await response.text();
    box.innerHTML = htmlContent;
    
  } catch (error) {
    console.error('Error loading content:', error);
    box.innerHTML = '<p>Error loading content. Please try again.</p>';
  }

  // Update active button style
  document.querySelectorAll('.navigation button').forEach(btn => btn.classList.remove('active'));
  if (event) event.target.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.navigation button');
  
  navButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const section = button.textContent.trim(); // Use button text as section name
      console.log("section: ", section)
      updateContent(section, event);
    });
  });
  
  // Load default content - use first button's text
  const firstButton = navButtons[0];
  if (firstButton) {
    updateContent(firstButton.textContent.trim());
    firstButton.classList.add('active');
  }
});