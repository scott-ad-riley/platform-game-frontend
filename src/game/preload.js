const preload = function () {
  this.game.load.image('tony', '/img/tony.png')
  this.game.load.image('crate.array', '/img/tiles/array_crate.png')
  this.game.load.image('crate.boost', '/img/tiles/boost_crate.png')
  this.game.load.image('button.standard', '/img/yellow_button_box.png')
  this.game.load.image('ruby', '/img/ruby.png')
  this.game.load.image('tony', '/img/tony.png')
  this.game.load.image('keys', '/img/keys.png')
  this.game.load.image('one.surface', '/img/tiles/start_ground_block.png')
  this.game.load.image('one.underground', '/img/tiles/start_underground_block.png')
  this.game.load.image('one.spikes', '/img/hazards/spike.png')
  this.game.load.image('one.vine', '/img/hazards/vine.png')
  this.game.load.image('one.vine_top', '/img/hazards/vine_top.png')
  this.game.load.image('background', '/img/background.png')
  this.game.load.spritesheet('dude', '/img/robot_three.png', 44, 64, 16)
}

export default preload
