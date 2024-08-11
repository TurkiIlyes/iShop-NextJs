import Link from "next/link";

const TopHeader = () => {
  return (
    <div className=" bg-black">
      <div className="container py-5 text-center ">
        <span className=" text-base font-medium text-white capitalize ">
          summer sale for all swim suits and free express delivery - OFF 50%!
          <Link
            href="/products"
            className=" ml-3 underline font-bold hover:text-primary "
          >
            shop now
          </Link>
        </span>
      </div>
    </div>
  );
};

export default TopHeader;
