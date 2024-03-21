const phrases = ["Full Stack Developer", "UI/UX Enthusiast", "Creative Thinker"];
let currentPhrase = 0;
let currentLetter = 0;
let direction = 'forward';
const dynamicText = document.getElementById('dynamic-text');
const typingSpeed = 150;
const deletingSpeed = 100;

function typePhrase() {
    if (direction === 'forward') {
        if (currentLetter < phrases[currentPhrase].length) {
            dynamicText.textContent += phrases[currentPhrase].charAt(currentLetter);
            currentLetter++;
            setTimeout(typePhrase, typingSpeed);
        } else {
            setTimeout(typePhrase, 2000); // Pause before deleting
            direction = 'backward';
        }
    } else {
        if (currentLetter > 0) {
            dynamicText.textContent = phrases[currentPhrase].substr(0, currentLetter - 1);
            currentLetter--;
            setTimeout(typePhrase, deletingSpeed);
        } else {
            currentPhrase = (currentPhrase + 1) % phrases.length; // Move to next phrase
            direction = 'forward';
            setTimeout(typePhrase, 500); // Pause before starting new phrase
        }
    }
}

document.addEventListener('DOMContentLoaded', typePhrase);




const scrollArrow = document.querySelector('.scroll-down-arrow');

// Hide arrow on scroll
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) { // Adjust as necessary
    scrollArrow.style.display = 'none';
  } else {
    scrollArrow.style.display = 'block';
  }
});

// Scroll down on click and hide the arrow
scrollArrow.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
  scrollArrow.style.display = 'none'; // Optionally hide after click
});