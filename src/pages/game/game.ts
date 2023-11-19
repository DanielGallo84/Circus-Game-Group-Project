import { backButton } from './../../modules/ts/backButton';
import { newGameButton } from './../../modules/ts/newGameButton';
import { playAgainButton } from './../../modules/ts/playAgainButton';
import { retreiveStoredPlayers } from './../../modules/ts/storedPlayersList';
import '../../style.scss';
import './scss/game.scss';
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
  backButton('backGame')
  newGameButton('newGameGame')
  playAgainButton('playAgainGame')
}

game ()