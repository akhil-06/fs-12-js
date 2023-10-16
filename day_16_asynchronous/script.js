let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let newyaerdate = new Date("Jan 1, 2024 00:00:00").getTime();

function update() {
  let now = new Date().getTime();

  if (now === new Date("Jan 1, 2024 00:00:00")) {
    clearInterval(id);
  }
  let timePending = newyaerdate - now;
  console.log(timePending);
  let oneSecond = 1000;
  let minutes = oneSecond * 60;
  let Onehour = minutes * 60;
  let oneDay = Onehour * 24;
//   console.log(oneSecond, minutes, Onehour, oneDay);
  let remainingDays = Math.floor(timePending / oneDay);
  let remainingHours = Math.floor((timePending % oneDay) / Onehour);
//   console.log(remainingHours);
  let remainingMinutes = Math.floor((timePending % Onehour) / minutes);
  let remainingSeconds = Math.floor((timePending % minutes) / oneSecond);
  console.log(
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds
  );
  day.innerText = remainingDays;
  hour.innerText = remainingHours;
  minute.innerText = remainingMinutes;
  second.innerText = remainingSeconds;
  //   setTimeout(update, 1000);
}

// update();

let id = setInterval(update, 1000);

// console.log("hello");

// let count = 1;
// function print1(){
//     if(count == 5){
//         clearInterval(id)
//     }
//     console.log("print1");
//     count++;
// }

// let id = setInterval(print1, 2000);

// function print2(){
//     console.log("print2")
// }

// setTimeout(print1);
// setTimeout(print2);
// for(let i=1;i<1000000000;i++){
// }
// function multiply(){
//     console.log(10*2);
// }
// multiply()
// console.log("last line");
