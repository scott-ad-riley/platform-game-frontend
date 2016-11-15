import preload from '../preload'
import create from '../create'
import update from '../update'

const Game = function(game){

};

Game.prototype = {
  preload: function () {
    preload.call(this)
  },
  create: function(){
    create.call(this, ::this.onRestart)
  },
  update: function () {
    update.call(this, ::this.onFail, ::this.onSuccess)
  },
  onRestart: function () {
    this.state.start('Game')
  },
  onFail: function () {
    this.state.start('Fail')
  },
  onSuccess: function () {
    this.state.start('Success')
  }
}

module.exports = Game
