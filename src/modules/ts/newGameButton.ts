export function newGameButton(buttonId: string) {

    let newGame = document.getElementById(buttonId) as HTMLImageElement;
        
    newGame.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.clear();
        location.href = '/index.html';
    });      
};