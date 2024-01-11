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
  const [selectedIcon, setSelectedIcon] = useState("GrAccessibility");
  const [IconColor, setIconColor] = useState("");
  return (
    <Context.Provider
      value={{
        isOpenCategory,
        setIsOpenCategory,
        isOpenRecord,
        setIsOpenRecord,
        selectedIcon,
        IconColor,
        setIconColor,
        setSelectedIcon,
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
