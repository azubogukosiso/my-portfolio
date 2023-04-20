let tl = gsap.timeline({
  scrollTrigger: "nav",
});
tl.from(".collapse ul li a", { opacity: 0, duration: 0.5, stagger: 0.2 });
tl.from(".navbar-toggler", { opacity: 0, duration: 0.7 }, "-0.5");

// ###############################

let tl2 = gsap.timeline({
  scrollTrigger: ".container-fluid",
});
tl2.from(".container-fluid .work-sample", {
  y: 70,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
});
