import Core from '../core'

const MovingPlatform = function (dimensions, key) {
  return new Core.MovingPlatform(this.game, dimensions, key)
};

export default MovingPlatform