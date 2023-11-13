/* hero */

const heroSlider = new Swiper('.hero__slider', {
  loop: true,
  navigation: {
    prevEl: ".hero__prev",
    nextEl: ".hero__next",
    disabledClass: "hero__dis"
  },
  pagination: {
    el: ".hero__pagination",
    clickable: true
  },
  scrollbar: {
    hide: true
  }
});

/* shoes */

const shoesSlider = new Swiper('.shoes__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".shoes__pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".shoes__prev",
    nextEl: ".shoes__next",
    disabledClass: "shoes__dis"
  },
  scrollbar: {
    hide: true
  }
});

/* cloth */

const clothSlider = new Swiper('.cloth__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".cloth__pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".cloth__prev",
    nextEl: ".cloth__next",
    disabledClass: "cloth__dis"
  },
  scrollbar: {
    hide: true
  }
});

/* accessories */

const accessoriesSlider = new Swiper('.accessories__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".accessories__pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".accessories__prev",
    nextEl: ".accessories__next",
    disabledClass: "accessories__dis"
  },
  scrollbar: {
    hide: true
  }
});

/* blog */

const blogSlider = new Swiper('.blog__slider', {
  slidesPerView: 3,
  spaceBetween: 31,
  pagination: {
    el: ".blog__pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".blog__prev",
    nextEl: ".blog__next",
    disabledClass: "blog__dis"
  },
  scrollbar: {
    hide: true
  }
});