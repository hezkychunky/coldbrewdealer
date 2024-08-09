import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComp from "../Components/Navbar.jsx"
import Footer from "../../src/Components/Footer.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cold Brew Dealer",
  description: "cold brew anywhere",
};

export default function RootLayout({
  children,
}: 
Readonly<{
  children: React.ReactNode;
}>
) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-20 h-24 w-screen bg-white py-2">
        <NavbarComp />
        </div>
        {children}
        <div>
        <Footer />
        </div>
      </body>
    </html>
  );
}
