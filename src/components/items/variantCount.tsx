"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

interface VariantProps {
  id: string;
  defaultValue: number;
  onChange: (value: number) => void;
}

export const VariantCount: React.FC<VariantProps> = ({
  id,
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleDecrease = () => {
    const newValue = value - 1;
    setValue(newValue);
    onChange(newValue);
  };

  const handleIncrease = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <button onClick={handleDecrease}>-</button>
      <Input
        className="text-center"
        type="number"
        id={id}
        value={value}
        readOnly
      />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};
