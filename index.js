const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const menuLine = document.querySelectorAll(".line");
const navLinks = document.querySelectorAll(".nav-link");
const year = document.querySelector(".year");

function toggleMenu() {
  navList.classList.toggle("open");
  navItems.forEach((item) => {
    item.classList.toggle("fade");
  });
  menuLine.forEach((line) => {
    line.classList.toggle("show");
  });
}
hamburger.addEventListener("click", () => {
  toggleMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  year.innerText = new Date().getFullYear();
});
