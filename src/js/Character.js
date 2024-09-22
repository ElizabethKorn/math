export default class Character {
  constructor(attack) {
    this._attack = attack;
    this.distance = 1;
    this._stoned = false;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let attackWithDistance = this._attack * (1 - (this.distance - 1) * 0.1);

    if (this._stoned) {
      attackWithDistance -= Math.log2(this.distance) * 5;
    }

    return attackWithDistance > 0 ? Math.round(attackWithDistance) : 0;
  }
}
