import {
  Home,
  Notifications,
  Person,
  Settings,
  Style,
  Whatshot,
} from "@mui/icons-material";
import Icon from "./icon";
import AppIcon from "./appIcon";
import { Box } from "@mui/material";
import Link from "next/link";

const Sidebar = () => {
  const icons = [
    { title: "Home", headIcon: <Home />, route: "/" },
    { title: "Notification", headIcon: <Notifications /> },
    { title: "Trending", headIcon: <Whatshot /> },
    { title: "Personalization", headIcon: <Style /> },
    { title: "Profile", headIcon: <Person />, route: `/Profile` },
    { title: "Setting", headIcon: <Settings /> },
  ];
  return (
    <Box className="min-h-screen grid grid-row-12 flex-col justify-center items-center">
      <Box className="flex justify-start row-span-3">
        <AppIcon />
      </Box>
      <Box className="row-span-1" />
      <Box className=" flex row-span-4 flex-col items-start justify-between">
        {icons.map((icon) => (
          <Box className="rounded-lg px-3 ">
            <Link href={icon?.route ? icon.route : ""}>
              <Icon
                key={icon.title}
                title={icon.title}
                headIcon={icon.headIcon}
              />
            </Link>
          </Box>
        ))}
      </Box>
      <Box className="row-span-4" />
    </Box>
  );
};

export default Sidebar;
