const isDivisible = (x, y) => x % y === 0;
const LOWEST_PRIME = 2;

/**
 * Get the factors of 'num' that are prime numbers (tail-recursive)
 * @param {number} num;
 * @return {number[]}
 */
export const primeFactors = (num, factors = []) => {
  if( num < LOWEST_PRIME ) return factors;

  let f = LOWEST_PRIME;
  while( ! isDivisible(num, f) ) f += f >= 3 ? 2 : 1;
  return primeFactors(num/f, factors.concat(f));
};
