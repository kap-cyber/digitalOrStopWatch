let timerdisplay=document.querySelector(".timerdisplay");
let stopBtn=document.getElementById("stopBtn");
let startBtn=document.getElementById("startBtn");
let resetBtn=document.getElementById("resetBtn");

let hour = 00;
let msec = 00;
let secs = 00;
let mins = 00;


let timerId = null;

startBtn.addEventListener('click',function(){
    
       if(timerId !== null){
       clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
});
stopBtn.addEventListener('click',function(){
    
    clearInterval(timerId);
 
});
resetBtn.addEventListener('click',function(){
     clearInterval(timerId);
     timerdisplay.innerHTML = `00 : 00 : 00 : 00`;
    // hour = minute = second = milisec = 00
});


function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
    }
    
    if(secs == 60){
        secs = 0;
        mins++;
    }
    
    if(mins==60){
        mins=0;
        hour++;
    }
if(hour == 13 ){    // if we use analog watch
    hour=0;
    
}



    

   



// let msecString;      // long method of if else for doing this-----------
// if(msec < 10){
//     msecString = `0${msec}`;
// }
//     else{
//         msecString = msec;
//     }
let hourString = hour < 10 ? `0${hour}` : hour;
let minsString = mins < 10 ? `0${mins}`: mins;    
let secsString = secs < 10 ? `0${secs}`: secs;    
let msecString = msec < 10 ? `0${msec}`: msec;    


timerdisplay.innerHTML = `${hourString}: ${minsString} : ${secsString} : ${msecString}`;






}