import { retreiveStoredPlayers } from "../../../assets/tsModules/storedPlayersList";
import { retreiveStoredDeletedPlayers } from "./storedDeletedPlayertsList";

let eliminated: { name: string, avatar: string }[] = [];

export function transformStorageArrays () {
    retreiveStoredDeletedPlayers().forEach(element => {
        eliminated.push(retreiveStoredPlayers()[element - 1])
    });

    console.log(eliminated)
}