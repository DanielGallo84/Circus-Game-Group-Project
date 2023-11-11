import { players } from "../assets/tsModules/playersArray";
import { retreiveStoredPlayers } from "../assets/tsModules/storedPlayersList";

function editName() {

    retreiveStoredPlayers()

    for (let index = 1; index <= retreiveStoredPlayers().length; index++) {
        let nameAndAvatar = document.getElementById(`nameAndAvatarContainer${index}`)
        let editButton = document.getElementById(`editButton${index}`)

        editButton.addEventListener("click", (e) => {
            e.preventDefault();

            nameAndAvatar.innerHTML = /* html */ `
            <input type="text" name="inputName" id="nameInput${index}" class = "nameInput">
            <img class="homeAvatar" src=${retreiveStoredPlayers()[index-1].avatar} alt="avatar1">
            `

        })
    }
}

export { editName }