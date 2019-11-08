const target = [
  { max: 1, points: 10 },
  { max: 5, points: 5 },
  { max: 10, points: 1 },
];

/**
 * Calculate the hypotenuse by applying the Pythagorean theorem
 * @param {number} c1 Side one length
 * @param {number} c2 Side two length
 * @return {number} The length of the longest side (hypotenuse)
 */
const hypotenuse = (c1, c2) => Math.sqrt(c1**2 + c2**2);

/**
 * Calculate points based on dart landing coordinates
 * @param {number} x Horizontal distance from center point
 * @param {number} y Vertical distance from center point
 */
export const solve = (x, y) => {
  const fromCenter = hypotenuse(x, y);
  const range = target.find(range => range.max >= fromCenter);
  return range ? range.points : 0;
};
