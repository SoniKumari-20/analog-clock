let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

// function date(){
//     return new Date();
// }
const deg = 6;
setInterval(() => {
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;

    hour.style.transform  = `rotate(${(hh)+(mm/12)}deg)`;
    minute.style.transform  = `rotate(${(mm)}deg)`;
    second.style.transform  = `rotate(${ss}deg)`;
 console.log();
},1000);