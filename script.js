
  function openPopup() {
    document.body.dataset.bsOverlayActive = 'true';
    document.getElementById('overlay').dataset.bsVisible = 'true';
    
    const popupForm = document.getElementById('popupForm');
    popupForm.classList.add('show');
    
    // Remove any previous animation classes
    popupForm.classList.remove('rotate', 'slideLeft', 'slideRight', 'openBook', 'curtain', 'fold', 'flip');
    
    // Randomly select an animation
    const animations = ['rotate', 'slideLeft', 'slideRight', 'openBook', 'curtain', 'fold', 'flip'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    popupForm.classList.add(randomAnimation);
  }

  function closePopup() {
    const popupForm = document.getElementById('popupForm');
    popupForm.classList.remove('show', 'rotate', 'slideLeft', 'slideRight', 'openBook', 'curtain', 'fold', 'flip'); // Remove show and other animation classes
    popupForm.classList.add('hiding'); // Add hiding class for zoom out animation
    
    // Wait for the animation to finish before hiding the overlay and form
    setTimeout(() => {
      document.body.dataset.bsOverlayActive = 'false';
      document.getElementById('overlay').dataset.bsVisible = 'false';
      popupForm.classList.remove('hiding'); // Remove hiding class after animation
    }, 1000); // Wait for 1 second, matching the animation duration
  };
function quoteUs() {
    try {
        const quoteNumber = document.getElementById('quoteNumber').value.toLowerCase();

        if (!quoteNumber) {
            throw new Error('Please enter your valid DD-ID.');
        }

      document.getElementById('quoteNumber').value="cohvant";

        const a = document.createElement('a');
        a.href = "ClientProducts/" + quoteNumber + "/index.html";
       
        a.click();
    } catch (error) {
        alert(`An error 01 occurred: ${error.message}`);
        console.error('Error:', error);
    }
}

