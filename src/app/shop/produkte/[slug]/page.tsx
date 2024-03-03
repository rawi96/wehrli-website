import { Bestsellers } from "@/components/bestsellers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentContainer } from "@/components/content-container";
import { Feedback } from "@/components/feedback";
import { Footer } from "@/components/footer";
import { NavWithTitle } from "@/components/nav-with-title";
import {
  getAllProducts,
  getBestsellers,
  getProductBySlug,
} from "@/utils/swell";
import { Metadata } from "next";
import { ProductDetail } from "../../../../components/product-detail";
import { NotFound } from "@/components/not-found";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const allProducts = await getAllProducts();

  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const product = await getProductBySlug(slug);

  return {
    title: product?.name || "",
    description: product?.description || "",
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProductBySlug(slug);
  const bestsellers = await getBestsellers();

  const generateBreadcrumps = () => {
    const breadcrumpArray = [];

    breadcrumpArray.push({ name: "Shop", href: "/shop" });

    const firstCategoryOfProduct = product?.categories
      ? (product.categories[0] as { name: string; slug: string })
      : null;

    if (
      firstCategoryOfProduct &&
      firstCategoryOfProduct.name &&
      firstCategoryOfProduct.slug
    ) {
      breadcrumpArray.push({
        name: firstCategoryOfProduct.name,
        href: `/shop/kategorien/${firstCategoryOfProduct.slug}`,
      });
    }

    if (product) {
      breadcrumpArray.push({
        name: product.name,
        href: `/shop/produkte/${product.slug}`,
      });
    }

    return breadcrumpArray;
  };

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <NavWithTitle />
      <ContentContainer>
        <Breadcrumbs pages={generateBreadcrumps()} />
        <ProductDetail product={product} />

        {bestsellers && bestsellers?.length > 0 && (
          <Bestsellers bestsellers={bestsellers} />
        )}

        <Feedback />
      </ContentContainer>
      <Footer />
    </>
  );
}
