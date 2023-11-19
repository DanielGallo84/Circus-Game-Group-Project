import { retreiveStoredPlayers } from "../../../modules/ts/storedPlayersList";
import { retreiveStoredDeletedPlayers } from "./storedDeletedPlayertsList";

export let eliminated: { name: string, avatar: string }[] = [];

export function transformStorageArrays () {
    retreiveStoredDeletedPlayers().forEach((element: any) => {
        eliminated.push(retreiveStoredPlayers()[element - 1])
    });
}

export function uploadEliminatedToStorage() {

    localStorage.setItem("eliminated", JSON.stringify(eliminated));

}