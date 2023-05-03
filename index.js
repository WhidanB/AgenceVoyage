const header = document.querySelector("header");

var input = document.querySelectorAll("input");
for (i = 0; i < input.length; i++) {
  input[i].setAttribute("size", input[i].getAttribute("placeholder").length);
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.remove("entete");
    header.classList.add("headerscroll");
  }
  if (window.scrollY < 50) {
    header.classList.remove("headerscroll");
    header.classList.add("entete");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 25 && liste.classList.contains("affich") === true) {
    console.log("scroll");
    liste.classList.remove("affich");
    liste.classList.add("hidden");
  }
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

// document.addEventListener("click", () => {
//   if (liste.classList.contains("affich") === true) {
//     console.log("nope");
//     liste.classList.remove("affich");
//     liste.classList.add("hidden");
//   } else if (liste.classList.contains("affich") === false) {
//     console.log("oui");
//     liste.classList.remove("hidden");
//     liste.classList.add("affich");
//     header.classList.add("headerscroll");
//   }
// });
