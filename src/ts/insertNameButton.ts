import { playAudio } from "../assets/tsModules/audio";
import { avatars } from "../assets/tsModules/avatarsArray";
import Player from "../assets/tsModules/playerClass";
import { players } from "../assets/tsModules/playersArray";
import { retreiveStoredPlayers } from "../assets/tsModules/storedPlayersList";
import { addToLocalStorage } from "./addToLocalStorage";
import { applyNewName } from "./doneButton";
import { editName } from "./editButton";
import { removePlayer } from "./removeButton";
import { restorePlayersList } from "./restorePlayersList";
import { selectRandomAvatar } from "./selectRandomAvatar";

let nameButton = document.getElementById("btn_name");
let formData = document.getElementById("form_box");

function insertName() {
  nameButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (retreiveStoredPlayers().length == 25) {
      alert(
        'You have reached the maximum number of players'
      ) 
    }

    if (retreiveStoredPlayers().length != 25) {
      let name = document.getElementById("nameField").value;

    if (name == "") {

      playAudio('./../assets/sounds/failure-drum-sound-effect-2.mp3', 0.4)

      alert(
        "Please, make sure to type in a name."
      );
    } 
    
    if (name != "") {
      
      playAudio('./../assets/sounds/squeaky-toy-1.mp3', 0.2)

      let newPlayer = new Player(name, selectRandomAvatar())

      console.log(avatars)

      players.push(newPlayer)

      addToLocalStorage()

      restorePlayersList()

      formData.reset();

      editName()

      applyNewName()

      removePlayer()
    }

    }
  });
}

export { insertName }