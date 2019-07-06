const video = document.querySelector("video");

video.addEventListener("click", () => {
  toggleVideoState();
  togglePlayerButton();
});

const toggleButton = document.querySelector(".toggle");

function toggleVideoState() {
  if (video.paused) video.play();
  else video.pause();
}

function togglePlayerButton() {
  const text = video.paused ? "►" : "❚ ❚";
  toggleButton.textContent = text;
}

toggleButton.addEventListener("click", function() {
  toggleVideoState();
  togglePlayerButton();
});

document
  .querySelector("input[name=volume]")
  .addEventListener("input", function() {
    video.volume = this.value;
  });

document
  .querySelector("input[name=playbackRate]")
  .addEventListener("input", function() {
    video.playbackRate = this.value;
  });

video.ontimeupdate = function() {
  var percentage = (video.currentTime / video.duration) * 100;

  document.querySelector(
    ".progress__filled"
  ).style.flexBasis = `${percentage}%`;
};

document.querySelector(".progress").addEventListener("click", function(e) {
  const percentage = e.offsetX / this.offsetWidth;
  const videoTime = video.duration * percentage;
  video.currentTime = videoTime;
});

document.querySelectorAll(".player__button[data-skip]").forEach(button => {
  button.addEventListener("click", function() {
    video.currentTime += Number(this.dataset.skip);

    console.log(this.dataset.skip);
  });
});
