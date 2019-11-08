
const ALLERGIES_SCORES = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats',
}

const SCORES_HIGH_TO_LOW = Object.keys(ALLERGIES_SCORES)
SCORES_HIGH_TO_LOW.sort((a, b) => Number(b) - Number(a));
const MAX_SCORE_SUPPORTED = SCORES_HIGH_TO_LOW.reduce((sum, value) => sum + Number(value), 0);

/**
 * Reduces score (base 2 amounts) until it's below the max amount specified
 * @param {number} score The initial score to "clamp"
 * @param {number} max The maximum score desired
 */
const discardUnsupportedAllergyValues = (score, max) => {
  while( score > max ) {
    score -= 2 ** Math.floor( Math.log2(score) );
  }
  return score;
}

/**
 * Allergy calculation from score
 */
export class Allergies {

  /**
   * @param {number} score The person's full allergy score
   */
  constructor(score) {
    this.myScore = score;
    this.myAllergies = [];
    this.determineMyAllergies();
  }

  /**
   * Fill myAllergies with items from highest score down
   */
  determineMyAllergies() {
    const supportedScore = discardUnsupportedAllergyValues(this.myScore, MAX_SCORE_SUPPORTED);
    SCORES_HIGH_TO_LOW.reduce((scoreLeft, value) => {
      if( value > scoreLeft ) return scoreLeft;

      this.myAllergies = [ ALLERGIES_SCORES[String(value)], ...this.myAllergies ];
      return scoreLeft - value;
    }, supportedScore);
  }

  /**
   * Get list of person's allergies based on score
   * @return {string[]} The list of allergies
   */
  list() {
    return this.myAllergies;
  }

  /**
   * Check if person is allergic to specified item
   * @param {string} item The item to check
   * @return {boolean} True if is allergic to item
   */
  allergicTo(item) {
    return this.myAllergies.includes(item);
  }

}
