document.addEventListener('DOMContentLoaded', function() {
    const animatedElement = document.querySelector('title');

    function checkAnimation() {
        const elementPosition = animatedElement.getBoundingClientRect().top;

        // Adjust this value to control when the animation triggers
        const triggerOffset = window.innerHeight * 0.5;

        if (elementPosition < triggerOffset) {
            animatedElement.classList.add('animate');
        }
    }

    // Add a scroll event listener to check when the element is in view
    window.addEventListener('scroll', checkAnimation);

    // Initial check when the page loads
    checkAnimation();
});