// Sélection des éléments nécessaires
const hamburgerBtn = document.getElementById('hamburger-btn'); // Bouton hamburger
const navbarLinks = document.getElementById('navbar-links'); // Liens de navigation
const navbar = document.querySelector('.navbar'); // Barre de navigation entière
const navLinks = document.querySelectorAll('.navbar-links a'); // Tous les liens de navigation

// Fonction pour afficher/masquer le menu lorsqu'on clique sur le bouton hamburger
hamburgerBtn.addEventListener('click', (event) => {
    navbarLinks.classList.toggle('active'); // Ajoute ou retire la classe 'active' pour afficher/masquer le menu
    event.stopPropagation(); // Empêche la propagation du clic à d'autres éléments
});

// Fonction pour masquer le menu si on clique ailleurs
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) { // Vérifie si le clic est à l'extérieur de la navbar
        navbarLinks.classList.remove('active'); // Retire la classe 'active' pour masquer le menu
    }
});

// Fermer le menu automatiquement lorsque l'utilisateur clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active'); // Masque le menu
    });
});

// Gestion de l'affichage de la navbar en fonction de la position de la souris
function handleNavbarVisibility() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("mousemove", (event) => {
        if (event.clientY <= 50) {
            navbar.classList.remove("navbar-hidden"); // Affiche la navbar si la souris est en haut
        } else {
            navbar.classList.add("navbar-hidden"); // Cache la navbar si la souris descend
        }
    });
}

// Gestion du changement de style de la navbar lors du défilement
function handleNavbarScroll() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
            navbar.classList.add("navbarDark"); // Ajoute un style sombre si on défile de plus de 100px
        } else {
            navbar.classList.remove("navbarDark"); // Retire le style sombre si on est en haut
        }
    });
}

// Exécution lorsque le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    handleNavbarVisibility(); // Gestion de la visibilité de la navbar
    handleNavbarScroll(); // Gestion du style de la navbar
});
