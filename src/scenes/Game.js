import 'phaser'

export default class GameScene extends Phaser.Scene {
  constructor (key) {
    super(key)
  }

  preload () {}

  create () {
    this.setupGameWorld()
  }

  setupGameWorld () {
    const background = this.add.image(150, 200, 'playingfield')
    const playerPaddle = this.add.image(150, 380, 'paddle')
    const opponentPaddle = this.add.image(150, 20, 'paddle')
    const ball = this.add.image(150, 200, 'ball')
  }
}