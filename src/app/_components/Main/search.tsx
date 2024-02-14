import { SearchOutlined } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";

export const Search = () => {
  return (
    <div className="w-full flex h-[51px]">
        <SearchOutlined className="absolute top-[38.5px] left-[470px]"/>
      <textarea placeholder="Search..." className="pt-3 pl-12 bg-transparent border w-full rounded-[50px] resize-none outline-none" ></textarea>
    </div>
  );
};
