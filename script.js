window.addEventListener('scroll', function() {
    const imageContainer = document.querySelector('.image-container');
    const content = document.querySelector('.content');
    const rest = document.querySelector('.rest');
    const scrollPosition = window.scrollY;

    const threshold = window.innerHeight / 7; // Adjusted threshold for shorter scrolling

    if (scrollPosition > 0 && scrollPosition < threshold) {
        imageContainer.style.left = '0';
        content.style.position = 'fixed';
        content.style.top = '0'; // Ensure content stays fixed at the top
        content.classList.add('black-text'); // Add class to change text color to black
        rest.classList.remove('visible');
        rest.classList.add('hidden'); // Hide the rest content
    } else if (scrollPosition >= threshold) {
        imageContainer.style.left = '-100%';
        content.style.position = 'relative'; // Allow content to scroll
        content.style.top = `${threshold}px`; // Start scrolling from the same height as the image
        content.classList.remove('black-text'); // Remove class to change text color to orange
        rest.classList.remove('hidden');
        rest.classList.add('visible'); // Show the rest content
    } else {
        imageContainer.style.left = '100%';
        content.style.position = 'fixed';
        content.style.top = '0'; // Ensure content stays fixed at the top
        content.classList.remove('black-text'); // Ensure text color is orange before the image appears
        rest.classList.remove('visible');
        rest.classList.add('hidden'); // Hide the rest content
    }
});

// Ensure the initial state is set correctly on page load
window.addEventListener('load', function() {
    const content = document.querySelector('.content');
    content.classList.remove('black-text'); // Initial text color
    const rest = document.querySelector('.rest');
    rest.classList.add('hidden'); // Hide the rest content initially
});


