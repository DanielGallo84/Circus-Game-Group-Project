import { playAudio } from "../modules/ts/audio";
import Player from "../modules/ts/playerClass";
import { players } from "../modules/ts/playersArray";
import { addToLocalStorage } from "./addToLocalStorage";
import { applyNewName } from "./doneButton";
import { editName } from "./editButton";
import { hideShowPlayersList } from "./hideShowPlayers";
import { removePlayer } from "./removeButton";
import { restorePlayersList } from "./restorePlayersList";
import { selectRandomAvatar } from "./selectRandomAvatar";

let nameButton = document.getElementById("btn_name") as HTMLButtonElement;
let formData = document.getElementById("form_box") as HTMLFormElement;

function insertName() {
  nameButton.addEventListener("click", (e) => {
    e.preventDefault();
      
    let name = (<HTMLInputElement>document.getElementById("nameField")).value

    if (name == "") {

      playAudio('./../assets/sounds/failure-drum-sound-effect-2.mp3', 0.4, false)

      alert(
        "Please, make sure to type in a name."
      );
    } 
    
    if (name != "") {
      
      playAudio('squeakyToy', 0.2, false)

      let newPlayer = new Player(name, selectRandomAvatar())

      players.push(newPlayer)

      addToLocalStorage()

      restorePlayersList()

      hideShowPlayersList()

      formData.reset();

      editName()

      applyNewName()

      removePlayer()
    }

    }
  );
}

export { insertName }