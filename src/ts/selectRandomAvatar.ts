import { avatars } from "../assets/tsModules/avatarsArray";

function selectRandomAvatar() {
    let selectedAvatar: string = avatars[Math.floor(Math.random() * avatars.length)]
    return selectedAvatar
}

export { selectRandomAvatar }