// ❌ DO NOT add "use client" here
// ✅ KEEP this a Server Component
import "~/styles/globals.css";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";


import NavbarVisibilityWrapper from "../app/_components/NavbarVisibilityWrapper"; // 👇 this will decide to show Navbar
import { TRPCReactProvider } from "~/trpc/react";
import { FormProvider } from "../app/context/CandidateFormContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={geist.variable}>
        <body>
          <NavbarVisibilityWrapper />
          <FormProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </FormProvider>
        </body>
      </html>
    </ClerkProvider>

  );
}
