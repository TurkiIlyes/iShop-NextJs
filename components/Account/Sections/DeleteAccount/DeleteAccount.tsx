import { UserType } from "@/redux/slices/usersSlice";
import DeleteDialog from "./DeleteDialog/DeleteDialog";

const DeleteAccount = ({ user }: { user?: UserType | null }) => {
  return (
    <div className=" flex flex-col gap-6">
      <p className=" text-sm font-medium text-grayscale-900">
        Delete your account and all of your source data. This is irreversible.
      </p>
      <DeleteDialog user={user} />
    </div>
  );
};

export default DeleteAccount;
