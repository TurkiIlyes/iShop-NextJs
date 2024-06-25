import CategoryBox from "./CategoryBox";
import SectionHeader from "@/components/utils/SectionHeader";
import SectionNavBar from "@/components/utils/SectionNavBar";
import PrimaryButton from "@/components/utils/PrimaryButton";
import CategorySwiper from "./CategorySwiper";
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
        <CategorySwiper prevEl={prevEl} nextEl={nextEl} />
      </div>
    </div>
  );
};

export default CategorysSection;
