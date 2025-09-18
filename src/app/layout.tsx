import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Numora", // default tab title
    template: "%s", // dynamic format
  },
  description:
    "Numora - Your trusted hub for health, finance, unit conversions, math, science, and everyday life calculators.",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
