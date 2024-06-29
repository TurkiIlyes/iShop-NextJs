import { faHouse } from "@fortawesome/free-solid-svg-icons";
import DashboardCollapsible from "./DashboardCollapsible";

const links = [
  {
    icon: faHouse,
    title: "Woman's Fashion",
    content: ["Elegant Dress", "Chic Blouse"],
  },
  {
    icon: faHouse,
    title: "Men's Fashion",
    content: ["Tailored Suit", "Casual Shirts"],
  },
  {
    icon: faHouse,
    title: "Electronics",
    content: [],
  },
  {
    icon: faHouse,
    title: "Home & Lifestyle",
    content: [],
  },
  {
    icon: faHouse,
    title: "Medicine",
    content: [],
  },
  {
    icon: faHouse,
    title: "Sports & Outdoor",
    content: [],
  },
  {
    icon: faHouse,
    title: "Baby's & Toys",
    content: [],
  },
  {
    icon: faHouse,
    title: "Groceries & Pets",
    content: [],
  },
];

const DashboardSideBar = () => {
  return (
    <div className=" hidden lg:flex border-r-[1px] border-grayscale-500 ">
      <div className=" flex flex-col gap-8 w-full h-full py-10 px-4  ">
        <div className=" flex flex-col gap-1">
          <h1 className=" text-2xl font-medium text-grayscale-800 text-center">
            Dashboard
          </h1>
          <p className=" text-xs font-medium text-grayscale-600 text-center">
            All you need in one place
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          {links.map((e, i) => {
            return (
              <DashboardCollapsible
                key={i}
                icon={e.icon}
                title={e.title}
                content={e.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
