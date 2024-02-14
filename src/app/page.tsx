import { Box } from "@mui/material";
import Image from "next/image";
import Sidebar from "./_components/SideBar/Sidebar";
import Main from "./_components/Main/Main";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#15202B] to-[#194547] flex-col flex min-h-screen">
      <Box className="grid grid-cols-10 ">
        <Box className="grid col-span-3"><Sidebar/></Box>
        <Box className="grid col-span-5"><Main/></Box>
        <Box className="grid col-span-1">Trending</Box>
      </Box>
    </main>
  );
}
