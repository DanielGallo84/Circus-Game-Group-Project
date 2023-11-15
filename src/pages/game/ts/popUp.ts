export function createPopUp(): HTMLDivElement {
    const popUp = document.createElement('div');
    popUp.classList.add('popup');
    document.body.appendChild(popUp);
    return popUp;
}

export function updatePopUp(popUp: HTMLDivElement, message: string): void {
    popUp.innerText = message;
}

export function showPopUp(popUp: HTMLDivElement): void {
    popUp.style.display = 'block';
    setTimeout(() => {
        hidePopUp(popUp);
    }, 2000);
}

export function hidePopUp(popUp: HTMLDivElement): void {
    popUp.style.display = 'none';
}

export function showAndHidePopUp(popUp: HTMLDivElement): void {

    showPopUp(popUp);

    setTimeout(() => {

        hidePopUp(popUp);

    }, 15000);
    
}
