function retreiveStoredDeletedPlayers() {
    let storedDeletedPlayers = JSON.parse(<any>localStorage.getItem('eliminatedPlayers'));
    return storedDeletedPlayers
}

export { retreiveStoredDeletedPlayers }