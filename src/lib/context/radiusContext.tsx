"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface Size {
  sizeName: string;
  sizePx: string;
  isDeleted: boolean;
}

interface RadiusContextType {
  spacing: string;
  variantCount: number;
  sizes: Size[];
  setSpacing: (value: string) => void;
  setVariantCount: (value: number) => void;
  setSizes: (value: Size[]) => void;
  deleteSize: (index: number) => void;
}

const RadiusContext = createContext<RadiusContextType | undefined>(undefined);

export const RadiusProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [spacing, setSpacingState] = useState("6px");
  const [variantCount, setVariantCountState] = useState(8);
  const [sizes, setSizesState] = useState<Size[]>([
    { sizeName: "xxxs", sizePx: "6px", isDeleted: false },
    { sizeName: "xxs", sizePx: "12px", isDeleted: false },
    { sizeName: "xs", sizePx: "18px", isDeleted: false },
    { sizeName: "sm", sizePx: "24px", isDeleted: false },
    { sizeName: "md", sizePx: "30px", isDeleted: false },
    { sizeName: "ml", sizePx: "36px", isDeleted: false },
    { sizeName: "lg", sizePx: "42px", isDeleted: false },
    { sizeName: "xl", sizePx: "48px", isDeleted: false },
  ]);

  const updateSizesBasedOnSpacing = (baseSizePx: number) => {
    const newSizes: Size[] = [];
    sizes.forEach((size, i) => {
      const sizePx = baseSizePx + i * 6; // Increment by 6
      newSizes.push({
        ...size,
        sizePx: `${sizePx}px`, // Update sizePx only
      });
    });
    return newSizes;
  };

  const setSpacing = (value: string) => {
    const baseSizePx = parseInt(value);
    const newSizes = updateSizesBasedOnSpacing(baseSizePx);
    setSpacingState(value);
    setSizesState(newSizes);
  };

  const setVariantCount = (value: number) => {
    setVariantCountState(value);
  };

  const setSizes = (value: Size[]) => {
    setSizesState(value);
  };

  const deleteSize = (index: number) => {
    console.log("Before deletion - Sizes length:", sizes.length);
    if (sizes.length > 8) {
      const newSizes = sizes.filter((_, i) => i !== index);
      console.log("After deletion - New sizes length:", newSizes.length);
      setSizesState(newSizes);
      if (newSizes.length >= 8) {
        setVariantCountState(newSizes.length);
        console.log("Decrementing variantCount", variantCount);
      }
    } else {
      console.log("Deletion not allowed or no need to decrement variantCount");
    }
  };

  const contextValue: RadiusContextType = {
    spacing,
    variantCount,
    sizes,
    setSpacing,
    setVariantCount,
    setSizes,
    deleteSize,
  };

  return (
    <RadiusContext.Provider value={contextValue}>
      {children}
    </RadiusContext.Provider>
  );
};

export const useRadiusContext = () => {
  const context = useContext(RadiusContext);
  if (!context) {
    throw new Error("useRadiusContext must be used within a RadiusProvider");
  }
  return context;
};
