import { Box } from "@mui/material";

interface IconProps {
  title: string;
  headIcon: JSX.Element
}

const Icon = ({ title,headIcon }: IconProps) => {
  return (
    <>
      <Box className="flex  justify-between py-5">
        {headIcon}
        <Box className="pl-2 bg-transparent hover:drop-shadow-title">
        {title}
        </Box>
        </Box>
    </>
  );
};

export default Icon;
