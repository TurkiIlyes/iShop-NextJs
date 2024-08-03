import ProductImageGallery from "./ProductImageGallery";
import ProductPageDetails from "./ProductPageDetails";
import { fetchProduct } from "@/utils/Api/productApi";

const ProductPage = async ({ id }: { id: string }) => {
  const product = await fetchProduct(id);
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ProductImageGallery product={product} />
        <ProductPageDetails product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
