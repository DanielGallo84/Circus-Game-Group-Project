import { avatars } from "../assets/tsModules/avatarsArray";

function selectRandomAvatar() {
    let selectedAvatar: string = avatars[Math.floor(Math.random() * avatars.length)]
    const index = avatars.indexOf(selectedAvatar);
    if (index > -1) {
    avatars.splice(index, 1);
    }
    return selectedAvatar
}

export { selectRandomAvatar }