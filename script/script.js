// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
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

// Function to dynamically create HTML elements from the JSON file
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");

    if (!container) {
        console.error("Skills container not found!");
        return;
    }

    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/skills.json")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to load skills.json");
            return response.json();
        })
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" alt="${item.title}" />
                            <h4 class="card-title mt-3">${item.title}</h4>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, append the row to the container and create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        })
        .catch((error) => console.error(error));
}

// Function to dynamically create HTML elements from the JSON file
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");

    if (!container) {
        console.error("Portfolio container not found!");
        return;
    }

    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/portfolio.json")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to load portfolio.json");
            return response.json();
        })
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                        <img class="card-img-top" src="./images/${item.image}" alt="${item.title}" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">${item.title}</h4>
                            <p class="card-text">${item.text}</p>
                            <div class="text-center">
                                <a href="${item.link}" class="btn btn-success" target="_blank" rel="noopener noreferrer">Lien</a>
                            </div>
                        </div>
                    </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, append the row to the container and create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        })
        .catch((error) => console.error(error));
}

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();


