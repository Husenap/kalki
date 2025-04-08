import Providers from "@/components/providers/providers";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { cn } from "@heroui/react";
import type { Metadata, Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Geist } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL
  ? "https://kalki.husseintaher.com"
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Kalki - The Ultimate Spreadsheet App for Effortless Data Management",
  description:
    "Discover Kalki, a powerful and intuitive spreadsheet app designed to simplify data management. With sleek features, collaborative tools, and seamless integration, Kalki empowers you to organize, analyze, and visualize data like never before. Perfect for professionals, students, and anyone who values productivity.",
};

export const viewport: Viewport = {
  viewportFit: "cover",
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  themeColor: "#d7bf9e",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ViewTransitions>
      <ConvexAuthNextjsServerProvider>
        <html
          lang="en"
          suppressHydrationWarning
          className={cn(
            geistSans.className,
            "h-full min-h-full overflow-x-hidden overscroll-x-none",
          )}
        >
          <body className="bg-background text-foreground relative h-full min-h-full w-full overflow-x-hidden overscroll-x-none">
            <Providers>{children}</Providers>
          </body>
        </html>
      </ConvexAuthNextjsServerProvider>
    </ViewTransitions>
  );
}
