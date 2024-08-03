import { UserType, updateUser } from "@/redux/slices/usersSlice";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { urlToFile } from "@/utils/UrlToFile";
import { customHandleChange, customImagesChange } from "@/utils/handlers";
import { useRouter } from "next/navigation";

type BasicDetailsType = {
  image: string;
  name: string;
  email: string;
};

const useBasicDetails = (user: UserType | null) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [data, setData] = useState<BasicDetailsType>({
    image: user?.image || "",
    name: user?.name || "",
    email: user?.email || "",
  });

  const [editField, setEditField] = useState<string>("");

  // useEffect(() => {
  //   if (user) {
  //     setData({
  //       image: user?.image || "",
  //       name: user?.name || "",
  //       email: user?.email || "",
  //     });
  //   }
  // }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customHandleChange(e, setData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customImagesChange<BasicDetailsType>(e, setData, "image", setImageFile);
  };

  const handleEdit = async (field: keyof BasicDetailsType) => {
    const formData = new FormData();
    if (field === editField) {
      if (field === "image") {
        const file = imageFile
          ? formData.append("image", imageFile)
          : data.image
          ? await urlToFile(data.image, "image.png", "image/png")
          : null;
        if (file) {
          formData.append("image", file);
        }
      } else {
        formData.append(field, data[field]);
      }

      dispatch(updateUser({ user: formData }));

      setImageFile(null);
      setEditField("");
      router.refresh();
    } else {
      setEditField(field);
    }
  };
  return { data, handleChange, handleImageChange, handleEdit, editField };
};

export default useBasicDetails;
