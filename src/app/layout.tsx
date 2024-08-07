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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
