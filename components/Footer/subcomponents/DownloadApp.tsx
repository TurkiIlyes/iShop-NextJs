import DownloadAppBox from "./DownloadAppBox";

import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const DownloadApp = () => {
  return (
    <div className=" flex flex-col items-center gap-4 ">
      <h2 className=" text-xl font-normal text-grayscale-200">Contact Us</h2>
      <span className=" text-xs font-normal text-white text-opacity-70">
        Save $3 with App New User Only
      </span>
      <div className=" flex flex-col gap-3">
        <DownloadAppBox title="Google Play" icon={faGooglePlay} />
        <DownloadAppBox title="App Store" icon={faApple} />
      </div>
    </div>
  );
};

export default DownloadApp;
