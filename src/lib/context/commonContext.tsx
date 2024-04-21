"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { getSession } from "../actions";
import { API } from "@/services/api";

type Session = {
  email: string;
  name: string;
};

interface CommonContextTypes {
  session: Session;
  isLoading: boolean;
}

const CommonContext = createContext<CommonContextTypes>({
  session: { email: "", name: "" },
  isLoading: true,
});

export const useCommonContext = () => {
  return useContext(CommonContext);
};

const CommonProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<Session>({
    email: "",
    name: "",
  });

  useEffect(() => {
    getSession()
      .then(async (session) => {
        if (session) {
          const user = await API.getUser(session?.user?.email as string);
          console.log(session, user, "in context");
          setSession({
            email: session?.user?.email as string,
            name: user.name,
          });
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error, "error in context");
      });
  }, []);

  const value: CommonContextTypes = {
    session,
    isLoading,
  };

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  );
};

export default CommonProvider;
