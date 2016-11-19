const Container = function (position) {
  let graphics = this.game.add.graphics()
  graphics.beginFill(0x0084db)
  graphics.drawRect(50, 50, 700, 500)
  graphics.endFill()
}

export default Container