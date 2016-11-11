import Game from './states/game'
import Fail from './states/fail'
import Success from './states/success'

window.onload = function () {
  // namespace all of our game elements so we can separate them apart in methods
  window.game_objs = {};
  const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container')
  game.state.add('Game', Game)
  game.state.add('Fail', Fail)
  game.state.add('Success', Success)
  game.state.start('Game')
}
