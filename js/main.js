const toggleBtn = document.querySelector(".header__tuggle-btn");
const nav = document.querySelector("nav");
const accardion = document.querySelectorAll(".accardion");
const acBtn = document.querySelectorAll(".accar-btn");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
let a = 1;
for (let i = 0; i < accardion.length; i++) {
  acBtn[i].addEventListener("click", () => {
    accardion[i].classList.toggle("accardion");
    if (a == 1) {
      acBtn[i].style.transform = "rotateX(180deg)";
      a = 2;
    } else if (a == 2) {
      acBtn[i].style.transform = "rotateX(0deg)";
      a = 1;
    }
  });
}
