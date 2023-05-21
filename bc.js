const hoverSound1 = document.getElementById("hover-sound-1");
const p1 = document.getElementsByTagName("h1")[0];

p1.addEventListener("mouseover", () => {
  hoverSound1.currentTime = 0;
  hoverSound1.play();
});

p1.addEventListener("mouseout", () => {
  hoverSound1.pause();
});