const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('button');
const stickyDiv=document.querySelectorAll('.sticky-div');

// Function to handle scroll
window.addEventListener('scroll', () => {
    let activeIndex = 0;

    // Check which card is in the viewport
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            activeIndex = index;
        }
    });

    // Update active card and blur others
    cards.forEach((card, index) => {
        if (index === activeIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Update active button
    buttons.forEach((button, index) => {
        if (index === activeIndex) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    //If the card is in the viewport, make it sticky
    if (rect.top <= 0 && rect.bottom > 0) {
      card.classList.add('sticky');
      activeIndex = index;
    } else {
      card.classList.remove('sticky');
    }

    // Blur the container if it's not active
    if (index < activeIndex) {
      card.classList.add('blur');
    } else {
      card.classList.remove('blur');
    }
});
