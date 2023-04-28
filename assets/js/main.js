"user-strict";

//  Gsap Animation

//Top Banner

let bannerTimeline = gsap.timeline({
  duration: 0.5,
  transformOrigin: "top center",
  ease: "power1.in",
});
bannerTimeline
  .fromTo(
    ".top_banner",
    {
      scaleY: 0,
      transformOrigin: "top center",
    },
    { scaleY: 1 }
  )
  .fromTo(
    ".bottom_banner",
    {
      height: 0,
    },
    { height: "100%" }
  );

// gsap.fromTo(
//   ".top_banner",
//   {
//     scaleY: 0,
//     duration: 0.5,
//     transformOrigin: "top center",
//     ease: "power1.in",
//   },
//   { scaleY: 1, duration: 0.5, transformOrigin: "top center", ease: "power1.in" }
// );

//Header

let headerLogoTimeline = gsap.timeline({
  duration: 0.8,
  autoAlpha: 0,
  delay: 0.8,
  ease: "elastic.out(1, 0.3)",
});
headerLogoTimeline
  .from(".logo", { autoAlpha: 0, y: -20 })
  .to(".logo", { y: 0, autoAlpha: 1 });

let headerTimeline = gsap.timeline({
  duration: 0.8,
  delay: 0.5,
  stagger: 0.2,
  autoAlpha: 0,
  ease: "power4.inOut",
});
headerTimeline
  .from(".account_area,.search_btn,.bar_btn", { x: -20, autoAlpha: 0 })
  .to(".account_area,.search_btn,.bar_btn", { x: 0, autoAlpha: 1 });
