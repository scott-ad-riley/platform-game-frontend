// const MovingPlatform = function (game, dimensions, key) {
//   let ns = window.game_objs;
//   const platform = this.game.add.sprite(dimensions.x, dimensions.y, key)

//   platform.playerLocked = false

//   ns.movingPlatforms.add(platform)

//   platform.anchor.x = 0.5
//   platform.body.allowGravity = false
//   platform.body.immovable = true
//   platform.body.customSeparateX = true
//   platform.body.customSeparateY = true
//   console.log(platform)
//   return platform
// }

const MovingPlatform = function (game, dimensions, key) {
  let ns = window.game_objs;

  Phaser.Sprite.call(this, game, dimensions.x, dimensions.y, key);

  ns.movingPlatforms.add(this);
  // game.physics.arcade.enable(this);

  this.scale.x = this.scale.y = 0.2;
  this.anchor.x = 0.5;

  this.body.customSeparateX = true;
  this.body.customSeparateY = true;
  this.body.allowGravity = false;
  this.body.immovable = true;

  this.playerLocked = false;


};
MovingPlatform.prototype = Object.create(Phaser.Sprite.prototype);
MovingPlatform.prototype.constructor = MovingPlatform;

MovingPlatform.prototype.addMotionPath = function (motionPath) {

    this.tweenX = this.game.add.tween(this.body);
    this.tweenY = this.game.add.tween(this.body);

    //  motionPath is an array containing objects with this structure
    //  [
    //   { x: "+200", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeIn" }
    //  ]

    for (var i = 0; i < motionPath.length; i++)
    {
        this.tweenX.to( { x: motionPath[i].x }, motionPath[i].xSpeed, motionPath[i].xEase);
        this.tweenY.to( { y: motionPath[i].y }, motionPath[i].ySpeed, motionPath[i].yEase);
    }

    this.tweenX.loop();
    this.tweenY.loop();

};

MovingPlatform.prototype.start = function () {

    this.tweenX.start();
    this.tweenY.start();

};

MovingPlatform.prototype.stop = function () {
  this.tweenX.stop();
  this.tweenY.stop();
};

export default MovingPlatform