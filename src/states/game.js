import preload from '../preload'
import create from '../create'
import update from '../update'

const Game = function(game){
  // console.log("%cStarting my awesome game", "color:white; background:red");
};

Game.prototype = {
  preload: function () {
    preload.call(this)
  },
  create: function(){
    create.call(this)
  },
  update: function () {
    update.call(this, this.onFail, this.onSuccess)
  },
  onFail: function () {
    this.state.start('Fail')
  },
  onSuccess: function () {
    this.state.start('Success')
  }
}

module.exports = Game
