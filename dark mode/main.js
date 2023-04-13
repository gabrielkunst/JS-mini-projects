const btn = document.querySelector(".btn");
const body = document.querySelector("body");

const toggleMode = () => {
  body.classList.toggle("dark");
};

btn.addEventListener("click", toggleMode);
