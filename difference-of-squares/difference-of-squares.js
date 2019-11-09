
/**
 * Obtain the sumOfSquares or the squareOfSum of a number
 */
export class Squares {

  /**
   * @param {number} value The number to sum with it's lower positive integers
   */
  constructor(value) {
    this.value = value;
    this.sumPower1 = this.powerSum(this.value, 1);
    this.sumPower2 = this.powerSum(this.value, 2);
  }

  /**
   * Calculate the sum of a number with it's lower positive integers in a certain power
   * @param {number} num The initial number
   * @param {number} power The power to run the sum at
   * @return {number}
   */
  powerSum(num, power) {
    if( num === 0 ) return 0;
    return (num ** power) + this.powerSum(num - 1, power);
  }

  /**
   * Get the sum of 'value' squared (power 2) and all it's lower positive integers (also squared)
   * @return {number}
   */
  get sumOfSquares() {
    return this.sumPower2;
  }

  /**
   * Get the square of the sum of 'value' and all it's lower positive integers
   * @return {number}
   */
  get squareOfSum() {
    return this.sumPower1 ** 2;
  }

  /**
   * Get the difference between 'squareOfSum' and 'sumOfSquares'
   * @return {number}
   */
  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }

}
