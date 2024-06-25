import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SectionNavBar = ({
  prevEl,
  nextEl,
}: {
  prevEl: string;
  nextEl: string;
}) => {
  return (
    <div className=" container flex justify-end pb-4">
      <div className=" flex gap-4">
        <button className=" flex items-center justify-center rounded-full bg-grayscale-400 hover:bg-grayscale-500 w-12 h-12">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`${prevEl} w-4 h-4 border-[13px] border-transparent rounded-full text-grayscale-900`}
          />
        </button>
        <button className=" flex items-center justify-center rounded-full bg-grayscale-400 hover:bg-grayscale-500 w-12 h-12">
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`${nextEl} w-4 h-4 border-[13px] border-transparent rounded-full text-grayscale-900`}
          />
        </button>
      </div>
    </div>
  );
};

export default SectionNavBar;
