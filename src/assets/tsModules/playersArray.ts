import { retreiveStoredPlayers } from "./storedPlayersList";

let players: { name: string, avatar: string }[] = [];

if (retreiveStoredPlayers() != null) {
    players = retreiveStoredPlayers()
}

export { players }