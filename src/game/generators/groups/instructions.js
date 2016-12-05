import { Instruction } from '../core/'

const Instructions = function () {
  Instruction.call(this, {x: 400, y: 150, w: 550, h: 50}, 'Collect ALL the rubies to finish', 0.45, 'ruby', 'ruby')
  Instruction.call(this, {x: 400, y: 200, w: 550}, 'Avoid tony, he wants your rubies', 0.5, 'tony', 'tony')
  Instruction.call(this, {x: 400, y: 250, w: 570}, 'Use the Arrow Keys to move around', 0.35, 'keys', 'keys')
  Instruction.call(this, {x: 400, y: 300}, 'Press Spacebar to start')
}

export default Instructions
