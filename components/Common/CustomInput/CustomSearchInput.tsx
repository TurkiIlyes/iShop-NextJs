"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CustomSearchInput = () => {
  const [searchKeyWork, setSearchKeyWork] = useState<string | undefined>(
    undefined
  );
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchKeyWork) {
        router.push(`/products?search=${searchKeyWork}`);
      } else if (searchKeyWork === "") {
        router.push("/");
        setSearchKeyWork("");
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [searchKeyWork]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWork(e.target.value);
  };

  return (
    <div className="flex items-center relative">
      <input
        type="search"
        value={searchKeyWork || ""}
        onChange={handleInputChange}
        placeholder="What Are You Looking For?"
        className=" bg-grayscale-300 focus:bg-gradientAccent-600 focus:bg-opacity-20 w-[255px] h-[52px] p-4 rounded-lg border-[7px] border-transparent focus:border-grayscale-200 outline outline-1 outline-grayscale-900 focus:outline-gradientAccent-600 text-[10px] sm:text-xs font-normal placeholder-gray-500 "
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className=" absolute right-5 z-1 w-4 h-4 text-grayscale-900 text-opacity-80 "
      />
    </div>
  );
};

export default CustomSearchInput;
