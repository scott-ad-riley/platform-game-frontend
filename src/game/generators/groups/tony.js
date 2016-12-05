import { Hazard } from '../core/'

const Tony = function (dimensions) {
  let scale = 0.5

  const tony = Hazard.call(this,
    {
      x: dimensions.x, y: dimensions.y,
      width: 75 * scale, height: 85 * scale
    },
    'tony'
  )
  tony.tileScale.x = tony.tileScale.y = scale

  return 0
}

export default Tony
