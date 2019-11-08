/**
 * Checks if a number is an integer
 * @param {number} num The number to check
 * @return {boolean} True if number is integer and >= 0
 */
const isPositiveInt = num => (num >= 0 && num % 1 === 0);

/**
 * Checks if a number is an Armstrong Number
 * @param {number} num The number to check
 * @return {boolean} True if num is an Armstrong number
 */
export const validate = (num) => {
  if( !isPositiveInt(num) ) return false;

  const digits = [ ...String(num) ].map(Number);
  const sum = digits.reduce((sum, d) => sum + d**digits.length, 0);
  return sum === num;
};
