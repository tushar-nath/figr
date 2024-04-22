import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VariantCount } from "./variantCount";
import { useColorContext } from "@/lib/context/colorContext";
import { ChromePicker } from "react-color";

export const ColorComponent = () => {
  const {
    variableNames,
    hexCodes,
    variantCounts,
    handleVariableNameChange,
    handleHexCodeChange,
    handleVariantCountChange,
  } = useColorContext();
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleAccordionItemClick = (index: number) => {
    setCurrentColorIndex(index);
  };

  const handleColorPickerChange = (color: any) => {
    if (currentColorIndex !== null) {
      handleHexCodeChange(currentColorIndex, color.hex);
    }
  };

  const accordionData = [
    {
      trigger: "Primary",
      variableName: "PrimaryVariable",
      hexCode: "#FF5733",
    },
    {
      trigger: "Secondary",
      variableName: "SecondaryVariable",
      hexCode: "#33FF57",
    },
    {
      trigger: "Neutrals",
      variableName: "NeutralsVariable",
      hexCode: "#5733FF",
    },
    {
      trigger: "Success",
      variableName: "SuccessVariable",
      hexCode: "#33FFC1",
    },
    {
      trigger: "Warning",
      variableName: "WarningVariable",
      hexCode: "#FFFF33",
    },
    {
      trigger: "Error",
      variableName: "ErrorVariable",
      hexCode: "#FF3333",
    },
  ];
  return (
    <div className="flex h-[800px] mt-10 w-full">
      <div className="h-[800px] w-1/3 mr-6 border rounded-[25px] p-6">
        <h1 className="text-2xl font-medium mb-10">Colors</h1>
        <Accordion type="single" collapsible className="w-full">
          {accordionData.map((data, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger onClick={() => handleAccordionItemClick(index)}>
                {data.trigger}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid w-full max-w-sm items-center gap-1.5 ml-1 mt-2">
                  <Label htmlFor={`variableName-${index}`} className="mb-1">
                    Variable Name
                  </Label>
                  <Input
                    type="text"
                    id={`variableName-${index}`}
                    value={variableNames[index]}
                    onChange={(e) =>
                      handleVariableNameChange(index, e.target.value)
                    }
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 ml-1 mt-6">
                  <Label htmlFor={`hexCode-${index}`} className="mb-1">
                    Enter Hex Code
                  </Label>
                  <Input
                    type="text"
                    id={`hexCode-${index}`}
                    value={hexCodes[index]}
                    onChange={(e) => handleHexCodeChange(index, e.target.value)}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 ml-1 mt-6">
                  <Label htmlFor={`variantCount-${index}`} className="mb-1">
                    Variant Count
                  </Label>
                  <VariantCount
                    id={`variantCount-${index}`}
                    defaultValue={variantCounts[index]}
                    onChange={(value) => handleVariantCountChange(index, value)}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="h-[800px] w-2/3 border rounded-[25px] px-10 py-6">
        <div className="flex">
          <div style={{ flex: 1 }}>
            <div className="mb-5 text-lg font-semibold">
              {accordionData[currentColorIndex].trigger}
            </div>
            <div
              className="h-96 w-full mb-10 relative border rounded-[25px]"
              style={{ backgroundColor: hexCodes[currentColorIndex] }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                {hexCodes[currentColorIndex]}
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="flex justify-center items-center h-full">
              <ChromePicker
                color={hexCodes[currentColorIndex]}
                onChange={handleColorPickerChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
