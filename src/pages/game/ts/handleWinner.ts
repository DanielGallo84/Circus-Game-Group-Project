import { eliminatedPlayersLocal } from "./handleElimination";
import { showAndHidePopUp, updatePopUp } from "./popUp";
import { eliminated, transformStorageArrays, uploadEliminatedToStorage } from "./transformStorageArrays";
import { updateLocalStorage } from "./updateLocalStorage";

// Esta función toma 2 parámetros. "remainingAvatar" que es el avatar que ha ganado y el pop-up del ganador.
export function handleWinner(remainingAvatar: HTMLDivElement, popUp: HTMLDivElement): void {

    // Se utiliza el operador de encadenamiento opcional (?.) para intentar acceder al atributo data-avatar-number del elemento remainingAvatar. 
    // Si remainingAvatar es null o undefined, remainingAvatarNumber será undefined. En caso contrario, contendrá el número del avatar.
    const remainingAvatarNumber = remainingAvatar?.dataset.avatarNumber;

    // Hago una verificación condicional para comprobar que el avatar no sea de valor null o undefined
    if (remainingAvatarNumber) {

        eliminatedPlayersLocal.push(remainingAvatarNumber);

        updateLocalStorage();

        transformStorageArrays();

        uploadEliminatedToStorage();

        updatePopUp(popUp, `And the WINNER is: ${eliminated[eliminated.length - 1].name}!!!`);

        showAndHidePopUp(popUp);
        
    }
}

// updatePopUp
// showAndHidePopUp