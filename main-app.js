const firstSelector = document.querySelector(".hr-span");
const secondSelector = document.querySelector(".items");

firstSelector.addEventListener("click", function () {
  secondSelector.classList.toggle("items-list");
});
