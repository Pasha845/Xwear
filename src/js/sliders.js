/* hero */

const heroSlider = new Swiper('.hero__slider', {
  loop: true,
  navigation: {
    prevEl: ".hero__prev",
    nextEl: ".hero__next",
    disabledClass: "slider-dis"
  },
  pagination: {
    el: ".hero__pag"
  },
  scrollbar: {
    hide: true
  }
});

/* shoes */

const shoesSlider = new Swiper('.shoes__slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    prevEl: ".shoes__prev",
    nextEl: ".shoes__next",
    disabledClass: "slider-dis"
  },
  pagination: {
    el: ".shoes__pag"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    630: {
      slidesPerView: 1
    },
    668: {
      slidesPerView: 3
    },
    1300: {
      slidesPerView: 4
    }
  }
});

/* cloth */

const clothSlider = new Swiper('.cloth__slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    prevEl: ".cloth__prev",
    nextEl: ".cloth__next",
    disabledClass: "slider-dis"
  },
  pagination: {
    el: ".cloth__pag"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    630: {
      slidesPerView: 1
    },
    668: {
      slidesPerView: 3
    },
    1300: {
      slidesPerView: 4
    }
  }
});

/* accessories */

const accessoriesSlider = new Swiper('.accessories__slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    prevEl: ".accessories__prev",
    nextEl: ".accessories__next",
    disabledClass: "slider-dis"
  },
  pagination: {
    el: ".accessories__pag"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    630: {
      slidesPerView: 1
    },
    668: {
      slidesPerView: 3
    },
    1300: {
      slidesPerView: 4
    }
  }
});

/* blog */

const blogSlider = new Swiper('.blog__slider', {
  slidesPerView: "auto",
  spaceBetween: 31,
  navigation: {
    prevEl: ".blog__prev",
    nextEl: ".blog__next",
    disabledClass: "slider-dis"
  },
  pagination: {
    el: ".blog__pag"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    630: {
      slidesPerView: 1
    },
    668: {
      slidesPerView: 2
    },
    1300: {
      slidesPerView: 3
    }
  }
});