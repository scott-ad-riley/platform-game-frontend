import convertTime from '../convert_time.js'

const update = function (onFail, onSuccess) {
  let ns = window.game_objs

  // let successContact = this.game.physics.arcade.overlap(ns.player, ns.finishLine, onSuccess)
  let hazardContact = this.game.physics.arcade.overlap(ns.player, ns.hazards, onFail)

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

  if (cursors.up.isDown && ns.player.body.touching.down && ns.hitGround) {
    ns.player.body.velocity.y = -570
  }

  ns.timerText.setText(" " + convertTime(ns.timer.seconds) + " ")
  ns.game_time = ns.timer.seconds
  this.game.physics.arcade.collide(ns.stars, ns.ground)
  this.game.physics.arcade.overlap(ns.player, ns.stars, onSuccess, null, this.game)
}

export default update
