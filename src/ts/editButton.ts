import { retreiveStoredPlayers } from "../assets/tsModules/storedPlayersList";

function editName() {

    if (retreiveStoredPlayers() != null) {

        retreiveStoredPlayers()
        
        for (let index = 1; index <= retreiveStoredPlayers().length; index++) {
            let nameAndAvatar = document.getElementById(`nameAndAvatarContainer${index}`)
            let editButton = document.getElementById(`editButton${index}`)
            let doneButton = document.getElementById(`doneButton${index}`)
    
            editButton.addEventListener("click", (e) => {
                e.preventDefault();
    
                nameAndAvatar.innerHTML = /* html */ `
                <input type="text" name="inputName" id="nameInput${index}" class = "nameInput">
                <img class="homeAvatar" src=${retreiveStoredPlayers()[index-1].avatar} alt="avatar1">
                `

                editButton.style.display = 'none'
                doneButton.style.display = 'block'
    
            })
        }
    }
}

export { editName }