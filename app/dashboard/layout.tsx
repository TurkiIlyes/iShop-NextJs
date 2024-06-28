import DashboardSideBar from "@/components/dashboard/DashboardSideBar";
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
    <div className=" container min-h-[600px]">
      <div className="grid grid-cols-[20%_80%]">
        <DashboardSideBar />
        <div className="">{children}</div>
      </div>
    </div>
  );
}
