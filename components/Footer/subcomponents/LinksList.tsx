import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface props {
  title: string;
  data: {
    title: string;
    url: string;
  }[];
}

const LinksList = ({ title, data }: props) => {
  return (
    <div className=" flex flex-col items-center gap-8 ">
      <h2 className=" text-xl font-normal text-grayscale-200">{title}</h2>
      <ul className="">
        {data.map((e, i) => {
          return (
            <li className=" group mb-8 " key={i}>
              <Link href={e.url} className="flex items-center ">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className=" w-4 h-4 text-[#3b5998] group-hover:rotate-45 transition-all duration-300"
                />
                <span className=" ml-4 text-xs font-normal text-opacity-90 text-grayscale-200 group-hover:text-[#1da1f2] transition-all duration-300">
                  {e.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinksList;
