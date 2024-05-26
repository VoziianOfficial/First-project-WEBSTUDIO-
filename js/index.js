document.querySelector(".open-menu-btn").onclick = function () {
  document.querySelector(".modal-overlay").classList.add("is-open");
};

document.querySelector(".menu-close-btn").onclick = function () {
  document.querySelector(".modal-overlay").classList.remove("is-open");
};

document.querySelector(".header-btn").onclick = function () {
  document.querySelector(".menu-overlay").classList.add("is-open");
};

document.querySelector("menu-close-btn").onclick = function () {
  document.querySelector(".menu-overlay").classList.remove("is-open");
};
