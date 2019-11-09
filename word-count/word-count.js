
export class Words {

  /**
   * Count unique words in phrase
   * @return {object} Unique words as keys, frequency of each word as values
   */
  count(phrase) {
    phrase = phrase.trim().toLowerCase();
    this.words = phrase.split(/\s+/);
    return this.wordsCount();
  }

  /**
   * Get a map of unique words in phrase with frequency
   * @return {object}
   */
  wordsCount() {
    const wordsCount = Object.create(null, {});
    this.words.forEach(word => {
      wordsCount[word] = (wordsCount[word] || 0) + 1;
    });
    return wordsCount;
  }

}
