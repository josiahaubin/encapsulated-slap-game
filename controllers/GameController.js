import GameService from "../services/GameService.js";

//PRIVATE
let _gameService = new GameService()

function draw() {
  let targetNameElem = document.querySelector('#targetName')
  let targetHealthElem = document.querySelector('#targetHealth')
  let targetHitsElem = document.querySelector('#targetHits')
  let target = _gameService.Target;

  targetNameElem.textContent = target.name
  targetHealthElem.textContent = target.health.toString()
  targetHitsElem.textContent = target.hits.toString()
}


//PUBLIC
export default class GameController {
  constructor() {
    //console.log("Hello from game controller")
    draw()
  }

  //Let service know that the user wants to attack the target
  attackTarget(attack) {
    _gameService.attackTarget(attack)
    draw()
  }
}