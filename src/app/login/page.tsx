"use client";

import GetStartedView from "@/components/auth/GetStartedView";
import LoginView from "@/components/auth/LoginView";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Auth() {
  const [showEmailAuth, setShowEmailAuth] = useState<boolean>(false);

  return (
    <>
      <AnimatePresence>
        {showEmailAuth ? (
          <LoginView />
        ) : (
          <GetStartedView setShowEmailAuth={setShowEmailAuth} />
        )}
      </AnimatePresence>
    </>
  );
}
