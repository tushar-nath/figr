"use client";

import React from "react";
import { Select } from "antd";
import { useRadiusContext } from "@/lib/context/radiusContext";
import { VariantCount } from "./variantCount";
import MultiplierCount from "./multiplierCount";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Input } from "../ui/input";
  import { Trash2 } from "lucide-react";

const { Option } = Select;

export const RadiusComponent = () => {
  const {
    spacing,
    setSpacing,
    variantCount,
    setVariantCount,
    multiplier,
    setMultiplier,
  } = useRadiusContext();

  const handleSpacingChange = (value: any) => {
    setSpacing(value);
  };

  const handleVariantCountChange = (value: number) => {
    setVariantCount(value);
  };

  const handleMultiplierChange = (value: number) => {
    setMultiplier(value);
  };

  return (
    <div className="flex h-[800px] mt-10 w-full">
      <div className="h-[800px] w-1/3 mr-6 border rounded-[25px] p-6">
        <h1 className="text-2xl font-medium mb-10">Radius</h1>
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
          defaultValue={variantCount}
          onChange={handleVariantCountChange}
        />

        <h1 className="mt-10 mb-4 font-medium">Multiplier Count:</h1>
        <MultiplierCount
          id="multiplierCount"
          defaultValue={multiplier}
          onChange={handleMultiplierChange}
        />
      </div>
      <div className="h-[800px] w-2/3 border rounded-[25px] overflow-y-auto">
        <div className="py-10 px-6">
        {/* <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Variable Name</TableHead>
                <TableHead className="w-1/3">Size (px)</TableHead>
                <TableHead className="w-1/3">Size (rem)</TableHead>
                <TableHead className="w-1/3 text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sizes.map((size, index) => (
                <TableRow key={size.sizeName}>
                  <TableCell className="font-medium">
                    <Input
                      defaultValue={size.sizeName}
                      onChange={(e) =>
                        handleSizeChange(index, "sizeName", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      defaultValue={size.sizePx}
                      onChange={(e) =>
                        handleSizeChange(index, "sizePx", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input disabled value={size.sizeRem} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Trash2
                      onClick={() => deleteSize(index)}
                      style={{
                        cursor: sizes.length > 8 ? "pointer" : "not-allowed",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
        </div>
      </div>
    </div>
  );
};
