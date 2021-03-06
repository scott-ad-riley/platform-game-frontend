import { Hazard, Floor } from '../core/'

const GroundHazard = function (dimensions) {
  let ns = window.game_objs

  // floor
  Hazard.call(this,
      {
        x: dimensions.start, y: this.game.world.height - ns.floor_level,
        width: dimensions.length, height: ns.bh
      },
      'one.spikes'
    )

  Floor.call(this,
    {
      x: dimensions.start, y: this.game.world.height - ns.floor_level + ns.bh,
      width: dimensions.length, height: ns.bh
    }, 'one.underground')

  return dimensions.length
}

export default GroundHazard
