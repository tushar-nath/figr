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
import { useSearchParams } from "next/navigation";
// import { signUp } from "@/lib/actions";

function LoginForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [userData, setUserData] = useState<{ name: string; password: string }>({
    name: "",
    password: "",
  });
  const handleSignup = async () => {
    try {
    //   await signUp(email, userData.password, userData.name);
    } catch (error) {
      setErrorMessage(error as string);
    }
  };

  return (
    <div className="h-screen grid place-items-center w-screen">
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
                <Label htmlFor="first-name">Name</Label>

                <Input
                  id="first-name"
                  placeholder="Akshit"
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
                value={email}
                disabled
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
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
