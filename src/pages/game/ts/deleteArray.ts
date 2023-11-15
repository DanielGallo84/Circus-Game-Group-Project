/*import { players } from "../../../assets/tsModules/playersArray";



export function deleteLocalStorage() {
    const newGame = document.querySelector('#newGame');
    newGame?.addEventListener('click', function() {
    localStorage.removeItem('players');
    });
}*/

// import { retreiveStoredPlayers } from "../../../assets/tsModules/storedPlayersList";
// import { retreiveStoredDeletedPlayers } from "./storedDeletedPlayertsList";

export function resetLocalStorage() {

    let newGame = document.getElementById('newGame');
        
    newGame.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.clear();
        location.href = '/index.html';
    });        
};

// retreiveStoredPlayers