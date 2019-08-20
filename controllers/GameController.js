import GameService from "../services/GameService.js";

//PRIVATE
let _gameService = new GameService()


//PUBLIC
export default class GameController {
  constructor() {
    //console.log("Hello from game controller")
  }

  //Let service know that the user wants to slap the target
  slap() {
    _gameService.slap()
  }
}