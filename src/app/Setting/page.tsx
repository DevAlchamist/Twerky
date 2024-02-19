"use client";
import { Box, Typography } from "@mui/material";
import SettingComp from "./SettingComp";
import { Welcome } from "./welcom";

const Setting = () => {
  return (
    <Box className="h-[90%] w-full flex flex-col justify-center items-start  ">
      {/* <Box className="flex ">
        <Typography variant="h3">Setting</Typography>
      </Box> */}
      <SettingComp />
      <Box></Box>
    </Box>
  );
};

export default Setting;
