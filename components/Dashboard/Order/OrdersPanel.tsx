import DataTable from "@/components/Common/DataTable/DataTable";
import { columns } from "@/components/Common/DataTable/Columns/OrdersColumn";
import { fetchOrders } from "@/utils/Api/orderApi";
const OrdersPanel = async () => {
  const orders = await fetchOrders();

  return <DataTable columns={columns} data={orders} />;
};

export default OrdersPanel;
