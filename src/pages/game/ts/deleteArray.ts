/*import { players } from "../../../assets/tsModules/playersArray";



export function deleteLocalStorage() {
    const newGame = document.querySelector('#newGame');
    newGame?.addEventListener('click', function() {
    localStorage.removeItem('players');
    });
}*/

import { retreiveStoredPlayers } from "../../../assets/tsModules/storedPlayersList";
import { retreiveStoredDeletedPlayers } from "./storedDeletedPlayertsList";

    


export function resetLocalStorage () {

    document.addEventListener('DOMContentLoaded', ()=>{
        const newGame= document.getElementById('newGame');
        
        if(newGame){
    
            newGame.addEventListener('click', resetLocalStorage);
            
        }
    });

    localStorage.clear();
}

retreiveStoredPlayers