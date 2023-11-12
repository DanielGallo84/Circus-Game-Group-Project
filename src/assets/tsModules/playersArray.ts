import { retreiveStoredPlayers } from "./storedPlayersList";

let players: { name: string, avatar: string }[] = [];

players = retreiveStoredPlayers()

export { players }