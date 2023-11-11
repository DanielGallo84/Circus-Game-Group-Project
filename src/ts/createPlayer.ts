import { retreiveStoredPlayers } from "../assets/tsModules/storedPlayersList";

let playersListDiv = document.querySelector('#homePlayersList')

let index = 0;

export function createPlayer(object) {

    index += 1

    playersListDiv.innerHTML += /* html */ `
    <div class="homePlayerDiv" id="homePlayer${index}">
        <div class="nameAndAvatarContainer" id="nameAndAvatarContainer${index}">
            <p class="homePlayerName" id="playerName${index}">${object.name}</p>
            <img class="homeAvatar" src=${object.avatar} alt="avatar1">
        </div>
        <div class="editAndRemoveContainer">
            <button class="editButton" id="editButton${index}">
            <img class="editImg" src="./assets/images/icons/edit-pencil-icon.png" alt="edit button image">
            </button>
            <button class="removeButton" id="removeButton${index}">
            <img class="removeImg" src="./assets/images/icons/remove-icon.png" alt="remove button image">
            </button>
        </div>
    </div>
    `
}