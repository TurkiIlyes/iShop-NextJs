import CategorysSection from "@/components/category/CategorysSection";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import TopHeader from "@/components/header/TopHeader";
import ProductSection from "@/components/product/ProductSection";
import AllProductsSection from "@/components/product/AllProductsSection";
import PrimaryButton from "@/components/utils/PrimaryButton";
import NewArrivalSection from "@/components/newArrival/NewArrivalSection";
import CategorySection from "@/components/category/CategorySection";
import FeaturesSection from "@/components/features/FeaturesSection";
import Footer from "@/components/footer/Footer";

const data = [
  {
    title: "PS5 GAMEPAD",
    discount: 40,
    price: 69.99,
    priceAfterDiscount: 41.99,
    img: "/imgs/product1.png",
    rating: 5,
    ratingCount: 75,
  },
  {
    title: "FHD Laptop",
    discount: 5,
    price: 767.99,
    priceAfterDiscount: 729.59,
    img: "/imgs/product2.png",
    rating: 4.5,
    ratingCount: 1049,
  },
  {
    title: "AK-900 WIRED KEYBOARD",
    discount: 35,
    price: 8.66,
    priceAfterDiscount: 5.63,
    img: "/imgs/product3.png",
    rating: 4,
    ratingCount: 88,
  },
  {
    title: "IPS LCD GAMING MONITOR",
    discount: 30,
    price: 244.8,
    priceAfterDiscount: 171.36,
    img: "/imgs/product4.png",
    rating: 5,
    ratingCount: 99,
  },
  {
    title: "S-SERIES COMFORT CHAIR",
    discount: 25,
    price: 39.99,
    priceAfterDiscount: 29.99,
    img: "/imgs/product5.png",
    rating: 4.5,
    ratingCount: 99,
  },
  {
    title: "GUCCI DUFFLE BAG",
    discount: 10,
    price: 2980,
    priceAfterDiscount: 2682,
    img: "/imgs/product6.png",
    rating: 3.5,
    ratingCount: 159,
  },
];

export default function Home() {
  return (
    <main className=" bg-grayscale-200 ">
      <TopHeader />
      <Header />
      <Hero />

      <ProductSection
        data={data}
        prevEl="flash-seles-prev"
        nextEl="flash-seles-next"
        buttom="View All Products"
      />
      <CategorysSection
        prevEl="category-seles-prev"
        nextEl="category-seles-next"
      />
      <ProductSection
        data={data}
        prevEl="test-seles-prev"
        nextEl="test-seles-next"
        right="View All"
      />
      <CategorySection />

      <AllProductsSection data={data.slice(0, 6)} />

      <NewArrivalSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
