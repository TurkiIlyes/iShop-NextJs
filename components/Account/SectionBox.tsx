const SectionBox = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className=" grid grid-cols-[1fr,2fr] py-8 px-5 bg-grayscale-200 rounded-xl shadow-[0px_0px_3px] shadow-grayscale-500 ">
      <div className="">
        <h3 className=" text-base font-semibold text-grayscale-800">{title}</h3>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default SectionBox;
