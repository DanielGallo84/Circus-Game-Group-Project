function retreiveStoredPlayers() {
    let storedPlayers = JSON.parse(localStorage.getItem("players"));
    return storedPlayers
}



export { retreiveStoredPlayers }