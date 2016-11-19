import { INSTRUCTION } from '../../styles/text.js'

const Instruction = function (position, text, scale, spriteNameOne, spriteNameTwo) {
  let width = position.w || INSTRUCTION._width
  let height = position.h || INSTRUCTION._height
  let quote = this.game.add.text(0, 0, text, INSTRUCTION)
  let sw = 45
  quote.setTextBounds(
    position.x - width / 2,
    position.y - height / 2,
    width,
    height
  )
  if (spriteNameOne) {
    const sprite = this.game.add.sprite(position.x + width / 2, position.y - height / 2, spriteNameOne)
    sprite.scale.setTo(scale, scale)
  }
  if (spriteNameTwo) {
    const sprite = this.game.add.sprite(position.x - width / 2 - sw, position.y - height / 2, spriteNameTwo)
    sprite.scale.setTo(scale, scale)
  }
}

export default Instruction