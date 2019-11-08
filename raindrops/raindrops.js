const isFactor = (number, i) => number % i === 0;

/**
 * Raindrops game (number has 3, 5, 7 as factors)
 * @param {number} the number to test
 * @return {string}
 */
export const convert = number => {
  let output = '';

  if( isFactor(number, 3) ) output += 'Pling';
  if( isFactor(number, 5) ) output += 'Plang';
  if( isFactor(number, 7) ) output += 'Plong';
  if( output.length === 0 ) output += number;

  return output;
};
