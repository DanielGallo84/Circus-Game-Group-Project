import { players } from "../modules/ts/playersArray";

export function addToLocalStorage() {
    localStorage.setItem("players", JSON.stringify(players));
}
