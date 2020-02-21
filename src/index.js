import Phaser from 'phaser'
import config from './config'
import BootScene from './scenes/Boot'
import GameScene from './scenes/Game'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('Boot', BootScene)
    this.scene.add('Game', GameScene)
    this.scene.start('Boot')
  }
}

const game = new Game();
