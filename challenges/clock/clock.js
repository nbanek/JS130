
class Clock {
  static at(hour, minute) {
    return new Clock(hour, minute);
  }

  constructor(hour = 0, minute = 0) {
    this.hour = hour;
    this.minute = minute;
  }

  toString() {
    let hour = this.hour < 10? '0' + this.hour: this.hour;
    let minute = this.minute < 10? '0' + this.minute: this.minute;
    return `${hour}:${minute}`;
  }

  add(minutes) {
    let newClock = new Clock(this.hour, this.minute);
    newClock.minute += minutes;

    while(newClock.minute > 59) {
      newClock.minute -= 60;
      newClock.hour += 1;
    }
    while(newClock.hour > 23) {
      newClock.hour -= 24;
    }
    return newClock;
  }

  subtract(minutes) {
    let newClock = new Clock(this.hour, this.minute);
    newClock.minute -= minutes;

    while(newClock.minute < 0) {
      newClock.minute += 60;
      newClock.hour -= 1;
    }
    while(newClock.hour < 0) {
      newClock.hour += 24;
    }
    return newClock;
  }

  isEqual(clock) {
    return this.toString() === clock.toString();
  }

}


module.exports = Clock;
