import { Add, Settings } from "@mui/icons-material";
import { Box } from "@mui/material";

export const Head = () => {
  return (
    <Box className="mt-10">
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
          <Settings />
        </Box>
      </Box>
    </Box>
  );
};
