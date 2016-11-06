const Floor = function (dimensions, sprite_key) {
  let ns = window.game_objs
  let floor = this.game.add.tileSprite(dimensions.x, dimensions.y, dimensions.width, dimensions.height, sprite_key)
  this.game.physics.arcade.enable(floor)
  floor.tileScale.x = ns.bw / ns.sw
  floor.tileScale.y = ns.bh / ns.sh
  floor.body.immovable = true
  return floor;
}

export default Floor
