import Core from '../core/'

const RoofHazardColumn = function (dimensions, sprites) {
  let ns = window.game_objs

  Core.Hazard.call(this,
    {
      x: dimensions.x, y: 0,
      width: ns.bw, height: ns.bh * dimensions.height
    }, sprites.hazard)

  Core.Hazard.call(this,
    {
      x: dimensions.x, y: ns.bh * dimensions.height,
      width: ns.bw, height: ns.bh
    }, sprites.hazard_top)

  return ns.bw
}

export default RoofHazardColumn
