import DownloadAppBox from "./DownloadAppBox";

import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const Apps = () => {
  return (
    <div className=" max-lg:w-1/2 h-full flex flex-col items-center gap-8 ">
      <h2 className=" text-xl font-normal text-grayscale-200">OUR APP</h2>
      <span className=" max-sm:w-3/4 text-center text-xs font-normal text-white text-opacity-90">
        Save $3 with App New User Only
      </span>
      <div className=" flex flex-col gap-6">
        <DownloadAppBox title="Google Play" icon={faGooglePlay} />
        <DownloadAppBox title="App Store" icon={faApple} />
      </div>
    </div>
  );
};

export default Apps;
