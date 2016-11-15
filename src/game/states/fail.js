import preload from '../preload_post_game_screen.js'

const Fail = function () {
  this.textStyle = {
    fontSize: '32px',
    fill: '#fff',
    boundsAlignH: 'center',
    boundsAlignV: 'middle'
  }
  this.buttonTextStyle = {
    fontSize: '24px',
    fill: '#aaa',
    boundsAlignH: 'center',
    boundsAlignV: 'middle'
  }
}

Fail.prototype = {
  create: function () {
    let text = this.game.add.text(0, 0, 'Better luck next time!', this.textStyle)
    text.setTextBounds(0, 0, 800, 400)
    let button = this.game.add.button(314, 400, 'base', this.actionOnClick.bind(this))
    let buttonText = this.game.add.text(0, 0, 'Restart', this.buttonTextStyle)
    buttonText.setTextBounds(0, 245, 800, 400)
  },
  preload: function () {
    preload.call(this)
  },
  restart: function () {

  },
  viewLeaderboard: function () {

  },
  actionOnClick: function () {
    this.state.start('Game')
  }
}

export default Fail
