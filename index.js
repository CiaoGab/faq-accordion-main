const imagePlus = 'assets/images/icon-plus.svg';
const imageMinus = 'assets/images/icon-minus.svg';

const allToggleButtons = document.querySelectorAll('.accordion-toggle');
const allToggleTexts = document.querySelectorAll('.toggle-text');

allToggleButtons.forEach((button, index) => {
    const textElement = allToggleTexts[index];

    button.addEventListener('click', () => {
        if (getComputedStyle(textElement).display === 'none') {
            textElement.style.display = 'block';
            button.src = imageMinus;
            button.alt = 'Collapse content';
        } else {
            textElement.style.display = 'none';
            button.src = imagePlus;
            button.alt = 'Expand content';
        }
    });
});