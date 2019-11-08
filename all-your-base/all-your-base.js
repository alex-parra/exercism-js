
/**
 * Test if 'base' is invalid
 * @param {number} base The base to test
 * @return {boolean} True if invalid
 */
const isInvalidBase = base => {
  return base == null || base < 2 || base % 1 !== 0;
}

/**
 * Test if 'digits' is invalid
 * @param {number[]} digits The array of digits to test
 * @return {boolean} True if invalid
 */
const isInvalidDigits = (digits, base) => {
  return digits.length === 0 || (digits[0] === 0 && digits.length > 1) || digits.some(d => d < 0 || d >= base);
}

/**
 * Convert an array of digits to a number
 * @param {number[]} digits The array of digits to convert
 * @param {number} base The base the digits are in
 * @return {number}
 */
const fromDigits = (digits, base) => {
  return digits.reduce((sum, digit, index) => {
    return sum + digit * Math.pow(base, digits.length - index - 1);
  }, 0);
};

/**
 * Convert a number to an array of digits in the specified base
 * @param {number} num The number to convert
 * @param {number} base The target base
 */
const toDigits = (num, base) => {
  if( num === 0 ) return [0];

  let digits = [];
  while (num > 0) {
    digits = [ num % base, ...digits ];
    num = Math.floor(num / base);
  }
  return digits;
};

/**
 * Convert from digits in base 'base' to base 'toBase'
 * @param {number[]} digits Array of digits to convert
 * @param {number} digitsBase The base the digits are in
 * @param {number} targetBase The base to convert to
 * @return {number[]} Array of digits in targetBase
 */
export const convert = (digits, digitsBase, targetBase) => {
  if( isInvalidBase(digitsBase) ) throw new Error('Wrong input base');
  if( isInvalidBase(targetBase) ) throw new Error('Wrong output base');
  if( isInvalidDigits(digits, digitsBase) ) throw new Error('Input has wrong format');

  let num = fromDigits(digits, digitsBase);
  return toDigits(num, targetBase);
};
