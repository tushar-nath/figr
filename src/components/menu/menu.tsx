"use client";

import { useState } from "react";

interface MenuItemProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="h-10 flex w-[640px] mt-6 justify-around items-center mx-auto gap-6">
      <div className="flex items-center">
        <MenuItem
          title="Color"
          isSelected={selectedItem === "color"}
          onClick={() => setSelectedItem("color")}
        />
        <MenuItem
          title="Spacing"
          isSelected={selectedItem === "spacing"}
          onClick={() => setSelectedItem("spacing")}
        />
        <MenuItem
          title="Radius"
          isSelected={selectedItem === "radius"}
          onClick={() => setSelectedItem("radius")}
        />
        <MenuItem
          title="Shadow"
          isSelected={selectedItem === "shadow"}
          onClick={() => setSelectedItem("shadow")}
        />
        <MenuItem
          title="Components"
          isSelected={selectedItem === "components"}
          onClick={() => setSelectedItem("components")}
        />
      </div>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ title, isSelected, onClick }) => {
  return (
    <div
      className={`px-4 py-2 w-32 text-center border cursor-pointer ${isSelected ? "bg-gray-200" : ""}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};
