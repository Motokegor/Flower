const hamburger = document.querySelector(".hamburger");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const navMobile = document.querySelector(".nav-mobiles");
const hamburgerClose = document.querySelector(".hamburger-close");
const navDesctop = document.querySelector(".nav-desctop");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", navBarMobile);
hamburgerClose.addEventListener("click", navBarClose);

function navBarMobile() {
  hero.classList.add("hero-active");
  main.classList.add("main-active");
  footer.classList.add("footer-active");
  navMobile.classList.add("nav-mobile-active");
  navDesctop.classList.add("nav-desctop-active");
}

function navBarClose() {
  hero.classList.remove("hero-active");
  main.classList.remove("main-active");
  footer.classList.remove("footer-active");
  navMobile.classList.remove("nav-mobile-active");
  navDesctop.classList.remove("nav-desctop-active");
}
