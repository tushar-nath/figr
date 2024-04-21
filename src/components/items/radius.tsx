"use client";

import React, { useEffect } from "react";
import { Select } from "antd";
import { useRadiusContext } from "@/lib/context/radiusContext";
import { VariantCount } from "./variantCount";
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
    sizes,
    setSizes,
    deleteSize,
  } = useRadiusContext();

  const handleSpacingChange = (value: any) => {
    setSpacing(value);
  };

  const handleVariantCountChange = (value: number) => {
    setVariantCount(value);
  };

  const handleSizeChange = (index: number, field: string, value: string) => {
    let newValues: any = [...sizes];
    if (!newValues[index])
      newValues[index] = { sizeName: "", sizePx: "", isDeleted: false };

    if (field === "sizeName") {
      newValues[index][field] = value;
    } else if (field === "sizePx") {
      const baseSizePx = parseInt(spacing);
      const newSizePx = baseSizePx + index * 6;
      newValues[index] = {
        ...newValues[index],
        sizePx: `${newSizePx}px`,
      };
    }

    setSizes(newValues);
  };

  useEffect(() => {
    const baseSizePx = parseInt(spacing);
    const newSizes = sizes.map((size, index) => {
      const newSizePx = baseSizePx + index * 6;
      return {
        ...size,
        sizePx: `${newSizePx}px`,
      };
    });
    setSizes(newSizes);
  }, [spacing, setSizes]);

  const options = [0, 2, 4, 6, 8, 12, 16, 20, 24, 32].map((value) => (
    <Option key={value} value={`${value}px`}>{`${value}px`}</Option>
  ));

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
            {options}
          </Select>
        </div>

        <h1 className="mt-10 mb-4 font-medium">Variant Count:</h1>
        <VariantCount
          id="variantCount"
          defaultValue={variantCount}
          onChange={handleVariantCountChange}
        />
      </div>
      <div className="h-[800px] w-2/3 border rounded-[25px] overflow-y-auto">
        <div className="py-10 px-6">
          <Table>
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
                      value={size.sizePx} // Use value prop instead of defaultValue
                      onChange={(e) =>
                        handleSizeChange(index, "sizePx", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell></TableCell>
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
          </Table>
        </div>
      </div>
    </div>
  );
};
