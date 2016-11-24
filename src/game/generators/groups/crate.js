import Core from '../core/'

const Crate = function (dimensions) {
  let ns = window.game_objs

  // underground
  Core.Floor.call(this,
      {
        x: dimensions.x, y: dimensions.y,
        width: 25, height: 15
      },
      'one.underground'
    )

  return 0
}

export default Crate
