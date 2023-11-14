let playersList = document.getElementById('homePlayersList')
let playersSection = document.getElementById('homePlayersSection')

export function hideShowPlayersList() {
    if (playersList.innerHTML == '') {
        playersSection.style.display = "none"
    }

    if (playersList.innerHTML != '') {
        playersSection.style.display = "flex"
    }
}