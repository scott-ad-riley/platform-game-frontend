import collectStar from './collectStar.js'

const update = function () {
  let ns = window.game_objs

  let hitPlatform = this.game.physics.arcade.collide(ns.player, ns.platforms)

  let cursors = this.game.input.keyboard.createCursorKeys()

  ns.player.body.velocity.x = 0

  if (cursors.left.isDown) {
    ns.player.body.velocity.x = -150
    ns.player.animations.play('left')
  } else if (cursors.right.isDown) {
    ns.player.body.velocity.x = 150
    ns.player.animations.play('right')
  } else {
    ns.player.animations.play('static')
  }

  if (cursors.up.isDown && ns.player.body.touching.down && hitPlatform) {
    ns.player.body.velocity.y = -350
  }

  this.game.physics.arcade.collide(ns.stars, ns.platforms)

  this.game.physics.arcade.overlap(ns.player, ns.stars, collectStar.bind(ns), null, this)

}

export default update