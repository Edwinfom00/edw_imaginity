import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import { IBM_Plex_Sans } from "next/font/google";

import "./globals.css";

const ImbPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-imb-plex",
});

export const metadata: Metadata = {
  title: "Imaginity",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-IMBPlex antialiased", ImbPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
