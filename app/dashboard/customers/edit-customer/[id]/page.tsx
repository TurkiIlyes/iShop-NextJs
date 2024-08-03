import EditCustomer from "@/components/Dashboard/Customer/EditCustomer/EditCustomer";

const Page = ({ params }: { params: { id: string } }) => {
  
  return <EditCustomer id={params.id} />;
};

export default Page;
