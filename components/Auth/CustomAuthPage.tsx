import AuthButton from "./subcomponents/AuthButton";

const CustomAuthPage = ({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className=" w-[300px] mx-auto py-4 ">
      <div className=" py-4 text-center">
        <h1 className=" text-3xl font-semibold text-customBlue-700">{title}</h1>
        <p className=" text-sm font-normal pt-3">{subTitle}</p>
      </div>
      {children}
    </div>
  );
};

export default CustomAuthPage;
