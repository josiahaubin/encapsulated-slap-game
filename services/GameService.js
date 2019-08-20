import Target from "../model/Target.js";

//PRIVATE

let _target = new Target("Crash Bandicoot");

//PUBLIC
export default class GameService {
  constructor() {
    //console.log("Hello from the game service")
  }
  //Takes away one health, and adds one hit
  slap() {
    //console.log("slapppp")
    _target.health--
    _target.hits++
  }
  //Takes away 5 health, and adds one hit
  punch() {
    //console.log("punch")
    _target.health -= 5
    _target.hits++
  }
  //Takes away 10 health, and adds one hit
  kick() {
    //console.log("kickkk")
    _target.health -= 10
    _target.hits++
  }

  get Target() {
    return _target
  }
}