import preload from '../preload'

import convertTime from '../../convert_time.js'
import Core from '../generators/core'
const { Button, Quote, Container, Background, NameInput } = Core

const Submitted = function () {
}

Submitted.prototype = {
  create: function () {
    Background.call(this)
    Container.call(this)
    Quote.call(this, {}, 'Submitted!', convertTime(window.game_objs.game_time))
    Button.call(this, {x: 300, y: 400}, 'RESTART', ::this.restart)
    Button.call(this, {x: 300, y: 270}, 'LEADERBOARD', ::this.viewLeaderboard)
  },
  preload: function () {
    preload.call(this)
  },
  restart: function () {
    this.state.start('Game')
  },
  viewLeaderboard: function () {
    window.location.href = window.location.href + "leaderboard"
  }
}

export default Submitted
