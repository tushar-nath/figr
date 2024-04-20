"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface RadiusContextType {
  spacing: string;
  variantCount: number;
  multiplier: number;
  rounding: string;
  setSpacing: (value: string) => void;
  setVariantCount: (value: number) => void;
  setMultiplier: (value: number) => void;
  setRounding: (value: string) => void;
}

const RadiusContext = createContext<RadiusContextType | undefined>(undefined);

export const RadiusProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [spacing, setSpacingState] = useState("6px");
  const [variantCount, setVariantCountState] = useState(8);
  const [multiplier, setMultiplierState] = useState(1.5);
  const [rounding, setRoundingState] = useState("2px");

  const setSpacing = (value: string) => {
    setSpacingState(value);
  };

  const setVariantCount = (value: number) => {
    setVariantCountState(value);
  };

  const setMultiplier = (value: number) => {
    setMultiplierState(value);
  };

  const setRounding = (value: string) => {
    setRoundingState(value);
  };

  const contextValue: RadiusContextType = {
    spacing,
    variantCount,
    multiplier,
    rounding,
    setSpacing,
    setVariantCount,
    setMultiplier,
    setRounding,
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
