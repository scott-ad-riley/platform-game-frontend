import convertTime from '../convert_time.js'

const updateSetup = function () {

  let ns = window.game_objs

  ns.background.tilePosition.x = -(this.camera.x * 0.7);

  ns.hitGround = this.game.physics.arcade.collide(ns.player, ns.ground)

}

export default updateSetup