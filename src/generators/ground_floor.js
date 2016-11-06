import Floor from './floor.js'

const GroundFloor = function (dimensions, zone) {
  let ns = window.game_objs
  console.log('run this', dimensions)
  let surface = Floor.call(this,
      {
        x: dimensions.start, y: this.game.world.height - ns.floor_level,
        width: dimensions.length, height: ns.bh
      },
      zone + '.surface'
    )
  let underground = Floor.call(this,
      {
        x: dimensions.start, y: this.game.world.height - ns.floor_level + ns.bh,
        width: dimensions.length, height: ns.bh
      },
      zone + '.underground'
    )
  return {
    surface,
    underground
  }
}

export default GroundFloor
