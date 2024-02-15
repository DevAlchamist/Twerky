"use client"

import { Box } from "@mui/material";
import { Head } from "./Head";
import { PopularUser } from "./PopularUser";
import { TrendingSection } from "./TrendingSection";

const Trends = () => {
  return (
    <Box className="overflow-y-auto h-screen scrollbar-hide">
      <Head />
      <TrendingSection />
      <PopularUser />
    </Box>
  );
};

export default Trends;
