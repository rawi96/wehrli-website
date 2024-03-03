import { Product, Variant } from "swell-js";

export const formatPriceToCHF = (price?: number) => {
  if (!price) {
    return "";
  }

  return price.toLocaleString("de-CH", {
    style: "currency",
    currency: "CHF",
  });
};

export const getLowestPriceFromVariantsOrProductPrice = (product: Product) => {
  const variants = product.variants as unknown as
    | { results: Variant[] }
    | undefined;
  if (variants && variants.results.length > 0) {
    const variantsWithPrice = variants.results.filter(
      (variant) => typeof variant.price === "number",
    );

    const prices = variantsWithPrice.map((variant) => variant.price as number);

    return `Ab ${formatPriceToCHF(Math.min(...prices))}`;
  }
  return formatPriceToCHF(product.price);
};
