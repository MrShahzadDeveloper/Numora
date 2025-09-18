import type { Metadata } from "next";
import AboutContent from "./About";

// ✅ Page Metadata (allowed here because it's server-side)
export const metadata: Metadata = {
  title: "About Numora",
  description:
    "Learn about Numora — your trusted hub for quick, accurate, and user-friendly calculators. Explore our mission and discover health, finance, science, and everyday life tools designed to simplify your decisions.",
  keywords: [
    "About Numora",
    "online calculators",
    "free calculators",
    "BMI calculator",
    "finance calculator",
    "unit converters",
    "scientific tools",
    "GPA calculator",
    "everyday calculators",
  ],
  openGraph: {
    title: "About Numora",
    description:
      "Numora is your trusted hub for health, finance, science, and everyday life calculators. Learn about our mission to simplify complex calculations.",
    url: "https://yourdomain.com/about",
    siteName: "Numora",
    images: [
      {
        url: "https://yourdomain.com/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Numora - Free Online Calculators",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Numora",
    description:
      "Discover Numora’s mission and explore our free calculators for health, finance, science, and daily life.",
    images: ["https://yourdomain.com/og-about.png"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
