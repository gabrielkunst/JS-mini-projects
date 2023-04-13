"use strict";

const panels = document.querySelectorAll(".panel");
panels.forEach((item) => {
  item.addEventListener("click", () => {
    resetActive();
    item.classList.add("active");
  });
});

function resetActive() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}
