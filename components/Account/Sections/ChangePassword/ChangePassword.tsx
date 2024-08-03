"use client";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import EditButton from "@/components/Common/CustomInput/EditButton";
import useChangePassword from "./useChangePassword";
import { UserType } from "@/redux/slices/usersSlice";

const ChangePassword = ({ user }: { user: UserType | null }) => {
  const { data, handleChange, handleEdit, editField } =
    useChangePassword();
  return (
    <div className=" flex flex-col gap-7">
      <CustomInput
        label="Current Password"
        placeholder="Current Password"
        value={data.currentPassword}
        onChange={handleChange}
        name="currentPassword"
        disabled={editField !== "password"}
      ></CustomInput>
      <CustomInput
        label="New Password"
        placeholder="New Password"
        value={data.password}
        onChange={handleChange}
        name="password"
        disabled={editField !== "password"}
      >
        <EditButton
          title={editField === "password" ? "Save" : "Edit"}
          onClick={() => handleEdit("password")}
          disabled={!!user?.provider && !!user?.providerId}
        />
      </CustomInput>
    </div>
  );
};

export default ChangePassword;
