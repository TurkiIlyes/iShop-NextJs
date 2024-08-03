import SectionBox from "../SectionBox";
import formatDate from "@/utils/formatDate";
import Link from "next/link";
import CopyIdButton from "./CopyIdButton";
import { fetchMyOrders } from "@/utils/Api/orderApi";

const Orders = async () => {
  const orders = await fetchMyOrders();
  return (
    <div className=" flex flex-col gap-8">
      <SectionBox title="Orders details">
        <div className=" flex flex-col gap-7">
          {orders?.map((order, i) => (
            <div
              key={i}
              className=" flex flex-col gap-3 px-5 py-4 bg-white shadow-[0px_0px_2px] shadow-grayscale-600 rounded-lg"
            >
              <div className="flex justify-between">
                <span className=" w-fit px-2 py-1 text-xs text-white font-medium uppercase bg-success-800 rounded-sm ">
                  Status {order.status}
                </span>
                <Link
                  href={`/account/orders/${order._id}`}
                  className=" text-sm text-success-900 font-medium "
                >
                  Details
                </Link>
              </div>
              <div className=" flex gap-2 items-center">
                <span className=" text-sm text-grayscale-700 font-normal ">
                  Order {order._id}
                </span>
                <CopyIdButton id={order._id} />
              </div>
              <div className="flex justify-between">
                <span className=" text-sm text-grayscale-900 font-medium ">
                  Date: {formatDate(order.createdAt.toString())}
                </span>
                <span className=" text-sm text-grayscale-900 font-medium ">
                  {+order.totalPrice.toFixed(2)} DT
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionBox>
    </div>
  );
};

export default Orders;
