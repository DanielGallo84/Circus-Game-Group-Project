export function newGameButton() {

    let newGame = document.getElementById('newGame');
    let newGame2 = document.getElementById('newGame2');
        
    newGame.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.clear();
        location.href = '/index.html';
    });      
    
    newGame2.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.clear();
        location.href = '/index.html';
    });    
};