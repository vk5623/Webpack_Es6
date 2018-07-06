//initiate the Phaser framework

import { GameState } from './states/GameState.js'
import { HomeState } from './states/HomeState.js'
import { PreloadState } from './states/PreloadState.js'
import { BootState } from './states/BootState.js'

var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.add('HomeState', HomeState);
game.state.add('PreloadState', PreloadState);
game.state.add('BootState', BootState);
game.state.start('BootState');