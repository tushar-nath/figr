"use client";

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

export const ColorComponent = () => {
  const accordionData: AccordionItemData[] = [
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

  const {
    variableNames,
    hexCodes,
    variantCounts,
    handleVariableNameChange,
    handleHexCodeChange,
    handleVariantCountChange,
  } = useColorContext();

  return (
    <div className="flex h-[800px] mt-10 w-full">
      <div className="h-[800px] w-1/3 mr-6 border rounded-[25px] p-6">
        <h1 className="text-2xl font-medium mb-10">Colors</h1>
        <Accordion type="single" collapsible className="w-full">
          {accordionData.map((data, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{data.trigger}</AccordionTrigger>
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
                    onChange={(value: any) =>
                      handleVariantCountChange(index, value)
                    }
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="h-[800px] w-2/3 border rounded-[25px]"></div>
    </div>
  );
};
