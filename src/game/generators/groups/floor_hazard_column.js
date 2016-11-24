import Core from '../core/'

const FloorHazardColumn = function (dimensions, sprites) {
  let ns = window.game_objs


  Core.Hazard.call(this,
    {
      x: dimensions.x, y: this.game.world.height - ns.bh * dimensions.height,
      width: ns.bw, height: ns.bh * dimensions.height
    }, sprites.hazard)

  Core.Hazard.call(this,
    {
      x: dimensions.x, y: this.game.world.height - ns.bh * (dimensions.height + 1),
      width: ns.bw, height: ns.bh
    }, sprites.hazard_top)

  return ns.bw
}

export default FloorHazardColumn
