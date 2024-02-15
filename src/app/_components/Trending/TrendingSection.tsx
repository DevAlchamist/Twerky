"use client"
import { Box } from "@mui/material";
import React from "react";
import MovingIcon from '@mui/icons-material/Moving';

export const TrendingSection = () => {
  return (
    <Box className="h-[400px] rounded-[32px] my-8 mx-5 bg-opacity-10 bg-gray-200/5 flex flex-col justify-center items-center">
      <Box className="text-xl text-[#4FD8E0] font-bold">Trending
      <MovingIcon className="ml-2"/>
      </Box>
      <Box className="text-[#4FD8E0] font-semibold text-sm">Coming Soon...</Box>
    </Box>
  );
};
