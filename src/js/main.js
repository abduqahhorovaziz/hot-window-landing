let swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.mySwiper-next',
    prevEl: '.mySwiper-prev',
  },
});

let salesSwiper = new Swiper(".salesSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.salesSwiper-next',
    prevEl: '.salesSwiper-prev',
  },
});

let salesSwiperSecond = new Swiper(".salesSwiperSecond", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.salesSwiperSecond-next',
    prevEl: '.salesSwiperSecond-prev',
  },
});

let swiperGrid = new Swiper(".gridSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.gridSwiper-next',
    prevEl: '.gridSwiper-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesPerView: 3,
  spaceBetween: 30,
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
