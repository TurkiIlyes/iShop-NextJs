import {
  faCircleDollarToSlot,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PayementDetailsSection = () => {
  return (
    <div className=" flex flex-col gap-8">
      <div className="">
        <span className=" text-sm text-grayscale-900 font-medium ">
          Pay later upon delivery by credit card or cash
        </span>
        <div className=" flex justify-between">
          <span className=" text-xs text-grayscale-800 font-normal">
            Paiement au moment de la livraison ou à nos points de relais une
            fois que votre commande est livrée
          </span>
          <FontAwesomeIcon icon={faHandHoldingDollar} size="1x" />
        </div>
      </div>
      <div className=" border-[1px] border-grayscale-500 rounded-sm">
        <ul className=" list-inside list-disc flex flex-col gap-6 px-4 py-4 text-xs text-grascale-800 font-medium ">
          <li className="">
            Choose to pay in cash or by credit card when your order is
            delivered.
          </li>
          <li className="">
            Enjoy the convenience of paying by credit card or cash at the time
            of delivery.
          </li>
          <li className="">
            Ensure the transaction is validated with your delivery driver for a
            smooth experience.
          </li>
          <li className="">
            Receive a real-time email confirmation once your payment is
            processed.
          </li>
        </ul>
        <div className=" flex justify-end gap-2 px-4 py-2 border-t-[1px] border-grayscale-500 ">
          <span className=" text-xs text-grayscale-900 font-semibold">
            we accept
          </span>
          <FontAwesomeIcon icon={faCircleDollarToSlot} />
        </div>
      </div>
    </div>
  );
};

export default PayementDetailsSection;
