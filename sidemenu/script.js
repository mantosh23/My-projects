var menu = document.querySelector("#nav i");
var close = document.querySelector(".full i");

var tl = gsap.timeline();

tl.to("#nav i",{
  opacity:0,
  duration:0.2
})

tl.to(".full",{
  right:0,
  duration:0.7
})

tl.from(".full h4",{
  x:50,
  duration:0.3,
  stagger:0.28,
  opacity:0
})

tl.from(".full i",{
  opacity:0
})


tl.pause();



menu.addEventListener("click",()=>{
  tl.play()
})

close.addEventListener("click",()=>{
  tl.reverse()
})