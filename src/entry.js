import Game from './game/states/game'
import Fail from './game/states/fail'
import Success from './game/states/success'

import FirebaseConnection from './firebase_connection.js'

window.onload = function () {
  // namespace all of our game elements so we can separate them apart in methods
  window.game_objs = {};
  const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container')
  game.state.add('Game', Game)
  game.state.add('Fail', Fail)
  game.state.add('Success', Success)
  game.state.start('Game')

  const firebase = new FirebaseConnection()
  window.game_objs.sendTime = firebase.dispatchRun
}
