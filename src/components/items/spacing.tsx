"use client";

import React from "react";

export const SpacingComponent = () => {
  return (
    <div className="flex h-[800px] mt-10 w-full">
      <div className="h-[800px] w-1/3 mr-6 border rounded-[25px] p-6">
        <h1 className="text-2xl font-medium mb-10">Spacing</h1>
      </div>
      <div className="h-[800px] w-2/3 border rounded-[25px]"></div>
    </div>
  );
};
