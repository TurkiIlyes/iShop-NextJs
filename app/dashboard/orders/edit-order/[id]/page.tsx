import EditOrder from "@/components/Dashboard/Order/EditOrder/EditOrder";

const Page = ({ params }: { params: { id: string } }) => {
  
  return <EditOrder id={params.id} />;
};

export default Page;
