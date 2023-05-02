"use strict";
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
const overlay = document.querySelector(".overlay");
const Bouthan = document.getElementById("open1");
const Berlin = document.getElementById("open2");
const Svalbard = document.getElementById("open3");
const Galapagos = document.getElementById("open4");

// const openmodal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// //closemodal function
// const closemodal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

Bouthan.addEventListener("click", () => {
  console.log("click");
  modal1.classList.remove("hidden");
  modal1.classList.add("montrer");
  overlay.classList.remove("hidden");
});

Berlin.addEventListener("click", () => {
  console.log("click");
  modal2.classList.remove("hidden");
  modal2.classList.add("montrer");
  overlay.classList.remove("hidden");
});

Svalbard.addEventListener("click", () => {
  console.log("click");
  modal3.classList.remove("hidden");
  modal3.classList.add("montrer");
  overlay.classList.remove("hidden");
});

Galapagos.addEventListener("click", () => {
  console.log("click");
  modal4.classList.remove("hidden");
  modal4.classList.add("montrer");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal1.classList.remove("montrer");
  modal2.classList.remove("montrer");
  modal3.classList.remove("montrer");
  modal4.classList.remove("montrer");
  modal1.classList.add("hidden");
  modal2.classList.add("hidden");
  modal3.classList.add("hidden");
  modal4.classList.add("hidden");
});

// // Escape press closing
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closemodal();
//   }
// });
