import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import Sidebar from "./_components/SideBar/Sidebar";
import { Main } from "next/document";
import Trends from "./_components/Trending/Trends";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gradient-to-tr from-[#15202B] to-[#194547] flex-col flex min-h-screen">
          <Box className="grid grid-cols-10 ">
            <Box className="grid col-span-2">
              <Sidebar />
            </Box>
            <Box className="grid col-span-5">{children}</Box>
            <Box className="grid col-span-3">
              <Trends />
            </Box>
          </Box>
        </main>
      </body>
    </html>
  );
}
