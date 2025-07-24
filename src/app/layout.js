import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daniyer CV",
  description: "Curriculo de Daniyer Mendoca - Vigilante de Seguridad Profesional",
  icons: {
    icon: "/images/favicon.jpg"
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900 overflow-x-hidden`}
      >
        
        {children}
      </body>
    </html>
  );
}
