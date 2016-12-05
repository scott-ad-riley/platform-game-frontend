import { Floor } from '../core/'

const BoostCrate = function (dimensions) {
  let ns = window.game_objs
  let scale = 0.5

  const crate = Floor.call(this,
    {
      x: dimensions.x, y: dimensions.y,
      width: 96 * scale, height: 96 * scale
    },
    'crate.boost'
  )
  crate.tileScale.x = crate.tileScale.y = scale
  ns.boostCrates.add(crate);
  return 0
}

export default BoostCrate
