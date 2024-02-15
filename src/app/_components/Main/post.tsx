"use client";

import { Box, Button } from "@mui/material";
import PostPic from "../../../../public/images/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg";
import {
  Add,
  BookmarkOutlined,
  CommentOutlined,
  HeartBrokenOutlined,
  ImportExportOutlined,
  MoreVert,
} from "@mui/icons-material";
import Image from "next/image";

interface PostProps {
  pfp?:HTMLImageElement;
  name?:string
}

export const Post = () => {
  return (
    <Box className="w-full h-full">
      <Box className="h-[400px] rounded-[32px] my-8 w-full bg-opacity-10 bg-gray-200/5 flex flex-col justify-center items-center">
        {/* Header */}
        <Box className="flex items-center justify-between w-full px-5">
          {/* Image */}
          <Box className="flex items-center">
            <Box className="h-[52px] rounded-full w-[52px] flex justify-center items-center bg-opacity-50 bg-gray-200/10">
              <Add className=" w-6 h-6 bg-opacity-50 bg-[#4FD8E0] rounded-full object-cover" />
            </Box>
            {/* Title */}
            <Box className="ml-2 text-lg font-bold">Title</Box>
          </Box>
          <Box>
            <MoreVert />
          </Box>
        </Box>
        {/* Description */}
        <Box className=" pl-20 pr-10">
          <Box className=" flex-wrap line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi
            maxime explicabo itaque iusto aperiam sed nulla repellendus, est
            debitis!
          </Box>
        </Box>
        {/* Post Image */}
        <Box className="flex bg-gray-300/5 rounded-3xl items-center justify-center object-fit w-[600px] h-[234px] my-2">
          <Image src={PostPic} alt="" height={230} className="" />
        </Box>
        {/* icons */}
        <Box className="justify-between flex w-[600px]">
          <HeartBrokenOutlined />
          <CommentOutlined />
          <ImportExportOutlined />
          <BookmarkOutlined />
        </Box>
      </Box>
      <Box className="h-[400px] rounded-[32px] my-8 w-full bg-opacity-10 bg-gray-200/5 flex flex-col justify-center items-center">
        {/* Header */}
        <Box className="flex items-center justify-between w-full px-5">
          {/* Image */}
          <Box className="flex items-center">
            <Box className="h-[52px] rounded-full w-[52px] flex justify-center items-center bg-opacity-50 bg-gray-200/10">
              <Add className=" w-6 h-6 bg-opacity-50 bg-[#4FD8E0] rounded-full object-cover" />
            </Box>
            {/* Title */}
            <Box className="ml-2 text-lg font-bold">Title</Box>
          </Box>
          <Box>
            <MoreVert />
          </Box>
        </Box>
        {/* Description */}
        <Box className=" pl-20 pr-10">
          <Box className=" flex-wrap line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi
            maxime explicabo itaque iusto aperiam sed nulla repellendus, est
            debitis!
          </Box>
        </Box>
        {/* Post Image */}
        <Box className="flex bg-gray-300/5 rounded-3xl items-center justify-center object-fit w-[600px] h-[234px] my-2">
          <Image src={PostPic} alt="" height={230} className="" />
        </Box>
        {/* icons */}
        <Box className="justify-between flex w-[600px]">
          <HeartBrokenOutlined />
          <CommentOutlined />
          <ImportExportOutlined />
          <BookmarkOutlined />
        </Box>
      </Box>
    </Box>
  );
};
