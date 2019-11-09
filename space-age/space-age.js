
const BASE_YEAR_SECONDS = 60 * 60 * 24 * 365.25;

const ORBITAL_PERIODS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const isValidSeconds = seconds => {
  return typeof seconds === 'number' && seconds > 0 && seconds % 1 === 0;
}

/**
 * Convert age in seconds to age in years on specified planet
 * @param {string} planet The planet to determine the age in years
 * @param {number} ageInSeconds The person's age in seconds
 * @return {number} The age in years
 */
export const age = (planet, ageInSeconds) => {
  if( planet in ORBITAL_PERIODS !== true ) throw new TypeError('Unknown planet specified.');
  if( isValidSeconds(ageInSeconds) === false ) throw new TypeError('Invalid age in seconds specified.')

  const planetSecondsPerYear = ORBITAL_PERIODS[planet] * BASE_YEAR_SECONDS;
  return Number( (ageInSeconds / planetSecondsPerYear).toFixed(2) );
};
