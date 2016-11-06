const preload = function () {
  this.game.load.image('sky', '/img/sky.png')
  this.game.load.image('ground', '/img/platform.png')
  this.game.load.image('star', '/img/star.png')
  this.game.load.spritesheet('dude', '/img/robot_two.png', 64, 64, 16)
}

export default preload 