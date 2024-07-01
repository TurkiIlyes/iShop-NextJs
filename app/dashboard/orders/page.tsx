import {
  columns,
  Orders,
} from "@/components/utils/DataTable/Columns/OrdersColumn";
import DisplayPanel from "@/components/dashboard/DisplayPanel/DisplayPanel";
import formatDate from "@/components/utils/formatDate";

async function getData(): Promise<Orders[]> {
  return [
    {
      id: "id-1",
      customerName: "Customer 1",
      date: formatDate("2024-07-01T12:30:00Z"),
      status: "DELIVERED",
      products: 5,
      amount: 100,
    },
    {
      id: "id-2",
      customerName: "Customer 2",
      date: formatDate("2024-11-02T00:00:00Z"),
      status: "CANCELED",
      products: 3,
      amount: 50,
    },
    {
      id: "id-3",
      customerName: "Customer 3",
      date: formatDate("2024-11-03T00:00:00Z"),
      status: "DELIVERED",
      products: 10,
      amount: 200,
    },
    {
      id: "id-4",
      customerName: "Customer 4",
      date: formatDate("2024-11-04T00:00:00Z"),
      status: "CANCELED",
      products: 7,
      amount: 140,
    },
    {
      id: "id-5",
      customerName: "Customer 5",
      date: formatDate("2024-11-05T00:00:00Z"),
      status: "DELIVERED",
      products: 2,
      amount: 40,
    },
    {
      id: "id-6",
      customerName: "Customer 6",
      date: formatDate("2024-11-06T00:00:00Z"),
      status: "CANCELED",
      products: 8,
      amount: 160,
    },
    {
      id: "id-7",
      customerName: "Customer 7",
      date: formatDate("2024-11-07T00:00:00Z"),
      status: "DELIVERED",
      products: 6,
      amount: 120,
    },
    {
      id: "id-8",
      customerName: "Customer 8",
      date: formatDate("2024-11-08T00:00:00Z"),
      status: "CANCELED",
      products: 4,
      amount: 80,
    },
    {
      id: "id-9",
      customerName: "Customer 9",
      date: formatDate("2024-11-09T00:00:00Z"),
      status: "DELIVERED",
      products: 9,
      amount: 180,
    },
    {
      id: "id-10",
      customerName: "Customer 10",
      date: formatDate("2024-11-10T00:00:00Z"),
      status: "CANCELED",
      products: 1,
      amount: 20,
    },
    {
      id: "id-11",
      customerName: "Customer 11",
      date: formatDate("2024-11-11T00:00:00Z"),
      status: "DELIVERED",
      products: 5,
      amount: 100,
    },
    {
      id: "id-12",
      customerName: "Customer 12",
      date: formatDate("2024-11-12T00:00:00Z"),
      status: "CANCELED",
      products: 3,
      amount: 50,
    },
    {
      id: "id-13",
      customerName: "Customer 13",
      date: formatDate("2024-11-13T00:00:00Z"),
      status: "DELIVERED",
      products: 10,
      amount: 200,
    },
    {
      id: "id-14",
      customerName: "Customer 14",
      date: formatDate("2024-11-14T00:00:00Z"),
      status: "CANCELED",
      products: 7,
      amount: 140,
    },
    {
      id: "id-15",
      customerName: "Customer 15",
      date: formatDate("2024-11-15T00:00:00Z"),
      status: "DELIVERED",
      products: 2,
      amount: 40,
    },
    {
      id: "id-16",
      customerName: "Customer 16",
      date: formatDate("2024-11-16T00:00:00Z"),
      status: "CANCELED",
      products: 8,
      amount: 160,
    },
    {
      id: "id-17",
      customerName: "Customer 17",
      date: formatDate("2024-11-17T00:00:00Z"),
      status: "DELIVERED",
      products: 6,
      amount: 120,
    },
    {
      id: "id-18",
      customerName: "Customer 18",
      date: formatDate("2024-11-18T00:00:00Z"),
      status: "CANCELED",
      products: 4,
      amount: 80,
    },
    {
      id: "id-19",
      customerName: "Customer 19",
      date: formatDate("2024-11-19T00:00:00Z"),
      status: "DELIVERED",
      products: 9,
      amount: 180,
    },
    {
      id: "id-20",
      customerName: "Customer 20",
      date: formatDate("2024-11-20T00:00:00Z"),
      status: "CANCELED",
      products: 1,
      amount: 20,
    },
  ];
}

const page = async () => {
  const data = await getData();
  return <DisplayPanel title="Orders" columns={columns} data={data} />;
};

export default page;
