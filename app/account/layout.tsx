import AccountHeader from "@/components/Account/AccountHeader";
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
    <div className=" bg-grayscale-300 py-3 ">
      <div className=" container ">
        <div className=" flex flex-col gap-5 rounded-xl bg-white py-6 px-3 md:px-7 shadow-[0_0_3px] shadow-grayscale-400">
          <AccountHeader />
          {children}
        </div>
      </div>
    </div>
  );
}
