const form = document.querySelector("form");
const emailInput = document.querySelector(".email-field");
const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const btn = document.querySelector(".btn");
const errorContainer = document.querySelector(".error-container");
const overlay = document.querySelector(".overlay");
const popUp = document.querySelector(".pop-up");
const emailName = document.querySelector(".email-name");

const validate = (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!EmailRegex.test(email)) {
    emailInput.style.borderColor = "Red";
    errorContainer.textContent = "Please input a valid email address";
    return;
  } else {
    popUp.classList.remove("animate__backOutDown", "animate__animated");
    popUp.classList.add("visible-popup");
    overlay.classList.add("overlayed");
    emailInput.style.borderColor = "initial";
    errorContainer.textContent = "";
    emailName.textContent = email;
    popUp.classList.add("animate__backInDown", "animate__animated");

    setTimeout(() => {
      popUp.style.top = "35%";
      popUp.style.transform = "translate(-50%, -50%)";
    });
  }
};
btn.addEventListener("click", validate);

const cancelButton = document.querySelector(".fa-xmark");
const cancel = () => {
  popUp.classList.remove("animate__backInDown", "animate__animated");
  overlay.classList.remove("overlayed");
  popUp.classList.add("animate__backOutDown", "animate__animated");
  setTimeout(() => {
    popUp.classList.remove("visible-popup");
  }, 500);
};
cancelButton.addEventListener("click", cancel);

const cancelOverlay = () => {
  overlay.classList.remove("overlayed");
  popUp.style.display = "none";
  setTimeout(() => {
    popUp.classList.remove("visible-popup");
  }, 500);
};
overlay.addEventListener("click", cancel);
