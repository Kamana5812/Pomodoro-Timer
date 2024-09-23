// Select HTML elements
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const timerDisplay = document.getElementById('timer');

// Get the audio element for sound notification
const alarmSound = document.getElementById('alarmSound');

let timerDuration = 25 * 60; // 25 minutes in seconds
let timeRemaining = timerDuration;
let timerInterval;
let isPaused = false;

// Function to start the timer
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (!isPaused && timeRemaining > 0) {
                timeRemaining--;
                updateTimerDisplay();
            } else if (timeRemaining === 0) {
                clearInterval(timerInterval);
                timerInterval = null;

                // Play the alarm sound when the timer ends
                alarmSound.play();
            }
        }, 1000);
    }
}

// Function to pause the timer
function pauseTimer() {
    isPaused = !isPaused; // Toggle pause state
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeRemaining = timerDuration;
    isPaused = false;
    updateTimerDisplay();
}

// Function to update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Event listeners for the buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initial timer display update
updateTimerDisplay();
