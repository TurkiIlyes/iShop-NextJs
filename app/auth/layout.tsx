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
        <div className=" grid grid-cols-1 lg:grid-cols-[50%,40%] gap-[10%] ">
          <div className=" h-full max-lg:hidden flex items-center justify-center ">
            <div className=" w-full aspect-[3/4]">
              <AuthSwiper />
            </div>
          </div>
          <div className=" flex items-center ">{children}</div>
        </div>
      </div>
    </div>
  );
}
