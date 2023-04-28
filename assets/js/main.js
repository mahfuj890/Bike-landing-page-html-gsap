"user-strict";

//  Gsap Animation

//Top Banner
gsap.fromTo(
  ".top_banner",
  {
    scaleY: 0,
    duration: 0.5,
    transformOrigin: "top center",
    ease: "power1.in",
  },
  { scaleY: 1, duration: 0.5, transformOrigin: "top center", ease: "power1.in" }
);

//Header
gsap.fromTo(
  ".logo",
  {
    y: -20,
    duration: 1.8,
    delay: 1,
    autoAlpha: 0,
      ease: "elastic.out(1, 0.3)",
  },
  {
    y: 0,
    duration: 1.8,
    delay: 1,
    autoAlpha: 1,
    ease: "elastic.out(1, 0.3)",
  }
);
gsap.fromTo(
  ".account_area,.search_btn,.bar_btn",
  {
    x: -20,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.2,
    autoAlpha: 0,
    ease: "power4.inOut",
  },
  {
    x: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.2,
    autoAlpha: 1,
    ease: "power4.inOut",
  }
);
