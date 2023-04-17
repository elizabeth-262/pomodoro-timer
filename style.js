//variables 
let studyTitle = document.getElementById('study');
let breakTitle = document.getElementById('break');

let studyTime = 30;
let breakTime = 5;

let seconds = "00";
let timerIntervalId; // to store the interval id

//display
window.onload = () => {
    document.getElementById('minutes').innerHTML = studyTime;
    document.getElementById('seconds').innerHTML = seconds;

    studyTitle.classList.add('active');
}

//start timer
function start() {
    // Get the panel element
    const panel = document.querySelector('.panel');

    //change button 
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // Change the box shadow to green
    panel.style.boxShadow = '0px 0px 37px 11px rgba(0, 255, 0, 0.74)';

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

        if (seconds === -1) {
            studyMinutes = studyMinutes - 1;
            if (studyMinutes === -1) {
                if (breakCount % 2 === 0) {
                    //start break
                    studyMinutes = breakMinutes;
                    breakCount++

                } else {
                    //continue work
                    studyMinutes = studyTime;
                    breakCount++

                }
            }
            seconds = 59;
        }

        // Change the box shadow back to white when the timer stops
        if (studyMinutes < 0) {
            panel.style.boxShadow = '0px 0px 37px 11px rgba(255, 255, 255, 0.74)';
            clearInterval(timerIntervalId); // clear the timer interval
        }

    }

    // start counter 
    timerIntervalId = setInterval(timerFunction, 1000);
}

function reset() {
    clearInterval(timerIntervalId); // clear the timer interval
    seconds = "00";
    document.getElementById('seconds').innerHTML = seconds;

    studyTime = 30; // reset the study time to 30 minutes
    let studyMinutes = studyTime;
    document.getElementById('minutes').innerHTML = studyMinutes;

    // Get the panel element
    const panel = document.querySelector('.panel');

    // Change the button 
    document.getElementById('reset').style.display = "none";
    document.getElementById('start').style.display = "block";

    // Reset the box shadow
    panel.style.boxShadow = '0px 0px 37px 11px rgba(255, 255, 255, 0.74)';
}
