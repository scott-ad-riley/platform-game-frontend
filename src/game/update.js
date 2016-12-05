import convertTime from '../convert_time.js'

const update = function (onFail, onSuccess) {
  let ns = window.game_objs

  let hazardContact = this.game.physics.arcade.overlap(ns.player, ns.hazards, onFail)
  ns.hitBoosted = this.game.physics.arcade.collide(ns.player, ns.boostCrates)

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

  ns.boostEnabled = false || ns.hitBoosted

  if (cursors.up.isDown && ns.player.body.touching.down && (ns.hitGround || ns.hitBoosted)) {
    if (ns.boostEnabled) {
      ns.player.body.velocity.y = -800
    } else {
      ns.player.body.velocity.y = -570
    }
  }

  ns.timerText.setText(" " + convertTime(ns.timer.seconds) + " ")
  ns.rubyCounter.setText(ns.current_rubies + '/' + ns.ruby_total)
  ns.game_time = ns.timer.seconds
  this.game.physics.arcade.overlap(ns.player, ns.rubies, onSuccess, null, this.game)
}

export default update
