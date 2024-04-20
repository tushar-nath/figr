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
    { sizeName: "xxxs", sizePx: "2px", sizeRem: "0.125rem", isDeleted: false },
    { sizeName: "xxs", sizePx: "4px", sizeRem: "0.25rem", isDeleted: false },
    { sizeName: "xs", sizePx: "6px", sizeRem: "0.375rem", isDeleted: false },
    { sizeName: "sm", sizePx: "10px", sizeRem: "0.625rem", isDeleted: false },
    { sizeName: "md", sizePx: "14px", sizeRem: "0.875rem", isDeleted: false },
    { sizeName: "ml", sizePx: "20px", sizeRem: "1.25rem", isDeleted: false },
    { sizeName: "lg", sizePx: "28px", sizeRem: "1.75rem", isDeleted: false },
    { sizeName: "xl", sizePx: "40px", sizeRem: "2.5rem", isDeleted: false },
  ]);

  const setSpacing = (value: string) => {
    setSpacingState(value);
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
