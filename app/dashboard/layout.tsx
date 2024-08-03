import CustomBreadCrumb from "@/components/Common/BreadCrumb";
import DashboardSideBar from "@/components/SideBar/DashboardSideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iShop",
  description: "welcome to our iShop website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-full  bg-grayscale-200">
      <div className="h-full container flex">
        <div className="hidden lg:flex  w-[250px] h-full border-r-[1px] border-grayscale-500">
          <DashboardSideBar />
        </div>

        <div className=" flex-1 flex flex-col gap-4 py-4 px-3 md:px-7 ">
          <CustomBreadCrumb />
          <div className=" bg-white py-6 px-6 border-[1px] border-grayscale-400 rounded-xl shadow-[0_0_3px] shadow-grayscale-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// py-4 px-6
