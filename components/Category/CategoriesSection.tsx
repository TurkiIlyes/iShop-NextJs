import CategoryBox from "./CategoryBox";
import SectionHeader from "@/components/Common/SectionHeader";
import SectionNavBar from "@/components/Common/SectionNavBar";
import PrimaryButton from "@/components/Common/PrimaryButton";
import CategorySwiper from "../Swipers/CategorySwiper";
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
  {
    title: "Lap top",
    icon: faLaptop,
  },
  {
    title: "Clothing",
    icon: faShirt,
  },
];
const CategoriesSection = async ({
  prevEl,
  nextEl,
}: {
  prevEl: string;
  nextEl: string;
}) => {
  const categoriesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`
  );
  const categories = await categoriesResponse.json();
  return (
    <div className=" container ">
      <SectionHeader
        title="Categories"
        description="Flash Sales"
        right={<PrimaryButton title="View All" />}
      />
      <SectionNavBar prevEl={prevEl} nextEl={nextEl} />
      <div className="">
        <CategorySwiper
          prevEl={prevEl}
          nextEl={nextEl}
          categories={categories.data}
        />
      </div>
    </div>
  );
};

export default CategoriesSection;
