const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navButtons = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

addEventListener('scroll', () => {
    navMenu.classList.remove('active');
});

// event listener for buttons to turn off nav bar

navButtons.forEach((navButton) => {
    navButton.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});