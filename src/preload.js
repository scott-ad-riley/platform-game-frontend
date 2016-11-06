const preload = function () {
  this.game.load.image('ground', '/img/platform.png')
  this.game.load.image('one.surface', '/img/tiles/start_ground_block.png')
  this.game.load.image('one.underground', '/img/tiles/start_underground_block.png')
  this.game.load.image('background', '/img/tile_background.png')
  this.game.load.spritesheet('dude', '/img/robot_three.png', 44, 64, 16)
}

export default preload 