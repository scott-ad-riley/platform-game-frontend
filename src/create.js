import Generate from './generators/index'

const create = function () {
  let ns = window.game_objs
  ns.sw = 1024 // sprite width
  ns.sh = 1024 // sprite height
  ns.bw = 64 // block_width
  ns.bh = 64 // block_height
  ns.floor_level = 70

  this.world.resize(800*3, 600)
  this.game.physics.startSystem(Phaser.Physics.ARCADE)

  ns.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background')
  ns.background.fixedToCamera = true

  ns.hazards = this.game.add.physicsGroup()
  ns.ground = this.game.add.physicsGroup()

  Generate.GroundFloor.call(this,
      { start: 0, length: 300 }, 'one'
    )

  Generate.PitWithPlatform.call(this,
    300, ns.bw * 5, {gap: 130, offset: 80},
    {
      hazard: 'one.spikes',
      underground: 'one.underground',
      platform: 'one.surface'
    })

  Generate.GroundFloor.call(this,
      { start: 300 + ns.bw * 5, length: 300 }, 'one'
    )


  //  Now let's create two ledges
  // ns.ledge = ns.platforms.create(400, 400, 'ground')

  // ns.ledge.body.immovable = true

  // ns.ledge = ns.platforms.create(-150, 250, 'ground')

  // ns.ledge.body.immovable = true

 // The player and its settings
  ns.player = this.game.add.sprite(32, 0, 'dude')

  //  We need to enable physics on the player
  this.game.physics.arcade.enable(ns.player)

  //  Player physics properties. Give the little guy a slight bounce.
  ns.player.body.gravity.y = 800
  ns.player.body.collideWorldBounds = true

  //  Our two animations, walking left and right.
  ns.player.animations.add('static', [0, 1], 2, true)
  ns.player.animations.add('right', [2, 3, 4, 5, 6, 7, 8], 10, true)
  ns.player.animations.add('left', [9, 10, 11, 12, 13, 14, 15], 10, true)

  this.camera.follow(ns.player)


  // ns.stars = this.game.add.group()

  // ns.stars.enableBody = true

  // //  Here we'll create 12 of them evenly spaced apart
  // for (var i = 0; i < 12; i++) {
  //   //  Create a star inside of the 'stars' group
  //   let star = ns.stars.create(i * 70, 0, 'star')

  //   //  Let gravity do its thing
  //   star.body.gravity.y = 6

  //   //  This just gives each star a slightly random bounce value
  //   star.body.bounce.y = 0.7 + Math.random() * 0.2
  // }

  // ns.score = 0
  // ns.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' })
}

export default create
