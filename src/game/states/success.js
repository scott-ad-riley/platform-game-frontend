import preload from '../preload_post_game_screen.js'
import convertTime from '../../convert_time.js'

const Success = function () {
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
  this.textInputOpts = {
    font: '12px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 150,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    placeHolder: 'Enter Name'
  }
  this.inputValue = ""
}

Success.prototype = {
  create: function () {
    let time = this.game.add.text(0, 0, 'Time: ' + convertTime(window.game_objs.game_time), this.textStyle)
    let text = this.game.add.text(0, 0, 'Congrats!', this.textStyle)
    text.setTextBounds(0, 0, 800, 400)
    this.game.add.button(314, 400, 'base', ::this.restart)
    this.game.add.button(400, 270, 'base', ::this.submitScore)
    let submitText = this.game.add.text(0, 0, 'Submit', this.buttonTextStyle)
    let restartText = this.game.add.text(0, 0, 'Restart', this.buttonTextStyle)
    submitText.setTextBounds(0, 120, 990, 400)
    restartText.setTextBounds(0, 245, 800, 400)
    let inputField = this.game.add.inputField(225, 300, this.textInputOpts)
    inputField.domElement.element.onkeyup = (e) => this.inputValue = e.target.value
  },
  preload: function () {
    this.game.add.plugin(Fabrique.Plugins.InputField)
    preload.call(this)
  },
  viewLeaderboard: function () {
    window.location.href = window.location.href + "leaderboard"
  },
  restart: function () {
    this.state.start('Game')
  },
  submitScore: function () {
    console.log(this.inputValue)
  }
}

export default Success
