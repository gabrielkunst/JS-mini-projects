"use strict";

/* VARIABLES */
const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");
const url = "https://icanhazdadjoke.com/";

/* FUNCTIONS */

const fetchJoke = async () => {
  joke.textContent = "Loading...";
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-agent": "learning app",
    },
  });
  const data = await response.json();
  joke.textContent = data.joke;
};

btn.addEventListener("click", () => {
  fetchJoke();
});

fetchJoke();
