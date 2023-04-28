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

//Slider
const slide = document.querySelector(".gallery");
let isDown = false;
let startX;
let scrollLeft;

slide.addEventListener("mousedown", (e) => {
  isDown = true;
  slide.classList.add("active");
  startX = e.pageX - slide.offsetLeft;
  scrollLeft = slide.scrollLeft;
});
slide.addEventListener("mouseleave", (_) => {
  isDown = false;
  slide.classList.remove("active");
});
slide.addEventListener("mouseup", (_) => {
  isDown = false;
  slide.classList.remove("active");
});
slide.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slide.offsetLeft;
  const SCROLL_SPEED = 2;
  const walk = (x - startX) * SCROLL_SPEED;
  slide.scrollLeft = scrollLeft - walk;
});

// //fonction burger
const menuBurger = document.querySelector(".burger");
const liste = document.querySelector(".context");

menuBurger.addEventListener("click", () => {
  // liste.classList.toggle("menu_burger");
  if (liste.classList.contains("affich") === true) {
    console.log("click");
    liste.classList.remove("affich");
    liste.classList.add("hidden");
  } else {
    console.log("click");

    liste.classList.remove("hidden");
    liste.classList.add("affich");
    header.classList.add("headerscroll");
  }
});
