document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger-menu");
  const menu = document.getElementById("nav-menu");
  const header = document.querySelector("header");

  // Burger Menü Toggle
  burger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Sticky Navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});
