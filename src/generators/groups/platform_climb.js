import CoreGenerators from '../core/index.js'
import GroupGenerators from './index.js'

const PlatformClimb = function (start, config, sprites) {
  let ns = window.game_objs
  let {height, width} = config.platform
  let total_width = config.platform.width + 200

  // right wall
  CoreGenerators.Hazard.call(this,
    {
      x: start + total_width - ns.bw, y: this.game.world.height - config.gap - ns.bh * 4,
      width: ns.bw, height: ns.bh * 4 + config.gap
    }, sprites.hazard)

  CoreGenerators.Hazard.call(this,
    {
      x: start + total_width - ns.bw, y: this.game.world.height - config.gap - ns.bh * 5,
      width: ns.bw, height: ns.bh * 1
    }, sprites.hazard_top)

  CoreGenerators.Floor.call(this,
    {
      x: start, y: this.game.world.height - config.gap - ns.bh,
      width: width, height: height
    }, sprites.platform)

  CoreGenerators.Floor.call(this,
    {
      x: start + ns.bw * 2, y: this.game.world.height - config.gap - ns.bh * 3,
      width: width, height: height
    }, sprites.platform)

  CoreGenerators.Floor.call(this,
    {
      x: start + width, y: this.game.world.height - config.gap - ns.bh * 5,
      width: width, height: height
    }, sprites.platform)

  CoreGenerators.Floor.call(this,
    {
      x: start + total_width + width * 3, y: this.game.world.height - config.gap - ns.bh * 4,
      width: width, height: height
    }, sprites.platform)

  GroupGenerators.GroundFloor.call(this,
    {
      start: start, length: total_width - ns.bw
    },
    'one')

  GroupGenerators.GroundFloor.call(this,
    {
      start: start + total_width, length: total_width - ns.bw
    },
    'one')


  return total_width // and also some height value we that we left it at
}

export default PlatformClimb
