const preload = function () {
  this.game.load.image('sky', '/img/sky.png');
  this.game.load.image('ground', '/img/platform.png');
  this.game.load.image('star', '/img/star.png');
  this.game.load.spritesheet('dude', '/img/dude.png', 32, 48);
}

export default preload 