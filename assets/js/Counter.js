export default class Counter {
  static updateTime = Date.now();
  static isReady = false;
  static point = 0;
  static bonus = 0;
  static INTERVAL = 900;

  static reset() {
    this.updateTime = Date.now();
    this.isReady = false;
    this.point = 0;
    this.bonus = 0;
  }

  static standby(callback = () => {}) {
    if (this.isReady) {
      return;
    }

    const currentTime = Date.now();

    if (currentTime - this.updateTime > this.INTERVAL) {
      this.isReady = true;
      callback();
    }
  }

  static addPoint() {
    this.updateTime = Date.now();

    if (this.isReady) {
      this.isReady = false;
      this.point += 1
    }

    return this.point;
  }

  static addBonus(bonus) {
    return this.bonus += bonus;
  }

  static getScore() {
    return this.point + this.bonus;
  }
}