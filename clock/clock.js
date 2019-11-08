const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * HOURS_PER_DAY;

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.seconds = hours * SECONDS_PER_HOUR + minutes * SECONDS_PER_MINUTE;
  }

  get seconds() {
    return this._seconds;
  }

  set seconds(seconds) {
    seconds = seconds % SECONDS_PER_DAY;
    this._seconds = (seconds > 0 ? seconds : seconds + SECONDS_PER_DAY);
  }

  get hours() {
    return Math.floor(this.seconds / SECONDS_PER_HOUR);
  }

  get minutes() {
    const minutesSeconds = this.seconds - this.hours * SECONDS_PER_HOUR;
    return Math.floor(minutesSeconds / SECONDS_PER_MINUTE);
  }

  toString() {
    const hours = this.hours === 24 ? 0 : this.hours;
    return String(hours).padStart(2, '0') + ':' + String(this.minutes).padStart(2, '0');
  }

  plus(min) {
    this.seconds += min * SECONDS_PER_MINUTE;
    return this;
  }

  minus(min) {
    this.seconds -= min * SECONDS_PER_MINUTE;
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }

}
