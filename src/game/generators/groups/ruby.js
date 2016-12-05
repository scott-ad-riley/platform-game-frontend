import { Ruby } from '../core/'

const Crate = function (dimensions) {
  Ruby.call(this,
      {
        x: dimensions.x, y: dimensions.y
      },
      'ruby'
    )

  return 0
}

export default Crate
