export const getRandomColor = () => {
  const random = Math.floor(Math.random() * 568139)
    .toString()
    .padStart(6, 0);
  return `#${random}`;
};
