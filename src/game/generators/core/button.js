import { STANDARD } from '../../styles/buttons.js'

const Button = function (position, text, onClick) {
  let button = this.game.add.button(position.x, position.y, 'button.standard', onClick)
  let buttonText = this.game.add.text(0, 0, text, STANDARD)
  buttonText.setTextBounds(position.x, position.y, STANDARD._width, STANDARD._height)
}

export default Button