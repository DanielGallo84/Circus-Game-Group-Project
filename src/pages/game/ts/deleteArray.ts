import { players } from "../../../assets/tsModules/playersArray";



export function deleteLocalStorage() {
    const newPlay = document.querySelector('#btn_play_again');
    newPlay?.addEventListener('click', function() {
    localStorage.removeItem('players');
    });
}
    
