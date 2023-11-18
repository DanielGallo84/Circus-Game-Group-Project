let playersList = document.getElementById('homePlayersList') as HTMLDivElement
let playersSection = document.getElementById('homePlayersSection') as HTMLElement

export function hideShowPlayersList() {
    if (playersList.innerHTML == '') {
        playersSection.style.display = "none"
    }

    if (playersList.innerHTML != '') {
        playersSection.style.display = "flex"
    }
}