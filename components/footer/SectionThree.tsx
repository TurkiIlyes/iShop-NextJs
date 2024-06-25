import ContactUs from "./ContactUs";
import DownloadApp from "./DownloadApp";

const SectionThree = () => {
  return (
    <div className=" flex justify-center gap-2 w-full sm:w-[calc(62%-12px)] lg:w-[35%]  ">
      <ContactUs />
      <DownloadApp />
    </div>
  );
};

export default SectionThree;
