"use client";

import Link from "next/link";
import { AlertCircleIcon, EyeIcon, EyeOff, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Suspense, useState } from "react";
import { signUp } from "@/lib/actions";
import { motion } from "framer-motion";

function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      await signUp(userData.email, userData.password, userData.name);
    } catch (error) {
      setErrorMessage(error as string);
    }
  };

  return (
    <div className="h-screen grid place-items-center w-screen">
      <motion.div
        initial={{
          y: "15%",
          opacity: 0,
        }}
        animate={{
          y: "0%",
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Card className="mx-auto max-w-sm ">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Full Name</Label>
                  <Input
                    id="first-name"
                    placeholder="Your Name"
                    required
                    value={userData.name}
                    onChange={(e) => {
                      setUserData({ ...userData, name: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="flex items-center justify-between gap-2">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={userData.password}
                    onChange={(e) => {
                      setUserData({ ...userData, password: e.target.value });
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeIcon className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full"
                onClick={() => {
                  handleSignup();
                }}
              >
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
            {errorMessage && (
              <div className="absolute bottom-5 right-5 z-50 flex items-center justify-between">
                <Alert variant="destructive">
                  <AlertCircleIcon className="w-4 h-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    <p>{errorMessage}</p>
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default function Signup() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
