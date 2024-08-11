interface props {
  title: string;
  description: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const SectionHeader = ({
  title,
  description,
  left = null,
  right = null,
}: props) => {
  return (
    <div className=" flex">
      <div className=" max-w-sm ">
        <div className=" flex items-center gap-2">
          <div className=" w-5 h-10 bg-customRed-900 bg-opacity-90 rounded-sm"></div>
          <h3 className=" text-customRed-900 text-opacity-90 text-base font-bold">
            {title}
          </h3>
        </div>
        <p className="text-4xl py-5 font-semibold text-primary text-opacity-90 leading-tight ">
          {description}
        </p>
      </div>
      <div
        className={` flex-1 flex items-end pb-5 ml-10 ${
          right ? (left ? "justify-between" : "justify-end") : "justify-start"
        } `}
      >
        {left}
        {right}
      </div>
    </div>
  );
};

export default SectionHeader;
