import { playAudio } from "../assets/tsModules/audio";

let nameButton = document.getElementById("btn_name");
let formData = document.getElementById("form_box");
let playerNames = [];

function insertName() {
  nameButton.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.getElementById("nameField").value;

    if (name == "") {

      playAudio('./../assets/sounds/failure-drum-sound-effect-2.mp3', 0.4)

      alert(
        "Please, make sure to type in a name."
      );
    } else {
      
      playAudio('./../assets/sounds/squeaky-toy-1.mp3', 0.2)

      playerNames.push(name);

      localStorage.setItem("names", JSON.stringify(playerNames));

      formData.reset();
    }
  });
}

export { playerNames,insertName }