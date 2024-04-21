"use client";

import React, { useState } from "react";
import { Header } from "@/components/header/header";
import { Menu } from "@/components/menu/menu";
import { ColorComponent } from "@/components/items/color";
import { SpacingComponent } from "@/components/items/spacing";
import { RadiusComponent } from "@/components/items/radius";
import { Components } from "@/components/items/components";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("color");

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
        <Header />
        <Menu setSelectedItem={setSelectedItem} />
        {renderSelectedComponent()}
      </motion.div>
    </main>
  );
}
