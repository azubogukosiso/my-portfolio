const form = document.querySelector("form");
const emailBtn = document.querySelector(".email-btn");

const showEmailForm = () => {
  if (form.style.height === "274.39px") {
    emailBtn.innerHTML = "email me";
    form.style.height = "0";
  } else {
    emailBtn.innerHTML = "close";
    form.style.height = "274.39px";
  }
}

let tl = gsap.timeline({
  scrollTrigger: "nav",
});
tl.from(".collapse ul li a", { opacity: 0, duration: 0.5, stagger: 0.2 });
tl.from(".navbar-toggler", { opacity: 0, duration: 0.7 }, "-0.5");

// ###############################

let tl2 = gsap.timeline({
  scrollTrigger: ".intro",
});
tl2.from(".intro-text", { y: 70, opacity: 0, duration: 0.7 });

// ###############################

let tl3 = gsap.timeline({
  scrollTrigger: ".svg_1",
});
tl3.from(".svg_1", { y: 70, opacity: 0, duration: 0.5 });

// ##############################

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mid-text",
  },
});
tl4.from(".mid-text", { y: 70, opacity: 0, duration: 0.7 });

// ##############################

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".svg_2",
  },
});
tl5.from(".svg_2", { y: 70, opacity: 0, duration: 0.5 });

// #############################

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".end-text",
  },
});
tl6.from(".end-text", { y: 70, opacity: 0, duration: 0.7 });

// #############################

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".svg_3",
  },
});
tl7.from(".svg_3", { y: 70, opacity: 0, duration: 0.5 });
tl7.from("#person_1", { scale: 0, duration: 0.3 });
tl7.from("#callout_1", { scale: 0, duration: 0.3 }, "-=0.2");
tl7.from("#person_2", { scale: 0, duration: 0.3 });
tl7.from("#callout_2", { scale: 0, duration: 0.3 }, "-=0.2");

// ###############################

let tl8 = gsap.timeline({
  scrollTrigger: "#div_1",
});
tl8.from("#div_1", { opacity: 0, duration: 0.01, delay: 2 });
tl8.to("#div_1", { scaleX: 0.5, duration: 0.01, delay: 2 });
tl8.to("#div_1", { scaleX: 1.5, duration: 0.01, delay: 1 });
tl8.to("#div_1", { scaleX: 1, duration: 0.01, delay: 3 });

// ###############################

let tl9 = gsap.timeline({
  scrollTrigger: "#div_2",
});
tl9.to("#div_2", { scaleX: 0.4, duration: 0.01, delay: 7 });
tl9.from("#div_2", { opacity: 0, duration: 0.01, delay: 2 });
tl9.to("#div_2", { scaleX: 1, duration: 0.01, delay: 3 });

// ###############################

let tl10 = gsap.timeline({
  scrollTrigger: "#div_3",
});
tl10.from("#div_3", { opacity: 0, duration: 0.01, delay: 7 });

// ###############################

let tl11 = gsap.timeline({
  scrollTrigger: "#div_4",
});
tl11.to("#div_4", { scaleY: 0.4, duration: 0.01, delay: 9 });
tl11.from("#div_4", { opacity: 0, duration: 0.01, delay: 2 });
tl11.to("#div_4", { scaleY: 1, duration: 0.01, delay: 2 });
