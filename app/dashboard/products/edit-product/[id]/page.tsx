import EditProduct from "@/components/Dashboard/Product/EditProduct/EditProduct";

const Page = ({ params }: { params: { id: string } }) => {
  
  return <EditProduct id={params.id} />;
};

export default Page;
