export const steps = (num) => {
  if( num < 1 ) throw new Error('Only positive numbers are allowed');

  let i = 0;
  let n = num;
  while( n > 1 ) {
    if( n % 2 === 0 ) n = n / 2;
    else n = 3 * n + 1;
    i++;
  }

  return i;
};
