import { Floor } from '../core/'

const OffScreenWall = function () {
  let ns = window.game_objs

  let wall = Floor.call(this,
      {
        x: -1, y: 0,
        width: 1, height: this.game.world.height
      },
      'one.surface'
    )

  ns.ground.add(wall)
}

export default OffScreenWall
