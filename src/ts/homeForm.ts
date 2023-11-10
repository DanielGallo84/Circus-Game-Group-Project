import { insertName } from "./insertNameButton";
import { startGameButton } from "./startButton";

function homeForm() {
  insertName()
  startGameButton()
}

export { homeForm }

// let storedNames = JSON.parse(localStorage.getItem("names"));

// console.log(storedNames);