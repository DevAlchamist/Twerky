"use client";

import { Box } from "@mui/material";
import { Search } from "./search";
import { PfpSection } from "./pfpSection";
import { Post } from "./post";

const Main = () => {
  return (
    <Box className="w-full flex my-2 flex-col justify-center items-center">
      <Search />
      <Box className=" overflow-y-auto h-[580px] w-full scrollbar-hide my-3">
        <PfpSection />
        <Post />
      </Box>
    </Box>
  );
};

export default Main;
