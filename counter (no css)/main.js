"use strict";

let counter = 0;
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#number");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      counter++;
    } else if (styles.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      value.style.color = "green";
    } else if (counter < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = counter;
  });
});
