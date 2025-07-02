window.addEventListener('DOMContentLoaded', () => {
  // Texte héro
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
      heroText.style.opacity = 1;
    }, 100);
  }

  // Navbar
  const navbar = document.querySelector('.navbar');
  const toggler = document.querySelector('.navbar-toggler');
  const menu = document.querySelector('.navbar-menu');

  window.addEventListener('mousemove', (e) => {
    if (e.clientY <= 50) {
      navbar.classList.remove('hide');
    } else {
      navbar.classList.add('hide');
      menu.classList.remove('active');
    }
  });

  if (toggler && menu) {
    toggler.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (menu.classList.contains('active') && !menu.contains(e.target) && !toggler.contains(e.target)) {
        menu.classList.remove('active');
      }
    });

    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        menu.classList.remove('active');
      }
    });
  }

  // Animation fade-in-up sur les compétences
  const competenceCards = document.querySelectorAll('.competence-item');
  competenceCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in-up');
    }, index * 150);
  });

  // Animation cascade sur les images
  const imageCards = document.querySelectorAll('.image-card');
  imageCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, index * 150);
  });
});
