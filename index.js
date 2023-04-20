const header = document.querySelector("header");
console.log(header);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 100) {
    header.classList.remove("entete");
    header.classList.add("headerscroll");
  }
  if (window.scrollY < 100) {
    header.classList.remove("headerscroll");
    header.classList.add("entete");
  }
});
