
/**
 * Check if 'i' is a factor of 'number'
 * @param {number} number
 * @param {number} i
 * @return {boolean}
 */
const isFactor = (number, i) => number % i === 0;

/**
 * Get an array of numbers from 'min' (inclusive) to 'max' (inclusive)
 * @param {number} min
 * @param {number} max
 * @return {number[]}
 */
const range = (min = 0, max) => {
  return Array(max).fill(min).map((v,k) => k+v);
}

/**
 * Calculate the aliquot sum of 'number'
 * @param {number} number
 * @return {number}
 */
const aliquotSum = number => {
  const max = Math.floor(number / 2);
  return range(1, max).reduce((sum, i) => ( isFactor(number, i) ? i : 0 ) + sum, 0);
};

/**
 * Get the type [deficient, perfect, abundant] of 'number' according to it's aliquot sum
 * @param {number} number
 * @return {string}
 */
export const classify = (number) => {
  if( typeof number !== 'number' || number < 1 ) throw new Error('Classification is only possible for natural numbers.');

  const numberAliquotSum = aliquotSum(number);

  if( numberAliquotSum < number ) return 'deficient';
  if( numberAliquotSum > number ) return 'abundant';
  return 'perfect';
};
