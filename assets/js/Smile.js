export default class Smile {
  static updateTime = Date.now();
  static num = 0;
  static INTERVAL = 500;

  static reset() {
    this.updateTime = Date.now();
    this.num = 0;
  }

  static standby() {
    if (!this.num) {
      return 0;
    }

    const currentTime = Date.now();

    if (currentTime - this.updateTime > this.INTERVAL) {
      this.num = 0;
    }

    return this.num;
  }

  static count(probability) {
    this.updateTime = Date.now();

    if (!this.num) {
      this.num = probability;
    }

    return this.num;
  }
}