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
