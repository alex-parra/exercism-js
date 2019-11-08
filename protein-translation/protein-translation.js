/**
 * Split a string into chunks of specified size
 * @param {string} str The string to split into chunks
 * @param {int} chunkSize The length of each chunk
 * @return {string[]} Array of chunks found
 */
const strChunk = (str, chunkSize = 3) => {
  if (str == null) return [];

  const chunksCount = Math.floor(str.length / chunkSize);
  const lastChunkStartIndex = chunkSize * (chunksCount - 1);
  const chunks = [];
  for (let i = 0; i <= lastChunkStartIndex; i += chunkSize) {
    chunks.push(str.substr(i, chunkSize));
  }
  return chunks;
};

const aminoAcids = [
  { name: 'Methionine', codons: ['AUG'] },
  { name: 'Phenylalanine', codons: ['UUU', 'UUC'] },
  { name: 'Leucine', codons: ['UUA', 'UUG'] },
  { name: 'Serine', codons: ['UCU', 'UCC', 'UCA', 'UCG'] },
  { name: 'Tyrosine', codons: ['UAU', 'UAC'] },
  { name: 'Cysteine', codons: ['UGU', 'UGC'] },
  { name: 'Tryptophan', codons: ['UGG'] },
];

const stopCodons = ['UAA', 'UAG', 'UGA'];

/**
 * Translates a RNA string into corresponding list of amino acids
 * @param {string} rna RNA string
 * @return {string[]} List of Amino Acids that matched the RNA string
 */
export const translate = rna => {
  const protein = [];
  const codons = strChunk(rna);
  for (let codon of codons) {
    if (stopCodons.includes(codon)) break;
    const aminoAcid = aminoAcids.find(entry => entry.codons.includes(codon));
    if (!aminoAcid) throw new Error('Invalid codon');
    protein.push(aminoAcid.name);
  }
  return protein;
};
