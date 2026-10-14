

// Adds smooth scrolling when a navigation link is clicked.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Gets the section connected to the clicked link.
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Checks if the target section exists before scrolling.
        if (targetSection) {
            event.preventDefault();

            // Scrolls smoothly to the selected section.
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Updates the URL hash without causing an instant jump.
            history.pushState(null, '', targetId);
        }
    });
});
