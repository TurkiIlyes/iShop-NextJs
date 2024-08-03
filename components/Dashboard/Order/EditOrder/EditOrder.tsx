"use client";
import CustomButtons from "@/components/Common/CustomInput/CustomButtons";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import CustomSelect from "@/components/Common/CustomInput/CustomSelect";
import CustomTextArea from "@/components/Common/CustomInput/CustomTextArea";
import useEditOrder from "./useEditOrder";
import { OrderType } from "@/redux/slices/ordersSlice";

const EditOrder = ({ id }: { id: string }) => {
  const {
    statusData,
    paymentStatusData,

    orderData,

    handleChange,
    handleStatusChange,
    handlePaymentStatusChange,
    handleAddressChange,

    handleSubmit,
    handleReset,
  } = useEditOrder(id);
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-10 ">
      <div className=" flex flex-col gap-6">
        <CustomInput
          value={orderData.email}
          onChange={handleChange}
          label="Order Email"
          placeholder="Enter Order Email"
          name="email"
        />

        <CustomInput
          value={orderData.phone}
          onChange={handleChange}
          label="Order Phone"
          placeholder="Enter Order phone"
          name="phone"
        />

        <CustomSelect<OrderType["status"]>
          label="Status"
          value={orderData.status}
          onChange={handleStatusChange}
          data={statusData}
        />
        <CustomSelect<OrderType["paymentStatus"]>
          label="Payment Status"
          value={orderData.paymentStatus}
          onChange={handlePaymentStatusChange}
          data={paymentStatusData}
        />
      </div>
      <div className=" flex flex-col gap-10">
        <div className=" flex flex-col gap-6">
          <CustomTextArea
            value={orderData.address?.details}
            onChange={(e) => handleAddressChange(e, "details")}
            label="Address details"
            placeholder="Enter Address Details"
            name="details"
          />
          <CustomSelect<string>
            label="governorate"
            value={orderData.address?.governorate}
            onChange={(e) => handleAddressChange(e, "governorate")}
            data={statusData}
            name="governorate"
          />
          <CustomSelect<string>
            label="City"
            value={orderData.address?.city}
            onChange={(e) => handleAddressChange(e, "city")}
            data={statusData}
            name="city"
          />
          <CustomSelect<string>
            label="Postal code"
            value={orderData.address?.postalCode}
            onChange={(e) => handleAddressChange(e, "postalCode")}
            data={statusData}
            name="postalCode"
          />
        </div>
        <CustomButtons
          mainButtonOnCLick={handleSubmit}
          secondaryButtonOnCLick={handleReset}
        />
      </div>
    </div>
  );
};

export default EditOrder;
