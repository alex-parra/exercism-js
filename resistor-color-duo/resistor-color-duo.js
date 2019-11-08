const colors = [
  { number: 0, color: 'Black' },
  { number: 1, color: 'Brown' },
  { number: 2, color: 'Red' },
  { number: 3, color: 'Orange' },
  { number: 4, color: 'Yellow' },
  { number: 5, color: 'Green' },
  { number: 6, color: 'Blue' },
  { number: 7, color: 'Violet' },
  { number: 8, color: 'Grey' },
  { number: 9, color: 'White' },
];

export const value = colorNames => {
  const [firstColor, secondColor] = colorNames;
  const { number: firstNumber } = colors.find(entry => entry.color.toLowerCase() === firstColor);
  const { number: secondNumber } = colors.find(entry => entry.color.toLowerCase() === secondColor);
  return Number(firstNumber + '' + secondNumber);
};
