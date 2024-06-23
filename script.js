const form = document.querySelector("form");
const emailInput = document.querySelector(".email-field");
const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const btn = document.querySelector(".btn");
const errorContainer = document.querySelector(".error-container");

const validate = (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!EmailRegex.test(email)) {
    emailInput.style.borderColor = "Red";
    errorContainer.textContent = "Please input a valid email address";
  } else {
    emailInput.style.borderColor = "initial";
    errorContainer.textContent = "";
  }
};

btn.addEventListener("click", validate);

// const container = document.querySelector(".container");

// const hover = () => {
//   container.style.backgroundColor = getComputedStyle(
//     document.documentElement
//   ).getPropertyValue("--Blue");
// };

// container.addEventListener("mouseover", hover);
