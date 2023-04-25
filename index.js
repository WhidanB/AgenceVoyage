const header = document.querySelector("header");

var input = document.querySelectorAll("input");
for (i = 0; i < input.length; i++) {
  input[i].setAttribute("size", input[i].getAttribute("placeholder").length);
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.remove("entete");
    header.classList.add("headerscroll");
  }
  if (window.scrollY < 100) {
    header.classList.remove("headerscroll");
    header.classList.add("entete");
  }
});

const slider = document.querySelector(".slider");
const vectorLeft = document.querySelector(".vector1");
const vectorRight = document.querySelector(".vector2");
let slideArray = document.getElementsByClassName("slide");
let active = slideArray;
let trans = 0;

vectorLeft.addEventListener("click", () => {
  if (trans == 0) {
    trans += 80;
    slider.style.transform = "translate(-" + trans + "%,0)";
  } else if (trans <= 80) {
    trans -= 20;
    slider.style.transform = "translate(-" + trans + "%,0)";
  }
  // if (active == slideArray.length) {
  // console.log(slideArray.length);
  console.log(trans);
});

vectorRight.addEventListener("click", () => {
  if (trans < 80) {
    trans += 20;
    slider.style.transform = "translate(-" + trans + "%,0)";
  } else if (trans >= 80) {
    slider.style.transform = "translateX(0%)";
    trans = 0;
  }
  // if (active == slideArray.length) {
  // console.log(slideArray.length);
  console.log(trans);
});
