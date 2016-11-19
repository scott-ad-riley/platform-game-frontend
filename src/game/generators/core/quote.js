import { QUOTE, SUCCESS_TIME } from '../../styles/text.js'

const Quote = function (position, text, secondLineText) {
  let quote = this.game.add.text(0, 0, text, QUOTE)
  quote.setTextBounds(0, 0, 800, 400)
  if (secondLineText) {
    let secondQuote = this.game.add.text(0, 0, secondLineText, SUCCESS_TIME)
    secondQuote.setTextBounds(0, 0, 800, 300)
  }
}

export default Quote