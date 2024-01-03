const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you tomorrow!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  setPositionRandomly(noBtn);
});

noBtn.addEventListener("click", () => {
  setPositionRandomly(noBtn);
});

// Function to set button position randomly within visible area
function setPositionRandomly(element) {
  const elementRect = element.getBoundingClientRect();
  const maxX = window.innerWidth - elementRect.width;
  const maxY = window.innerHeight - elementRect.height;

  const randomX = Math.max(0, Math.min(maxX, Math.floor(Math.random() * maxX)));
  const randomY = Math.max(0, Math.min(maxY, Math.floor(Math.random() * maxY)));

  element.style.left = randomX + "px";
  element.style.top = randomY + "px";
}
