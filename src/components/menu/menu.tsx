"use client";

import React, { useState } from "react";

interface MenuItemProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

interface MenuProps {
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

export const Menu: React.FC<MenuProps> = ({ setSelectedItem }) => {
  const [selectedItem, setSelectedItemLocal] = useState<string>("color");

  const handleItemClick = (item: string) => {
    setSelectedItemLocal(item);
    setSelectedItem(item);
  };

  return (
    <div className="h-10 flex w-[640px] mt-6 justify-around items-center mx-auto gap-6">
      <div className="flex items-center">
        <MenuItem
          title="Color"
          isSelected={selectedItem === "color"}
          onClick={() => handleItemClick("color")}
          setSelectedItem={setSelectedItem}
        />
        <MenuItem
          title="Spacing"
          isSelected={selectedItem === "spacing"}
          onClick={() => handleItemClick("spacing")}
          setSelectedItem={setSelectedItem}
        />
        <MenuItem
          title="Radius"
          isSelected={selectedItem === "radius"}
          onClick={() => handleItemClick("radius")}
          setSelectedItem={setSelectedItem}
        />
        <MenuItem
          title="Shadow"
          isSelected={selectedItem === "shadow"}
          onClick={() => handleItemClick("shadow")}
          setSelectedItem={setSelectedItem}
        />
        <MenuItem
          title="Components"
          isSelected={selectedItem === "components"}
          onClick={() => handleItemClick("components")}
          setSelectedItem={setSelectedItem}
        />
      </div>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  isSelected,
  onClick,
  setSelectedItem,
}) => {
  return (
    <div
      className={`px-4 py-2 w-32 text-center border cursor-pointer ${
        isSelected ? "bg-gray-200" : ""
      }`}
      onClick={() => {
        onClick();
        setSelectedItem(title.toLowerCase());
      }}
    >
      {title}
    </div>
  );
};
