export function playAgainButton (buttonId: string){

    let playAgain = document.getElementById(buttonId) as HTMLImageElement
        
    playAgain.addEventListener('click', (e) => {
        e.preventDefault();

        location.href = './../pages/game/index.html';
    }); 
}