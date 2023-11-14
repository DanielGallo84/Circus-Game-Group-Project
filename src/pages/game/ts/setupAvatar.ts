export function setupAvatar(avatar: HTMLDivElement, index: number): void {
    
    avatar.classList.add("selected");

    avatar.style.transform = "scale(1)";

    avatar.dataset.avatarNumber = (index + 1).toString();
    
}