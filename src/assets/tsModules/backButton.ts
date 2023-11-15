export function backButton (){
    let back = document.getElementById('back');
        
    back.addEventListener('click', (e) => {
        e.preventDefault();

        location.href = '/index.html';
    });       
}