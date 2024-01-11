"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import { createContext, useState } from "react";

import { AuthProvider } from "@/components/provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const Context = createContext();

export default function RootLayout({ children }) {
  const [isOpenRecord, setIsOpenRecord] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isIcon, setIsIcon] = useState("GrAccessibility");
  return (
    <Context.Provider
      value={{
        isOpenCategory,
        isIcon,
        setIsIcon,
        setIsOpenCategory,
        isOpenRecord,
        setIsOpenRecord,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </Context.Provider>
  );
}
