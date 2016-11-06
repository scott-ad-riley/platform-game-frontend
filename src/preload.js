const preload = function () {
  this.game.load.image('sky', '/img/sky.png')
  this.game.load.image('ground', '/img/platform.png')
  this.game.load.image('star', '/img/star.png')
  this.game.load.spritesheet('dude', '/img/robot_three.png', 44, 64, 16)
}

export default preload 