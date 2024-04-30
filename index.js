import { MAX as max } from "./main.js";
import { MIN as min } from "./main.js";
const moveBar = document.querySelector(".move-bar");
const valuePercent = document.querySelector(".value-percent");

// Set initial percentage
let percentage = 0;

// Function to update progress bar width
const updateProgressBar = () => {
  moveBar.style.transform = `scaleX(${percentage / 100})`;
  moveBar.style.transformOrigin = "left";
  valuePercent.textContent = `${percentage}%`;
  if (percentage >= 48) {
    valuePercent.style.color = "#fff";
  }
};

// Function to increment percentage over time
const intervalFn = () => {
  const interval = setInterval(() => {
    percentage += 1;
    if (percentage < 0) {
      percentage = Math.min(max, Math.max(percentage, min));
    }
    if (percentage >= 100) {
      clearInterval(interval);
    }
    updateProgressBar();
  }, 100);
};

// Call interval function to start updating progress
intervalFn();
