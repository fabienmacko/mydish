export default (price: number) => {
  const priceString = price.toString();

  const mainPrice = priceString.slice(0, priceString.length - 2);
  const cents = priceString.slice(priceString.length - 2, priceString.length);

  const formattedPrice = parseInt(cents) > 0 ? mainPrice + ',' + cents : mainPrice;

  return formattedPrice;
}