"use strict"; // uses strict mode

const circles = document.querySelectorAll(".circle"); // get circles
const prevBtn = document.querySelector("#prev"); // get prev btn
const nextBtn = document.querySelector("#next"); // get next btn
const progressBar = document.querySelector(".progress").style;
let currentCircle = 0; // defines the current circle

function goPrev() {
  if (currentCircle) {
    currentCircle--;
    progressBar.width = `${currentCircle * 33}%`;
  }
  verifyWidth();
}

function goNext() {
  if (currentCircle < circles.length - 1) {
    currentCircle++;
    progressBar.width = `${currentCircle * 33}%`;
  }
  verifyWidth();
}

function verifyWidth() {
  circles.forEach((circle) => {
    if (Number(circle.textContent) - 1 <= currentCircle) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);
