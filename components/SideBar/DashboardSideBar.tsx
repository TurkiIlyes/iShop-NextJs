import {
  faBox,
  faBoxesStacked,
  faGears,
  faLayerGroup,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import DashboardCollapsible from "../Collapsible/DashboardCollapsible";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const links = [
  {
    icon: faBox,
    title: "Orders",
    content: [
      {
        title: "Orders Panel",
        link: "/dashboard/orders",
        icon: faGears,
      },
    ],
  },
  {
    icon: faBoxesStacked,
    title: "Products",
    content: [
      {
        title: "Products Panel",
        link: "/dashboard/products",
        icon: faGears,
      },
      {
        title: "Add Product",
        link: "/dashboard/products/create-product",
        icon: faSquarePlus,
      },
    ],
  },
  {
    icon: faUsersGear,
    title: "Customers",
    content: [
      {
        title: "Customers Panel",
        link: "/dashboard/customers",
        icon: faGears,
      },
      {
        title: "Add Customer",
        link: "/dashboard/customers/create-customer",
        icon: faSquarePlus,
      },
    ],
  },
  {
    icon: faLayerGroup,
    title: "Categories",
    content: [
      {
        title: "Categories Panel",
        link: "/dashboard/categories",
        icon: faGears,
      },
      {
        title: "Add Category",
        link: "/dashboard/categories/create-category",
        icon: faSquarePlus,
      },
    ],
  },
];
const DashboardSideBar = () => {
  return (
    <div className="w-full h-full py-8 px-4  ">
      <div className=" h-full flex flex-col gap-2">
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
  );
};

export default DashboardSideBar;
