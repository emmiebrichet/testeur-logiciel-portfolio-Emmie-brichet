document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.getElementById('navbar-links');
    const hamburger = document.getElementById('hamburger');

    function hideNavbar() {
        navbar.classList.add("navbar-hidden");
    }

    function showNavbar() {
        navbar.classList.remove("navbar-hidden");
    }

    // Cache la navbar dès que l'utilisateur scrolle
    window.addEventListener("scroll", () => {
        hideNavbar();
    });

    // Fait réapparaître la navbar si la souris touche le haut de l'écran
    document.addEventListener("mousemove", (event) => {
        if (event.clientY < 50) {
            showNavbar();
        }
    });

    // Gestion du menu hamburger
    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        navbarLinks.classList.toggle("active");
    });

    // Ferme le menu si on clique ailleurs
    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
            navbarLinks.classList.remove("active");
        }
    });

    // Scroll fluide pour les liens du menu
    document.querySelectorAll(".navbar-links a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                if (window.innerWidth <= 990) {
                    navbarLinks.classList.remove("active");
                }
            }
        });
    });
});
