"use client";

import React, { useState } from "react";
import { Header } from "@/components/header/header";
import { Menu } from "@/components/menu/menu";
import { ColorComponent } from "@/components/items/color";
import { SpacingComponent } from "@/components/items/spacing";
import { RadiusComponent } from "@/components/items/radius";

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
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen justify-between p-12">
      <Header />
      <Menu setSelectedItem={setSelectedItem} />
      {renderSelectedComponent()}
    </main>
  );
}
