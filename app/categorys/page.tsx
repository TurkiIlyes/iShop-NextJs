import CategoryBox from "@/components/category/CategoryBox";
import Paginator from "@/components/utils/Paginator";
import {
  faLaptop,
  faMarker,
  faMobileScreenButton,
  faShirt,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "Lap top",
    icon: faLaptop,
  },
  {
    title: "Clothing",
    icon: faShirt,
  },
  {
    title: "Tv",
    icon: faTv,
  },
  {
    title: "Phone",
    icon: faMobileScreenButton,
  },
  {
    title: "Books",
    icon: faMarker,
  },
];

const page = () => {
  return (
    <div className="container">
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-20">
        {data.map((e, i) => {
          return <CategoryBox title={e.title} icon={e.icon} key={i} />;
        })}
      </div>
      <Paginator />
    </div>
  );
};

export default page;
