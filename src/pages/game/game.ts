import '../../style.scss';
import './scss/game.scss';
import { fillPlayers } from './ts/fillPlayers';
import { selectRandomPlayer } from './ts/interactiveAvatars';
/*import './ts/interactiveAvatars'; */

function game () {
    fillPlayers()
    selectRandomPlayer()
}

game ()