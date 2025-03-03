import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accueil | Alexandre Laborde",
  description: "Artiste multi-disciplinaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
