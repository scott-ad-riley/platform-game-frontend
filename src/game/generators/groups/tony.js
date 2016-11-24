import Core from '../core/'

const Tony = function (dimensions) {
  let ns = window.game_objs
  let scale = 0.5

  const tony = Core.Hazard.call(this,
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
