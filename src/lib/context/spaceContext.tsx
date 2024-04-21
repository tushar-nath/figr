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
  sizeRem: string;
  isDeleted: boolean;
}

interface SpaceContextType {
  spacing: string;
  variantCount: number;
  sizes: Size[];
  setSpacing: (value: string) => void;
  setVariantCount: (value: number) => void;
  setSizes: (value: Size[]) => void;
  deleteSize: (index: number) => void;
}

const SpaceContext = createContext<SpaceContextType | undefined>(undefined);

export const SpaceProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [spacing, setSpacingState] = useState("6px");
  const [variantCount, setVariantCountState] = useState(8);
  const [sizes, setSizesState] = useState<Size[]>([
    { sizeName: "xxxs", sizePx: "6px", sizeRem: "0.375rem", isDeleted: false },
    { sizeName: "xxs", sizePx: "12x", sizeRem: "0.75rem", isDeleted: false },
    { sizeName: "xs", sizePx: "18px", sizeRem: "1.125rem", isDeleted: false },
    { sizeName: "sm", sizePx: "24px", sizeRem: "1.5rem", isDeleted: false },
    { sizeName: "md", sizePx: "30px", sizeRem: "1.875rem", isDeleted: false },
    { sizeName: "ml", sizePx: "36px", sizeRem: "2.25rem", isDeleted: false },
    { sizeName: "lg", sizePx: "42px", sizeRem: "2.625rem", isDeleted: false },
    { sizeName: "xl", sizePx: "48px", sizeRem: "3rem", isDeleted: false },
  ]);

  const updateSizesBasedOnSpacing = (baseSizePx: number) => {
    const newSizes: Size[] = [];
    sizes.forEach((size, i) => {
      const sizePx = baseSizePx + i * 6; 
      newSizes.push({
        ...size,
        sizePx: `${sizePx}px`, 
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

    if (value > sizes.length) {
      const newSizes = [...sizes];
      for (let i = sizes.length + 1; i <= value; i++) {
        const sizeName = `${i}xl`;
        newSizes.push({
          sizeName: sizeName,
          sizePx: "",
          sizeRem: "",
          isDeleted: false,
        });
      }
      setSizesState(newSizes);
    } else if (value < sizes.length) {
      const newSizes = sizes.slice(0, value);
      setSizesState(newSizes);
    }
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

  const contextValue: SpaceContextType = {
    spacing,
    variantCount,
    sizes,
    setSpacing,
    setVariantCount,
    setSizes,
    deleteSize,
  };

  return (
    <SpaceContext.Provider value={contextValue}>
      {children}
    </SpaceContext.Provider>
  );
};

export const useSpaceContext = () => {
  const context = useContext(SpaceContext);
  if (!context) {
    throw new Error("useSpaceContext must be used within a SpaceProvider");
  }
  return context;
};
