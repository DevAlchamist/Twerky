"use client";

import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import pfp1 from "../../../../public/images/2151034097.jpg";
import pfp2 from "../../../../public/images/2151100168.jpg";
import pfp3 from "../../../../public/images/2151100226.jpg";
import pfp4 from "../../../../public/images/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg";
import pfp5 from "../../../../public/images/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg";
import pfp6 from "../../../../public/images/portrait-happy-male-with-broad-smile.jpg";
import pfp7 from "../../../../public/images/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg";

interface PfpSectionProps {
  name?: string;
  image?: Buffer | HTMLImageElement;
}

export const PfpSection = ({ image, name }: PfpSectionProps) => {
  const photos = [pfp1, pfp2, pfp3, pfp4, pfp5, pfp6, pfp7];
  // Generate random indices for the photos array
  function generateUniqueRandomIndices(arr: Array<StaticImageData>) {
    let uniqueIndices = new Set<number>();

    // Generate random indices until 7 unique indices are obtained
    while (uniqueIndices.size <= 5) {
      uniqueIndices.add(Math.floor(Math.random() * arr.length));
    }

    return Array.from(uniqueIndices);
  }

  const randomIndices = generateUniqueRandomIndices(photos);
  return (
    <Box className="w-full flex justify-between mt-12">
      <Box className="h-[52px] rounded-full w-[52px] flex justify-center items-center bg-opacity-50 bg-gray-200/10">
        <Add className=" w-6 h-6 bg-opacity-50 bg-[#4FD8E0] rounded-full object-cover" />
      </Box>
      {randomIndices.map((index, i) => (
        <Box
          key={index}
          className="rounded-full flex justify-center items-center bg-opacity-50 bg-gray-200/10"
        >
          <Image
            src={photos[index]}
            alt=""
            width={52}
            height={52}
            className=" bg-opacity-50 bg-[#4FD8E0] rounded-full object-contain"
          />
        </Box>
      ))}
    </Box>
  );
};
