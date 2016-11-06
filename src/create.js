const create = function () {
  let ns = window.game_objs

  this.game.add.sprite(0, 0, 'star')

  //  We're going to be using physics, so enable the Arcade Physics system
  this.game.physics.startSystem(Phaser.Physics.ARCADE)

  //  A simple background for our game
  this.game.add.sprite(0, 0, 'sky')

  //  The platforms group contains the ground and the 2 ledges we can jump on
  ns.platforms = this.game.add.group()

  //  We will enable physics for any object that is created in this group
  ns.platforms.enableBody = true

  // Here we create the ground.
  ns.ground = ns.platforms.create(0, this.game.world.height - 64, 'ground')

  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  ns.ground.scale.setTo(2, 2)

  //  This stops it from falling away when you jump on it
  ns.ground.body.immovable = true

  //  Now let's create two ledges
  ns.ledge = ns.platforms.create(400, 400, 'ground')

  ns.ledge.body.immovable = true

  ns.ledge = ns.platforms.create(-150, 250, 'ground')

  ns.ledge.body.immovable = true

 // The player and its settings
  ns.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude')

  //  We need to enable physics on the player
  this.game.physics.arcade.enable(ns.player)

  //  Player physics properties. Give the little guy a slight bounce.
  ns.player.body.bounce.y = 0.2
  ns.player.body.gravity.y = 300
  ns.player.body.collideWorldBounds = true

  //  Our two animations, walking left and right.
  ns.player.animations.add('static', [0, 1], 10, true)
  ns.player.animations.add('right', [2, 3, 4, 5, 6, 7, 8], 10, true)
  ns.player.animations.add('left', [9, 10, 11, 12, 13, 14, 15], 10, true)

  ns.stars = this.game.add.group()

  ns.stars.enableBody = true;

  //  Here we'll create 12 of them evenly spaced apart
  for (var i = 0; i < 12; i++) {
    //  Create a star inside of the 'stars' group
    let star = ns.stars.create(i * 70, 0, 'star')

    //  Let gravity do its thing
    star.body.gravity.y = 6

    //  This just gives each star a slightly random bounce value
    star.body.bounce.y = 0.7 + Math.random() * 0.2
  }

  ns.score = 0
  ns.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' })
}

export default create