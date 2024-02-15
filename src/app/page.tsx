import { Box } from "@mui/material";
import Image from "next/image";
import Sidebar from "./_components/SideBar/Sidebar";
import Main from "./_components/Main/Main";
import Trends from "./_components/Trending/Trends";

export default function Home() {
  return (
    <main className="">
      <Box className="">
        <Main />
      </Box>
    </main>
  );
}
