const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
let musicPlayed = false;

// Move NO button away from cursor
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button behavior
yesBtn.addEventListener("click", () => {
  message.innerHTML = "YAY!! 💖 I knew it 😘 Happy Valentine’s, Sandracakes! 🍰🌸";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  playMusic();
});

// Play music only after interaction
function playMusic() {
  if (!musicPlayed) {
    const iframe = document.getElementById("music");
    iframe.src += "&autoplay=1";
    musicPlayed = true;
  }
}