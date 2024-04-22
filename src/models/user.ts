import { User } from "@/lib/types";
import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema<User>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const ITUser =
  mongoose?.models?.ITUser || mongoose.model<User>("ITUser", userSchema);

export default ITUser;
