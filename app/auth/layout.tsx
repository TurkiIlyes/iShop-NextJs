import AuthSwiper from "@/components/Swipers/AuthSwiper/AuthSwiper";
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
    <div className="  min-h-[500px] relative ">
      <div className="container ">
        <div className=" grid grid-cols-1 lg:grid-cols-[60%,40%] ">
          <div className=" h-full max-lg:hidden flex items-center justify-center ">
            <div className=" w-4/5 aspect-[2/3]">
              <AuthSwiper />
            </div>
          </div>
          <div className="mt-4 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
