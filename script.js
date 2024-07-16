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

    inputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.id === 'work') {
                workLabel.style.fontWeight = '700';
                playLabel.style.fontWeight = '400';
            } else if (input.id === 'play') {
                workLabel.style.fontWeight = '400';
                playLabel.style.fontWeight = '700';
            }
        });
    });
});