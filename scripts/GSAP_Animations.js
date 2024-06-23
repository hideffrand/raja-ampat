function animateHeadlines() {
  try {
    document.querySelectorAll(".headline").forEach((e) => {
      gsap.fromTo(e, { y: "100%" }, { scrollTrigger: { trigger: e }, y: 0 });
    });
  } catch (e) {
    console.log(
      "error animateHeadlines!\n [Please ignore if the cause is missing element]",
      e
    );
  }
}
function animateFooter() {
  try {
    gsap.fromTo(
      "#globe",
      { y: "80%", rotate: 0 },
      {
        scrollTrigger: { trigger: "footer", scrub: 1 },
        y: "48%",
        rotate: "20deg",
        duration: 2,
      }
    );
  } catch (e) {
    console.log(
      "error animateFooter!\n [Please ignore if the cause is missing element]",
      e
    );
  }
}
function animateTileImages() {
  let e = document.querySelectorAll(".tile-img");
  e.forEach((e) => {
    gsap.fromTo(
      e,
      { y: 0 },
      {
        scrollTrigger: { trigger: e, start: "bottom bottom", scrub: !0 },
        y: -100,
      }
    );
  });
}
gsap.registerPlugin(ScrollTrigger), animateFooter();
