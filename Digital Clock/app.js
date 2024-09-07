let hrs = document.querySelector(".hrs");
let min = document.querySelector(".mins");
let sec = document.querySelector(".sec");



setInterval(() => {

  let time = new(Date);

  console.log(time);
  hrs.innerText = (time.getHours()<10?"0":"")+time.getHours();
  min.innerText = (time.getMinutes()<10?"0":"")+time.getMinutes();
  sec.innerText = (time.getSeconds()<10?"0":"")+time.getSeconds();
}, 1000);

let ball1 = document.querySelector(".ball-1");
let ball2 = document.querySelector(".ball-2");

setInterval(() => {

  let ran = random();
  ball1.style.backgroundColor = ran;
  ball2.style.backgroundColor = ran;

  console.log(ran);
}, 2000);




function random(){
  let red = Math.floor(Math.random() *255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);

  let randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}