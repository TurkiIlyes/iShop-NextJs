"use client";
import CustomButtons from "@/components/Common/CustomInput/CustomButtons";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import CustomSelect from "@/components/Common/CustomInput/CustomSelect";
import CustomSelectImages from "@/components/Common/CustomInput/CustomSelectImages";
import CustomTextArea from "@/components/Common/CustomInput/CustomTextArea";
import useCreateProduct from "./useCreateProduct";
import CustomPicker from "@/components/Common/CustomInput/CustomPicker";
import axios from "@/utils/axios";

const products = [
  {
    title: "FHD Laptop",
    description:
      "A high-performance Full HD laptop ideal for both work and play, featuring a sleek design and powerful internals to handle demanding tasks.",
    discount: 5,
    price: 767.99,
    priceAfterDiscount: 729.59,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.5,
    ratingsAveragesQuantity: 1049,
    quantity: 30,
  },
  {
    title: "AK-900 Wired Keyboard",
    description:
      "The AK-900 Wired Keyboard offers responsive keys and durable construction, making it an excellent choice for both casual and professional typing.",
    discount: 35,
    price: 8.66,
    priceAfterDiscount: 5.63,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4,
    ratingsAveragesQuantity: 88,
    quantity: 100,
  },
  {
    title: "IPS LCD Gaming Monitor",
    description:
      "Immerse yourself in stunning visuals with the IPS LCD Gaming Monitor, offering vibrant colors and wide viewing angles for a superior gaming experience.",
    discount: 30,
    price: 244.8,
    priceAfterDiscount: 171.36,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 5,
    ratingsAveragesQuantity: 99,
    quantity: 20,
  },
  {
    title: "S-Series Comfort Chair",
    description:
      "The S-Series Comfort Chair provides ergonomic support and plush cushioning, perfect for long hours of work or gaming with optimal comfort.",
    discount: 25,
    price: 39.99,
    priceAfterDiscount: 29.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.5,
    ratingsAveragesQuantity: 99,
    quantity: 40,
  },
  {
    title: "Gucci Duffle Bag",
    description:
      "Elevate your travel style with the Gucci Duffle Bag, crafted from premium materials and featuring a spacious interior to carry your essentials in luxury.",
    discount: 10,
    price: 2980,
    priceAfterDiscount: 2682,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 3.5,
    ratingsAveragesQuantity: 159,
    quantity: 15,
  },
  {
    title: "Wireless Earbuds",
    description:
      "Experience true wireless freedom with these compact and comfortable earbuds, offering high-quality sound and noise cancellation features.",
    discount: 15,
    price: 149.99,
    priceAfterDiscount: 127.49,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.2,
    ratingsAveragesQuantity: 300,
    quantity: 60,
  },
  {
    title: "4K Ultra HD TV",
    description:
      "Enjoy crystal-clear picture quality with the 4K Ultra HD TV, featuring vibrant colors and smart technology for a top-notch viewing experience.",
    discount: 20,
    price: 899.99,
    priceAfterDiscount: 719.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.8,
    ratingsAveragesQuantity: 215,
    quantity: 25,
  },
  {
    title: "Bluetooth Speaker",
    description:
      "Portable and powerful, this Bluetooth speaker delivers high-quality sound and long battery life, making it perfect for on-the-go listening.",
    discount: 25,
    price: 89.99,
    priceAfterDiscount: 67.49,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.6,
    ratingsAveragesQuantity: 142,
    quantity: 70,
  },
  {
    title: "Gaming Mouse",
    description:
      "The Gaming Mouse features adjustable DPI settings and customizable buttons for precision control and enhanced gaming performance.",
    discount: 10,
    price: 49.99,
    priceAfterDiscount: 44.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.7,
    ratingsAveragesQuantity: 85,
    quantity: 90,
  },
  {
    title: "Smartwatch",
    description:
      "Track your fitness and stay connected with the Smartwatch, featuring a sleek design and a variety of health-monitoring features.",
    discount: 30,
    price: 199.99,
    priceAfterDiscount: 139.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.4,
    ratingsAveragesQuantity: 190,
    quantity: 50,
  },
  {
    title: "Home Security Camera",
    description:
      "Keep your home safe with this high-definition security camera, offering real-time monitoring and motion detection features.",
    discount: 15,
    price: 129.99,
    priceAfterDiscount: 110.49,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.3,
    ratingsAveragesQuantity: 75,
    quantity: 35,
  },
  {
    title: "Electric Toothbrush",
    description:
      "Achieve a deeper clean with the Electric Toothbrush, featuring multiple brushing modes and a long-lasting battery for a superior oral care experience.",
    discount: 20,
    price: 79.99,
    priceAfterDiscount: 63.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.8,
    ratingsAveragesQuantity: 125,
    quantity: 60,
  },
  {
    title: "Air Fryer",
    description:
      "Cook your favorite meals with less oil using the Air Fryer, which offers a healthier way to fry, bake, and roast with consistent results.",
    discount: 10,
    price: 149.99,
    priceAfterDiscount: 134.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.5,
    ratingsAveragesQuantity: 230,
    quantity: 40,
  },
  {
    title: "Cordless Vacuum Cleaner",
    description:
      "The Cordless Vacuum Cleaner provides powerful suction and ease of use, perfect for keeping your home clean without the hassle of cords.",
    discount: 25,
    price: 299.99,
    priceAfterDiscount: 224.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.7,
    ratingsAveragesQuantity: 95,
    quantity: 30,
  },
  {
    title: "Portable Power Bank",
    description:
      "Keep your devices charged on the go with this Portable Power Bank, featuring a high-capacity battery and fast-charging capabilities.",
    discount: 20,
    price: 39.99,
    priceAfterDiscount: 31.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.6,
    ratingsAveragesQuantity: 120,
    quantity: 75,
  },
  {
    title: "Digital Camera",
    description:
      "Capture stunning photos and videos with the Digital Camera, offering high resolution and a range of features for both amateur and professional photographers.",
    discount: 15,
    price: 549.99,
    priceAfterDiscount: 467.49,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.9,
    ratingsAveragesQuantity: 60,
    quantity: 20,
  },
  {
    title: "Electric Kettle",
    description:
      "Boil water quickly and efficiently with the Electric Kettle, featuring a fast-heating element and automatic shut-off for safety and convenience.",
    discount: 10,
    price: 29.99,
    priceAfterDiscount: 26.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.4,
    ratingsAveragesQuantity: 140,
    quantity: 100,
  },
  {
    title: "Fitness Tracker",
    description:
      "Monitor your health and fitness with the Fitness Tracker, which tracks activity levels, heart rate, and more with a sleek and comfortable design.",
    discount: 30,
    price: 99.99,
    priceAfterDiscount: 69.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.6,
    ratingsAveragesQuantity: 180,
    quantity: 45,
  },
  {
    title: "Smart Thermostat",
    description:
      "Control your home's temperature remotely with the Smart Thermostat, offering energy-saving features and easy integration with smart home systems.",
    discount: 20,
    price: 249.99,
    priceAfterDiscount: 199.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.7,
    ratingsAveragesQuantity: 70,
    quantity: 30,
  },
  {
    title: "Kitchen Blender",
    description:
      "Blend and mix ingredients with ease using the Kitchen Blender, featuring multiple speed settings and a durable design for all your blending needs.",
    discount: 15,
    price: 89.99,
    priceAfterDiscount: 76.49,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.5,
    ratingsAveragesQuantity: 130,
    quantity: 50,
  },
  {
    title: "Laptop Stand",
    description:
      "Improve your ergonomic setup with the Laptop Stand, designed to elevate your laptop to eye level and reduce neck and back strain.",
    discount: 25,
    price: 34.99,
    priceAfterDiscount: 26.24,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.6,
    ratingsAveragesQuantity: 110,
    quantity: 80,
  },
  {
    title: "Gaming Chair",
    description:
      "Experience ultimate comfort during long gaming sessions with the Gaming Chair, featuring adjustable armrests, lumbar support, and a reclining function.",
    discount: 20,
    price: 179.99,
    priceAfterDiscount: 143.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.8,
    ratingsAveragesQuantity: 98,
    quantity: 25,
  },
  {
    title: "High-Speed Blender",
    description:
      "The High-Speed Blender is perfect for making smoothies, soups, and sauces with its powerful motor and variable speed control.",
    discount: 25,
    price: 199.99,
    priceAfterDiscount: 149.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.7,
    ratingsAveragesQuantity: 85,
    quantity: 30,
  },
  {
    title: "Wireless Charger",
    description:
      "Charge your devices wirelessly with ease using the Wireless Charger, compatible with a range of Qi-enabled devices for hassle-free power.",
    discount: 20,
    price: 39.99,
    priceAfterDiscount: 31.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.6,
    ratingsAveragesQuantity: 150,
    quantity: 70,
  },
  {
    title: "Noise-Canceling Headphones",
    description:
      "Enjoy uninterrupted music with Noise-Canceling Headphones, designed to block out ambient noise for a pure audio experience.",
    discount: 25,
    price: 299.99,
    priceAfterDiscount: 224.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.8,
    ratingsAveragesQuantity: 70,
    quantity: 20,
  },
  {
    title: "Smart Light Bulbs",
    description:
      "Customize your home lighting with Smart Light Bulbs, offering adjustable brightness and color settings controlled via your smartphone.",
    discount: 10,
    price: 29.99,
    priceAfterDiscount: 26.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.4,
    ratingsAveragesQuantity: 115,
    quantity: 85,
  },
  {
    title: "Wireless Mouse",
    description:
      "The Wireless Mouse provides a seamless connection and precision control with its ergonomic design and long battery life.",
    discount: 15,
    price: 29.99,
    priceAfterDiscount: 25.49,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.6,
    ratingsAveragesQuantity: 95,
    quantity: 100,
  },
  {
    title: "Electric Grill",
    description:
      "Enjoy indoor grilling with the Electric Grill, featuring adjustable temperature controls and a non-stick surface for easy cooking and cleaning.",
    discount: 20,
    price: 149.99,
    priceAfterDiscount: 119.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.5,
    ratingsAveragesQuantity: 85,
    quantity: 25,
  },
  {
    title: "Portable Air Conditioner",
    description:
      "Stay cool and comfortable with the Portable Air Conditioner, offering adjustable cooling settings and easy mobility for any room.",
    discount: 15,
    price: 349.99,
    priceAfterDiscount: 297.49,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.6,
    ratingsAveragesQuantity: 45,
    quantity: 10,
  },
  {
    title: "Electric Wine Opener",
    description:
      "Effortlessly open wine bottles with the Electric Wine Opener, designed to make uncorking quick and easy with minimal effort.",
    discount: 20,
    price: 59.99,
    priceAfterDiscount: 47.99,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.4,
    ratingsAveragesQuantity: 65,
    quantity: 30,
  },
  {
    title: "HD Webcam",
    description:
      "Enhance your video calls with the HD Webcam, offering high-resolution video and a built-in microphone for clear communication.",
    discount: 25,
    price: 89.99,
    priceAfterDiscount: 67.49,
    category: "66945034cc9465a33a0ee546",
    ratingsAverage: 4.5,
    ratingsAveragesQuantity: 85,
    quantity: 40,
  },
];

const CreateProduct = () => {
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
  } = useCreateProduct();

  const addProductsToAPI = async () => {
    try {
      for (const product of products) {
        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("description", product.description);
        formData.append("category", product.category);

        formData.append("price", product.price.toString());

        formData.append("discount", product.discount.toString());
        formData.append("quantity", product.quantity.toString());
        formData.append(
          "priceAfterDiscount",
          product.priceAfterDiscount.toString()
        );
        formData.append("ratingsAverage", product.ratingsAverage.toString());
        formData.append(
          "ratingsAveragesQuantity",
          product.ratingsAveragesQuantity.toString()
        );
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
    } catch (error) {
      console.error("Error adding products:", error);
    }
  };

  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-10 ">
      <div className=" flex flex-col gap-6">
        <button onClick={addProductsToAPI}>ADD THE PRODUCTS *.* </button>
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

export default CreateProduct;
