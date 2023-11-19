import { backButton } from '../../modules/ts/backButton'
import { newGameButton } from '../../modules/ts/newGameButton'
import { playAgainButton } from '../../modules/ts/playAgainButton'
import '../../style.scss'
import './scss/results.scss'
import { fillResults } from './ts/fillResults'

function results() {
    fillResults()
    backButton('backResultsDesktop')
    playAgainButton('playAgainResultsDesktop')
    newGameButton('newGameResultsDesktop')
    backButton('backResultsMobile')
    playAgainButton('playAgainResultsMobile')
    newGameButton('newGameResultsMobile')
}

results()