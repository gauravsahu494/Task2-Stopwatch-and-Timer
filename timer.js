let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let hoursDisplay = document.getElementById("hours-display");
let minutesDisplay = document.getElementById("minutes-display");
let secondsDisplay = document.getElementById("seconds-display");
let timerInterval;

function startTimer() {
  let hours = parseInt(hoursInput.value) || 0;
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  if (totalSeconds > 0) {
    timerInterval = setInterval(function () {
      if (totalSeconds === 0) {
        clearInterval(timerInterval);
        return;
      }
      totalSeconds--;
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
      let seconds = totalSeconds - hours * 3600 - minutes * 60;
      hoursDisplay.textContent = padZero(hours);
      minutesDisplay.textContent = padZero(minutes);
      secondsDisplay.textContent = padZero(seconds);
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
  hoursDisplay.textContent = "00";
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
