import CategoryBox from "./CategoryBox";
import SectionHeader from "@/components/utils/SectionHeader";
import SectionNavBar from "@/components/utils/SectionNavBar";
import PrimaryButton from "@/components/utils/PrimaryButton";
import CategorySwiper from "./CategorySwiper";
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
const CategorysSection = ({
  prevEl,
  nextEl,
}: {
  prevEl: string;
  nextEl: string;
}) => {
  return (
    <div className=" container ">
      <SectionHeader
        title="Categories"
        description="Flash Sales"
        right={<PrimaryButton title="View All" />}
      />
      <SectionNavBar prevEl={prevEl} nextEl={nextEl} />
      <div className="">
        <CategorySwiper prevEl={prevEl} nextEl={nextEl} data={data} />
      </div>
    </div>
  );
};

export default CategorysSection;
