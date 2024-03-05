// Start the countdown whenever the user presses the study button
const countdownStudy = document.getElementById("countdownStudy");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const repeatButton = document.getElementById("repeatButton");
const phraseStudy = document.getElementById("phraseStudy");

let countdownDuration = 40 * 60; // 40 minutes in seconds

let countdownInterval;

function startCountdown() {
  countdownInterval = setInterval(function () {
    const minutes = Math.floor(countdownDuration / 60);
    const seconds = countdownDuration % 60;
    countdownStudy.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    countdownDuration--;

    // When the countdown reaches 0
    if (countdownDuration < 0) {
      clearInterval(countdownInterval);
      countdownStudy.textContent = "00:00";
      phraseStudy.textContent =
        "You can watch some anime, eat some healthy food, or just burn your brain repeating your study session.";
      repeatButton.disabled = false; // Enable repeat button
    }
  }, 1000);
}

// When the countdown starts, the phraseStudy will change to "you should be studying at this point :v"
startButton.addEventListener("click", function () {
  startCountdown();
  startButton.disabled = true;
  phraseStudy.textContent = "you should be studying at this point :v";
});

startButton.addEventListener("mouseenter", function () {
  phraseStudy.textContent = "you should be studying at this point :v";
});

// Whenever the user wants to hover the pauseButton, the phraseStudy will change to "that's not your ninja way"
pauseButton.addEventListener("mouseenter", function () {
  phraseStudy.textContent = "that's not your ninja way";
});

// Whenever the user presses the pauseButton, the phraseStudy will change to different phrases ramdomly"

const phrases = [
  "nothing can stop you from studying, even me",
  "I know you want to procrastinate but I won't let you",
  "take a deep breath and stop touching me",
  "there's no escape from this study session until you finish",
  "keep calm and don't touch me",
  "never leave until tomorrow what you can do today",
  "you fell into my study trap, now you can't escape wuahahaaha",
];

pauseButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  phraseStudy.textContent = phrases[randomIndex];
});

// When repeatButton is clicked, restart the countdown when it turnes 0
repeatButton.addEventListener("click", function () {
  if (countdownDuration < 0) {
    countdownDuration = 40 * 60; // Reset countdown to 40 minutes
    startCountdown();
    repeatButton.disabled = true;
    phraseStudy.textContent = "you should be studying at this point :v";
  } else {
    phraseStudy.textContent =
      "nope, you can't repeat the session until the countdown has stopped :v";
  }
});

repeatButton.addEventListener("mouseenter", function () {
  phraseStudy.textContent =
    "nope, you can't repeat the session until the countdown has stopped :v";
});

// NOTES

// The functionality of this page may differ to the original idea of creating a countdown for watching Anime and studying (the Pomodoro idea)
// However, while coding some of my ideas were beyond my current knowledge of coding, which is why I did this variation with my currents abilities.
