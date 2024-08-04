import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "../layout/AppLayout";
import { StoreWrapper } from "@/store/provider/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreWrapper>
          <AppLayout>
            {children}
          </AppLayout>
        </StoreWrapper>
      </body>
    </html>
  );
}
