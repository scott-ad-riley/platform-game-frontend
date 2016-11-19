import { NAME_INPUT } from '../../styles/text.js'

const NameInput = function (position, onChange) {
  let inputField = this.game.add.inputField(position.x, position.y, NAME_INPUT)
  inputField.domElement.element.onkeyup = function (e) {
    onChange(e.target.value)
  }
}

export default NameInput