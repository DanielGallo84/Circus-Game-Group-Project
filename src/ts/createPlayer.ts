let playersListDiv = document.querySelector('#homePlayersList')

export function createPlayer(object) {
    playersListDiv.innerHTML = /* html */ `
    <div class="homePlayerDiv" id="homePlayer1">
        <div class="nameAndAvatarContainer">
            <p class="homePlayerName">${object.name}</p>
            <img class="homeAvatar" src=${object.avatar} alt="avatar1">
        </div>
        <div class="editAndRemoveContainer">
            <button class="editButton">
            <img class="editImg" src="./assets/images/icons/edit-pencil-icon.png" alt="edit button image">
            </button>
            <button class="removeButton">
            <img class="removeImg" src="./assets/images/icons/remove-icon.png" alt="remove button image">
            </button>
        </div>
    </div>
    `
}