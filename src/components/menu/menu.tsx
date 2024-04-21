import React, { useState } from "react";

interface MenuItemProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  isFirstItem: boolean;
  isLastItem: boolean;
}

interface MenuProps {
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

export const Menu: React.FC<MenuProps> = ({ setSelectedItem }) => {
  const [selectedItem, setSelectedItemLocal] = useState<string>("color");
  const menuItems = ["Color", "Spacing", "Radius", "Components"];

  const handleItemClick = (item: string) => {
    setSelectedItemLocal(item);
    setSelectedItem(item);
  };

  return (
    <div className="h-10 flex w-[640px] mt-6 justify-around items-center mx-auto gap-6">
      <div className="flex items-center">
        {menuItems.map((item, index) => (
          <MenuItem
            key={item}
            title={item}
            isSelected={selectedItem.toLowerCase() === item.toLowerCase()}
            onClick={() => handleItemClick(item.toLowerCase())}
            setSelectedItem={setSelectedItem}
            isFirstItem={index === 0}
            isLastItem={index === menuItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  isSelected,
  onClick,
  setSelectedItem,
  isFirstItem,
  isLastItem,
}) => {
  let className = "px-4 py-2 text-center border cursor-pointer";

  if (isSelected) {
    className += " bg-gray-200";
  }
  if (isFirstItem) {
    className += " rounded-tl-lg rounded-bl-lg";
  }
  if (isLastItem) {
    className += " rounded-tr-lg rounded-br-lg";
  }

  return (
    <div
      className={className}
      onClick={() => {
        onClick();
        setSelectedItem(title.toLowerCase());
      }}
    >
      {title}
    </div>
  );
};
