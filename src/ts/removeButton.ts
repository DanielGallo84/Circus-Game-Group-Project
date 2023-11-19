import { playAudio } from "../modules/ts/audio";
import { players } from "../modules/ts/playersArray";
import { retreiveStoredPlayers } from "../modules/ts/storedPlayersList";
import { addToLocalStorage } from "./addToLocalStorage";
import { hideShowPlayersList } from "./hideShowPlayers";
import { restorePlayersList } from "./restorePlayersList";

function removePlayer() {

    if (retreiveStoredPlayers() != null) {

        retreiveStoredPlayers()
        
        for (let index = 0; index < retreiveStoredPlayers().length; index++) {
            let player = document.getElementById(`homePlayer${index + 1}`) as HTMLDivElement
            let removeButton = document.getElementById(`removeButton${index + 1}`) as HTMLButtonElement
    
            removeButton.addEventListener("click", (e) => {
                e.preventDefault();
    
                player.remove()

                players.splice(index, 1)
                addToLocalStorage()

                restorePlayersList()

                hideShowPlayersList()

                removePlayer()

                playAudio('funnyJump', 0.5, false)
            })
        }
    }
}

export { removePlayer }