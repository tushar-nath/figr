"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

interface VariantProps {
  defaultValue: number;
}

export const VariantCount: React.FC<VariantProps> = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const handleDecrease = () => {
    setValue(value - 1);
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <button onClick={handleDecrease}>-</button>
      <Input className="text-center" type="number" value={value} readOnly />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};
