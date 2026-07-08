import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/providers/SessionProvider";
import { UploadProvider } from "@/components/providers/UploadProvider";
import LayoutShell from "@/components/custom/LayoutShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eventsnap — AI-Powered Event Photo Sharing",
  description:
    "Find your event photos instantly with AI face recognition. Upload, sort, and download your personalized photos in seconds.",
  keywords: ["event photos", "face recognition", "AI photo matching", "event management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SessionProvider>
          <UploadProvider>
            <LayoutShell>{children}</LayoutShell>
          </UploadProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
