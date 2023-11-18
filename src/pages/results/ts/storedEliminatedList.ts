function retreiveStoredEliminatedPlayers() {
    let storedDeletedPlayers = JSON.parse(localStorage.getItem('eliminated') || '');
    return storedDeletedPlayers
}

export { retreiveStoredEliminatedPlayers }