let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;

    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;

    clearInterval(timer);
}

function resetTimer() {
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;

    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert('Time is up! Take a break.');
        resetTimer();
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    const minutesDisplay = String(minutes).padStart(2, '0');
    const secondsDisplay = String(seconds).padStart(2, '0');
    document.getElementById('minutes').innerText = minutesDisplay;
    document.getElementById('seconds').innerText = secondsDisplay;
}

function setCustomTime() {
    const customTime = parseInt(document.getElementById('duration').value, 10);
    if (!isNaN(customTime) && customTime > 0) {
        minutes = customTime;
        seconds = 0;
        updateDisplay();
    } else {
        alert('Please enter a valid time.');
    }
}
