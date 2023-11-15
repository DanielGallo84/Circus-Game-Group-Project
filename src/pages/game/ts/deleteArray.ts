export function resetLocalStorage() {

    let newGame = document.getElementById('newGame');
        
    newGame.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.clear();
        location.href = '/index.html';
    });        
};