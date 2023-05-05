let swiperHeader = new Swiper(".header-swiper", {
  slidesPerView: 3,
  // allowTouchMove: false,
  speed: 400,
  spaceBetween: 20,
});
let swiperFooter = new Swiper(".swiper-footer", {
  slidesPerView: 4,
  speed: 400,
  spaceBetween: 24,
  allowTouchMove: false,
  //   centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let priceListItems = document.querySelectorAll(".price-list--item");
for (let priceListItem of priceListItems) {
  priceListItem.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      return;
    } else {
      priceListItems.forEach((elem) => {
        elem.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
}
