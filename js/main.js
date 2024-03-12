console.log("Script loaded successfully!");

function scrollHeader() {
  const nav = document.getElementById("header");
  if (window.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// ================= Navbar ===========================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.remove("remove-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.add("remove-menu");
  });
}

// SwiperJs
const swiper1 = new Swiper(".chefs", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  spaceBetween: 30,
  slidesPerView: 4,

  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  // },
});

const swiper2 = new Swiper(".testimonial-list", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 30,
  slidesPerView: 2,
});
const swiper3 = new Swiper(".bannerimgs", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 30,
  slidesPerView: 1,
});
