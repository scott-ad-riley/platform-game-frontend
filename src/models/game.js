const createGame = function (width, height, container, state) {
  return new Phaser.Game(width, height, Phaser.AUTO, container, state)
}

export default createGame