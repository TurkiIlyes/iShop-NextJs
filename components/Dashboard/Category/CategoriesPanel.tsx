import DataTable from "@/components/Common/DataTable/DataTable";
import { columns } from "@/components/Common/DataTable/Columns/CategoriesColumn";
import { fetchCategories } from "@/utils/Api/categoryApi";

const CategoriesPanel = async () => {
  const categories = await fetchCategories();
  return <DataTable columns={columns} data={categories} />;
};

export default CategoriesPanel;
