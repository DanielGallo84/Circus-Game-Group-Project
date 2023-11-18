import { backButton } from '../../assets/tsModules/backButton'
import { newGameButton } from '../../assets/tsModules/newGameButton'
import { playAgainButton } from '../../assets/tsModules/playAgainButton'
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