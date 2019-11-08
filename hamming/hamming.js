
/**
 * Computes the Hamming Difference of two DNA strands
 * @param {string} leftStrand
 * @param {string} rightStrand
 * @return {number} The Hamming Difference between the two strands
 */
export const compute = (leftStrand, rightStrand) => {

  if( [leftStrand, rightStrand].some(strand => typeof strand !== 'string') ) throw new TypeError('left and right strands must be strings');
  if( !leftStrand && rightStrand ) throw new Error('left strand must not be empty');
  if( leftStrand && !rightStrand ) throw new Error('right strand must not be empty');
  if( leftStrand.length !== rightStrand.length ) throw new Error('left and right strands must be of equal length');

  const defaultHamming = 0;
  return leftStrand.split('').reduce((hamming, char, i) => hamming + Number(char !== rightStrand[i]), defaultHamming);
};
