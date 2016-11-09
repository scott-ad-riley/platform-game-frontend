import Hazard from './hazard.js'
import Floor from './floor.js'

const PitWithPlatform = function (start, length, config, sprites) {
  let ns = window.game_objs

  let hazard = Hazard.call(this,
    {
      x: start, y: this.game.world.height - ns.floor_level,
      width: length, height: ns.bh
    }, sprites.hazard)

  let underground = Floor.call(this,
    {
      x: start, y: this.game.world.height - ns.floor_level + ns.bh,
      width: length, height: ns.bh
    }, sprites.underground)

  let platform = Floor.call(this,
    {
      x: start + config.offset, y: this.game.world.height - ns.floor_level - config.gap,
      width: length - config.offset * 2, height: ns.bh
    }, sprites.platform)

}

export default PitWithPlatform
