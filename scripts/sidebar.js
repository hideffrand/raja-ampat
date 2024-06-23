const sidebar = document.querySelector(".side-bar");
const sidebarCloseBtn = document.querySelector(".sidebar-close-btn");
const menuBtn = document.querySelector(".menu");
let sidebarIsOpen = false;

menuBtn.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
});

sidebarCloseBtn.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";
});
