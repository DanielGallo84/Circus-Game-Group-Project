document.addEventListener('DOMContentLoaded', () => {
    const startButton: HTMLButtonElement | null = document.getElementById('startButton') as HTMLButtonElement;

    if (startButton) {
        startButton.addEventListener('click', selectRandomAvatar);
    }
});

function selectRandomAvatar(): void {
    const popUp: HTMLDivElement = createPopUp();
    const avatars: HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName('avatarItem') as HTMLCollectionOf<HTMLDivElement>;
    const avatarsArray: HTMLDivElement[] = Array.from(avatars);

    avatarsArray.forEach((avatar: HTMLDivElement, index: number) => {
        avatar.classList.add('visible');
        avatar.style.backgroundColor = 'yellow';
        avatar.dataset.avatarNumber = (index + 1).toString();
    });

    const remainingAvatars: HTMLDivElement[] = avatarsArray.slice(); 

    const intervalId: number = window.setInterval(() => {
        const visibleAvatars: NodeListOf<HTMLDivElement> = document.querySelectorAll('.avatarItem.visible');

        if (visibleAvatars.length > 0) {
            const randomIndex: number = Math.floor(Math.random() * remainingAvatars.length);

            const removedAvatar = remainingAvatars[randomIndex];
            removedAvatar.classList.remove('visible');
            removedAvatar.style.backgroundColor = '';

            const avatarNumber = removedAvatar.dataset.avatarNumber;

            if (avatarNumber) {
                if (visibleAvatars.length - 1 === 1) {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        const remainingAvatar = remainingAvatars.find(avatar => avatar.classList.contains('visible'));
                        const remainingAvatarNumber = remainingAvatar?.dataset.avatarNumber;
                        if (remainingAvatarNumber) {
                            updatePopUp(popUp, `Jugador eliminado: ${remainingAvatarNumber}`);
                            showPopUp(popUp);
                            remainingAvatar.style.display = 'none';
                        }
                    }, 100);
                }
            }

            remainingAvatars.splice(randomIndex, 1); 
        } else {
            clearInterval(intervalId);
            setTimeout(() => {
                updatePopUp(popUp, '¡¡¡GANADOR!!!');
                showPopUp(popUp);
            }, 100);
        }
    }, 100);
}

function createPopUp(): HTMLDivElement {
    const popUp = document.createElement('div');
    popUp.classList.add('popup');
    document.body.appendChild(popUp);
    return popUp;
}

function updatePopUp(popUp: HTMLDivElement, message: string): void {
    popUp.innerText = message;
}

function showPopUp(popUp: HTMLDivElement): void {
    popUp.style.display = 'block';
    setTimeout(() => {
        hidePopUp(popUp);
    }, 2000);
}

function hidePopUp(popUp: HTMLDivElement): void {
    popUp.style.display = 'none';
}