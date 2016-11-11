import udedson from './death.js'

const update = function () {
  let ns = window.game_objs

  ns.background.tilePosition.x = -(this.camera.x * 0.7);

  let hitGround = this.game.physics.arcade.collide(ns.player, ns.ground)
  let hazardContact = this.game.physics.arcade.overlap(ns.player, ns.hazards, udedson)

  let cursors = this.game.input.keyboard.createCursorKeys()

  ns.player.body.velocity.x = 0

  if (cursors.left.isDown) {
    ns.player.body.velocity.x = -300
    ns.player.animations.play('left')
  } else if (cursors.right.isDown) {
    ns.player.body.velocity.x = 300
    ns.player.animations.play('right')
  } else {
    ns.player.animations.play('static')
  }

  if (cursors.up.isDown && ns.player.body.touching.down && hitGround) {
    ns.player.body.velocity.y = -570
  }


  // this.game.physics.arcade.collide(ns.stars, ns.platforms)

  // this.game.physics.arcade.overlap(ns.player, ns.stars, collectStar.bind(ns), null, this)

}

export default update
