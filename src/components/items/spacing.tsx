import React, { useState } from "react";
import { Select } from "antd";
import { VariantCount } from "./variantCount";
import { useSpaceContext } from "@/lib/context/spaceContext";
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

const sizes = [
  { sizeName: "xxxs", sizePx: "2px", sizeRem: "0.125rem", isDeleted: false },
  { sizeName: "xxs", sizePx: "4px", sizeRem: "0.25rem", isDeleted: false },
  { sizeName: "xs", sizePx: "6px", sizeRem: "0.375rem", isDeleted: false },
  { sizeName: "sm", sizePx: "8px", sizeRem: "0.5rem", isDeleted: false },
  { sizeName: "md", sizePx: "12px", sizeRem: "0.75rem", isDeleted: false },
  { sizeName: "lg", sizePx: "16px", sizeRem: "1rem", isDeleted: false },
  { sizeName: "xl", sizePx: "20px", sizeRem: "1.25rem", isDeleted: false },
  { sizeName: "2xl", sizePx: "24px", sizeRem: "1.5rem", isDeleted: false },
  { sizeName: "3xl", sizePx: "32px", sizeRem: "2rem", isDeleted: false },
];

export const SpacingComponent = () => {
  const { spacing, setSpacing, variantCount, setVariantCount } =
    useSpaceContext();
  const [updatedSizes, setUpdatedSizes] = useState(sizes);

  const handleSpacingChange = (value: any) => {
    setSpacing(value);
  };

  const handleVariantCountChange = (value: number) => {
    setVariantCount(value);
  };

  const handleSizeChange = (index: number, field: string, value: string) => {
    const newSizes = [...updatedSizes];
    const size = newSizes[index];

    if (field === "sizePx") {
      const pixelValue = value.endsWith("px") ? parseInt(value, 10) : 0;
      const remValue = pixelValue / 16; // Assuming 1rem = 16px
      newSizes[index] = {
        ...size,
        sizePx: value,
        sizeRem: remValue.toFixed(3) + "rem",
      };
    } else {
      newSizes[index] = { ...size, [field]: value };
    }

    setUpdatedSizes(newSizes);
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
          defaultValue={variantCount}
          onChange={handleVariantCountChange}
        />
      </div>
      <div className="h-[800px] w-2/3 border rounded-[25px]">
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
              {updatedSizes.map((size, index) => (
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
                    <Trash2 />
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
