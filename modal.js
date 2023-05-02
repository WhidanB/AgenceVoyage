"use strict";
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
const overlay = document.querySelector(".overlay");
const OpenModal1 = document.querySelectorAll(".open1");
const OpenModal2 = document.querySelectorAll(".open2");
const OpenModal3 = document.querySelectorAll(".open3");
const OpenModal4 = document.querySelectorAll(".open4");

console.log(OpenModal1);
// const openmodal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// //closemodal function
// const closemodal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

OpenModal1.addEventListener("click", () => {
  console.log("click");
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// // Escape press closing
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closemodal();
//   }
// });
