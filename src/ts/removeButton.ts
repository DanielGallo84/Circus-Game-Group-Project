import { players } from "../assets/tsModules/playersArray";
import { retreiveStoredPlayers } from "../assets/tsModules/storedPlayersList";
import { addToLocalStorage } from "./addToLocalStorage";
import { restorePlayersList } from "./restorePlayersList";

function removePlayer() {

    if (retreiveStoredPlayers() != null) {

        retreiveStoredPlayers()
        
        for (let index = 0; index < retreiveStoredPlayers().length; index++) {
            let player = document.getElementById(`homePlayer${index + 1}`)
            let removeButton = document.getElementById(`removeButton${index + 1}`)
    
            removeButton.addEventListener("click", (e) => {
                e.preventDefault();
    
                player.remove()

                players.splice(index, 1)
                addToLocalStorage()

                restorePlayersList()
            })
        }
    }
}

export { removePlayer }