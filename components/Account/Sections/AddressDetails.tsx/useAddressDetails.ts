import { UserType, updateUser } from "@/redux/slices/usersSlice";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { customHandleChange, handleChangeSelect } from "@/utils/handlers";
import { validateFormFields } from "@/utils/validateFormFields";
import { verifyAddressValidationRules } from "@/utils/validationRules";
import { handleError } from "@/utils/handleError";
import toast from "react-hot-toast";

type Address = {
  details: string;
  governorate: string;
  city: string;
  postalCode: string;
};

const useAddressDetails = (user: UserType | null) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<Address>({
    details: user?.address?.details || "",
    governorate: user?.address?.governorate || "",
    city: user?.address?.city || "",
    postalCode: user?.address?.postalCode || "",
  });

  const [editField, setEditField] = useState<keyof Address | "">("");

  useEffect(() => {
    if (user) {
      setData({
        details: user?.address?.details || "",
        governorate: user?.address?.governorate || "",
        city: user?.address?.city || "",
        postalCode: user?.address?.postalCode || "",
      });
    }
  }, [user]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    customHandleChange(e, setData);
  };
  const customHandleChangeSelect = (value: string, name?: string) => {
    handleChangeSelect(setData, value, name || "");
  };

  const handleEdit = (field: keyof Address) => {
    const dataToValidate: Record<string, string> = {
      [editField]: data[editField as keyof Address],
    };
    const newErrors = validateFormFields(
      dataToValidate,
      verifyAddressValidationRules
    );
    if (Object.keys(newErrors).length > 0) {
      handleError({ customError: true, errors: newErrors });
      return;
    }
    if (field === editField) {
      const formData = new FormData();
      formData.append(`address.${field}`, data[field]);
      dispatch(updateUser({ user: formData })).then((e: any) => {
        if (!e.error) {
          toast.success(`${field} updated successfully`);
        }
      });

      setEditField("");
    } else {
      setEditField(field);
    }
  };
  return {
    data,
    handleChange,
    customHandleChangeSelect,
    handleEdit,
    editField,
  };
};

export default useAddressDetails;
