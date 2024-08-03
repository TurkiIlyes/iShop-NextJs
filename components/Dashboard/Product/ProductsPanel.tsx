import DataTable from "@/components/Common/DataTable/DataTable";
import { columns } from "@/components/Common/DataTable/Columns/ProductsColumn";
import { fetchProducts } from "@/utils/Api/productApi";
const ProductsPanel = async () => {
  const products = await fetchProducts();
  return <DataTable columns={columns} data={products} />;
};

export default ProductsPanel;
