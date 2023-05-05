let popupServicesOpens = document.querySelectorAll(".services-list--item");
let popupServices = document.querySelector(".popup-services");
for (let popupServicesOpen of popupServicesOpens) {
  popupServicesOpen.addEventListener("click", function () {
    popupBg.classList.add("activePopup");
    popupServices.classList.add("activePopup");
  });
}

popupClose.addEventListener("click", () => {
  openPopupServices();
});
document.addEventListener("click", (e) => {
  closePopupServices(e);
});

function checkParams() {
  let phoneInput = document.querySelector(".phone__input");
  let servicesButtonLock = document.querySelector(".btn-services-lock");
  if (phoneInput.value.length == 12) {
    servicesButtonLock.classList.add("active");
  } else {
    servicesButtonLock.classList.remove("active");
  }
}

function isClickOnServicesButtons() {
  let mainContent = document.querySelector(".main-content");
  let ordering = document.querySelector(".ordering");
  let servicesButtons = document.querySelectorAll(".btn-services");
  for (let servicesButton of servicesButtons) {
    if (servicesButton.classList.contains("btn-services-lock")) {
      if (servicesButton.classList.contains("active")) {
        mainContent.classList.remove("active");
        ordering.classList.add("active");
        closeFormServices();
      }
    } else {
      mainContent.classList.remove("active");
      ordering.classList.add("active");
      closeFormServices();
    }
  }
}
function closeFormServices() {
  popupBg.classList.remove("activePopup");
  popupServices.classList.remove("activePopup");
}
