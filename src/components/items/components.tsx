"use client";

import React, { useState } from "react";
import { Separator } from "../ui/separator";
import ButtonsPreview from "../previews/buttonPreview";
import { TextPreview } from "../previews/textPreview";
import { RadioPreview } from "../previews/radioPreview";
import { CheckboxPreview } from "../previews/checkbox";
import { SelectPreview } from "../previews/selectPreview";

export const Components = () => {
  const [view, setView] = useState("button");

  const handleClick = (component: any) => {
    setView(component);
  };

  const renderSelectedView = () => {
    if (view === "button") {
      return <ButtonsPreview />;
    } else if (view === "text") {
      return <TextPreview />;
    } else if (view === "radio") {
      return <RadioPreview />;
    } else if (view === "checkbox") {
      return <CheckboxPreview />;
    } else if (view === "select") {
      return <SelectPreview />;
    }
    return null;
  };

  return (
    <div className="flex h-[800px] mt-10 w-full">
      <div className="h-[800px] w-1/3 mr-6 border rounded-[25px] p-6">
        <h1 className="text-2xl font-medium mb-14">Components</h1>
        <h3
          onClick={() => handleClick("button")}
          className={`text-md font-normal my-5 cursor-pointer ${
            view === "button" ? "text-blue-400" : ""
          }`}
        >
          Button
        </h3>
        <Separator />
        <h3
          onClick={() => handleClick("text")}
          className={`text-md font-normal my-5 cursor-pointer ${
            view === "text" ? "text-blue-400" : ""
          }`}
        >
          Text Area
        </h3>
        <Separator />
        <h3
          onClick={() => handleClick("radio")}
          className={`text-md font-normal my-5 cursor-pointer ${
            view === "radio" ? "text-blue-400" : ""
          }`}
        >
          Radio
        </h3>
        <Separator />
        <h3
          onClick={() => handleClick("checkbox")}
          className={`text-md font-normal my-5 cursor-pointer ${
            view === "checkbox" ? "text-blue-400" : ""
          }`}
        >
          Checkbox
        </h3>
        <Separator />
        <h3
          onClick={() => handleClick("select")}
          className={`text-md font-normal my-5 cursor-pointer ${
            view === "select" ? "text-blue-400" : ""
          }`}
        >
          Select
        </h3>
      </div>
      <div className="h-[800px] w-2/3 border rounded-[25px] overflow-auto">
        {renderSelectedView()}
      </div>
    </div>
  );
};
