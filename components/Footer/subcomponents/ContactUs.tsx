import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactUsBox from "./ContactUsBox";

const ContactUs = () => {
  return (
    <div className=" max-lg:w-1/2  flex flex-col items-center gap-4 ">
      <h2 className=" text-xl font-normal text-grayscale-200">Contact Us</h2>
      <div className=" flex flex-col ">
        <ContactUsBox
          icon={faPhone}
          dataOne="+216 99999999"
          dataTwo="+216 99999999"
        />
        <ContactUsBox
          icon={faEnvelope}
          dataOne="test1@gmail.com"
          dataTwo="test2@gmail.com"
        />
        <ContactUsBox icon={faLocationDot} dataOne="Tunis, Tunisia " />
      </div>
    </div>
  );
};

export default ContactUs;
