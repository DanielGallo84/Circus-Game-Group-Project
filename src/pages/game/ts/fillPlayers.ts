import { retreiveStoredPlayers } from "../../../assets/tsModules/storedPlayersList";

retreiveStoredPlayers

export function fillPlayers () {
   let avatarsContainer = document.getElementById('avatarsContainer') as HTMLDivElement

    for (let index = 0; index < retreiveStoredPlayers().length; index++) {
        avatarsContainer.innerHTML += /*html*/ `

        <div data-avatar-name="avatar1" class="avatarItem">

        <img src="${retreiveStoredPlayers()[index].avatar}" alt="">
        <h3>${retreiveStoredPlayers()[index].name}</h3>

        </div>
        `
        
    }

}
