import Target from "../model/Target.js";
import Items from "../model/Items.js";

//PRIVATE

let _target = new Target("Crash Bandicoot", 1, 10, 5);
let _healthPotion = new Items("Health Potion", -3, "Heal up");
let _sheild = new Items("Small Sheild", -1, "A small sheild")
let _speedShoes = new Items("Speed Shoes", -2, "You can't touch me")

let _items = [_healthPotion, _sheild, _speedShoes]

//Adds up modifiers
function addMods() {
  let totalModifier = 0
  for (let i = 0; i < _target.item.length; i++) {
    totalModifier += _target.item[i].modifier
  }
  return totalModifier
}

//PUBLIC
export default class GameService {
  constructor() {
    //console.log("Hello from the game service")
  }
  //Takes in attack option and removes certain amount of health and adds to hit count
  attackTarget(attack) {
    let attackDmg = _target.attacks[attack]
    _target.health -= attackDmg + addMods()
    _target.hits++
  }
  //Takes in item option and modifies damage taken
  addItem(index) {
    let targetItem = _items[index]
    _target.item.push(targetItem)
    //console.log(_target.item)
  }
  get Target() {
    return _target
  }
}