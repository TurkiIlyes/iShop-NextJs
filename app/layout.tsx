import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import TopHeader from "@/components/Header/TopHeader";
import Footer from "@/components/Footer/Footer";

import NextSessionProvider from "@/components/Provider/NextSessionProvider";
import StoreProvider from "@/redux/StoreProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
    <html lang="en">
      <body className={poppins.className}>
        <Toaster position="top-right" reverseOrder={true} />
        <StoreProvider>
          <NextSessionProvider>
            <TopHeader />
            <Header />
            {children}
          </NextSessionProvider>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
