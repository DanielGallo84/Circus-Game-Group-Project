import { insertName } from "./insertNameButton";
import { startGameButton } from "./startButton";

function homeForm() {
  insertName()
  startGameButton()
}

export { homeForm }

// let storedPlayers = JSON.parse(localStorage.getItem("players"));