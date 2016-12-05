import { Hazard, Floor } from '../core/index.js'
import { GroundFloor } from './index.js'

const PlatformClimb = function (start, config, sprites) {
  let ns = window.game_objs
  let {height, width} = config.platform
  let total_width = config.platform.width + 200

  // right wall
  Hazard.call(this,
    {
      x: start + total_width - ns.bw, y: this.game.world.height - config.gap - ns.bh * 4,
      width: ns.bw, height: ns.bh * 4 + config.gap
    }, sprites.hazard)

  Hazard.call(this,
    {
      x: start + total_width - ns.bw, y: this.game.world.height - config.gap - ns.bh * 5,
      width: ns.bw, height: ns.bh * 1
    }, sprites.hazard_top)

  let platforms = []
  platforms.push(Floor.call(this,
    {
      x: start, y: this.game.world.height - config.gap - ns.bh,
      width: width, height: height
    }, sprites.platform))

  platforms.push(Floor.call(this,
    {
      x: start + ns.bw * 2, y: this.game.world.height - config.gap - ns.bh * 3,
      width: width, height: height
    }, sprites.platform))

  platforms.push(Floor.call(this,
    {
      x: start + width, y: this.game.world.height - config.gap - ns.bh * 5,
      width: width, height: height
    }, sprites.platform))

  platforms.push(Floor.call(this,
    {
      x: start + total_width + width * 3, y: this.game.world.height - config.gap - ns.bh * 4,
      width: width, height: height
    }, sprites.platform))

  platforms.forEach((platform) => {
    platform.tileScale.x = platform.tileScale.y = 0.5
  })

  GroundFloor.call(this,
    {
      start: start, length: total_width - ns.bw
    },
    'one')

  GroundFloor.call(this,
    {
      start: start + total_width, length: total_width - ns.bw
    },
    'one')

  return (total_width - ns.bw) * 2 + ns.bw
}

export default PlatformClimb
