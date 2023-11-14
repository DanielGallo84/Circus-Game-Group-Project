import { showPopUp, updatePopUp } from "./popUp";

export let eliminatedPlayersLocal: string[] = []

// Esta función toma 3 parámetros ya definidos antes. "currentAvatar" que es el avatar que está siendo seleccionado, el set para el seguimiento de los eliminados y
// el pop-up que indica el número eliminado. 
export function handleElimination(currentAvatar: HTMLDivElement, eliminatedPlayers: Set<string>, popUp: HTMLDivElement): void {

    // Al ser eliminados, les quito el estilo visible para que desaparezcan de la pantalla.
    currentAvatar.classList.remove('visible');

    currentAvatar.style.backgroundColor = '';

    // Se agrega el número seleccionado a la lista de eliminados. El número del avatar se obtiene a través del data-avatar-name. (El operador '||' para proporcionar 
    // una cadena vacía en caso de que el atributo no esté definido). 
    eliminatedPlayers.add(currentAvatar.dataset.avatarNumber || "");

    let eliminatedPlayersArray = (Array.from(eliminatedPlayers));

    eliminatedPlayersLocal = eliminatedPlayersArray

    currentAvatar.style.display = 'none';

    // Almaceno la lista de jugadores eliminados en el local storage (perdóname Mark, llevo toda la tarde haciendo esto y como también tenga que hacer la lista me da un ictus)
    // Antes de hacerlo, se convierte el conjunto eliminatedPlayers a un array utilizando Array.from, y luego se convierte ese array a una cadena JSON antes de almacenarlo.
    localStorage.setItem('eliminatedPlayers', JSON.stringify(Array.from(eliminatedPlayers)));

    updatePopUp(popUp, `Jugador eliminado: ${currentAvatar.dataset.avatarNumber}`);

    showPopUp(popUp);

}

// updatePopUp
// showPopUp