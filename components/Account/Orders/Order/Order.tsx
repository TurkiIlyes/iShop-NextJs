import CopyIdButton from "../CopyIdButton";
import { OrderItemType } from "@/redux/slices/ordersSlice";
import ProductCard from "@/components/Basket/BasketPage/ProductCard/ProductCard";
import formatDate from "@/utils/formatDate";
import CancelOrderButton from "./CancelOrderButton";
import { fetchMyOrder } from "@/utils/Api/orderApi";

const Order = async ({ id }: { id: string }) => {
  const order = await fetchMyOrder(id);
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex flex-col gap-2 ">
        <div className=" flex gap-2 items-center">
          <span className=" text-sm text-grayscale-700 font-normal ">
            Order {order._id}
          </span>
          <CopyIdButton id={order._id} />
        </div>
        <span className="">
          {order.items.reduce((e, order) => {
            return e + order.quantity;
          }, 0)}{" "}
          products
        </span>
        <span className="">Total: {order.totalPrice.toFixed(2)} DT</span>
        <hr className=" border-gray-200" />
      </div>
      <div className=" flex flex-col gap-1 w-5/6 mx-auto ">
        <span className="">Products in your order</span>
        <div className=" px-4 py-4 border-[1px] border-grayscale-500 rounded-lg ">
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className=" w-fit px-2 py-1 text-xs text-white font-medium uppercase bg-success-800 rounded-sm ">
                Status {order.status}
              </span>
              <span className=" text-sm text-grayscale-900 font-medium ">
                Date: {formatDate(order.createdAt.toString())}
              </span>
            </div>
            {order.status === "pending" && <CancelOrderButton id={order._id} />}
          </div>
          {order?.items?.map((order: OrderItemType) => (
            <ProductCard
              key={order.productId._id}
              product={order.productId}
              quantity={order.quantity}
              id={order._id}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-4 w-5/6 mx-auto">
        <div className=" flex flex-col gap-2 w-1/2 py-2 border-[1px] border-grayscale-600 rounded-sm ">
          <span className=" ml-4">PAIEMENT</span>
          <hr className=" border-grayscale-600" />
          <div className=" flex flex-col gap-6 px-4 py-2 ">
            <div className=" flex flex-col gap-4 ">
              <span className="">Mode de paiement</span>
              <p className="">
                Payez plus tard à la livraison par carte bancaire ou par cash
              </p>
            </div>
            <div className=" flex flex-col gap-4 ">
              <span className="">Détails du paiement</span>
              <span className="">Sous-total: 0.10 TND</span>
              <span className="">Frais de livraison: 7.00 TND</span>
              <span className="">Total: 7.10 TND</span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 w-1/2 py-2 border-[1px] border-grayscale-600 rounded-sm ">
          <span className=" ml-4">LIVRAISON</span>
          <hr className=" border-grayscale-600" />
          <div className=" flex flex-col gap-6 px-4 py-2 ">
            <div className=" flex flex-col gap-4 ">
              <span className="">Méthode de livraison</span>
              <span className="">Livraison à domicile</span>
            </div>
            <div className=" flex flex-col gap-4 ">
              <span className="">Adresse de livraison</span>
              <span className="">Ilyess Torki</span>
              <span className="">Zahrouni</span>
              <span className="">El Hrairia, Tunis</span>
            </div>

            <div className=" flex flex-col gap-4 ">
              <span className="">Détails d&lsquo;expédition</span>
              <span className="">Livraison entre le 25 juin et le 29 juin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
