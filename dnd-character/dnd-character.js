const DICE_SIDES = 6;
const diceRoll = () => Math.floor( 1 + Math.random() * DICE_SIDES );

/**
 * Calculate AbilityModifier from 'abilityScore'
 * @param {number} abilityScore
 * @return {number}
 */
export const abilityModifier = abilityScore => {
  if( abilityScore < 3 ) throw new Error('Ability scores must be at least 3');
  if( abilityScore > 18 ) throw new Error('Ability scores can be at most 18');
  return Math.floor( (abilityScore - 10) / 2 );
};

export class Character {

  /**
   * Randomly generate an abilityScore by rolling 4 dices and sum'ing only the 3 highest
   * @return {number}
   */
  static rollAbility() {
    const dices = [ diceRoll(), diceRoll(), diceRoll(), diceRoll() ];
    const lowest = Math.min( ...dices );
    return dices.reduce((sum, diceFace) => sum + diceFace, -lowest) ;
  }

  constructor() {
    this.abilities = {
      strength: Character.rollAbility(),
      dexterity: Character.rollAbility(),
      constitution: Character.rollAbility(),
      intelligence: Character.rollAbility(),
      wisdom: Character.rollAbility(),
      charisma: Character.rollAbility(),
    };
    this._hitpoints = 10 + abilityModifier(this.abilities.constitution);
  }

  get strength() {
    return this.abilities.strength;
  }

  get dexterity() {
    return this.abilities.dexterity;
  }

  get constitution() {
    return this.abilities.constitution;
  }

  get intelligence() {
    return this.abilities.intelligence;
  }

  get wisdom() {
    return this.abilities.wisdom;
  }

  get charisma() {
    return this.abilities.charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }

}
