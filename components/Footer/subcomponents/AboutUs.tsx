import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaRoundedBox from "./SocialMediaRoundedBox";

const AboutUs = () => {
  return (
    <div className=" w-full lg:w-[300px] flex flex-col gap-8 max-lg:items-center ">
      <h1 className=" text-4xl font-bold text-white">iShop</h1>
      <p className=" max-lg:w-4/6 text-justify text-sm font-normal leading-loose text-white text-opacity-90">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        delectus distinctio ipsam rem accusantium impedit.
      </p>
      <div className="flex gap-5">
        <SocialMediaRoundedBox
          icon={faFacebookF}
          className="hover:bg-[#3b5998] text-[#3b5998]"
        />
        <SocialMediaRoundedBox
          icon={faInstagram}
          className="hover:bg-[#e1306c] text-[#e1306c]"
        />
        <SocialMediaRoundedBox
          icon={faXTwitter}
          className="hover:bg-[#1da1f2] text-[#1da1f2]"
        />
        <SocialMediaRoundedBox
          icon={faLinkedinIn}
          className="hover:bg-[#0077b5] text-[#0077b5]"
        />
        <SocialMediaRoundedBox
          icon={faYoutube}
          className="hover:bg-[#ff0000] text-[#ff0000]"
        />
      </div>
    </div>
  );
};

export default AboutUs;
