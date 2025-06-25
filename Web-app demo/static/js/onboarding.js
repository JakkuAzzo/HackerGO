const circleButtons = document.querySelectorAll(".button-circle");
const buttonGrid = document.querySelector(".button-grid");
const buttonWidth = document.querySelector(".button").offsetWidth;

let currentIndex = 0;

function moveButtons(direction) {
  const increment = direction === "right" ? -1 : 1;
  currentIndex += increment * 5;
  if (currentIndex < 0) {
    currentIndex = circleButtons.length - 1;
  } else if (currentIndex >= circleButtons.length) {
    currentIndex = 0;
  }
  for (let i = 0; i < circleButtons.length; i++) {
    const buttonIndex = (i + currentIndex) % circleButtons.length;
    const button = circleButtons[buttonIndex];
    button.style.left = `${(i % 5) * buttonWidth}px`;
    button.style.top = `${Math.floor(i / 5) * buttonWidth}px`;
  }
}

let countdownInterval;
let countdownTime = 3;

function startCountdown(x, y) {
  const countdownDiv = document.createElement("div");
  countdownDiv.style.position = "absolute";
  countdownDiv.style.top = `${y + 10}px`;
  countdownDiv.style.left = `${x + 10}px`;
  countdownDiv.style.background = "#fff";
  countdownDiv.style.padding = "10px";
  countdownDiv.style.borderRadius = "5px";
  countdownDiv.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";
  document.body.appendChild(countdownDiv);

  countdownInterval = setInterval(() => {
    countdownTime--;
    countdownDiv.innerHTML = `Next section in ${countdownTime} seconds`;
    if (countdownTime === 0) {
      clearInterval(countdownInterval);
      countdownDiv.remove();
      moveButtons("left");
    }
  }, 1000);
}

buttonGrid.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const gridX = buttonGrid.getBoundingClientRect().x;
  const gridWidth = buttonGrid.offsetWidth;
  const borderSize = 10;
  const borderLeft = gridX + borderSize;
  const borderRight = gridX + gridWidth - borderSize;

  if (x > borderRight) {
    moveButtons("right");
    startCountdown(x, y);
  } else if (x < borderLeft) {
    moveButtons("left");
    startCountdown(x, y);
  } else {
    clearInterval(countdownInterval);
    countdownTime = 3;
  }
});