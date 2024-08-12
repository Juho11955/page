import { Inter } from "next/font/google";
import "./globals.css";
import "@/assets/css/layout.css"
import SidebarLayout from "@/layout/root/SidebarLayout";
import MainLayout from "@/layout/root/MainLayout";
import React from "react";
import { StoreWrapper } from "@/store/provider/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreWrapper>
          <SidebarLayout />
            <MainLayout>
              {children}
            </MainLayout>
        </StoreWrapper>
      </body>
    </html>
  );
}

