import { playAudio } from "../assets/tsModules/audio";
import Player from "../assets/tsModules/playerClass";
import { players } from "../assets/tsModules/playersArray";
import { addToLocalStorage } from "./addToLocalStorage";
import { applyNewName } from "./doneButton";
import { editName } from "./editButton";
import { restorePlayersList } from "./restorePlayersList";
import { selectRandomAvatar } from "./selectRandomAvatar";

let nameButton = document.getElementById("btn_name");
let formData = document.getElementById("form_box");

function insertName() {
  nameButton.addEventListener("click", (e) => {
    e.preventDefault();

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

      players.push(newPlayer)

      addToLocalStorage()

      restorePlayersList()
      
      // createPlayer(newPlayer)

      formData.reset();

      editName()

      applyNewName()
    }
  });
}

export { insertName }