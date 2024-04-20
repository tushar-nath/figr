"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

interface MultiplierProps {
  id: string;
  defaultValue: number;
  onChange: (value: number) => void;
}

const MultiplierCount: React.FC<MultiplierProps> = ({
  id,
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleDecrease = () => {
    const newValue = Math.max(0, value - 0.1);
    setValue(newValue);
    onChange(newValue);
  };

  const handleIncrease = () => {
    const newValue = Math.min(3, value + 0.1);
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
        value={value.toFixed(1)}
        readOnly
      />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default MultiplierCount;
