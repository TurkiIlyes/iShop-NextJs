import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientAddress from "./ClientAddress";
import ShippingDetails from "./ShippingDetails";
import PayementDetails from "./PayementDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck as solidCircleCheck } from "@fortawesome/free-solid-svg-icons";
// defaultValue="clientAddress"

const tabs = [
  {
    value: "clientAddress",
    label: "Client Address",
  },
  {
    value: "shippingDetails",
    label: "Shipping Details",
  },
  {
    value: "paymentDetails",
    label: "Payment Details",
  },
];

const CheckoutTabs = ({
  currentTab,
  onTabChange,
  validTabs,
}: {
  currentTab: string;
  onTabChange: (value: string) => void;
  validTabs: string[];
}) => {
  return (
    <Tabs value={currentTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {tabs.map((e, i) => {
          return (
            <TabsTrigger
              value={e.value}
              key={i}
              className=" flex items-center gap-2"
            >
              {validTabs.includes(e.value) ? (
                <FontAwesomeIcon icon={solidCircleCheck} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faCircleCheck} size="lg" />
              )}
              {e.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
      <TabsContent value="clientAddress">
        <ClientAddress />
      </TabsContent>
      <TabsContent value="shippingDetails">
        <ShippingDetails />
      </TabsContent>
      <TabsContent value="paymentDetails">
        <PayementDetails />
      </TabsContent>
    </Tabs>
  );
};

export default CheckoutTabs;
