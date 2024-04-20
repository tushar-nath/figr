"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface SpaceContextType {
  spacing: string;
  variantCount: number;
  setSpacing: (value: string) => void;
  setVariantCount: (value: number) => void;
}

const SpaceContext = createContext<SpaceContextType | undefined>(undefined);

export const SpaceProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [spacing, setSpacingState] = useState("6px");
  const [variantCount, setVariantCountState] = useState(10);

  const setSpacing = (value: string) => {
    setSpacingState(value);
  };

  const setVariantCount = (value: number) => {
    setVariantCountState(value);
  };

  const contextValue: SpaceContextType = {
    spacing,
    variantCount,
    setSpacing,
    setVariantCount,
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
