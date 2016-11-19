const Background = function () {
  const bg = this.game.add.tileSprite(0, 0, this.world.width, this.world.height, 'background')
  bg.tileScale.y = 0.47
  bg.tileScale.x = 1/3
}

export default Background