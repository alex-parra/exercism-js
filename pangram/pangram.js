const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

/**
 * Check is a pharse is a Pangram, e.g. contains each letter in the alphabet at least once
 * @param {string} phrase The phrase to check
 * @returns {boolean}
 */
export const isPangram = phrase => {
  const phraseLetters = phrase.toLowerCase().match(/[a-z]/gi) || [];
  const uniqueLetters = [ ...new Set(phraseLetters) ];
  return uniqueLetters.length === allLetters.length;
};
