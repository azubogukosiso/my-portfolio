let tl = gsap.timeline({
  scrollTrigger: "nav",
});
tl.from(".collapse ul li a", { opacity: 0, duration: 0.5, stagger: 0.2 });
tl.from(".navbar-toggler", { y: -20, opacity: 0, duration: 0.7 }, "-0.5");

// ###############################

let tl2 = gsap.timeline({
  scrollTrigger: ".main",
});
tl2.from(".mb-4, .container .btn", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
});
