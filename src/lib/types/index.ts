export type User = {
  _id?: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
};

export type GenericError = {
  message: string;
};

interface AccordionItemData {
  trigger: string;
  variableName: string;
  hexCode: string;
}

type PaddingSizes = {
  sm: string | undefined;
  md: string | undefined;
  lg: string | undefined;
};

type FocusState = {
  [key: string]: boolean;
};
