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
