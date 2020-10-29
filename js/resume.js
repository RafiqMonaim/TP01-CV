
const showMore = document.querySelectorAll('.show-experience');

window.addEventListener('DOMContentLoaded', () => {
    showMore.forEach(element => {
        const sousTitre = element.parentElement.parentElement.children[1];
        const description = element.parentElement.parentElement.children[2];

        sousTitre.style.display = 'none';
        description.style.display = 'none';
    });
})

showMore.forEach(element => {
    element.addEventListener('click', (event) => {
    event.preventDefault();
    const sousTitre = event.target.parentElement.parentElement.parentElement.children[1];
    const description = event.target.parentElement.parentElement.parentElement.children[2];

    if (window.getComputedStyle(sousTitre).display == 'none' && window.getComputedStyle(description).display=='none') {
        sousTitre.style.display='block';
        description.style.display='block';
        cacherDetails(element.parentElement.parentElement);
    }
    else {
        subTitle.style.display = 'none';
        description.style.display = 'none';

        // Change icon
        e.target.className = 'fas fa-angle-down';

    }
});
});


const cacherDetails = (experience) => {
    detailsExperience.forEach(element => {
        const experienceActuelle = element.parentElement.parentElement;

        if (experienceActuelle !== experience) {
            const sousTitre = experienceActuelle.children[1];
            const description = experienceActuelle.children[2];

            if (window.getComputedStyle(sousTitre).display === 'block' && window.getComputedStyle(description).display === 'block') {
                sousTitre.style.display = 'none';
                description.style.display = 'none';
                
                element.firstElementChild.className = 'fas fa-angle-down';
            }
        }
    });
}