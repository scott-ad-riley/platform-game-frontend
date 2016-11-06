export default function (player, star) {
  star.kill();
  this.score += 10;
  this.scoreText.text = 'Score: ' + this.score;
}