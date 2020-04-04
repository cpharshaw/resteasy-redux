import anime from 'animejs/lib/anime.es.js';

document.addEventListener("DOMContentLoaded", function () {

  console.log("this is working xxx");
  var ml = {};
  ml.timelines = {};
  ml.overlay = {};
  ml.isShowingSource = false;
  // Handler when the DOM is fully loaded


  anime.timeline({
    loop: 10
  })
    .add({
      targets: '.ml5 .line',
      easing: "easeInOutExpo",
      duration: 700,
      opacity: [0.5, 1],
      scaleX: [0, 1]
    }, 500)
    .add({
      targets: '.ml5 .line',
      easing: "easeOutExpo",
      duration: 700,
      translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
    })
    .add({
      targets: '.ml5 .ampersand',
      easing: "easeOutExpo",
      duration: 700,
      opacity: [0, 1],
      scaleY: [0.5, 1]
    }, 1400)
    .add({
      targets: '.ml5 .letters-left',
      easing: "easeOutExpo",
      translateX: ["-0.5em", 0],
      duration: 1500,
      opacity: [0, 1]
    }, 2125)
    .add({
      targets: '.ml5 .letters-right',
      easing: "easeOutExpo",
      translateX: ["-0.5em", 0],
      duration: 1750,
      opacity: [0, 1]
    }, 2125)
    .add({
      targets: '.ml5 .line',
      opacity: 0,
      duration: 1750,
      easing: "easeOutExpo"
    }, 2125)
    .add({
      targets: '.tagline1',
      opacity: [0, 1],
      duration: 2000,
      easing: "easeOutExpo"
    }, 2600)
    .add({
      targets: '.tagline2',
      opacity: [0, 1],
      duration: 2000,
      easing: "easeOutExpo"
    }, 3350)
    .add({
      targets: '.tagline3',
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutExpo"
    }, 4100)
    .add({
      targets: '.loader, .spinner',
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutExpo"
    }, 4100)
    .add({
      targets: '.ml5',
      opacity: 0,
      duration: 1500,
      easing: "easeOutExpo",
      delay: 3000
    }, 20000)
















});