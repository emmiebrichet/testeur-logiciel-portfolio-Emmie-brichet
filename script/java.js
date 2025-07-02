window.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transition = 'opacity 1.5s ease-in-out';

    setTimeout(() => {
      heroText.style.opacity = 1;
    }, 100);
  }

  const navbar = document.querySelector('.navbar');
  const toggler = document.querySelector('.navbar-toggler');
  const menu = document.querySelector('.navbar-menu');

  // Apparition / disparition navbar selon la souris
  window.addEventListener('mousemove', (e) => {
    if (e.clientY <= 50) {
      navbar.classList.remove('hide');
    } else {
      navbar.classList.add('hide');
      menu.classList.remove('active'); // ferme le menu si on sort de la zone
    }
  });

  if (toggler && menu) {
    // Ouverture/fermeture menu hamburger au clic
    toggler.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('active');
    });

    // Fermer le menu si clic en dehors du menu et du bouton toggler
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('active')) {
        if (!menu.contains(e.target) && !toggler.contains(e.target)) {
          menu.classList.remove('active');
        }
      }
    });

    // Fermer le menu uniquement quand on clique sur un lien dans le menu
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        menu.classList.remove('active');
      }
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.competence-item');

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in-up');
    }, index * 150); // délai de 150ms entre chaque carte
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.image-card');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, index * 150); // effet en cascade avec un délai entre chaque carte
  });
});

