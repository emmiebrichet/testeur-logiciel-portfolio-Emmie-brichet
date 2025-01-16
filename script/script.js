// Function to show/hide navbar based on mouse position
function handleNavbarVisibility() {
    const navbar = document.querySelector(".navbar");
    
    // Add mousemove event listener
    window.addEventListener("mousemove", (event) => {
        if (event.clientY <= 50) {
            // Si la souris est dans les 50px du haut de l'écran, afficher le menu
            navbar.classList.remove("navbar-hidden");
        } else {
            // Sinon, masquer le menu
            navbar.classList.add("navbar-hidden");
        }
    });
}

// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        const top = window.scrollY;
        if (top >= 100) {
            navbar.classList.add("navbarDark");
        } else {
            navbar.classList.remove("navbarDark");
        }
    });
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const collapse = new bootstrap.Collapse(menuToggle);
            collapse.toggle();
        });
    });
}

// Call the functions to execute the code
handleNavbarVisibility();
handleNavbarScroll();
handleNavbarCollapse();






