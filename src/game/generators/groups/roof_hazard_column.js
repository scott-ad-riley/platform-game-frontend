import { Hazard } from '../core/'

const RoofHazardColumn = function (dimensions, sprites) {
  let ns = window.game_objs

  Hazard.call(this,
    {
      x: dimensions.x, y: 0,
      width: ns.bw, height: ns.bh * dimensions.height
    }, sprites.hazard)

  Hazard.call(this,
    {
      x: dimensions.x, y: ns.bh * dimensions.height,
      width: ns.bw, height: ns.bh
    }, sprites.hazard_top)

  return ns.bw
}

export default RoofHazardColumn
