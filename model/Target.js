
export default class Target {
  constructor(name, slap, kick, punch) {
    this.name = name
    this.health = 100
    this.hits = 0
    this.attacks = {
      "slap": slap,
      "kick": kick,
      "punch": punch
    }
    this.item = []
  }
}