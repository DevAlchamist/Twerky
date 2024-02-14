"use client";

import { Box } from "@mui/material";
import { Search } from "./search";
import { PfpSection } from "./pfpSection";
import { Post } from "./post";

const Main = () => {
  return (
    <Box className="w-full full flex mt-14 flex-col justify-center items-center">
      <Search />
      <PfpSection />
      <Post />
    </Box>
  );
};

export default Main;
