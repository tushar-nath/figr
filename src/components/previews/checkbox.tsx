"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useColorContext } from "@/lib/context/colorContext";

export const CheckboxPreview = () => {
  const { hexCodes } = useColorContext();
  const primaryColor = hexCodes[0];
  return (
    <div className="p-20">
      <h3 className="mb-8 font-semibold">Primary</h3>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          style={{ color: primaryColor, background: "white" }}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>

      <Separator className="my-10" />

      <h3 className="mb-8 font-semibold">Primary (Description)</h3>
      <div className="items-top flex space-x-2">
        <Checkbox
          id="terms1"
          style={{ color: primaryColor, background: "white" }}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
