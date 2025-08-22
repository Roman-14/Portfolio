document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper carousels for each project carousel
  document.querySelectorAll('.swiper-container').forEach(container => {
    new Swiper(container, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: container.querySelector('.swiper-pagination'),
        clickable: true
      },
      navigation: {
        nextEl: container.querySelector('.swiper-button-next'),
        prevEl: container.querySelector('.swiper-button-prev')
      }
    });
  });

  // Smooth scrolling for in-page navigation
  document.querySelectorAll('a.r14-smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

