import { applyNewName } from "./doneButton";
import { editName } from "./editButton";
import { insertName } from "./insertNameButton";
import { removePlayer } from "./removeButton";
import { restorePlayersList } from "./restorePlayersList";
import { startGameButton } from "./startButton";

function homeForm() {
  restorePlayersList()
  insertName()
  startGameButton()
  editName()
  applyNewName()
  removePlayer()
}

export { homeForm }