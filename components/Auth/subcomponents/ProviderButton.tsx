"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

const ProviderButton = ({ title, icon }: { title: string; icon: string }) => {
  const handleSignIn = () => {
    signIn("google", {
      redirect: true,
      callbackUrl: "/auth/login?success=Logged%20in%20successfully",
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className="flex w-full gap-2 pl-[30%] mb-4 pr-4 py-2 bg-grayscale-300 rounded-md cursor-pointer items-center shadow-[0px_0px_3px] shadow-grayscale-600 "
    >
      <div className=" relative">
        <Image src={icon} alt="" width={32} height={32} objectFit="cover" />
      </div>
      <span className="text-base font-medium text-grayscale-700 ">{title}</span>
    </button>
  );
};

export default ProviderButton;
