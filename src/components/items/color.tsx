"use client"

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VariantCount } from "./variantCount";

export const ColorComponent = () => {
  return (
    <div className="flex h-[800px] mt-10 w-full">
      <div className="h-[800px] w-1/3 mr-6 border rounded-[25px] p-6">
        <h1 className="text-2xl font-medium mb-10">Colors</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Primary</AccordionTrigger>
            <AccordionContent>
              <div className="grid w-full max-w-sm items-center gap-1.5 ml-1 mt-2">
                <Label htmlFor="variableName" className="mb-1">
                  Variable Name
                </Label>
                <Input type="text" id="variableName" placeholder="Primary" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 ml-1 mt-6">
                <Label htmlFor="hexCode" className="mb-1">
                  Enter Hex Code
                </Label>
                <Input type="text" id="hexCode" placeholder="#00955" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 ml-1 mt-6">
                <Label htmlFor="variantCount" className="mb-1">
                  Variant Count
                </Label>
                <VariantCount defaultValue={10} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="h-[800px] w-2/3 border rounded-[25px]"></div>
    </div>
  );
};
