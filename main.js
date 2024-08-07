import "./style.css";
import Phaser from "phaser";

//separating some constants to easily tweak them
const sizes = {
  width: 500,
  height: 500,
};

const speedDown = 300

//grabbing HTML elements
const gameStartDiv = document.querySelector("#gameStartDiv")
const gameStartBtn = document.querySelector("#gameStartBtn")
const gameEndDiv = document.querySelector("#gameEndDiv")
const gameWinLoseSpan = document.querySelector("#gameWinLoseSpan")
const gameEndScoreSpan = document.querySelector("#gameEndScoreSpan")

//game configuration settings
const config = {
  type: Phaser.WEBGL, //a JavaScript API used for rendering interactive 2D and 3D graphics within web browsers without the need for plugins
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  physics: {
    default: "arcade", //use the arcade physics engine
    arcade: {
      gravity: { y: speedDown },
      debug: true,
    },
  },
  scene: [GameScene],
};

//create the Phaser game instance with the specified configuration
const game = new Phaser.Game(config);
