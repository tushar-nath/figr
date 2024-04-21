"use client";

import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useColorContext } from "@/lib/context/colorContext";
import { useSpaceContext } from "@/lib/context/spaceContext";

const ButtonsPreview = () => {
  const { hexCodes } = useColorContext();
  const { sizes } = useSpaceContext();

  const buttonConfigs = [
    {
      category: "Primary",
      color: hexCodes[0],
      sizes: ["sm", "md", "lg"],
    },
    {
      category: "Secondary",
      color: hexCodes[1],
      sizes: ["sm", "md", "lg"],
    },
    {
      category: "Neutral",
      color: hexCodes[2],
      sizes: ["sm", "md", "lg"],
    },
    {
      category: "Success",
      color: hexCodes[3],
      sizes: ["sm", "md", "lg"],
    },
    {
      category: "Warning",
      color: hexCodes[4],
      sizes: ["sm", "md", "lg"],
    },
    {
      category: "Error",
      color: hexCodes[5],
      sizes: ["sm", "md", "lg"],
    },
  ];

  const paddingSizes: PaddingSizes = {
    sm: sizes.find((size) => size.sizeName === "sm")?.sizeRem,
    md: sizes.find((size) => size.sizeName === "md")?.sizeRem,
    lg: sizes.find((size) => size.sizeName === "lg")?.sizeRem,
  };

  return (
    <div className="flex flex-col items-center justify-start p-6">
      {buttonConfigs.map(({ category, color, sizes }) => (
        <div key={category} className="w-full">
          {sizes.map((size) => (
            <div key={size} className="">
              <h3 className="mb-8 font-semibold">{`${category}-${size}`}</h3>
              <div className="text-center">
                {/* arbitrary values in Tailwind CSS classes cannot be computed from dynamic values. the best approach to apply dynamic or user-defined color values is to use inline styles. */}
                <Button
                  style={{
                    backgroundColor: color,
                    width: "160px",
                    padding:
                      paddingSizes[size.toLowerCase() as keyof PaddingSizes],
                  }}
                >
                  Button
                </Button>
              </div>
              <Separator className="my-8" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonsPreview;
