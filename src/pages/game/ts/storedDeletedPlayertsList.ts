function retreiveStoredDeletedPlayers() {
    let storedDeletedPlayers = JSON.parse(localStorage.getItem('eliminatedPlayers'));
    return storedDeletedPlayers
}

export { retreiveStoredDeletedPlayers }