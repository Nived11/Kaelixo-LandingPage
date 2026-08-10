import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Original design-le weights (regular, bold, extra-bold) add cheyyunnu
const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "700", "800"] 
});

export const metadata: Metadata = {
  title: "Kaelixo — Animated Hero",
  description: "Premium animated Kaelixo technology hero section.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* antialiased class remove cheythu, appol font kooduthal bold aayi kanum */}
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}