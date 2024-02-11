"use strict";

var li = document.querySelectorAll("li");
li.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    e.style.fontSize = "20px";
  });
  e.addEventListener("mouseleave", function () {
    e.style.fontSize = "inherit";
  });
});