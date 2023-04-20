let tl = gsap.timeline({
  scrollTrigger: "nav",
});
tl.from(".collapse ul li a", { opacity: 0, duration: 0.5, stagger: 0.2 });
tl.from(".navbar-toggler", { opacity: 0, duration: 0.7 }, "-0.5");

// ###############################

let tl2 = gsap.timeline({
  scrollTrigger: ".first",
});
tl2.from(".about-photo", { y: 70, opacity: 0, duration: 0.7 });
tl2.from(".about-info", { y: 70, opacity: 0, duration: 0.7 }, "-=0.7");

// ###############################

let tl3 = gsap.timeline({
  scrollTrigger: ".second .container",
});
tl3.from(".second h1, .second p", {
  y: 70,
  opacity: 0,
  duration: 0.5,
});

// ###############################

let tl4 = gsap.timeline({
  scrollTrigger: ".second .container",
});
tl4.from(".skill-tab", { y: 70, opacity: 0, duration: 0.2, stagger: 0.2 });
