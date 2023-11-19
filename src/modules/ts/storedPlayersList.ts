function retreiveStoredPlayers() {
    let storedPlayers = JSON.parse(<any>localStorage.getItem("players"));
    return storedPlayers
}



export { retreiveStoredPlayers }