let paginations = document.querySelectorAll(".pagination");
let sliders = document.querySelectorAll(".slider-slide");
let paginationActive = document.querySelector(".pagination-active");
let sliderActive = document.querySelector("active");

for (let pagination of paginations) {
  pagination.addEventListener("click", function () {
    if (this.classList.contains("pagination-active")) {
      return;
    } else {
      let paginationIndex = this.dataset.index;
      clearPagination(paginations);
      clearSlider(sliders);
      addSlide(paginationIndex);
      this.classList.add("pagination-active");
    }
  });
}
function clearPagination(array) {
  array.forEach((elem) => {
    elem.classList.remove("pagination-active");
  });
}
function clearSlider(array) {
  array.forEach((elem) => {
    elem.classList.remove("active");
  });
}
function addSlide(index) {
  for (let slider of sliders) {
    if (slider.dataset.index === index) {
      slider.classList.add("active");
    }
  }
}

let servicesCards = document.querySelectorAll(".services-card");
for(let servicesCard of servicesCards) {
  servicesCard.addEventListener('click', function () {
    if(this.textContent.includes('Терапия')) {
      window.location.href = "therapy.html";
    }
  })
}


