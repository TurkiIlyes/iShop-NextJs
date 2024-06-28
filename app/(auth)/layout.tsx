import AuthSwiper from "@/components/auth/AuthSwiper";
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
    <div className="  min-h-[500px] relative -z-10">
      <div className="container ">
        <div className=" grid grid-cols-1 lg:grid-cols-[60%,40%] ">
          <div className=" h-full max-lg:hidden p-8">
            <AuthSwiper />
          </div>
          <div className="mt-4 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
