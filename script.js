function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}




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
            workLabel.style.fontSize = '16px';  // Default font size for unselected
            playLabel.style.fontSize = '22px';  // Larger font size for selected
        }
    };

    // Initial update when the page loads
    updateFontSize();

    // Update font-size on change
    inputs.forEach(input => {
        input.addEventListener('change', updateFontSize);
    });
});