"use client";
import CustomButtons from "@/components/Common/CustomInput/CustomButtons";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import CustomSelect from "@/components/Common/CustomInput/CustomSelect";
import CustomSelectImages from "@/components/Common/CustomInput/CustomSelectImages";
import CustomTextArea from "@/components/Common/CustomInput/CustomTextArea";
import useEditProduct from "./useEditProduct";
import CustomPicker from "@/components/Common/CustomInput/CustomPicker";

const EditProduct = ({ id }: { id: string }) => {
  const {
    categorysData,
    statusData,
    colorsData,
    sizesData,
    productData,

    selectedColors,
    selectedSizes,

    handleChange,
    handleCategoryChange,
    handleStatusChange,
    handleImageChange,
    handleColorChange,
    handleSizeChange,

    handleSubmit,
    handleReset,
  } = useEditProduct(id);
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-10 ">
      <div className=" flex flex-col gap-6">
        <CustomInput
          value={productData.title}
          onChange={handleChange}
          label="Product Title"
          placeholder="Enter Product Title"
          name="title"
        />
        <CustomTextArea
          value={productData.description}
          onChange={handleChange}
          label="Product Description"
          placeholder="Enter Product Description"
          name="description"
        />

        <CustomSelect<string>
          label="Category"
          value={productData.category}
          onChange={handleCategoryChange}
          data={categorysData}
        />
        <div className="flex gap-5">
          <CustomInput
            label="Price"
            value={productData.price}
            onChange={handleChange}
            placeholder="Enter Price"
            name="price"
          />
          <CustomInput
            label="Discount"
            value={productData.discount}
            onChange={handleChange}
            placeholder="Enter Discount"
            name="discount"
          />
        </div>
        <div className="flex gap-5">
          <CustomInput
            label="SKU"
            value={productData.sku}
            onChange={handleChange}
            placeholder="Enter SKU"
            name="sku"
          />
          <CustomInput
            label="Stock Quantity"
            value={productData.quantity}
            onChange={handleChange}
            placeholder="Enter Stock Quantity"
            name="quantity"
          />
        </div>

        <CustomSelect<"InStock" | "OutOfStock" | "Discontinued">
          label="Status"
          value={productData.status}
          onChange={handleStatusChange}
          data={statusData}
        />
      </div>
      <div className=" flex flex-col gap-10">
        <CustomSelectImages
          label="Product Gallery"
          imageCover={productData.imageCover || ""}
          images={productData.images || []}
          handleImageChange={handleImageChange}
        />
        <CustomPicker
          label="Colors"
          selectedData={selectedColors || []}
          handleChange={handleColorChange}
          data={colorsData || []}
        />
        <CustomPicker
          label="Sizes"
          selectedData={selectedSizes || []}
          handleChange={handleSizeChange}
          data={sizesData || []}
        />
        <CustomButtons
          mainButtonOnCLick={handleSubmit}
          secondaryButtonOnCLick={handleReset}
        />
      </div>
    </div>
  );
};

export default EditProduct;
