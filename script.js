"use strict";

const sectionForm = document.querySelector(".section--form");
const sectionComplete = document.querySelector(".section--complete");
const form = document.querySelector(".form");

const userName = document.querySelector("#name");
const number = document.querySelector(".form__input--number");
const expiredMonth = document.querySelector(".expired__month");
const expiredYear = document.querySelector(".expired__year");
const cvc = document.querySelector("#cvc");

const cardName = document.querySelector(".card--front__name");
const cardNumber = document.querySelector(".card--front__number");
const cardMonth = document.querySelector(".card--front__date .month");
const cardYear = document.querySelector(".card--front__date .year");
const cardCVC = document.querySelector(".card--back__cvc");

// userName.addEventListener("input", function () {
//   if (userName.value === "") {
//     document.querySelector("#name + .error").textContent = "Can't be blank";
//   } else {
//     document.querySelector("#name + .error").textContent = "";
//   }
// });

// number.addEventListener("input", function () {
//   if (number.value === "") {
//     document.querySelector(".form__input--number + .error").textContent =
//       "Can't be blank";
//   } else {
//     document.querySelector(".form__input--number + .error").textContent = "";
//   }

//   if (!number.validity.valid) {
//     document.querySelector("#number + .error").textContent =
//       "Wrong format, numbers only";
//   } else {
//     document.querySelector("#number + .error").textContent = "";
//   }
// });

// expiredMonth.addEventListener("input", function () {
//   if (expiredMonth.value === "") {
//     document.querySelector(".error--expired").textContent = "Can't be blank";
//   } else {
//     document.querySelector(".error--expired").textContent = "";
//   }

//   if (expiredMonth.value < 1 || expiredMonth.value > 12) {
//     document.querySelector(".error--expired").textContent = "Invalid month";
//   } else {
//     document.querySelector(".error--expired").textContent = "";
//   }
// });

// expiredYear.addEventListener("input", function () {
//   if (expiredYear.value === "") {
//     document.querySelector(".error--expired").textContent = "Can't be blank";
//   } else {
//     document.querySelector(".error--expired").textContent = "";
//   }
// });
// cvc.addEventListener("input", function () {
//   if (cvc.value === "") {
//     document.querySelector("#cvc + .error").textContent = "Can't be blank";
//   } else {
//     document.querySelector("#cvc + .error").textContent = "";
//   }
// });

userName.addEventListener("blur", function () {
  if (userName.value === "") {
    document.querySelector("#name + .error").textContent = "Can't be blank";
  } else {
    document.querySelector("#name + .error").textContent = "";
  }
  cardName.textContent = userName.value;
});

number.addEventListener("blur", function () {
  if (number.value === "") {
    document.querySelector(".form__input--number + .error").textContent =
      "Can't be blank";
  } else {
    document.querySelector(".form__input--number + .error").textContent = "";
  }

  if (!number.validity.valid) {
    document.querySelector("#number + .error").textContent =
      "Wrong format, numbers only";
  } else {
    document.querySelector("#number + .error").textContent = "";
  }

  cardNumber.textContent = number.value;
});

expiredMonth.addEventListener("blur", function () {
  if (expiredMonth.value === "") {
    document.querySelector(".error--expired").textContent = "Can't be blank";
  } else {
    document.querySelector(".error--expired").textContent = "";
  }

  if (expiredMonth.value < 1 || expiredMonth.value > 12) {
    document.querySelector(".error--expired").textContent = "Invalid month";
  } else {
    document.querySelector(".error--expired").textContent = "";
  }

  cardMonth.textContent = expiredMonth.value;
});

expiredYear.addEventListener("blur", function () {
  if (expiredYear.value === "") {
    document.querySelector(".error--expired").textContent = "Can't be blank";
  } else {
    document.querySelector(".error--expired").textContent = "";
  }

  cardYear.textContent = expiredYear.value;
});

cvc.addEventListener("blur", function () {
  if (cvc.value === "") {
    document.querySelector("#cvc + .error").textContent = "Can't be blank";
  } else {
    document.querySelector("#cvc + .error").textContent = "";
  }

  cardCVC.textContent = cvc.value;
});

sectionForm.addEventListener("submit", function (e) {
  e.preventDefault();
  sectionForm.classList.toggle("hidden");
  sectionComplete.classList.toggle("hidden");
});
