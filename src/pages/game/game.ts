import { retreiveStoredPlayers } from '../../assets/tsModules/storedPlayersList';
import '../../style.scss';
import './scss/game.scss';
import { resetLocalStorage } from './ts/deleteArray';
import { fillPlayers } from './ts/fillPlayers';
import { handleElimination } from './ts/handleElimination';
import { handleWinner } from './ts/handleWinner';
import { selectRandomPlayer } from './ts/interactiveAvatars';
import { createPopUp, hidePopUp, showAndHidePopUp, showPopUp, updatePopUp } from './ts/popUp';
import { setupAvatar } from './ts/setupAvatar';
import { shuffleArray } from './ts/shuffleArray';

function game() {
    fillPlayers()
    selectRandomPlayer()
    retreiveStoredPlayers()
    createPopUp()
    hidePopUp
    showPopUp
    updatePopUp
    showAndHidePopUp
    shuffleArray
    setupAvatar
    handleWinner
    handleElimination
    resetLocalStorage()
}

game ()
