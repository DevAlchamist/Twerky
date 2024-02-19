"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Add,
  BookmarkOutlined,
  CommentOutlined,
  Favorite,
  HeartBrokenOutlined,
  ImportExportOutlined,
  MoreVert,
  MoreVertOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { grey, red } from "@mui/material/colors";

interface PostProps {
  pfp?: HTMLImageElement;
  name?: string;
}

export const Post = () => {
  const UserData = [
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 9,
      tags: ["history", "american", "crime"],
      reactions: 2,
      image:
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg",
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
    {
      id: 2,
      title: "He was an expert but not in a discipline",
      body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
      userId: 13,
      tags: ["french", "fiction", "english"],
      reactions: 2,
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
    {
      id: 3,
      title: "Dave watched as the forest burned up on the hill.",
      body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
      userId: 32,
      tags: ["magical", "history", "french"],
      reactions: 5,
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
    {
      id: 4,
      title: "All he wanted was a candy bar.",
      body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
      userId: 12,
      tags: ["mystery", "english", "american"],
      reactions: 1,
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
    {
      id: 5,
      title: "Hopes and dreams were dashed that day.",
      body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
      image:
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg",
      userId: 41,
      tags: ["crime", "mystery", "love"],
      reactions: 2,
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
    {
      id: 6,
      title: "Dave wasn't exactly sure how he had ended up",
      body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
      userId: 47,
      tags: ["english", "classic", "american"],
      reactions: 3,
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
    {
      id: 7,
      title: "This is important to remember.",
      body: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
      userId: 12,
      tags: ["magical", "crime"],
      reactions: 0,
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
    {
      id: 8,
      title: "One can cook on and with an open fire.",
      body: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
      userId: 31,
      tags: ["american", "english"],
      reactions: 9,
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
    {
      id: 9,
      title: "There are different types of secrets.",
      body: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
      userId: 42,
      tags: ["american", "history", "magical"],
      reactions: 2,
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
    {
      id: 10,
      title: "They rushed out the door.",
      body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
      userId: 1,
      tags: ["fiction", "magical", "history"],
      reactions: 4,
      comments: 2,
      name: "demoUser",
      userName: "@demoUser",
    },
  ];
  return (
    <Box className="w-full h-full">
      {UserData.map((post) => (
        <Card className="max-h-[450px] min-h-auto  rounded-[32px] my-8 w-full bg-opacity-10 bg-gray-200/5 text-white flex flex-col justify-center items-center">
          {/* Header */}
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                D
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertOutlined className="text-white" />
              </IconButton>
            }
            title={post.name}
            subheader={post.userName}
            className="text-white w-full"
          />
          {/* Description */}
          <CardContent className=" pl-20 pr-10 py-2">
            <Typography className=" flex-wrap line-clamp-2">
              {post.body}
            </Typography>
          </CardContent>
          {/* Post Image */}
          {post?.image ? (
            <Box className="flex bg-gray-300/5 rounded-3xl items-center justify-center object-fit my-2">
              <CardMedia
                component="img"
                className="object-contain w-[550px] h-[234px]"
                image="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"
                alt="Loading..."
              />
            </Box>
          ) : (
            ""
          )}
          {/* icons */}
          <CardActions disableSpacing className="w-full  flex justify-center">
            <Box className="justify-around flex w-[550px] ">
              {post.reactions ? (
                <IconButton
                  className="text-white"
                  aria-label="add to favorites"
                >
                  <Favorite /> {post.reactions}
                </IconButton>
              ) : (
                <IconButton
                  className="text-white"
                  aria-label="add to favorites"
                >
                  <HeartBrokenOutlined />
                </IconButton>
              )}
              <IconButton className="text-white" aria-label="comment">
                <CommentOutlined /> {post.comments}
              </IconButton>
              <IconButton className="text-white" aria-label="share">
                <ImportExportOutlined />
              </IconButton>
              <IconButton className="text-white" aria-label="bookmark">
                <BookmarkOutlined />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
