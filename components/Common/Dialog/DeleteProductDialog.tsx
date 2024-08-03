import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteProduct } from "@/redux/slices/productsSlice";
import { useEffect, useState } from "react";
import CustomDialog from "./CustomDialog";

const DeleteProductDialog = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const deleteSuccess = useAppSelector((state) => state.products.deleteSuccess);

  useEffect(() => {
    if (deleteSuccess) {
      setIsOpen(false);
    }
  }, [deleteSuccess, dispatch, id]);

  const handelDelete = () => {
    dispatch(deleteProduct(id));
  };
  return (
    <CustomDialog
      label="Product"
      id={id}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handelDelete={handelDelete}
    />
  );
};

export default DeleteProductDialog;
