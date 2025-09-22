
  const heroSwiper = new Swiper('.hero-swiper', {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    loop: true,
    speed: 1200,
    autoplay: { delay: 3600, disableOnInteraction: false },
    preloadImages: false,
    lazy: { loadOnTransitionStart: true },
    a11y: { enabled: true },
    pagination: {
      el: '.hero-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.hero-nav.next',
      prevEl: '.hero-nav.prev'
    }
  });
