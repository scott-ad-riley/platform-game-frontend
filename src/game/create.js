import ZoneGenerators from './generators/zones/index.js'

import timerTextStyles from './styles/timer_text.js'

const create = function (onRestart) {
  let ns = window.game_objs
  ns.sw = 1024 // sprite width
  ns.sh = 1024 // sprite height
  ns.bw = 64 // block_width
  ns.bh = 64 // block_height
  ns.floor_level = 70

  this.world.resize(800 * 3, 600)
  this.game.physics.startSystem(Phaser.Physics.ARCADE)

  ns.background = this.game.add.tileSprite(0, 0, this.world.width, this.world.height, 'background')
  ns.background.scale.setTo(1/3, 1)
  ns.background.tileScale.y = 0.47

  ns.background.fixedToCamera = true

  ns.hazards = this.game.add.physicsGroup()
  ns.ground = this.game.add.physicsGroup()

  ZoneGenerators.OffScreenWall.call(this)

  ns.distance = 0

  ns.distance += ZoneGenerators.Starter.call(this);


 // The player and its settings
  ns.player = this.game.add.sprite(32, 32, 'dude')

  //  We need to enable physics on the player
  this.game.physics.arcade.enable(ns.player)

  //  Player physics properties. Give the little guy a slight bounce.
  ns.player.body.gravity.y = 1200

  //  Our two animations, walking left and right.
  ns.player.animations.add('static', [0, 1], 2, true)
  ns.player.animations.add('right', [2, 3, 4, 5, 6, 7, 8], 10, true)
  ns.player.animations.add('left', [9, 10, 11, 12, 13, 14, 15], 10, true)

  this.camera.follow(ns.player)


  ns.stars = this.game.add.group()

  ns.stars.enableBody = true

  //  Create a star inside of the 'stars' group
  const star = ns.stars.create(ns.distance, 0, 'diamond')

  //  Let gravity do its thing
  star.body.gravity.y = 10
  ns.timer = this.game.time.create();
  // Add as many events as you like here, they are popped off the stack once the time is hit
  ns.timer.start();


  //  Create our Timer
  // ns.timer = this.game.time.create();
  this.game.add.button(314, 400, 'base', onRestart)

  // ns.timer.start();
  ns.timerText = this.game.add.text(0, 0, ns.timer.seconds, timerTextStyles)
  ns.timerText.setTextBounds(0, 50, 200, 50)
  ns.timerText.fixedToCamera = true
}

export default create
