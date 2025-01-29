// Sélection des éléments nécessaires
const navbarLinks = document.getElementById('navbar-links'); // Liens de navigation
const navbar = document.querySelector('.navbar'); // Barre de navigation entière
const navLinks = document.querySelectorAll('.navbar-links a'); // Tous les liens de navigation
const hamburger = document.getElementById('hamburger'); // Bouton hamburger

// Variable pour suivre la visibilité de la navbar
let navbarVisible = true;

// Fonction pour afficher/masquer la navbar en fonction de la position de la souris (uniquement sur desktop)
function handleNavbarVisibility() {
    let lastScrollY = window.scrollY;

    // Vérifie si l'écran est en mode desktop (par exemple, largeur supérieure à 768px)
    if (window.innerWidth > 990) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > lastScrollY) {
                // L'utilisateur descend => cacher la navbar
                navbar.classList.add("navbar-hidden");
            } else {
                // L'utilisateur remonte => cacher la navbar
                navbar.classList.add("navbar-hidden");
            }
            lastScrollY = window.scrollY;
        });

        // Affiche la navbar lorsque la souris est en haut de la page
        document.addEventListener("mousemove", (event) => {
            if (event.clientY < 50) { // Si la souris est en haut de la page
                navbar.classList.remove("navbar-hidden"); // Afficher la navbar
            }
        });
    } else {
        // Masque toujours la navbar sur mobile (pas de défilement dynamique)
        navbar.classList.remove("navbar-hidden");
    }
}

// Fonction pour masquer le menu si on clique ailleurs
document.addEventListener("click", (event) => {
    // Vérifie que le clic n'est pas sur la navbar ou le hamburger
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbarLinks.classList.remove("active"); // Masque le menu
    }
});

// Fermer le menu automatiquement lorsque l'utilisateur clique sur un lien
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarLinks.classList.remove("active"); // Masque le menu
    });
});

// Gestion du menu hamburger
hamburger.addEventListener("click", (event) => {
    event.stopPropagation(); // Empêche la fermeture immédiate due au click sur document
    navbarLinks.classList.toggle("active"); // Affiche ou cache le menu
});

// Fonction pour gérer le défilement vers les sections et masquer la navbar après le clic
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien

        const targetId = link.getAttribute("href").substring(1); // Récupère l'ID de la section
        const targetSection = document.getElementById(targetId); // Trouve la section par ID

        if (targetSection) {
            navbar.classList.add("navbar-hidden"); // Cache la navbar

            // Défilement fluide vers la section
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Réaffiche la navbar après un délai
            setTimeout(() => {
                navbar.classList.remove("navbar-hidden");
            }, 600);
        } else {
            console.error(`La section avec l'ID ${targetId} n'a pas été trouvée !`);
        }
    });
});

// Appel de la gestion de visibilité de la navbar
handleNavbarVisibility();
