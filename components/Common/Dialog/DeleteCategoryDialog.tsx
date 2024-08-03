import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteCategory } from "@/redux/slices/categoriesSlice";
import { useEffect, useState } from "react";
import CustomDialog from "./CustomDialog";

const DeleteCategoryDialog = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const deleteSuccess = useAppSelector(
    (state) => state.categories.deleteSuccess
  );

  useEffect(() => {
    if (deleteSuccess) {
      setIsOpen(false);
    }
  }, [deleteSuccess, dispatch, id]);

  const handelDelete = () => {
    dispatch(deleteCategory(id));
  };
  return (
    <CustomDialog
      label="Category"
      id={id}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handelDelete={handelDelete}
    />
  );
};

export default DeleteCategoryDialog;
