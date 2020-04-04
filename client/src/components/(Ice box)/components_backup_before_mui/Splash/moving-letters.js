



anime.timeline({loop: true})
.add({
  targets: '.ml5 .line',
  easing: "easeInOutExpo",
  duration: 700,  
  opacity: [0.5, 1],
  scaleX: [0, 1]
}).add({
  targets: '.ml5 .line',
  duration: 600,
  easing: "easeOutExpo",
  translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
}).add({
  targets: '.ml5 .ampersand',
  easing: "easeOutExpo",
  duration: 600,  
  opacity: [0, 1],
  scaleY: [0.5, 1],
}, '-=600')
.add({
  targets: '.ml5 .letters-left',
  easing: "easeOutExpo",
  duration: 600,  
  opacity: [0,1],
  translateX: ["0.5em", 0]
},'-=300').add({
  targets: '.ml5 .letters-right',
  easing: "easeOutExpo",
  duration: 600,  
  opacity: [0,1],
  translateX: ["-0.5em", 0]
}, '-=600')
.add({
  targets: '.ml5',
  easing: "easeOutExpo",
  delay: 1000,  
  opacity: 0,
  duration: 1000
});