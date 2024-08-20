import { Inter } from "next/font/google";
import "./globals.css";
import "@/assets/css/layout.css"
import SidebarLayout from "@/layout/root/SidebarLayout";
import MainLayout from "@/layout/root/MainLayout";
import React from "react";
import { StoreWrapper } from "@/store/provider/StoreProvider";
import HeaderLayout from "@/layout/root/HeaderLayout";
import FooterLayout from "@/layout/root/FooterLayout";
import SecondSidebar from "@/layout/root/SecondSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="widthArray">
          <StoreWrapper>
            <SidebarLayout />
            <SecondSidebar />
              <div className="array">
                {/* <MainLayout>
                  {children}
                </MainLayout> */}
                <HeaderLayout/>
                  {children} test 
                <FooterLayout/>
              </div>
          </StoreWrapper>
        </div>
      </body>
    </html>
  );
}

