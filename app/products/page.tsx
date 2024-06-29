import FilterSideBar from "@/components/product/ProductsPage/FilterSideBar/FilterSideBar";
import ProductsList from "@/components/product/ProductsPage/ProductsList";

const page = () => {
  return (
    <div className=" bg-grayscale-400">
      <div className="container">
        <div className=" flex gap-6 py-4">
          <FilterSideBar />
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default page;
