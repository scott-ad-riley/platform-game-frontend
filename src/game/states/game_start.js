import preload from '../preload'
import create from '../create'
import update from '../update'
import updateSetup from '../update_setup'
import { Instructions } from '../generators/groups/'

const GameStart = function () {}

GameStart.prototype = {
  preload: function () {
    preload.call(this)
  },
  create: function(){
    create.call(this, ::this.restart)
    Instructions.call(this, ::this.startGame)
  },
  restart: function () {
    this.state.start('GameStart')
  },
  startGame: function () {
    this.state.start('Game')
  },
  update: function () {
    updateSetup.call(this)
    let kb = this.game.input.keyboard
    if (kb.isDown(Phaser.KeyCode.SPACEBAR)) {
      this.startGame()
    }
  },
  onFail: function () {
    this.state.start('Fail')
  },
  onSuccess: function () {
    this.state.start('Success')
  }
}

module.exports = GameStart
