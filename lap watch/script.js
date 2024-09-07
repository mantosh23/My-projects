let [mili,sec,min,hour]=[0,0,0,0];
let time = document.querySelector(".display-time");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let int = null;
let laps = document.querySelector(".laps");

start.addEventListener("click",()=>{
  if(int!==null){
    clearInterval(int);
  }
  int = setInterval(display_timer,10);
})

pause.addEventListener("click",()=>{
  clearInterval(int);
  createLap();
})

reset.addEventListener("click",()=>{
  clearInterval(int);
  [mili,sec,min,hour]=[0,0,0,0];
  time.innerHTML="00 : 00 : 00 : 000";
  clearList();
})

function display_timer(){
  mili+=10
  if(mili ==1000){
    mili = 0;
    sec++;
    if(sec==60){
      sec=0;
      min++;
      if(min==0){
        min=0;
        hour++;
      }
    }
  }
  let h = hour<10?"0"+hour:hour;
  let m = min<10?"0"+min:min;
  let s = sec<10?"0"+sec:sec;
  let mil = mili<10
  ?"00"+mili
  :mili<100
  ?"0"+mili
  :mili;

  time.innerHTML = `${h} : ${m} : ${s} : ${mil}`;
}

let num =0;
function createLap(){
  num+=1;
  let li = document.createElement("li");
  li.innerText = `Lap ${num} - ${time.innerHTML}`;
  laps.appendChild(li);
}

function clearList(){
  num = 0;
  while (laps.firstChild) {
    laps.removeChild(laps.firstChild);
  }
}