import GameController from "../controllers/GameController.js";




class App {
  constructor() {
    //console.log("Hello from app")
    this.controllers = {
      targetController: new GameController()
    }
  }
}


window["app"] = new App(); 