let hrs = document.querySelector(".hrs");
let mins = document.querySelector(".mins");
let sec = document.querySelector(".sec");
let mili = document.querySelector(".mili");

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");

let hour = 0; 
let minute = 0; 
let second = 0; 
let milisec = 0;
let timer = null;

start.addEventListener("click",()=>{
  watchStart(); 
  console.log(watchStart());
})


function stopWatch(){
    if(second == 60){
      second=0;
      minute++;
      if(minute ==60){
        minute = 0;
        hour++;
      }
    }
    hrs.innerHTML = hour;
    mins.innerHTML = minute;
    sec.innerHTML = second;
    // mili.innerText = milisec;
}

function watchStart(){
  timer = setInterval(hour, 1000); 
}