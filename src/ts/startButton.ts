let startButton = document.getElementById("btn_start");

function startGameButton() {
    startButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    location.href = "./../pages/game/index.html";
  });
}

export { startGameButton }