import { players } from "../assets/tsModules/playersArray";

export function addToLocalStorage() {
    localStorage.setItem("players", JSON.stringify(players));
}
