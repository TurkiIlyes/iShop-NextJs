import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteCustomer } from "@/redux/slices/customersSlice";
import { useEffect, useState } from "react";
import CustomDialog from "./CustomDialog";

const DeleteCustomerDialog = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const deleteSuccess = useAppSelector(
    (state) => state.customers.deleteSuccess
  );

  useEffect(() => {
    if (deleteSuccess) {
      setIsOpen(false);
    }
  }, [deleteSuccess, dispatch, id]);

  const handelDelete = () => {
    dispatch(deleteCustomer(id));
  };
  return (
    <CustomDialog
      label="Customer"
      id={id}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handelDelete={handelDelete}
    />
  );
};

export default DeleteCustomerDialog;
