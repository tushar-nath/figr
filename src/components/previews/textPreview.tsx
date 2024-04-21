"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { useColorContext } from "@/lib/context/colorContext";

export const TextPreview = () => {
  const { hexCodes } = useColorContext();
  const primaryColor = hexCodes[0];

  const [isFocused, setIsFocused] = useState<FocusState>({});

  const handleFocus = (id: string) => {
    setIsFocused({ ...isFocused, [id]: true });
  };

  const handleBlur = (id: string) => {
    setIsFocused({ ...isFocused, [id]: false });
  };

  return (
    <div className="p-6">
      <h3 className="mb-8 font-semibold">Primary - With Label</h3>
      <div className="mb-2">
        <Label htmlFor="message">Your message</Label>
      </div>

      <Textarea
        placeholder="Type your message here."
        id="message"
        style={{ borderColor: isFocused["message"] ? primaryColor : "#f2f2f2" }}
        onFocus={() => handleFocus("message")}
        onBlur={() => handleBlur("message")}
      />
      <h3 className="text-xs mt-2 text-gray-500">
        Your message will be copied to the support team.
      </h3>
      <Separator className="my-8" />
      <h3 className="mb-8 font-semibold">Primary - With Label (Disabled)</h3>
      <div className="mb-2">
        <Label htmlFor="message">Your message</Label>
      </div>
      <Textarea placeholder="Type your message here." id="message" disabled />
      <h3 className="text-xs mt-2 text-gray-500">
        Your message will be copied to the support team.
      </h3>
      <Separator className="my-8" />
      <h3 className="mb-8 font-semibold">Primary - With Button</h3>
      <div className="mb-2">
        <Label htmlFor="message">Your message</Label>
      </div>
      <div className="grid w-full gap-2">
        <Textarea
          placeholder="Type your message here."
          id="messageWithButton"
          style={{
            borderColor: isFocused["messageWithButton"]
              ? primaryColor
              : "#f2f2f2",
          }}
          onFocus={() => handleFocus("messageWithButton")}
          onBlur={() => handleBlur("messageWithButton")}
        />
        <Button style={{ backgroundColor: primaryColor }}>Send message</Button>
      </div>

      <Separator className="my-8" />
      <h3 className="mb-8 font-semibold">Primary - With Button (Disabled)</h3>
      <div className="mb-2">
        <Label htmlFor="message">Your message</Label>
      </div>
      <div className="grid w-full gap-2">
        <Textarea
          placeholder="Type your message here."
          id="messageWithButtonDisabled"
          style={{
            borderColor: isFocused["messageWithButtonDisabled"]
              ? primaryColor
              : "#f2f2f2",
          }}
          onFocus={() => handleFocus("messageWithButtonDisabled")}
          onBlur={() => handleBlur("messageWithButtonDisabled")}
        />
        <Button style={{ backgroundColor: primaryColor }} disabled>
          Send message
        </Button>
      </div>

      <Separator className="my-8" />
    </div>
  );
};
