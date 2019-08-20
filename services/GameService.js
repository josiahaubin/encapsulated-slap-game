import Target from "../model/Target.js";

//PRIVATE

let _target = new Target("Crash Bandicoot");

//PUBLIC
export default class GameService {
  constructor() {
    //console.log("Hello from the game service")
  }
  //Takes away one health, and adds one slap
  slap() {
    //console.log("slapppp")
    _target.health--
    _target.hits++
  }

  get Target() {
    return _target
  }
}