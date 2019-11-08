
/**
 * Encode a string with Run Length
 * @param {string} data The data to encode
 * @return {string} The encoded data
 */
export const encode = data => {
  // ([a-zA-Z_]|\s) > capture group of a single letter, _ or space. Similar to \w but without 0-9
  // \1+ > expand previous cg to match 2 or more consecutive same character
  return data.replace(/([a-zA-Z_]|\s)\1+/g, (match, captureGroup1) => {
    const letterOccurences = match.length;
    const letter = captureGroup1;
    return letterOccurences + letter;
  })
};

/**
 * Decode a Run Length encoded string
 * @param {string} data The encoded data
 * @return {string} The decoded data
 */
export const decode = (data) => {
  // (\d+) > capture group 1: a sequence of digits e.g. \d
  // ([a-zA-Z_]|\s) > capture group 2: a single letter, _ or space. Similar to \w but without 0-9
  return data.replace(/(\d+)([a-zA-Z_]|\s)/g, (match, captureGroup1, captureGroup2) => {
    const letterOccurences = captureGroup1;
    const letter = captureGroup2;
    return letter.repeat(letterOccurences);
  });
};
