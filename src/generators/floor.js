const Floor = function (initial, size, sprite_key) {
  let ns = window.game_objs
  let floor = this.game.add.tileSprite(initial.x, initial.y, size.x, size.y, sprite_key)
  this.game.physics.arcade.enable(floor)
  floor.tileScale.x = ns.bw / ns.sw
  floor.tileScale.y = ns.bh / ns.sh
  floor.enableBody = true
  floor.body.immovable = true
  return floor;
}

export default Floor