import GameController from "../controllers/GameController.js";


class App {
  constructor() {
    //console.log("Hello from app")
    this.controllers = {
      gameController: new GameController()
    }
  }
}


window["app"] = new App(); 