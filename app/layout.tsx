// "use client";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import React from "react";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
// import AppContext from "../components/AppContextFolder/AppContext";
// import { useRef, useState } from "react";
import ContextProvider from "./ContextProvider";
import { type } from "os";
import WhatsappFixedFoooter from "@/components/Footer/WhatsappFixedFoooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eslam Azmy - Full Stack Web Developer",
  description: `I've been working on Software development for 5 years straight. Get in touch with me to know more.`,
  image: "/titofCercle.png",
  type: "website",  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>

        <Analytics />
        <WhatsappFixedFoooter />
      </body>
    </html>
  );
}
