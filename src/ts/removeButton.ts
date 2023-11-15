import { playAudio } from "../assets/tsModules/audio";
import { players } from "../assets/tsModules/playersArray";
import { retreiveStoredPlayers } from "../assets/tsModules/storedPlayersList";
import { addToLocalStorage } from "./addToLocalStorage";
import { hideShowPlayersList } from "./hideShowPlayers";
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

                hideShowPlayersList()

                removePlayer()

                playAudio('/assets/sounds/funny-spring-jump.mp3', 0.5, false)
            })
        }
    }
}

export { removePlayer }