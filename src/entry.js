import createGame from './models/game.js'

import preload from './preload'
import create from './create'
import update from './update'

window.onload = function () {
  // namespace all of our game elements so we can separate them apart in methods
  window.game_objs = {};
  new Phaser.Game(800, 600, Phaser.AUTO, 'game-container', { preload, create, update })
}
