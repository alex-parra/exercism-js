
const romans = [
  { base: 1000, one: 'M' },
  { base: 100, one: 'C', five: 'D', ten: 'M' },
  { base: 10, one: 'X', five: 'L', ten: 'C' },
  { base: 1, one: 'I', five: 'V', ten: 'X' },
];

/**
 * Converts decimal number to roman numeral
 * @param {number} number The decimal number to convert
 * @return {string} The roman numeral
 */
export const toRoman = num => {
  if( num == null || num % 1 !== 0 ) throw new Error('num must be positive integer');
  if( num === 0 ) return '';

  const { base, one, five, ten } = romans.find(r => r.base <= num);
  const digit = Math.floor(num / base);

  let prefix = '';
  if( ten && 9 === digit ) prefix = one + ten;
  else if( five && 4 < digit ) prefix = five + one.repeat(digit - 5);
  else if( five && 4 === digit ) prefix = one + five;
  else prefix = one.repeat(digit);

  return prefix + toRoman( num % base );
};
