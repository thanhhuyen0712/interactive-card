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

const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");

userName.addEventListener("input", function () {
  if (userName.value === "") {
    cardName.textContent = "Jane Appleseed";
  } else {
    cardName.textContent = userName.value;
  }
});

number.addEventListener("input", function () {
  if (number.value === "") {
    cardNumber.textContent = "0000 0000 0000 0000";
  } else {
    number.value = formatNumber(number.value.replaceAll(" ", ""));
  }
});

expiredMonth.addEventListener("input", function () {
  if (expiredMonth.value === "") {
    cardMonth.textContent = "00";
  } else {
    cardMonth.textContent = expiredMonth.value;
  }
});

expiredYear.addEventListener("input", function () {
  if (expiredYear.value === "") {
    cardYear.textContent = "00";
  } else {
    cardYear.textContent = expiredYear.value;
  }
});

cvc.addEventListener("input", function () {
  if (cvc.value === "") {
    cardCVC.textContent = "000";
  } else cardCVC.textContent = cvc.value;
});

userName.addEventListener("blur", function () {
  if (userName.value === "") {
    document.querySelector("#name + .error").textContent = "Can't be blank";
  } else {
    document.querySelector("#name + .error").textContent = "";
  }
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
});

expiredYear.addEventListener("blur", function () {
  if (expiredYear.value === "") {
    document.querySelector(".error--expired").textContent = "Can't be blank";
  } else {
    document.querySelector(".error--expired").textContent = "";
  }
});

cvc.addEventListener("blur", function () {
  if (cvc.value === "") {
    document.querySelector("#cvc + .error").textContent = "Can't be blank";
  } else {
    document.querySelector("#cvc + .error").textContent = "";
  }
});

sectionForm.addEventListener("submit", function (e) {
  e.preventDefault();
  sectionForm.classList.toggle("hidden");
  sectionComplete.classList.toggle("hidden");
});
