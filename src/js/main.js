let swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".sales-pagination",
    type: "bullets",
    bulletElement: "div",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

let salesSwiper = new Swiper(".salesSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".sales-pagination",
    type: "bullets",
    bulletElement: "div",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

let salesSwiperSecond = new Swiper(".salesSwiperSecond", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".sales-pagination",
    type: "bullets",
    bulletElement: "div",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

let swiperGrid = new Swiper(".gridSwiper", {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const openNavBtn = document.querySelector("#openNavBtn");
const mobileNav = document.querySelector("#mobileNav");
const closeNavBtn = document.querySelector("#closeBtn");

openNavBtn.onclick = function () {
  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("block");
};

closeNavBtn.onclick = function () {
  mobileNav.classList.add("hidden");
  mobileNav.classList.remove("block");
};
