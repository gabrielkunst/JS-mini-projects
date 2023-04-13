"use strict";

const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

function handleNavbar() {
  links.classList.toggle("showLinks");
}

hamburger.addEventListener("click", () => {
  handleNavbar();
});
