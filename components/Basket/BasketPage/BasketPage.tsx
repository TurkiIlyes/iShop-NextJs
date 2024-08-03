import CheckOutSideBar from "@/components/SideBar/CheckOutSideBar/CheckOutSideBar";
import BasketHeader from "./BasketHeader";
import ProductsList from "./ProductsList/ProductsList";
import EditableProductsList from "./EditableProductsList/EditableProductsList";
import BasketSideBar from "@/components/SideBar/BasketSideBar/BasketSideBar";

const BasketPage = () => {
  return (
    <div className=" bg-grayscale-200">
      <div className="container">
        <div className=" min-h-[80vh] flex max-lg:flex-col py-4 gap-16">
          <div className=" max-lg:w-full w-4/6 flex flex-col gap-8 py-6">
            <BasketHeader />
            <EditableProductsList />
          </div>
          <BasketSideBar />
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
