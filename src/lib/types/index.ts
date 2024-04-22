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

export interface AccordionItemData {
  trigger: string;
  variableName: string;
  hexCode: string;
}

export type PaddingSizes = {
  sm: string | undefined;
  md: string | undefined;
  lg: string | undefined;
};

export type FocusState = {
  [key: string]: boolean;
};
