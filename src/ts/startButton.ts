import { retreiveStoredPlayers } from "../assets/tsModules/storedPlayersList";

let startButton = document.getElementById("btn_start") as HTMLButtonElement;

function startGameButton() {

  startButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (retreiveStoredPlayers().length < 2) {
      alert(
        'You need to have at least 2 players'
      )
    }

    if (retreiveStoredPlayers().length >= 2) {
      location.href = "./../pages/game/index.html";
    }

    
  });
}

export { startGameButton };
