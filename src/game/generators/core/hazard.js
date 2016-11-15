const Hazard = function (dimensions, sprite_key) {
  let ns = window.game_objs
  let hazard = this.game.add.tileSprite(dimensions.x, dimensions.y, dimensions.width, dimensions.height, sprite_key)
  hazard.tileScale.x = ns.bw / ns.sw
  hazard.tileScale.y = ns.bh / ns.sh
  ns.hazards.add(hazard)
  return hazard
}

export default Hazard
