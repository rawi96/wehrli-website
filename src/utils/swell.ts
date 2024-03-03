import swell, { Category, Product } from "swell-js";

export const getAllCategories = async (): Promise<Category[]> => {
  initSwell();
  return (await swell.categories.list()).results;
};

export const getAllProducts = async (): Promise<Product[]> => {
  initSwell();
  return (await swell.products.list({ limit: 100 })).results;
};

export const getBestsellers = async (): Promise<Product[] | null> => {
  initSwell();
  return (await swell.products.list({ limit: 100 })).results.filter((product) =>
    product.tags?.includes("bestseller"),
  );
};

export const getProductsByCategory = async (
  slug: string,
): Promise<Product[] | null> => {
  initSwell();
  return (
    await swell.products.list({
      category: slug,
      limit: 100,
      expand: ["variants"],
    })
  ).results;
};

export const getCategoryBySlug = async (
  slug: string,
): Promise<Category | null> => {
  initSwell();
  return await swell.categories.get(slug);
};

export const getProductBySlug = async (
  slug: string,
): Promise<Product | null> => {
  initSwell();
  return await swell.products.get(slug);
};

export const initSwell = () => {
  swell.init(
    process.env.NEXT_PUBLIC_SWELL_STORE_ID || "",
    process.env.NEXT_PUBLIC_SWELL_API_KEY || "",
  );
};
