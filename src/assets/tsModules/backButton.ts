export function backButton (){
    let back = document.getElementById('back');
    let back2 = document.getElementById('back2');
        
    back.addEventListener('click', (e) => {
        e.preventDefault();

        location.href = '/index.html';
    });     
    
    back2.addEventListener('click', (e) => {
        e.preventDefault();

        location.href = '/index.html';
    });  
}