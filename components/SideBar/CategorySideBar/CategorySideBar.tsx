import CategoryCollapsible from "../../Collapsible/CategoryCollapsible";
const categorys = [
  {
    title: "Woman's Fashion",
    content: ["Elegant Dress", "Chic Blouse"],
  },
  {
    title: "Men's Fashion",
    content: ["Tailored Suit", "Casual Shirts"],
  },
  {
    title: "Electronics",
    content: [],
  },
  {
    title: "Home & Lifestyle",
    content: [],
  },
  {
    title: "Medicine",
    content: [],
  },
  {
    title: "Sports & Outdoor",
    content: [],
  },
  {
    title: "Baby's & Toys",
    content: [],
  },
  {
    title: "Groceries & Pets",
    content: [],
  },
];

const CategorySideBar = () => {
  return (
    <div className=" flex flex-col w-full h-full text-grayscale-900 mt-16 pb-28  overflow-y-scroll scroll">
      {categorys.map((c, i) => {
        return (
          <CategoryCollapsible key={i} title={c.title} content={c.content} />
        );
      })}
    </div>
  );
};

export default CategorySideBar;
