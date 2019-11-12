const isOdd = x => x % 2 !== 0;

/**
 * Check if a given number is valid by Luhn algorithm
 */
export class Luhn {

  /**
   * @param {string|number} pin
   */
  constructor( pin ) {
    this.pin = String(pin).trim();
  }

  get valid() {
    if( this.pin.length < 2 ) return false;
    if( this.pin.match(/[^\d|\s]/) ) return false;

    const digitsOnly = this.pin.replace(/[^\d]/g, '');
    const pinSum = digitsOnly.split('').reduce((sum, digit, index) => {
      let d = Number(digit);
      if (isOdd(digitsOnly.length - 1 - index)) d *= 2;
      if (d > 9) d -= 9;
      return sum + d;
    }, 0);

    return pinSum % 10 === 0;
  }

}
