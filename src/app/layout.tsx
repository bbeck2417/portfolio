import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bbeck2417.github.io/portfolio/"),
  title: "Billy Beck | Full Stack Developer",
  description:
    "Portfolio of Billy Beck, a Full Stack Developer specializing in Python, React, and Sports Analytics.",
  authors: [{ name: "Billy Beck" }],
  openGraph: {
    title: "Billy Beck - Developer Portfolio",
    description:
      "Check out my latest projects in Sports Analytics and Web Development.",
    images: ["/images/headshot.jpg"],
    url: "https://bbeck2417.github.io/portfolio/",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}`} suppressHydrationWarning>
        {children}
        <GoogleAnalytics gaId="G-CYE05SC27R" />
      </body>
    </html>
  );
}
