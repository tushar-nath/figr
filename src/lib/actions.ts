"use server";

import { UserService } from "@/services/user";
import { auth, signIn, signOut } from "../../auth";
import { AuthError } from "next-auth";

export async function authenticate(email: string, password: string) {
  const formData = { email, password };
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Incorrect email or password");

        default:
          throw new Error("Unable to login, please try again");
      }
    }
    throw error;
  }
}

export async function logout() {
  try {
    console.info("Invoking logout in Server actions");
    await signOut();
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Incorrect email or password");

        default:
          throw new Error("Unable to login, please try again");
      }
    }
    throw error;
  }
}

export async function getSession() {
  const session = await auth();
  return session;
}

export async function signUp(email: string, password: string, name: string) {
  try {
    const userService = new UserService();
    await userService.init();
    await userService.createUser(email, name, password);
    await authenticate(email, password);
  } catch (error) {
    throw error;
  }
}
