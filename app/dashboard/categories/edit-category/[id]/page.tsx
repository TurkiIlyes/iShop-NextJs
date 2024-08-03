import EditCategory from "@/components/Dashboard/Category/EditCategory/EditCategory";

const Page = ({ params }: { params: { id: string } }) => {
  
  return <EditCategory id={params.id} />;
};

export default Page;