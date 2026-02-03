//js/sitemap.js

const viewsWrapper = document.getElementById('views-wrapper');
const primaryRadio = document.getElementById('primary-radio');
const subRadio = document.getElementById('sub-radio');
const subPageNode = document.getElementById('sub-page-node');

// Function to slide to Primary view
function showPrimary() {
    viewsWrapper.style.transform = 'translateX(0%)';
    primaryRadio.checked = true;
}

// Function to slide to Subpages view
function showSubpages() {
    viewsWrapper.style.transform = 'translateX(-50%)';
    subRadio.checked = true;
}

// Event listeners for Radios
primaryRadio.addEventListener('change', () => {
    if (primaryRadio.checked) showPrimary();
});

subRadio.addEventListener('change', () => {
    if (subRadio.checked) showSubpages();
});

// Event listener for the "SUB PAGES" node in the SVG
if (subPageNode) {
    subPageNode.addEventListener('click', (e) => {
        e.preventDefault();
        showSubpages();
    });
}