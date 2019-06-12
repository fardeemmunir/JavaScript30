const keys = Array.from(document.querySelectorAll(".key"));

const keysList = keys.map(keyEl => keyEl.dataset.key).map(str => Number(str));

console.log(keys);

document.addEventListener("keyup", event => {
  if (keysList.includes(event.keyCode)) {
    console.log("play sound");

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    key.classList.add("playing");
    audio.play();
  }
});

keys.forEach(key =>
  key.addEventListener("transitionend", e => {
    e.target.classList.remove("playing");
  })
);
