import Core from '../core/'

const Crate = function (dimensions) {
  let ns = window.game_objs

  // underground
  Core.Ruby.call(this,
      {
        x: dimensions.x, y: dimensions.y
      },
      'ruby'
    )

  return 0
}

export default Crate
