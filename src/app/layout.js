import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portafolio Daniyer",
  description: "Portafolio personal profesional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-gray-900 overflow-x-hidden`}
      > 
        {children}

        
      </body>
    </html>
  );
}
