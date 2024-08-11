import CategoriesSection from "@/components/Category/CategoriesSection";
import Hero from "@/components/Home/Hero/Hero";
import ProductSection from "@/components/Product/ProductSection";
import AllProductsSection from "@/components/Product/AllProductsSection";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import CategorySection from "@/components/Category/CategorySection";
import Features from "@/components/Home/Features/Features";
import { fetchProducts } from "@/utils/Api/productApi";

export default async function Home() {
  const latestProducts = await fetchProducts(`?sort=createdAt&limit=20`);

  const oldestProducts = await fetchProducts(`?sort=-createdAt&limit=20`);
  return (
    <main className=" flex flex-col gap-10 bg-grayscale-200 ">
      <Hero />

      <ProductSection
        data={latestProducts}
        prevEl="flash-seles-prev"
        nextEl="flash-seles-next"
        buttom="View All Products"
      />
      {/* <CategoriesSection
        prevEl="category-seles-prev"
        nextEl="category-seles-next"
      /> */}
      <ProductSection
        data={oldestProducts}
        prevEl="test-seles-prev"
        nextEl="test-seles-next"
        right="View All"
      />
      <CategorySection />

      <AllProductsSection products={latestProducts.slice(0, 10)} />

      <NewArrival />
      <Features />
    </main>
  );
}
