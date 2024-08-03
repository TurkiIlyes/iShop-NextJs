import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaRoundedBox from "./SocialMediaRoundedBox";

const SectionOne = () => {
  return (
    <div className=" flex flex-col justify-center max-md:mx-auto max-md:items-center w-[70%] lg:w-[30%] px-3 ">
      <h1 className=" text-4xl font-bold text-white">iShop</h1>
      <p className=" mt-8 mb-4 text-sm font-normal leading-relaxed text-white text-opacity-70">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        delectus distinctio ipsam rem accusantium impedit.
      </p>
      <div className="flex gap-5">
        <SocialMediaRoundedBox icon={faFacebookF} />
        <SocialMediaRoundedBox icon={faInstagram} />
        <SocialMediaRoundedBox icon={faXTwitter} />
        <SocialMediaRoundedBox icon={faLinkedinIn} />
        <SocialMediaRoundedBox icon={faYoutube} />
      </div>
    </div>
  );
};

export default SectionOne;
