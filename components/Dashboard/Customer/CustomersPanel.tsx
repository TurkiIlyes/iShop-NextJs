import DataTable from "@/components/Common/DataTable/DataTable";
import { columns } from "@/components/Common/DataTable/Columns/CustomersColumn";
import { fetchCustomers } from "@/utils/Api/customerApi";

const CustomersPanel = async () => {
  const customers = await fetchCustomers();

  return <DataTable columns={columns} data={customers} />;
};

export default CustomersPanel;
