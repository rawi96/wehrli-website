export const formatPriceToCHF = (price?: number) => {
  if (!price) {
    return "";
  }

  return price.toLocaleString("de-CH", {
    style: "currency",
    currency: "CHF",
  });
};
