// Sélection des éléments nécessaires
const navbarLinks = document.getElementById('navbar-links'); // Liens de navigation
const navbar = document.querySelector('.navbar'); // Barre de navigation entière
const navLinks = document.querySelectorAll('.navbar-links a'); // Tous les liens de navigation

// Fonction pour masquer le menu si on clique ailleurs
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !navbarLinks.contains(event.target)) {
        navbarLinks.classList.remove('active'); // Retire la classe 'active' pour masquer le menu
    }
});

// Fermer le menu automatiquement lorsque l'utilisateur clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active'); // Masque le menu
    });
});

// Fonction pour afficher/masquer la navbar en fonction de la position de la souris
function handleNavbarVisibility() {
    let navbarVisible = true; // Variable pour garder la trace de la visibilité de la navbar

    window.addEventListener("mousemove", (event) => {
        // Si la souris est proche du haut de l'écran
        if (event.clientY <= 50) {
            if (!navbarVisible) { // Affiche la navbar seulement si elle est cachée
                navbar.classList.remove("navbar-hidden");
                navbarVisible = true;
            }
        } else {
            if (navbarVisible) { // Cache la navbar seulement si elle est visible
                navbar.classList.add("navbar-hidden");
                navbarVisible = false;
            }
        }
    });
}

// Appel de la fonction pour gérer l'affichage de la navbar en fonction du mouvement de la souris
handleNavbarVisibility();

// Fonction pour gérer le défilement vers les sections et masquer la navbar après le clic
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien

        const targetId = link.getAttribute('href').substring(1); // Récupère l'ID de la section
        const targetSection = document.getElementById(targetId); // Trouve la section par ID

        if (targetSection) {
            // 1. Ajouter la classe 'navbar-hidden' avant de faire défiler la page
            navbar.classList.add('navbar-hidden');

            // 2. Défilement fluide vers la section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // 3. Après un délai (pour le défilement), rétablir la classe de la navbar
            setTimeout(() => {
                navbar.classList.remove('navbar-hidden'); // Affiche la navbar après le défilement
            }, 600); // Ajuste ce délai en fonction de la durée du défilement
        } else {
            console.error(`La section avec l'ID ${targetId} n'a pas été trouvée !`);
        }
    });
});

