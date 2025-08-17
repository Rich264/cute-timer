let timer = 0;
let interval = null;

function updateDisplay() {
  document.getElementById("timer").textContent = timer;
}

function startTimer() {
  if (interval) return; 
  interval = setInterval(() => {
    timer++;
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  timer = 0;
  updateDisplay();

}
