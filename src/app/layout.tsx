import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AlertBanner } from "../components/AlertBanner";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PopupMessage } from "../components/PopupMessage";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wollongbar Community Hall",
  description: "Affordable community venue for all occasions in Wollongbar, NSW.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}>
        {/* Mandatory Noise Overlay */}
        <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        <AlertBanner />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        <PopupMessage />
      </body>
    </html>
  );
}
