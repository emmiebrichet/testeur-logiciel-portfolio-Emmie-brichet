
const navbarLinks = document.getElementById('navbar-links');
const navbar = document.querySelector('.navbar'); 
const navLinks = document.querySelectorAll('.navbar-links a'); 
const hamburger = document.getElementById('hamburger'); 

let navbarVisible = true;


function handleNavbarVisibility() {
    let lastScrollY = window.scrollY;

    if (window.innerWidth > 990) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > lastScrollY) {
                
                navbar.classList.add("navbar-hidden");
            } else {
               
                navbar.classList.add("navbar-hidden");
            }
            lastScrollY = window.scrollY;
        });

        document.addEventListener("mousemove", (event) => {
            if (event.clientY < 50) {
                navbar.classList.remove("navbar-hidden"); 
            }
        });
    } else {
     
        navbar.classList.remove("navbar-hidden");
    }
}

document.addEventListener("click", (event) => {
   
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbarLinks.classList.remove("active"); 
    }
});


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarLinks.classList.remove("active"); 
    });
});


hamburger.addEventListener("click", (event) => {
    event.stopPropagation(); 
    navbarLinks.classList.toggle("active"); 
});

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); 

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId); 

        if (targetSection) {
            navbar.classList.add("navbar-hidden"); 

            
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

           
            setTimeout(() => {
                navbar.classList.remove("navbar-hidden");
            }, 600);
        } else {
            console.error(`La section avec l'ID ${targetId} n'a pas été trouvée !`);
        }
    });
});


handleNavbarVisibility();
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});
