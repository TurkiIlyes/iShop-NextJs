import ProductPage from "@/components/Product/ProductPage/ProductPage";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <ProductPage id={params.id} />
  );
};

export default page;
