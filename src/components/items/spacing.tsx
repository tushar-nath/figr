import React, { useState } from "react";
import { Select } from "antd";
import { VariantCount } from "./variantCount";

const { Option } = Select;

export const SpacingComponent = () => {
  const [spacing, setSpacing] = useState("6px");

  const handleSpacingChange = (value: any) => {
    setSpacing(value);
  };

  return (
    <div className="flex h-[800px] mt-10 w-full">
      <div className="h-[800px] w-1/3 mr-6 border rounded-[25px] p-6">
        <h1 className="text-2xl font-medium mb-10">Spacing</h1>
        <div className="mb-4">
          <label htmlFor="spacing" className="block font-medium mb-2">
            Base Size:
          </label>
          <Select
            defaultValue="6px"
            value={spacing}
            onChange={handleSpacingChange}
            style={{ width: "100%" }}
          >
            <Option value="6px">6px</Option>
            <Option value="8px">8px</Option>
            <Option value="12px">12px</Option>
          </Select>
        </div>
        <h1 className="mt-10 mb-4 font-medium">Variant Count:</h1>
        <VariantCount
          id="variantCount"
          defaultValue={10}
          onChange={(value) => console.log(value)}
        />
      </div>
      <div className="h-[800px] w-2/3 border rounded-[25px]"></div>
    </div>
  );
};
