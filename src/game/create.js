import { Main, OffScreenWall } from './generators/zones/'
import { Button } from './generators/core/'

import { TIMER } from './styles/text.js'

const create = function (onRestart) {
  let ns = window.game_objs
  // defaults
  ns.sw = 1024 // sprite width
  ns.sh = 1024 // sprite height
  ns.bw = 64 // block_width
  ns.bh = 64 // block_height
  ns.floor_level = 70

  this.world.resize(800 * 6, 600)
  this.game.physics.startSystem(Phaser.Physics.ARCADE)

  ns.background = this.game.add.tileSprite(0, 0, this.world.width, this.world.height, 'background')
  ns.background.scale.setTo(1/3, 1)
  ns.background.tileScale.y = 0.47

  ns.background.fixedToCamera = true

  ns.hazards = this.game.add.physicsGroup()
  ns.ground = this.game.add.physicsGroup()
  ns.boostCrates = this.game.add.physicsGroup()
  ns.rubies = this.game.add.group()
  ns.rubies.enableBody = true
  ns.ruby_total = ns.current_rubies = 0;

  OffScreenWall.call(this)

  ns.distance = 0

  ns.distance += Main.call(this);


 // The player and its settings
  ns.player = this.game.add.sprite(32, this.game.world.height - ns.floor_level - 64, 'dude')
  this.game.physics.arcade.enable(ns.player)
  ns.player.body.gravity.y = 1200

  ns.player.animations.add('static', [0, 1], 2, true)
  ns.player.animations.add('right', [2, 3, 4, 5, 6, 7, 8], 10, true)
  ns.player.animations.add('left', [9, 10, 11, 12, 13, 14, 15], 10, true)

  this.camera.follow(ns.player)

  ns.timer = this.game.time.create();
  ns.timer.start();

  ns.timerText = this.game.add.text(0, 0, " 0.0 ", TIMER)
  ns.timerText.setShadow(0, 0, 'rgba(0,0,0,0.8)', 20)
  ns.timerText.setTextBounds(0, 50, 200, 50)
  ns.timerText.fixedToCamera = true

  ns.rubyCounterSprite = this.game.add.sprite(800 - 200, 45, 'ruby')
  ns.rubyCounterSprite.scale.x = ns.rubyCounterSprite.scale.y = 0.4
  ns.rubyCounterSprite.fixedToCamera = true
  ns.rubyCounter = this.game.add.text(800 - 150, 25, '0/' + ns.ruby_total, TIMER)
  ns.rubyCounter.setShadow(0, 0, 'rgba(0,0,0,0.8)', 20)
  ns.rubyCounter.fixedToCamera = true
}

export default create
