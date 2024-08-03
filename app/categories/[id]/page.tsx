import CategoryPage from "@/components/Category/CategoryPage/CategoryPage";

const page = ({ params }: { params: { id: string } }) => {
  return <CategoryPage id={params.id} />;
};

export default page;
