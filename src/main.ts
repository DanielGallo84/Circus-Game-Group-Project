import './style.scss'
import './scss/home.scss'
import { homeForm } from './ts/homeForm'
import { hideShowPlayersList } from './ts/hideShowPlayers'
import { restorePlayersList } from './ts/restorePlayersList'

function app() {
    restorePlayersList()
    hideShowPlayersList()
    homeForm()
}

app()