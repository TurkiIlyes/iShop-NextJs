"use client";
import CustomSelect from "@/components/Common/CustomInput/CustomSelect";
import CustomTextArea from "@/components/Common/CustomInput/CustomTextArea";
import EditButton from "@/components/Common/CustomInput/EditButton";
import { UserType } from "@/redux/slices/usersSlice";
import useAddressDetails from "./useAddressDetails";

const citys = [
  {
    value: "electronics",
    label: "Electronics",
  },
  {
    value: "clothing",
    label: "Clothing",
  },
  {
    value: "home-garden",
    label: "Home & Garden",
  },
  {
    value: "sports",
    label: "Sports",
  },
  {
    value: "toys",
    label: "Toys",
  },
];

const AddressDetailsSection = ({ user }: { user: UserType | null }) => {
  const {
    data,
    handleChange,
    customHandleChangeSelect,
    handleEdit,
    editField,
  } = useAddressDetails(user);

  return (
    <div className=" flex flex-col gap-7">
      <CustomTextArea
        label="Address Details"
        placeholder="Street Address"
        value={data.details || ""}
        onChange={handleChange}
        name="details"
        disabled={editField !== "details"}
      >
        <EditButton
          title={editField === "details" ? "Save" : "Edit"}
          onClick={() => handleEdit("details")}
        />
      </CustomTextArea>

      <CustomSelect
        label="Governorate"
        data={citys}
        disabled={editField !== "governorate"}
        value={data.governorate || ""}
        onChange={customHandleChangeSelect}
        name="governorate"
      >
        <EditButton
          title={editField === "governorate" ? "Save" : "Edit"}
          onClick={() => handleEdit("governorate")}
        />
      </CustomSelect>

      <CustomSelect
        label="City"
        data={citys}
        disabled={editField !== "city"}
        value={data.city || ""}
        onChange={customHandleChangeSelect}
        name="city"
      >
        <EditButton
          title={editField === "city" ? "Save" : "Edit"}
          onClick={() => handleEdit("city")}
        />
      </CustomSelect>

      <CustomSelect
        label="Postal Code"
        data={citys}
        disabled={editField !== "postalCode"}
        value={data.postalCode || ""}
        onChange={customHandleChangeSelect}
        name="postalCode"
      >
        <EditButton
          title={editField === "postalCode" ? "Save" : "Edit"}
          onClick={() => handleEdit("postalCode")}
        />
      </CustomSelect>
    </div>
  );
};
export default AddressDetailsSection;
