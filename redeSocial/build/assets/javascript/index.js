"use strict";

var hamburguer = document.querySelector(".hamburguer");
var navMenu = document.querySelector(".nav-menu");
hamburguer.addEventListener("click", function () {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});