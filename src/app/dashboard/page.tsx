"use client";

import React, { useState } from "react";
import { Header } from "@/components/header/header";
import { Menu } from "@/components/menu/menu";
import { ColorComponent } from "@/components/items/color";
import { SpacingComponent } from "@/components/items/spacing";
import { RadiusComponent } from "@/components/items/radius";
import { Components } from "@/components/items/components";
import { motion } from "framer-motion";
import { useCommonContext } from "@/lib/context/commonContext";
import { BeatLoader } from "react-spinners";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("color");
  const { isLoading } = useCommonContext();

  const renderSelectedComponent = () => {
    switch (selectedItem) {
      case "color":
        return <ColorComponent />;
      case "spacing":
        return <SpacingComponent />;
      case "radius":
        return <RadiusComponent />;
      case "components":
        return <Components />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen justify-between p-12">
      <motion.div
        initial={{
          y: "15%",
          opacity: 0,
        }}
        animate={{
          y: "0%",
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {isLoading ? (
          <div className="h-screen flex flex-col justify-center items-center">
            <BeatLoader color="black" size={20} />
          </div>
        ) : (
          <>
            <Header />
            <Menu setSelectedItem={setSelectedItem} />
            {renderSelectedComponent()}
          </>
        )}
      </motion.div>
    </main>
  );
}
