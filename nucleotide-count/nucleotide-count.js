export class NucleotideCounts {

  /**
   * Get count of each nucleotide in a DNA strand
   * @param {string} the DNA strand
   * @return {string} Counts in format "A C G T"
   */
  static parse(strand) {
    const nucleotideCounts = { A: 0, C: 0, G: 0, T: 0 };

    for( let n of strand ) {
      if( n in nucleotideCounts !== true ) throw new Error('Invalid nucleotide in strand');
      nucleotideCounts[n]++;
    }

    return Object.values(nucleotideCounts).join(' ');
  }

}
