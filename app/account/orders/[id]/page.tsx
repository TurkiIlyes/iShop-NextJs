
import Order from "@/components/Account/Orders/Order/Order";

const Page = async ({ params }: { params: { id: string } }) => {
  

  return <Order id={params.id} />;
};

export default Page;
