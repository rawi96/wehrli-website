import { Bestsellers } from "@/components/bestsellers";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentContainer } from "@/components/content-container";
import { Feedback } from "@/components/feedback";
import { Footer } from "@/components/footer";
import { NavWithTitle } from "@/components/nav-with-title";
import { NotFound } from "@/components/not-found";
import { TitleSection } from "@/components/title-section";
import { getLowestPriceFromVariantsOrProductPrice } from "@/utils/price";
import {
  getAllCategories,
  getBestsellers,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/utils/swell";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const allCategories = await getAllCategories();

  return allCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const category = await getCategoryBySlug(slug);

  return {
    title: category?.name || "",
    description: category?.description || "",
  };
}

export default async function CategoryPage({ params: { slug } }: Props) {
  const category = await getCategoryBySlug(slug);
  const products = await getProductsByCategory(slug);
  const bestsellers = await getBestsellers();

  if (!category) {
    return <NotFound />;
  }

  return (
    <>
      <NavWithTitle />
      <ContentContainer>
        <Breadcrumbs
          pages={[
            { name: "Shop", href: "/shop" },
            { name: category.name, href: category.slug },
          ]}
        />
        <TitleSection title={category.name} />
        <div
          className="text-lg text-gray-600 mb-10"
          dangerouslySetInnerHTML={{
            __html: category.description,
          }}
        />
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 pb-20 pt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <Link
              key={product.id}
              href={`/shop/produkte/${product.slug}`}
              className="group flex flex-col justify-between h-full"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                {product.images?.length && product.images[0].file?.url && (
                  <Image
                    src={product.images[0].file.url}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    width={1000}
                    height={1000}
                  />
                )}
              </div>
              <div className="flex flex-col justify-end mt-4 flex-1">
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {getLowestPriceFromVariantsOrProductPrice(product)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {bestsellers && bestsellers?.length > 0 && (
          <Bestsellers bestsellers={bestsellers} />
        )}

        <Feedback />
      </ContentContainer>
      <Footer />
    </>
  );
}
