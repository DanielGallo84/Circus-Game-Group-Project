export function playAgainButton (){
    let playAgain = document.getElementById('playAgain');
    let playAgain2 = document.getElementById('playAgain2');
        
    playAgain.addEventListener('click', (e) => {
        e.preventDefault();

        location.href = '/pages/game/index.html';
    }); 
    
    playAgain2.addEventListener('click', (e) => {
        e.preventDefault();

        location.href = '/pages/game/index.html';
    });       
}