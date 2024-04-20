"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface ColorContextType {
  variableNames: string[];
  hexCodes: string[];
  variantCounts: number[];
  handleVariableNameChange: (index: number, value: string) => void;
  handleHexCodeChange: (index: number, value: string) => void;
  handleVariantCountChange: (index: number, value: number) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

const accordionData: AccordionItemData[] = [
  {
    trigger: "Primary",
    variableName: "PrimaryVariable",
    hexCode: "#FF5733",
  },
  {
    trigger: "Secondary",
    variableName: "SecondaryVariable",
    hexCode: "#33FF57",
  },
  {
    trigger: "Neutrals",
    variableName: "NeutralsVariable",
    hexCode: "#5733FF",
  },
  {
    trigger: "Success",
    variableName: "SuccessVariable",
    hexCode: "#33FFC1",
  },
  {
    trigger: "Warning",
    variableName: "WarningVariable",
    hexCode: "#FFFF33",
  },
  {
    trigger: "Error",
    variableName: "ErrorVariable",
    hexCode: "#FF3333",
  },
];

export const ColorProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [variableNames, setVariableNames] = useState<string[]>(
    accordionData.map((data) => data.variableName)
  );
  const [hexCodes, setHexCodes] = useState<string[]>(
    accordionData.map((data) => data.hexCode)
  );
  const [variantCounts, setVariantCounts] = useState<number[]>(
    accordionData.map(() => 10)
  );

  const handleVariableNameChange = (index: number, value: string) => {
    const newVariableNames = [...variableNames];
    newVariableNames[index] = value;
    setVariableNames(newVariableNames);
  };

  const handleHexCodeChange = (index: number, value: string) => {
    const newHexCodes = [...hexCodes];
    newHexCodes[index] = value;
    setHexCodes(newHexCodes);
  };

  const handleVariantCountChange = (index: number, value: number) => {
    const newVariantCounts = [...variantCounts];
    newVariantCounts[index] = value;
    setVariantCounts(newVariantCounts);
  };

  const contextValue: ColorContextType = {
    variableNames,
    hexCodes,
    variantCounts,
    handleVariableNameChange,
    handleHexCodeChange,
    handleVariantCountChange,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
