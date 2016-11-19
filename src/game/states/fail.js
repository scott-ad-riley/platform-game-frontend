import preload from '../preload'

import { QUOTE } from '../styles/text.js'
import Core from '../generators/core'
const { Button, Quote, Container, Background } = Core

const Fail = function () {}

Fail.prototype = {
  preload: function () {
    preload.call(this)
  },
  create: function () {
    Background.call(this)
    Container.call(this, {})
    Quote.call(this, {}, 'Better luck next time!')
    Button.call(this, {x: 300, y: 400}, 'RESTART', ::this.restart)
  },
  restart: function () {
    this.state.start('GameStart')
  }
}

export default Fail
