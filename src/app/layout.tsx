"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "@/lib/context/colorContext";
import { SpaceProvider } from "@/lib/context/spaceContext";
import { RadiusProvider } from "@/lib/context/radiusContext";
import CommonProvider from "@/lib/context/commonContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommonProvider>
          <ColorProvider>
            <SpaceProvider>
              <RadiusProvider>{children}</RadiusProvider>
            </SpaceProvider>
          </ColorProvider>
        </CommonProvider>
      </body>
    </html>
  );
}
