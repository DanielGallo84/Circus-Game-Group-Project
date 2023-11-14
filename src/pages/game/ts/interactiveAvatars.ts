import { handleElimination } from "./handleElimination";
import { handleWinner } from "./handleWinner";
import { createPopUp, hidePopUp, showAndHidePopUp, showPopUp, updatePopUp } from "./popUp";
import { setupAvatar } from "./setupAvatar";
import { shuffleArray } from "./shuffleArray";


const startButton: HTMLButtonElement | null = document.getElementById('startButton') as HTMLButtonElement;

export function selectRandomPlayer(): void {
    
    // Creo un conjunto 'set' para realizar un seguimiento de los jugadores que van siendo eliminados
    const eliminatedPlayers: Set<string> = new Set();

    startButton.addEventListener("click", (e) => {
        e.preventDefault();

        const popUp: HTMLDivElement = createPopUp();

        // Obtengo una lista de elementos con la clase "avatarItem" y lo convierto en un array
        const avatars: HTMLDivElement[] = Array.from(document.getElementsByClassName("avatarItem") as HTMLCollectionOf<HTMLDivElement>);

        // Creo un bucle que recorra todos los avatares que hay en la lista y que haga una acción específica en cada uno
        avatars.forEach((avatar: HTMLDivElement, index: number) => {
            setupAvatar(avatar, index);
        });

        // Nombro la función shuffleArray (está en otro archivo .ts) para mezclar el array de avatares (es hacer un math.random básicamente)
        const shuffledAvatars: HTMLDivElement[] = shuffleArray(avatars);

        let currentIndex: number = 0;

        // Establezo un intervalo para las eliminaciones
        const intervalId: number = window.setInterval(() => {

            // Dentro del intervalo, verifico que se ha llegado al último avatar. Si es así, se detiene el intervalo y se llama a la función handleWinner 
            // para nombrar al ganador. Si no es el último avatar, se llama a la función handleElimination para seguir ejecutando las eliminaciones. 
            if (currentIndex >= shuffledAvatars.length - 1) {
                clearInterval(intervalId);
                handleWinner(shuffledAvatars[currentIndex], popUp);
            } else {
                handleElimination(shuffledAvatars[currentIndex], eliminatedPlayers, popUp);
                currentIndex++;
            }
        }, 3000);
    });
}