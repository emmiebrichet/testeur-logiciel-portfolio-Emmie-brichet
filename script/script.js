// Fonction pour afficher/masquer la navbar en fonction de la position de la souris
function handleNavbarVisibility() {
    const navbar = document.querySelector(".navbar");
    
    // Écouteur d'événement pour suivre le mouvement de la souris
    window.addEventListener("mousemove", (event) => {
        if (event.clientY <= 50) {
            navbar.classList.remove("navbar-hidden"); // Affiche la navbar si la souris est en haut
        } else {
            navbar.classList.add("navbar-hidden"); // Cache la navbar si la souris est plus bas
        }
    });
}

// Fonction pour ajouter la classe "navbarDark" à la navbar lors du défilement
function handleNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    
    // Écouteur d'événement pour suivre le défilement de la page
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
            navbar.classList.add("navbarDark"); // Change l'arrière-plan de la navbar si on a défilé de plus de 100px
        } else {
            navbar.classList.remove("navbarDark"); // Retire la classe si on est remonté en haut
        }
    });
}

// Exécution lorsque le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Initialiser les fonctions pour gérer la visibilité et le défilement de la navbar
    handleNavbarVisibility();
    handleNavbarScroll();
});

// Sélectionner les éléments
const hamburgerBtn = document.getElementById('hamburger-btn');
const navbarLinks = document.getElementById('navbar-links');
const navbar = document.querySelector('.navbar'); // Sélection de la barre de navigation entière
const navLinks = document.querySelectorAll('.navbar-links a');

// Ajouter l'événement de clic sur le bouton hamburger
hamburgerBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active'); // Ajoute ou enlève la classe 'active' pour afficher/masquer les liens
});

// Ajouter un événement de clic sur chaque lien pour fermer le menu et cacher la barre de navigation
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.add('navbar-hidden'); // Masquer la barre de navigation avec l'animation de glissement
    });
});


