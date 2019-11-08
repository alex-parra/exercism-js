const LETTERS_TABLE = [
  { points: 1, letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'] },
  { points: 2, letters: ['D', 'G'] },
  { points: 3, letters: ['B', 'C', 'M', 'P'] },
  { points: 4, letters: ['F', 'H', 'V', 'W', 'Y'] },
  { points: 5, letters: ['K'] },
  { points: 8, letters: ['J', 'X'] },
  { points: 10, letters: ['Q', 'Z'] },
];

// Fast point lookup for each letter.
const LETTER_SCORES = LETTERS_TABLE.reduce((acc, {points, letters}) => {
  letters.forEach(l => { acc[l] = points; });
  return acc;
}, {});

/**
 * Get Scrable score of a word
 * @param {string} word The word to score
 * @param {number} initialScore Useful for incremental score calculation ;)
 * @return {number} the score
 */
export const score = (word, initialScore = 0) => {
  if( typeof word !== 'string' ) throw new TypeError('Argument word must be a string');
  return [ ...word.toUpperCase() ].reduce((score, letter) => score + (LETTER_SCORES[letter] || 0), initialScore);
};
