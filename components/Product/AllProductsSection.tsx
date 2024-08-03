import ProductCard from "./ProductCard/ProductCard";
import SectionHeader from "../Common/SectionHeader";
import PrimaryButton from "../Common/PrimaryButton";
import { ProductType } from "@/redux/slices/productsSlice";

const AllProductsSection = ({ products }: { products: ProductType[] }) => {
  return (
    <div className=" container  ">
      <SectionHeader title="Categories" description="Explore Our Products" />
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((e, i) => {
          return (
            <ProductCard
              key={i}
              id={e._id}
              title={e.title}
              discount={e.discount}
              price={e.price}
              priceAfterDiscount={e.priceAfterDiscount}
              imageCover={e.imageCover}
              ratingsAverage={e.ratingsAverage}
              ratingsQuantity={e.ratingsQuantity}
            />
          );
        })}
      </div>
      <div className="flex justify-center py-8">
        <PrimaryButton title="View All Products" />
      </div>
    </div>
  );
};

export default AllProductsSection;
