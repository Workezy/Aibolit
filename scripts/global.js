let popupBg = document.querySelector(".popup-wrapper");
let popupClose = document.querySelector(".popup-close");
let popupCity = document.querySelector(".popup-city");
let popupOpen = document.querySelector(".locate");
popupOpen.addEventListener("click", (e) => {
  e.preventDefault();
  popupBg.classList.add("activePopup");
  popupCity.classList.add("activePopup");
});
popupClose.addEventListener("click", () => {
  popupBg.classList.remove("activePopup");
  popupCity.classList.remove("activePopup");
  popupServices.classList.remove("activePopup");
});
document.addEventListener("click", (e) => {
  if (e.target == popupBg) {
    popupBg.classList.remove("activePopup");
    popupCity.classList.remove("activePopup");
  }
});

let locateText = document.querySelector(".locate-text");
popupCity.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup-item")) {
    locateText.textContent = e.target.textContent;
  } else {
    return;
  }
});

let personalArea = document.querySelector(".personal-area");
personalArea.addEventListener("click", function () {
  openPopupServices();
});

function openPopupServices() {
  let popupPhoneAuth = document.querySelector('.popup-phoneAuth');
  popupBg.classList.add("activePopup");
  popupPhoneAuth.classList.add("activePopup");
}
function closePopupServices(e) {
  if (e.target == popupBg || e.target.classList.contains("popup-close")) {
    popupBg.classList.remove("activePopup");
    popupServices.classList.remove("activePopup");
  }
}
let phoneAuth = document.querySelector(".phone__auth");
function servicesChangeWindow() {
  let servicesButton = document.querySelector(".btn-services");
  let phoneInput = document.querySelector(".phone__input");

  if (!servicesButton.classList.contains("active")) {
    return;
  } else {
    phoneInput.classList.remove("active");
    phoneAuth.classList.add("active");
    disableServicesButton();
    startTimer();
  }
}

function startTimer() {
  if (!phoneAuth.classList.contains("active")) {
    return;
  }
  let startTime = new Date();
  let stopTime = startTime.setMinutes(startTime.getMinutes() + 1);

  let countDown = setInterval(function () {
    let now = new Date().getTime();
    let remain = stopTime - now;

    let min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((remain % (1000 * 60)) / 1000);
    sec = sec < 10 ? "0" + sec : sec;

    let authTimer = document.querySelector(".auth__timer");
    authTimer.innerHTML = min + ":" + sec;
    if (remain < 0) {
      clearInterval(countDown);
      authTimer.innerHTML = "00:00";
    }
  });
}
function disableServicesButton() {
  let servicesButton = document.querySelector(".btn-services");
  if (servicesButton.classList.contains("active")) {
    servicesButton.classList.remove("active");
  } else {
    return;
  }
}
function openPersonalArea() {
    document.location.href = "personalarea.html";
}
let servicesButton = document.querySelector(".btn-services");
function checkPhoneAuth() {
  servicesButton.textContent = 'ГОТОВО'
  let phoneAuthItems = document.querySelectorAll(".phone__auth--item");
  let count = 0;
  for (let phoneAuthItem of phoneAuthItems) {
    if (phoneAuthItem.value.length === 1) {
      count++;
    }
  }
  if (count == 4) {
    servicesButton.classList.add("active");
    servicesButton.addEventListener('click', openPersonalArea)
  } else {
    servicesButton.classList.remove("active");
  }
}
