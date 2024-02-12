import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { fontSans } from "@/fonts";

import { ThemeProvider } from "@/components/theme-provider";
import MaxWidthWrapper from "@/components/max-width-wrapper";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next + Shadcn + Drizzle Starter",
  description: "Next.js + Shadcn + Drizzle starter template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex justify-center min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper>{children}</MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
