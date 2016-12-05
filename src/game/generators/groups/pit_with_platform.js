import { Hazard, Floor} from '../core/index.js'

const PitWithPlatform = function (start, length, config, sprites) {
  let ns = window.game_objs

  Hazard.call(this,
    {
      x: start, y: this.game.world.height - ns.floor_level,
      width: length, height: ns.bh
    }, sprites.hazard)

  Floor.call(this,
    {
      x: start, y: this.game.world.height - ns.floor_level + ns.bh,
      width: length, height: ns.bh
    }, sprites.underground)

  Floor.call(this,
    {
      x: start + config.offset, y: this.game.world.height - ns.floor_level - config.gap,
      width: length - config.offset * 2, height: ns.bh
    }, sprites.platform)

  return length
}

export default PitWithPlatform
