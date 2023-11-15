export function playAgainButton (){
    let playAgain = document.getElementById('playAgain');
        
    playAgain.addEventListener('click', (e) => {
        e.preventDefault();

        location.href = '/pages/game/index.html';
    });       
}