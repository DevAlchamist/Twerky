"use client";
import {
  AccountCircleOutlined,
  Info,
  InfoOutlined,
  Security,
  WorkspacePremium,
} from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Welcome } from "./welcom";

const SettingComp = () => {
  return (
    <Box className="w-full">
      <Box className="flex w-full justify-center">
        <Welcome />
      </Box>
      <Box className="my-5 flex items-center">
        <IconButton className="text-white">
          <AccountCircleOutlined className="h-8 w-8" />
        </IconButton>
        <Box className=" flex flex-col">
          <Typography variant="h6">Account Setting</Typography>
          <Typography variant="caption">Change Account Setting</Typography>
        </Box>
      </Box>
      <Box className="my-5 flex items-center">
        <IconButton className="text-white">
          <Security className="h-8 w-8" />
        </IconButton>
        <Box className=" flex flex-col">
          <Typography variant="h6">Security Setting</Typography>
          <Typography variant="caption">Change Security Setting</Typography>
        </Box>
      </Box>
      <Box className="my-5 flex items-center">
        <IconButton className="text-white">
          <WorkspacePremium className="h-8 w-8" />
        </IconButton>
        <Box className=" flex flex-col">
          <Typography variant="h6">Premium</Typography>
          <Typography variant="caption">Buy Premium</Typography>
        </Box>
      </Box>
      <Box className="my-5 flex items-center">
        <IconButton className="text-white">
          <InfoOutlined className="h-8 w-8" />
        </IconButton>
        <Box className=" flex flex-col">
          <Typography variant="h6">Security Setting</Typography>
          <Typography variant="caption">Change Security Setting</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default SettingComp;
