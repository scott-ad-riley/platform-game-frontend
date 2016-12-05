import preload from '../preload'
import create from '../create'
import update from '../update'
import updateSetup from '../update_setup'

const Game = function () {}

Game.prototype = {
  preload: function () {
    preload.call(this)
  },
  create: function(){
    create.call(this, ::this.onRestart)
  },
  update: function () {
    updateSetup.call(this)
    update.call(this, ::this.onFail, ::this.onSuccess)
  },
  onRestart: function () {
    this.state.start('GameStart')
  },
  onFail: function () {
    this.state.start('Fail')
  },
  onSuccess: function (player, ruby) {
    let ns = window.game_objs
    ruby.kill()
    if (ns.ruby_total - 1 === ns.current_rubies) {
      this.state.start('Success')
    } else {
      ns.current_rubies++
    }
  }
}

module.exports = Game
