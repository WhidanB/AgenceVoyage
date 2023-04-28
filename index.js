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
