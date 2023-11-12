import { applyNewName } from "./doneButton";
import { editName } from "./editButton";
import { insertName } from "./insertNameButton";
import { restorePlayersList } from "./restorePlayersList";
import { startGameButton } from "./startButton";

function homeForm() {
  restorePlayersList()
  insertName()
  startGameButton()
  editName()
  applyNewName()
}

export { homeForm }