const pauseBtn = document.querySelector(".pause");
const playBtn = document.querySelector(".play");
const video = document.querySelector("video");

playBtn.addEventListener("click", () => {
  video.play();
});

pauseBtn.addEventListener("click", function () {
  video.pause();
});
