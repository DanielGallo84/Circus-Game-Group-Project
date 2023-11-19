export function backButton(buttonId: string){
    let back = document.getElementById(buttonId) as HTMLImageElement;
        
    back.addEventListener('click', (e) => {
        e.preventDefault();

        location.href = './../index.html';
    });     
}