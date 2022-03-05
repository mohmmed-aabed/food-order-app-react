const formatPriceDollar = (price) => {
  return `$${(price / 100).toFixed(2)}`;
};

export default formatPriceDollar;
