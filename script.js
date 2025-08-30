let timer = 0;
let interval = null;
let targetTime = 0;

function updateDisplay() {
  document.getElementById("timer").textContent = timer;
}

function startTimer() {
  if (interval) return;
  targetTime = parseInt(document.getElementById("durationInput").value);
  interval = setInterval(() => {
    timer++;
    updateDisplay();
    if (timer === targetTime) {
      beep();
      pauseTimer(); 
    }
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

function beep() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = ctx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(1000, ctx.currentTime); 
  oscillator.connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.5); 
}
