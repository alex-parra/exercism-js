import BigInt from './lib/big-integer';

/**
 * Calculate the number of grains of wheat on a chessboard given that the number on each square doubles
 */
export class Grains {
  get CHESSBOARD_SQUARES() {
    return 64;
  }

  get BASE() {
    return 2;
  }

  /**
   * Calculate the number of grains at specified square
   * @return BigInt
   */
  grainsInSquare(squareNum) {
    return BigInt(this.BASE).pow(squareNum - 1);
  }

  /**
   * Get the number of grains at specified square
   * @return {string}
   */
  square(squareNum = 1) {
    return this.grainsInSquare(squareNum).toString();
  }

  /**
   * Get the total number of grains on the fully filled chessboard
   * @return {string}
   */
  total() {
    return this.grainsInSquare(this.CHESSBOARD_SQUARES + 1).subtract(1).toString();
  }

  /**
   * This is the same as total but requires a lot more calculations...
   */
  totalNaive() {
    let total = BigInt(0);
    for( let square = 1; square <= this.CHESSBOARD_SQUARES; ++square ) {
     total = total.add( this.grainsInSquare(square) );
    }
    return total.toString();
  }

}
