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
    <div className="  w-[300px] max-sm:w-full flex flex-col gap-8 max-sm:items-center ">
      <h1 className=" text-4xl font-bold text-white">iShop</h1>
      <p className=" max-sm:w-11/12 text-sm font-normal leading-loose text-white text-opacity-90">
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
