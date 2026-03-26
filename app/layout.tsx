import "./globals.css";
import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Evaltree — Career Decision Intelligence",
  description: "Career Decision Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1A1A1A] antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}