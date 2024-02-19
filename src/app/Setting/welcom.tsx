import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

export const Welcome = () => {
  return (
    <Box className="my-5 w-full flex items-center rounded-[50px] px-10 py-5 bg-opacity-10 bg-gray-200/5 text-white ">
      <Box className=" flex flex-col">
        <Typography variant="h5">Welcome To Twerky</Typography>
        <Typography variant="subtitle2">A better Twitter Clone</Typography>
      </Box>
    </Box>
  );
};
