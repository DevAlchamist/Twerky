"use client"
import { SearchOutlined } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";

export const Search = () => {
  return (
    <Paper
    className="bg-transparent bg-opacity-25 w-full mt-10 "
      component="form"
      sx={{
        borderRadius: "40px",
        backgroundColor:"rgba(42, 163, 239, 0.5)",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 563,
      }}
    >
      <IconButton type="button" sx={{ p: "10px", color:"white" }} aria-label="search">
        <SearchOutlined />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 , color:"white"}}
        placeholder="Search..."
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};
