import createGame from './models/game.js'

import preload from './preload'
import create from './create'
import update from './update'

window.onload = function () {
  // until we know how we can workaround phaser's style of global everything
  // we will namespace it under game_objs in the global state for now
  window.game_objs = {};

  createGame(800, 600, 'game-container', { preload, create, update })
}
