const generatePriceList = positions => {
  const prices = [];
  for (let index = 1; index < positions; index += 1) {
    const price = index * 10;
    prices.push({ value: price, label: price + '$' });
  }

  return prices;
};

export default generatePriceList;
