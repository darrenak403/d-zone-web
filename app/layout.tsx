import type {Metadata} from "next";
import {Geist, Geist_Mono, Public_Sans} from "next/font/google";
import "./globals.css";
import "@/styles/typography.css";
import StyledComponentsRegistry from "../lib/AntRegistry";
import {ClerkProvider} from "@clerk/nextjs";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D-ZONE",
  description:
    "Create beautiful posts, share your thoughts, and connect with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        signIn: {
          variables: {colorPrimary: "#f9aa11"},
        },
        signUp: {
          variables: {colorPrimary: "#f9aa11"},
        },
      }}
    >
      <html lang="en">
        <body
          className={`${publicSans.className} ${publicSans.className} antialiased`}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
