import { Floor } from '../core/'

const GroundFloor = function (dimensions, zone) {
  let ns = window.game_objs

  // floor
  Floor.call(this,
      {
        x: dimensions.start, y: this.game.world.height - ns.floor_level,
        width: dimensions.length, height: ns.bh
      },
      zone + '.surface'
    )
  // underground
  Floor.call(this,
      {
        x: dimensions.start, y: this.game.world.height - ns.floor_level + ns.bh,
        width: dimensions.length, height: ns.bh
      },
      zone + '.underground'
    )

  return dimensions.length
}

export default GroundFloor
