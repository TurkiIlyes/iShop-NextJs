import ProductCard from "@/components/product/ProductCard/ProductCard";
import Paginator from "@/components/utils/Paginator";

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

const ProductsList = () => {
  return (
    <div className=" w-full h-full">
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 py-14 bg-grayscale-200 rounded-xl">
        {data.map((e, i) => {
          return (
            <ProductCard
              key={i}
              title={e.title}
              discount={e.discount}
              price={e.price}
              priceAfterDiscount={e.priceAfterDiscount}
              image={e.img}
              rating={e.rating}
              ratingCount={e.ratingCount}
            />
          );
        })}
      </div>
      <Paginator />
    </div>
  );
};

export default ProductsList;
