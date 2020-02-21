import 'phaser'

export default {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 300,
  height: 400,
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  }
}
