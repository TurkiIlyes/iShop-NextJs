const BottomFooter = () => {
  return (
    <div className=" bg-darkGrey-800">
      <div className="container ">
        <div className="py-6">
          <span className="">
            <span className="text-sm text-white text-opacity-60 font-normal">
              &copy;{new Date().getFullYear()} All rights reserved by
            </span>
            <span className=" text-base text-white font-bold ml-1">Ishop</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
