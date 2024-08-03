"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getBasket } from "@/redux/slices/basketSlice";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import EditableProductsList from "../../Basket/BasketPage/EditableProductsList/EditableProductsList";
import BasketHeader from "../../Basket/BasketPage/BasketHeader";
import CheckoutButton from "./CheckoutButton";

const CartShopping = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const createSuccess = useAppSelector((state) => state.orders.createSuccess);
  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch, createSuccess]);

  const productsCount = useAppSelector(
    (state) => state.basket.basket?.items.length
  );
  return (
    <div className=" relative">
      <Sheet
        open={open}
        onOpenChange={() => {
          setOpen(!open);
        }}
      >
        <SheetTrigger>
          <FontAwesomeIcon icon={faCartShopping} size="1x" />
          <div className="absolute -top-2.5 -right-2.5 flex justify-center items-center w-5 h-5 bg-success-900 text-xs text-white font-medium rounded-full">
            {productsCount || 0}
          </div>
        </SheetTrigger>
        <SheetContent className=" max-w-[400px] py-10 bg-grayscale-300 overflow-y-scroll basketScroll">
          <BasketHeader />
          <EditableProductsList />
          <div className=" flex flex-col gap-2 py-4 text-sm font-medium text-grayscale-900">
            <div className="flex justify-between items-center">
              <span className="">Subtotat</span>
              <span className="">50 DT</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="">Shipping</span>
              <span className="">7 DT</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="">Totat</span>
              <span className="">57 DT</span>
            </div>
          </div>

          <CheckoutButton href="/basket" onClick={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartShopping;
