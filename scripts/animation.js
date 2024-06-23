// var options = {
//   wrapperId: "butter",
//   wrapperDamper: 0.4,
//   cancelOnTouch: true,
// };
// butter.init(options);

function animateNavbar() {
  const navContainer = document
    .querySelector("nav")
    .querySelector(".container");
  const links = navContainer.querySelector(".links");
  const menu = navContainer.querySelector(".menu");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      links.style.opacity = 0;
      menu.style.opacity = 0;
      navContainer.style.transform = "translateY(-200%)";
    } else {
      // Scrolling up
      menu.style.opacity = 1;
      links.style.opacity = 1;
      navContainer.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
}
// animateNavbar();
