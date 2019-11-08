
export const transform = (oldData) => {
  return Object.keys(oldData).reduce((newData, point) => {
    return oldData[point].reduce((pointLetters, letter) => ({
      ...pointLetters,
      [letter.toLowerCase()]: Number(point),
    }), newData);
  }, {});
};
