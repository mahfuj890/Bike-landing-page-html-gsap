"user-strict";

//  Gsap Animation

//Register Plugin
gsap.registerPlugin(ScrollTrigger );

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
      delay: 0.8,
      duration: 0.8,
    },
    { height: "100%", delay: 0.8, duration: 0.8 }
  );

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

//Hero Section

//Split text
const text = new SplitType("#heroSubText", { tagName: "span" });

let heroTimeline = gsap.timeline({
  duration: 1.5,
  ease: "expo.in",
  delay: 0.8,
});
heroTimeline
  .fromTo(".product_img", { y: 25, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
  .fromTo(".hero_content h1", { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
  .fromTo(
    ".hero_content h2",
    { y: -100, autoAlpha: 0 },
    { y: 0, autoAlpha: 1 },
    "<25%"
  )
  .fromTo(
    ".hero_content h2",
    { y: -100, autoAlpha: 0 },
    { y: 0, autoAlpha: 1 },
    "<25%"
  )
  .fromTo(
    "#heroSubText .char",
    { y: 20, ease: "none", autoAlpha: 0 },
    {
      y: 0,
      stagger: 0.05,
      delay: 0.1,
      duration: 0.1,
      ease: "none",
      autoAlpha: 1,
    },
    "<25%"
  )
  .fromTo(
    ".hero_img_area h3",
    { y: 20, ease: "back.in", autoAlpha: 0 },
    {
      y: 0,
      duration: 0.5,
      ease: "back.in",
      autoAlpha: 1,
    },
    "<25%"
  );

//Footer Animation

let footerTimeline = gsap.timeline( {stagger: 0.5, delay: 0.8, duration: 0.5,scrollTrigger:".footer_list"});
footerTimeline.fromTo(
  ".footer_list li",
  { x: -40, autoAlpha: 0 },
  { x: 0, autoAlpha: 1,  }
);
