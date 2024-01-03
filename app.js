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
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  // Ensure the random position is within the screen boundaries
  const randomX = Math.max(0, Math.min(maxX, Math.floor(Math.random() * maxX)));
  const randomY = Math.max(0, Math.min(maxY, Math.floor(Math.random() * maxY)));

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
