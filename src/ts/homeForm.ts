import { applyNewName } from "./doneButton";
import { editName } from "./editButton";
import { insertName } from "./insertNameButton";
import { removePlayer } from "./removeButton";
import { startGameButton } from "./startButton";

function homeForm() {
  insertName()
  startGameButton()
  editName()
  applyNewName()
  removePlayer()
}

export { homeForm }