"use strict";

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "./assets/julia.png",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "./assets/marcelo.png",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "./assets/pedro.png",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const random = document.querySelector(".random");
let currentItem = 0;

const image = document.querySelector(".image");
const nameEl = document.querySelector(".name");
const job = document.querySelector(".job");
const description = document.querySelector(".description");

function showPerson() {
  const item = reviews[currentItem];
  image.src = item.img;
  nameEl.textContent = item.name;
  job.textContent = item.job;
  description.textContent = item.text;
}

function prevItem() {
  if (currentItem == 0) {
    currentItem = reviews.length - 1;
  } else {
    currentItem--;
  }
  showPerson();
}

function nextItem() {
  if (currentItem == reviews.length - 1) {
    currentItem = 0;
  } else {
    currentItem++;
  }
  showPerson();
}

function randomItem() {
  currentItem = Math.trunc(Math.random() * reviews.length);
  showPerson();
}

window.addEventListener("DOMContentLoaded", showPerson);
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);
random.addEventListener("click", randomItem);
