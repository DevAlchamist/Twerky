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
import { Post } from "@/app/_components/Main/post";

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
        <Post/>
      </Box>
    </Box>
  );
};
{
  /* Title */
}
