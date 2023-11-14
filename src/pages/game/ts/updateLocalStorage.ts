import { eliminatedPlayersLocal } from "./handleElimination";


export function updateLocalStorage() {
    localStorage.setItem("eliminatedPlayers", JSON.stringify(eliminatedPlayersLocal));
}


