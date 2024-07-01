import {
  columns,
  Customers,
} from "@/components/utils/DataTable/Columns/CustomersColumn";
import DisplayPanel from "@/components/dashboard/DisplayPanel/DisplayPanel";

async function getData(): Promise<Customers[]> {
  return [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      orders: 5,
      spent: 150.75,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      orders: 2,
      spent: 200.0,
    },
    {
      id: "3",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      orders: 10,
      spent: 500.5,
    },
    {
      id: "4",
      name: "Bob Brown",
      email: "bob.brown@example.com",
      orders: 7,
      spent: 320.25,
    },
    {
      id: "5",
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      orders: 3,
      spent: 75.0,
    },
    {
      id: "6",
      name: "Debbie Miller",
      email: "debbie.miller@example.com",
      orders: 1,
      spent: 20.0,
    },
    {
      id: "7",
      name: "Frank Wilson",
      email: "frank.wilson@example.com",
      orders: 6,
      spent: 180.0,
    },
    {
      id: "8",
      name: "Grace Lee",
      email: "grace.lee@example.com",
      orders: 4,
      spent: 220.3,
    },
    {
      id: "9",
      name: "Henry Taylor",
      email: "henry.taylor@example.com",
      orders: 8,
      spent: 410.0,
    },
    {
      id: "10",
      name: "Irene Martinez",
      email: "irene.martinez@example.com",
      orders: 5,
      spent: 150.75,
    },
    {
      id: "11",
      name: "Jack White",
      email: "jack.white@example.com",
      orders: 2,
      spent: 95.5,
    },
    {
      id: "12",
      name: "Karen Green",
      email: "karen.green@example.com",
      orders: 9,
      spent: 350.0,
    },
    {
      id: "13",
      name: "Leo King",
      email: "leo.king@example.com",
      orders: 3,
      spent: 135.75,
    },
    {
      id: "14",
      name: "Megan Scott",
      email: "megan.scott@example.com",
      orders: 7,
      spent: 275.25,
    },
    {
      id: "15",
      name: "Nathan Adams",
      email: "nathan.adams@example.com",
      orders: 11,
      spent: 505.75,
    },
    {
      id: "16",
      name: "Olivia Carter",
      email: "olivia.carter@example.com",
      orders: 5,
      spent: 210.0,
    },
    {
      id: "17",
      name: "Paul Roberts",
      email: "paul.roberts@example.com",
      orders: 6,
      spent: 180.75,
    },
    {
      id: "18",
      name: "Quincy Evans",
      email: "quincy.evans@example.com",
      orders: 4,
      spent: 120.5,
    },
    {
      id: "19",
      name: "Rachel Hall",
      email: "rachel.hall@example.com",
      orders: 10,
      spent: 495.0,
    },
    {
      id: "20",
      name: "Sam Young",
      email: "sam.young@example.com",
      orders: 8,
      spent: 430.25,
    },
  ];
}

const page = async () => {
  const data = await getData();
  return <DisplayPanel title="Customers" columns={columns} data={data} />;
};

export default page;
