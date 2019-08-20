import Target from "../model/Target.js";
import Items from "../model/Items.js";

//PRIVATE

let _target = new Target("Crash Bandicoot", 1, 10, 5);
let _items = new Items();

//PUBLIC
export default class GameService {
  constructor() {
    //console.log("Hello from the game service")
  }
  //Takes in attack option and removes certain amount of health and adds to hit count
  attackTarget(attack) {
    let attackDmg = _target.attacks[attack]
    _target.health -= attackDmg
    _target.hits++
  }

  get Target() {
    return _target
  }
}