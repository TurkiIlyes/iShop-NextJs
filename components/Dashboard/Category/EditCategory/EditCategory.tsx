"use client";
import CustomButtons from "@/components/Common/CustomInput/CustomButtons";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import CustomSelect from "@/components/Common/CustomInput/CustomSelect";
import useEditCategory from "./useEditCategory";
import CustomSelectImage from "@/components/Common/CustomInput/CustomSelectImage";

const EditCategory = ({ id }: { id: string }) => {
  const {
    statusData,

    categoryData,

    handleChange,
    handleImageChange,
    handleStatusChange,

    handleSubmit,
    handleReset,
  } = useEditCategory(id);
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-10 ">
      <div className=" flex flex-col gap-6">
        <CustomInput
          value={categoryData.name}
          onChange={handleChange}
          label="Category Name"
          placeholder="Enter Category name"
          name="name"
        />
        <CustomSelect<"Active" | "Inactive" | "Archived">
          label="Status"
          value={categoryData.status}
          onChange={handleStatusChange}
          data={statusData}
        />
      </div>
      <div className=" flex flex-col gap-10">
        <div className=" flex flex-col gap-6">
          <CustomSelectImage
            label="Category Image"
            image={categoryData.image || ""}
            handleImageChange={handleImageChange}
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

export default EditCategory;
