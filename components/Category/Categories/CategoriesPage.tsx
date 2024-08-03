import CategoryBox from "@/components/Category/CategoryBox";
import { CategoryType } from "@/redux/slices/categoriesSlice";

const CategoriesPage = async () => {
  const categoriesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`
  );
  const categories = await categoriesResponse.json();

  return (
    <div className="container">
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-20">
        {categories.data.map((e: CategoryType, i: number) => {
          return (
            <CategoryBox
              name={e.name}
              image={e.image}
              key={i}
              index={i}
              id={e._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;
