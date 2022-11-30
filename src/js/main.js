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