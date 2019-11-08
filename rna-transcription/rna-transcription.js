const dnaToRna = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
};

/**
 * Convert a DNA strand to it's RNA complement. Invalid DNA nucleotides are skipped.
 * @param {string} dna The DNA strand to convert
 * @return {string} The RNA complement
 */
export const toRna = dna => {
  if( typeof dna !== 'string' ) throw new Error(`Argument 'dna' must be a string`);

  return dna.split('').reduce((rna, dnaNucleotide) => {
    const rnaNucleotide = dnaToRna[dnaNucleotide] || '';
    return rna + rnaNucleotide;
  }, '');
};
