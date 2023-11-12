import { retreiveStoredPlayers } from "../assets/tsModules/storedPlayersList";

function removePlayer() {

    if (retreiveStoredPlayers() != null) {

        retreiveStoredPlayers()
        
        for (let index = 1; index <= retreiveStoredPlayers().length; index++) {
            let player = document.getElementById(`homePlayer${index}`)
            let removeButton = document.getElementById(`removeButton${index}`)
    
            removeButton.addEventListener("click", (e) => {
                e.preventDefault();
    
                player.remove()
            })
        }
    }
}

export { removePlayer }