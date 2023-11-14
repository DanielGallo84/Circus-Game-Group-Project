export function setupAvatar(avatar: HTMLDivElement, index: number): void {

    avatar.classList.add("visible");

    avatar.style.backgroundColor = "yellow";

    avatar.dataset.avatarNumber = (index + 1).toString();

}