import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "700", "800"] 
});

export const metadata: Metadata = {
  title: "Kaelixo - Think. Build. Grow.",
  description: "Kaelixo is a leading technology company that specializes in designing intelligent websites...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <PageLoader>
          {children}
        </PageLoader>
        <Toaster position="top-center" richColors theme="dark" />
      </body>
    </html>
  );
}