import preload from '../preload'

import convertTime from '../../convert_time.js'
import { Button, Quote, Container, Background, NameInput } from '../generators/core'

const Success = function () {
}

Success.prototype = {
  create: function () {
    this.inputValue = ""
    this.timer = window.game_objs.game_time || 0
    Background.call(this)
    Container.call(this)

    Quote.call(this, {}, 'Congratulations!', convertTime(this.timer))
    Button.call(this, {x: 300, y: 400}, 'RESTART', ::this.restart)
    Button.call(this, {x: 430, y: 270}, 'SUBMIT', ::this.submitScore)

    NameInput.call(this, {x: 160, y: 290}, ::this.updateName)
  },
  preload: function () {
    this.game.add.plugin(Fabrique.Plugins.InputField)
    preload.call(this)
  },
  restart: function () {
    this.state.start('GameStart')
  },
  updateName: function (value) {
    this.inputValue = value
  },
  submitScore: function () {
    let ns = window.game_objs
    ns.sendTime(this.inputValue, ns.game_time)
    this.state.start('Submitted')
  }
}

export default Success
