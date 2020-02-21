import 'phaser'

export default class BootScene extends Phaser.Scene {
  constructor (key) {
    super(key)
  }

  preload () {
    this.load.image('ball', './assets/images/ball.png')
    this.load.image('paddle', './assets/images/paddle.png')
    this.load.image('playingfield', './assets/images/playingfield.png')
  }

  create () {
    this.scene.start('Game')
  }
}