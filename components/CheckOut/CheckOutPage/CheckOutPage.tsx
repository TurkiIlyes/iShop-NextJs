"use client";
import CheckOutSideBar from "@/components/SideBar/CheckOutSideBar/CheckOutSideBar";
import CheckoutTabs from "../CheckOutTabs/CheckOutTabs";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUser } from "@/redux/slices/usersSlice";
import { createOrder } from "@/redux/slices/ordersSlice";
import { useRouter } from "next/navigation";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";

const CheckOutPage = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("clientAddress");
  const [validTabs, setValidTabs] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useAppSelector((state) => state.users.user);
  const basketItems = useAppSelector((state) => state.basket.basket?.items);

  const [isLoading, executeCreateOrder] = useApiCallWithToast({
    apiCallFunction: () => dispatch(createOrder({ paymentType: "onDelivery" })),
    handleSuccess: () => {
      router.push("/account/orders");
    },
    messages: {
      loading: "Creating order...",
      success: "Order created successfully!",
      error: "Could not create order.",
    },
  });

  const validateTab = (tab: string = currentTab) => {
    switch (tab) {
      case "clientAddress":
        if (
          !user?.address?.details ||
          !user?.address?.governorate ||
          !user?.address?.city ||
          !user?.address?.postalCode
        ) {
          setValidTabs([]);
          return false;
        }
        return true;
      case "shippingDetails":
        if (basketItems?.length === 0) {
          setValidTabs(["clientAddress"]);
          return false;
        }
        return true;
      case "paymentDetails":
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateTab()) {
      setValidTabs([...validTabs, currentTab]);
      switch (currentTab) {
        case "clientAddress":
          setCurrentTab("shippingDetails");
          break;
        case "shippingDetails":
          setCurrentTab("paymentDetails");
          break;
        case "paymentDetails":
          executeCreateOrder();

          break;
        default:
          setCurrentTab("clientAddress");
      }
    }
  };

  const handleTabChange = (value: string) => {
    const tabsOrder = ["clientAddress", "shippingDetails", "paymentDetails"];
    const currentIndex = tabsOrder.indexOf(currentTab);
    const targetIndex = tabsOrder.indexOf(value);

    if (targetIndex === currentIndex + 2) {
      if (validateTab()) {
        if (validateTab("shippingDetails")) {
          setValidTabs(["clientAddress", "shippingDetails"]);
          setCurrentTab("paymentDetails");
        } else {
          setValidTabs(["clientAddress"]);
          setCurrentTab("shippingDetails");
        }
      }
    } else if (targetIndex === currentIndex + 1) {
      if (validateTab()) {
        setValidTabs([...validTabs, currentTab]);
        setCurrentTab(value);
      }
    } else {
      setCurrentTab(value);
    }
  };

  return (
    <div className=" bg-grayscale-200">
      <div className="container">
        <div className=" min-h-[80vh] flex max-lg:flex-col py-4 gap-16">
          <div className=" max-lg:w-full w-4/6 flex flex-col gap-8 py-6">
            <CheckoutTabs
              currentTab={currentTab}
              onTabChange={handleTabChange}
              validTabs={validTabs}
            />
          </div>
          <CheckOutSideBar handleNext={handleNext} currentTab={currentTab} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
