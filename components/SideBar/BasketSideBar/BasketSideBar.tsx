import CheckoutButton from "@/components/NavBar/CartShopping/CheckoutButton";
import Summary from "../CheckOutSideBar/Summary";
import Coupon from "../CheckOutSideBar/Coupon";

const BasketSideBar = () => {
  return (
    <div className=" flex flex-col gap-4 max-lg:w-4/6 w-2/6 max-lg:m-auto lg:py-14 ">
      <Summary />
      <CheckoutButton href="/checkout" />
      <hr className="w-full rounded-full mt-2 border-grayscale-600" />

      <Coupon />
    </div>
  );
};

export default BasketSideBar;
