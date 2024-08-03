"use client";
import CustomButtons from "@/components/Common/CustomInput/CustomButtons";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import CustomSelect from "@/components/Common/CustomInput/CustomSelect";
import CustomTextArea from "@/components/Common/CustomInput/CustomTextArea";
import useCreateCustomer from "./useCreateCustomer";
import CustomSelectImage from "@/components/Common/CustomInput/CustomSelectImage";

const CreateCustomer = () => {
  const {
    statusData,

    customerData,

    handleChange,
    handleImageChange,
    handleStatusChange,
    handleAddressChange,

    handleSubmit,
    handleReset,
  } = useCreateCustomer();
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-10 ">
      <div className=" flex flex-col gap-6">
        <CustomInput
          value={customerData.name}
          onChange={handleChange}
          label="Customer Name"
          placeholder="Enter Customer name"
          name="name"
        />

        <CustomInput
          value={customerData.phone}
          onChange={handleChange}
          label="Customer Phone"
          placeholder="Enter Customer phone"
          name="phone"
        />
        <CustomTextArea
          value={customerData.address?.details}
          onChange={(e) => handleAddressChange(e, "details")}
          label="Address details"
          placeholder="Enter Address Details"
        />
        <CustomSelect<string>
          label="governorate"
          value={customerData.address?.governorate}
          onChange={(e) => handleAddressChange(e, "governorate")}
          data={statusData}
        />
        <CustomSelect<string>
          label="City"
          value={customerData.address?.city}
          onChange={(e) => handleAddressChange(e, "city")}
          data={statusData}
        />
        <CustomSelect<string>
          label="Postal code"
          value={customerData.address?.postalCode}
          onChange={(e) => handleAddressChange(e, "postalCode")}
          data={statusData}
        />
        <CustomSelect<"active" | "inactive">
          label="Status"
          value={customerData.status}
          onChange={handleStatusChange}
          data={statusData}
        />
      </div>
      <div className=" flex flex-col gap-10">
        <div className=" flex flex-col gap-6">
          <CustomSelectImage
            label="Customer Image"
            image={customerData.image || ""}
            handleImageChange={handleImageChange}
          />
          <CustomInput
            value={customerData.email}
            onChange={handleChange}
            label="Customer Email"
            placeholder="Enter Customer email"
            name="email"
          />
          <CustomInput
            value={customerData.password}
            onChange={handleChange}
            label="Customer Password"
            placeholder="Enter Customer Password"
            name="password"
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

export default CreateCustomer;
