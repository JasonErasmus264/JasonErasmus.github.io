// Toggle Menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



// Work/Play Switch
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.switch input');
    const workLabel = document.querySelector('.option.work');
    const playLabel = document.querySelector('.option.play');

    // Function to update font-size based on checked state
    const updateFontSize = () => {
        if (document.getElementById('work').checked) {
            workLabel.style.fontSize = '22px'; // Larger font size for selected
            playLabel.style.fontSize = '16px';  // Default font size for unselected
        } else if (document.getElementById('play').checked) {
            workLabel.style.fontSize = '16px';
            playLabel.style.fontSize = '22px';
        }
    };

    // Initial update when the page loads
    updateFontSize();

    // Update font-size on change
    inputs.forEach(input => {
        input.addEventListener('change', updateFontSize);
    });
});

// Project visibility
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.switch input');
    const workProjects = document.querySelectorAll('.project-list .work');
    const playProjects = document.querySelectorAll('.project-list .play');

    // Function to update project visibility based on checked state
    const updateProjectVisibility = () => {
        if (document.getElementById('work').checked) {
            workProjects.forEach(project => project.style.display = 'block');
            playProjects.forEach(project => project.style.display = 'none');
        } else if (document.getElementById('play').checked) {
            workProjects.forEach(project => project.style.display = 'none');
            playProjects.forEach(project => project.style.display = 'block');
        }
    };

    // Initial update when the page loads
    updateProjectVisibility();

    // Update project visibility on change
    inputs.forEach(input => {
        input.addEventListener('change', updateProjectVisibility);
    });
});