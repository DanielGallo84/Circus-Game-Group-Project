import { insertName } from "./insertNameButton";
import { restorePlayersList } from "./restorePlayersList";
import { startGameButton } from "./startButton";

function homeForm() {
  restorePlayersList()
  insertName()
  startGameButton()
}

export { homeForm }