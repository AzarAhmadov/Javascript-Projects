const aside = document.querySelector(".aside");
const open_nav = document.querySelector(".open-nav");

open_nav.addEventListener("click", () => {
  aside.classList.toggle("active");
});
