// Function to show/hide navbar based on mouse position
function handleNavbarVisibility() {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("mousemove", (event) => {
        if (event.clientY <= 50) {
            navbar.classList.remove("navbar-hidden");
        } else {
            navbar.classList.add("navbar-hidden");
        }
    });
}

// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
            navbar.classList.add("navbarDark");
        } else {
            navbar.classList.remove("navbarDark");
        }
    });
}

// Execute when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize navbar visibility and scroll handling
    handleNavbarVisibility();
    handleNavbarScroll();
});
