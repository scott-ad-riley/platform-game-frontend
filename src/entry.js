import createGame from './models/game.js'

import preload from './preload'
import create from './create'
import update from './update'

window.onload = function () {
  createGame(1200, 750, 'game-container', { preload, create, update })
}
