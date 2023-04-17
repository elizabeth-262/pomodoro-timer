//variables 
let studyTitle = document.getElementById('study');
let breakTitle = document.getElementById('break');

let studyTime = 30;
let breakTime = 5;

let seconds = "00"

//display
window.onload = () => {
    document.getElementById('minutes').innerHTML = studyTime;
    document.getElementById('seconds').innerHTML = seconds;

    studyTitle.classList.add('active');
}

//start timer
function start() {
    //change button 
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change time
    seconds = 59;
   
    let studyMinutes = studyTime - 1;
    let breakMinutes = breakTime - 1;
    
    breakCount = 0;

    // countdown
    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = studyMinutes;
        document.getElementById('seconds').innerHTML = seconds;

   // start
   seconds = seconds - 1;

        if(seconds === 0) {
            studyMinutes = studyMinutes - 1;
            if(studyMinutes === -1){
                if(breakCount % 2 === 0) {
                    //start break
                    studyMinutes = breakMinutes;
                    breakCount++

                }else {
                    //continue work
                    studyMinutes = studyTime;
                    breakCount++

                }
            }
            seconds = 59;
        }

    }
    // start counter 
    setInterval(timerFunction, 1000);
}
