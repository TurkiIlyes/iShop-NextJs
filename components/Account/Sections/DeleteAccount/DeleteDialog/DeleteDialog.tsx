"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import useDeleteDialog from "./useDeleteDialog";

import DeleteButton from "@/components/Common/CustomInput/DeleteButton";

import CustomInput from "@/components/Common/CustomInput/CustomInput";
import { UserType } from "@/redux/slices/usersSlice";

const DeleteDialog = ({ user }: { user?: UserType | null }) => {
  const {
    isOpen,
    setIsOpen,
    password,
    handlePassword,
    isLoading,
    handleDelete,
  } = useDeleteDialog();
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DeleteButton onClick={() => setIsOpen(true)} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" py-2 text-error-900">
            sure you want to delete this Account ?
          </DialogTitle>
        </DialogHeader>
        {!user?.provider && !user?.providerId && (
          <CustomInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={handlePassword}
            name="password"
          ></CustomInput>
        )}

        <DialogFooter>
          <Button type="submit" disabled={isLoading} onClick={handleDelete}>
            Delete
          </Button>
          <DialogClose>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
