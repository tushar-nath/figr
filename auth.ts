import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import { UserService } from "@/services/user";
import { User } from "@/lib/types";

async function getUser(email: string): Promise<User | null> {
  try {
    const userService = new UserService();
    await userService.init();
    const user = await userService.getUser(email);
    if (!user) return null;
    return user;
  } catch (error) {
    console.error("Failed to fetch user", error);
    throw new Error("Failed to fetch user");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        let returnValue = null;

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (user) {
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );
            if (passwordsMatch) {
              returnValue = user; // Update return value if credentials are valid
            }
          }
        }
        console.info("creds check returnVal is ", returnValue);
        return returnValue;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      console.info("Session is", session);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
