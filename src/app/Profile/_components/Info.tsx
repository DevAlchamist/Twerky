import {
  Add,
  BookmarkOutlined,
  CommentOutlined,
  HeartBrokenOutlined,
  ImportExportOutlined,
  MoreVert,
  Settings,
} from "@mui/icons-material";
import { Box, Chip, Divider } from "@mui/material";
import Image from "next/image";
import PostPic from "../../../../public/images/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg";

export const Info = () => {
  return (
    <Box className="flex flex-col">
      <Box className="w-full h-auto mt-10 flex items-center justify-center">
        <Box className="h-[210px] rounded-full w-[300px] flex justify-center items-center bg-opacity-50 bg-gray-200/10">
          <Add className=" w-6 h-6 bg-opacity-50 bg-[#4FD8E0] rounded-full object-cover" />
        </Box>
        <Box className="flex w-full items-center justify-between">
          <Box className="ml-5 text-4xl font-bold flex items-start flex-col">
            Name<Box className="text-xs font-semibold">@Name</Box>
          </Box>
          <Settings className="h-12 w-12 font-normal" />
        </Box>
      </Box>
      <Box className="flex justify-end space-x-20 pr-20 -mt-10 mb-5 ">
        <Box className="flex items-center justify-center flex-col">
          999<Box>Followings</Box>
        </Box>
        <Box className="flex items-center justify-center flex-col">
          999<Box>Followers</Box>
        </Box>
        <Box className="flex items-center justify-center flex-col">
          999<Box>Posts</Box>
        </Box>
      </Box>
      <Divider className="w-full bg-transparent" >
        <Chip label="Posts" size="medium" className="  text-white bg-gray-200/5" />
      </Divider>
      <Box className="overflow-y-auto scrollbar-hide h-[415px]">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quasi maxime explicabo itaque iusto aperiam sed nulla repellendus,
              est debitis!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quasi maxime explicabo itaque iusto aperiam sed nulla repellendus,
              est debitis!
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
    </Box>
  );
};
{
  /* Title */
}
