let audio = document.getElementsByTagName("audio")[0];
let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
  audio.play();
});