import { players } from "../modules/ts/playersArray";
import { retreiveStoredPlayers } from "../modules/ts/storedPlayersList";
import { addToLocalStorage } from "./addToLocalStorage";

function applyNewName() {

    if (retreiveStoredPlayers() != null) {

        retreiveStoredPlayers()
        
        for (let index = 1; index <= retreiveStoredPlayers().length; index++) {

            let nameAndAvatar = document.getElementById(`nameAndAvatarContainer${index}`) as HTMLDivElement
            let editButton = document.getElementById(`editButton${index}`) as HTMLButtonElement
            let doneButton = document.getElementById(`doneButton${index}`) as HTMLButtonElement
    
            doneButton.addEventListener("click", (e) => {
                e.preventDefault();

                let nameInput = (<HTMLInputElement>document.getElementById(`nameInput${index}`)).value
    
                nameAndAvatar.innerHTML = /* html */ `
                <p class="homePlayerName" id="playerName${index}">${nameInput}</p>
                <img class="homeAvatar" src=${retreiveStoredPlayers()[index-1].avatar} alt="avatar1">
                `

                doneButton.style.display = 'none'
                editButton.style.display = 'block'

                players[index - 1].name = nameInput
                addToLocalStorage()
    
            })
        }
    }
}

export { applyNewName }