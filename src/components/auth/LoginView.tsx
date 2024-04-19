import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { AlertCircleIcon, EyeIcon, EyeOff, Terminal } from "lucide-react";
import { useState } from "react";
import { authenticate } from "@/lib/actions";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { BeatLoader } from "react-spinners";

const LoginView = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      await authenticate(email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-screen h-screen gap-3 justify-center items-center bg-neutral-950">
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
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your credentials below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="flex items-center justify-between gap-2">
                  <Input
                    id="password"
                    minLength={6}
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
            </CardContent>
            <CardFooter>
              <Button className="w-full group" type="submit" disabled={loading}>
                {loading ? (
                  <BeatLoader
                    color="white"
                    size={8}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  <>
                    <p>Sign In</p>
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                        className="fill-white group-hover:translate-x-[5.2px] transition-all duration-300"
                      ></path>
                      <path
                        d="M1.75 8H11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="stroke-transparent group-hover:stroke-white group-hover:translate-x-[4px] transition-all duration-300 translate-x-[-5px]"
                      ></path>
                    </svg>
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
        <div className="absolute bottom-0 py-4 text-gray-400 text-sm font-light">
          <p>Figr © {new Date().getFullYear()}</p>
        </div>
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
    </form>
  );
};

export default LoginView;
